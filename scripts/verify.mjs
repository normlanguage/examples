import { resolve } from 'node:path';
import { runCommand } from './command.mjs';
import { verifyNativeWeb } from './verify-native-web.mjs';

const root = resolve(import.meta.dirname, '..');
const cli = process.env.NORM_CLI ?? 'norm';
if (process.argv.includes('--native')) {
  await verifyNativeWeb(root, run);
} else {
  run(['check', resolve(root, 'micronaut-bbs/app/sample/bbs/application.norm')]);
  run(['check', resolve(root, 'micronaut-single-file/web.norm')]);
  run(['run', resolve(root, 'norm-orm/app/sample/orm/Main.norm')]);
  run(['run', resolve(root, 'java-commons-lang/app/Main.norm')]);
  run(['run', resolve(root, 'java-commons-lang/object/app/Main.norm')]);
}

function run(args, cwd = root) {
  return runCommand(args, cwd, cli);
}
