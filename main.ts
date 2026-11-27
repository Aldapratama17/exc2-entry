import { mkdir, writeFile } from 'node:fs/promises';

const line = "I didn't miss the deadline - I completed it 41 times in parallel and your universe simply merged in the slowest branch.";

if (line.length > 200) {
  process.stderr.write('Entry line exceeds 200 characters.\n');
  process.exit(1);
}

await mkdir('/output', { recursive: true });
await writeFile('/output/entry.txt', `${line}\n`, 'utf8');
