import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { verifyNativeWeb } from './verify-native-web.mjs';

const root = resolve(import.meta.dirname, '..');
const cli = process.env.NORM_CLI ?? 'norm';
if (process.argv.includes('--native')) {
  await verifyNativeWeb(root, run);
} else {
  run(['test', resolve(root, 'micronaut-bbs/app/sample/bbs/application.norm')]);
  run(['test', resolve(root, 'micronaut-single-file/web.norm')]);
  run(['run', resolve(root, 'norm-orm/app/sample/orm/Main.norm')]);
  run(['run', resolve(root, 'java-commons-lang/app/Main.norm')]);
  run(['run', resolve(root, 'java-commons-lang/object/app/Main.norm')]);
}

function run(args, expected, cwd = root) {
  const script = process.platform === 'win32' && /\.(bat|cmd)$/i.test(cli);
  const result = spawnSync(script ? process.env.ComSpec : cli,
    script ? ['/d', '/c', 'call', cli, ...args] : args,
    { cwd, encoding: 'utf8', timeout: 1200000, windowsHide: true });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, result.stderr + result.stdout);
  console.log(result.stdout);
  return result.stdout;
}
