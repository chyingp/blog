/*
  没有多少实际价值的题目，实际开发中不应出现这样的比较代码。

  假设判断 A == B

  1、如果 A、B 类型相同，那么，进行 A === B 的比较，否则
  2、如果 A 是 Object类型，那么，先进行 ToPrimitive(A) 的转换，或
  3、如果 A 是 Number类型，那么，先进行 ToNumber(B) 的转换
  4、如果 A 是 Boolean类型，那么，先进行 ToNumber(A) 的转换
  5、如果 A 是 String类型，那么，跟 Number、Boolean 比较前，先执行 ToNumber(A) 的转换，否则不用转换

  备注：ToPrimitive(x) => x.toString() 或者 x.valueOf() （默认toString()，如果 toString() 或者 valueOf() 被覆盖，则调用覆盖的版本，toString() 优于 valueOf() ）

  参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
*/

if ([] == false) {
  console.log(1);
}

if ({} == false) {
  console.log(2);
}

if ([]) {
  console.log(3);
}

if ([1] == [1]) {
  console.log(4);
}

// 1
// 3