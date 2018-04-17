process.stdin.setEncoding('utf8');
process.stdin
  .on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      console.log(`typeof(chunk): ${typeof chunk}`); // string
      console.log(`Chunk read: ${chunk.toString()}`);
    }
  })
  .on('end', () => {
    process.stdout.write('End of Stream');
  });