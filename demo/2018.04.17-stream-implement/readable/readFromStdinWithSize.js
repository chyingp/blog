process.stdin
  .on('readable', () => {
    let chunk;
    let size = 4;
    while ((chunk = process.stdin.read(size)) !== null) {
      // console.log(`Chunk read: ${chunk.toString()}`);
      console.log(`Chunk read: ${chunk}`);
    }
  })
  .on('end', () => {
    process.stdout.write('End of Stream');
  });
