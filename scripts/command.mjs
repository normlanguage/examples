import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

export function runCommand(args, cwd, cli) {
  const script = process.platform === 'win32' && /\.(bat|cmd)$/i.test(cli);
  const result = spawnSync(script ? process.env.ComSpec : cli,
    script ? ['/d', '/c', 'call', cli, ...args] : args,
    { cwd, encoding: 'utf8', timeout: 1200000, windowsHide: true });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, result.stderr + result.stdout);
  process.stdout.write(result.stdout);
  process.stderr.write(result.stderr);
  return { stdout: result.stdout, stderr: result.stderr };
}
