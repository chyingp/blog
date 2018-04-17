process.stdin
  .on('data', (chunk) => {
    console.log(`Buffer.isBuffer(chunk): ${Buffer.isBuffer(chunk)}`);
    console.log(`Chunk read: ${chunk.toString()}`);
  })
  .on('end', () => {
    process.stdout.write('End of Stream');
  });