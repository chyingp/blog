process.stdin
  .on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      console.log(`Buffer.isBuffer(chunk): ${Buffer.isBuffer(chunk)}`);
      console.log(`Chunk read: ${chunk.toString()}`);
    }
  })
  .on('end', () => {
    process.stdout.write('End of Stream');
  });
  
// cat somefile.txt | node readFromStdin.js  