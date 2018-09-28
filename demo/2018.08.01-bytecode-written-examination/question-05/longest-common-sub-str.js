function longestCommonSubstring (str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let longest = 0;
  let start1;
  let start2;

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      let s1 = i;
      let s2 = j;
      let commonLength = 0;

      while (s1 <= len1 && s2 <= len2) {
        if (str1.charAt(s1) !== str2.charAt(s2)) break;

        commonLength++;
        s1++;
        s2++;
      }

      if (commonLength > longest) {
        start1 = i;
        start2 = j;
        longest = commonLength;
      }
    }
  }

  return {
    longest: longest,
    start1: start1,
    start2: start2
  };
}

function main () {
  let str1 = 'abcdef';
  let str2 = 'bcdegf';

  let opt = longestCommonSubstring(str1, str2);
  console.log(str1.slice(opt.start1, opt.start1 + opt.longest));
}

main();