import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runCommand } from './command.mjs';

test('retains build diagnostics on stderr separately from program output', () => {
  const result = runCommand(['-e', 'process.stdout.write("program output\\n"); process.stderr.write("Build report: report-directory\\n");'],
    process.cwd(), process.execPath);
  assert.equal(result.stdout, 'program output\n');
  assert.equal(result.stderr, 'Build report: report-directory\n');
});

test('command failures include both real process streams', () => {
  assert.throws(() => runCommand(['-e', 'process.stdout.write("out details"); process.stderr.write("err details"); process.exitCode = 3;'],
    process.cwd(), process.execPath), /err detailsout details/);
});
