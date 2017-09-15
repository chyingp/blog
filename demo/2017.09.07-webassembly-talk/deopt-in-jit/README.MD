运行脚本，通过`--trace-opt`、`--trace-opt`查看JIT优化、去优化的日志

```bash
node --trace-opt --trace-deopt simple.js
```

输出如下：

```bash
[disabled optimization for 0x29778f7f0599 <SharedFunctionInfo createBuffer>, reason: TryFinallyStatement]
[didn't find optimized code in optimized code map for 0x3aece6446371 <SharedFunctionInfo>]
[disabled optimization for 0x11f40834a819 <SharedFunctionInfo DefineObjectProperty>, reason: Call to a JavaScript runtime function]
[disabled optimization for 0x11f40834f001 <SharedFunctionInfo Join>, reason: TryFinallyStatement]
[disabled optimization for 0x11f408377ab1 <SharedFunctionInfo InternalizeJSONProperty>, reason: Call to a JavaScript runtime function]
[disabled optimization for 0x11f4083779d9 <SharedFunctionInfo CreateDataProperty>, reason: Call to a JavaScript runtime function]
[disabled optimization for 0x3aece6472a51 <SharedFunctionInfo>, reason: TryCatchStatement]
[didn't find optimized code in optimized code map for 0x3aece644e181 <SharedFunctionInfo debugs.(anonymous function)>]
[didn't find optimized code in optimized code map for 0x3aece644e181 <SharedFunctionInfo debugs.(anonymous function)>]
[disabled optimization for 0x11f408377ec1 <SharedFunctionInfo stringify>, reason: Call to a JavaScript runtime function]
[disabled optimization for 0x3aece6465129 <SharedFunctionInfo tryModuleLoad>, reason: TryFinallyStatement]
[disabled optimization for 0x3aece646c4a9 <SharedFunctionInfo tryStatSync>, reason: TryFinallyStatement]
[disabled optimization for 0x3aece646c569 <SharedFunctionInfo tryCreateBuffer>, reason: TryFinallyStatement]
[disabled optimization for 0x3aece646c629 <SharedFunctionInfo tryReadSync>, reason: TryFinallyStatement]
[marking 0x1106240c8449 <JS Function add (SharedFunctionInfo 0x3aece64946b1)> for recompilation, reason: small function, ICs with typeinfo: 1/1 (100%), generic ICs: 0/1 (0%)]
[compiling method 0x1106240c8449 <JS Function add (SharedFunctionInfo 0x3aece64946b1)> using Crankshaft]
[optimizing 0x1106240c8449 <JS Function add (SharedFunctionInfo 0x3aece64946b1)> - took 0.031, 0.084, 0.602 ms]
[completed optimizing 0x1106240c8449 <JS Function add (SharedFunctionInfo 0x3aece64946b1)>]
[deoptimizing (DEOPT eager): begin 0x1106240c8449 <JS Function add (SharedFunctionInfo 0x3aece64946b1)> (opt #0) @2, FP to SP delta: 24]
            ;;; deoptimize at 94: Smi
  reading input frame add => node=4, args=3, height=1; inputs:
      0: 0x1106240c8449 ; [fp - 16] 0x1106240c8449 <JS Function add (SharedFunctionInfo 0x3aece64946b1)>
      1: 0x11f4083e84e9 ; [fp + 32] 0x11f4083e84e9 <JS Global Object>
      2: 0xa00000000 ; rbx 10
      3: 0x1400000000 ; [fp + 16] 20
      4: 0x11f4083ac679 ; [fp - 24] 0x11f4083ac679 <FixedArray[182]>
  translating frame add => node=4, height=0
 => node=4, height=0
    0x7fff5fbfeee8: [top + 48] <- 0x11f4083e84e9 ;  0x11f4083e84e9 <JS Global Object>  (input #1)
    0x7fff5fbfeee0: [top + 40] <- 0xa00000000 ;  10  (input #2)
    0x7fff5fbfeed8: [top + 32] <- 0x1400000000 ;  20  (input #3)
    0x7fff5fbfeed0: [top + 24] <- 0x12eb0a8432f3 ;  caller's pc
    0x7fff5fbfeec8: [top + 16] <- 0x7fff5fbfef18 ;  caller's fp
    0x7fff5fbfeec0: [top + 8] <- 0x11f4083ac679 ;  context    0x11f4083ac679 <FixedArray[182]>  (input #4)
    0x7fff5fbfeeb8: [top + 0] <- 0x1106240c8449 ;  function    0x1106240c8449 <JS Function add (SharedFunctionInfo 0x3aece64946b1)>  (input #0)
[deoptimizing (eager): end 0x1106240c8449 <JS Function add (SharedFunctionInfo 0x3aece64946b1)> @2 => node=4, pc=0x12eb0a843846, state=NO_REGISTERS, alignment=no padding, took 0.121 ms]
[removing optimized code for: add]
[evicting entry from optimizing code map (notify deoptimized) for 0x3aece64946b1 <SharedFunctionInfo add>]
[marking 0x1106240c7e71 <JS Function (SharedFunctionInfo 0x3aece6494859)> for recompilation, reason: small function, ICs with typeinfo: 5/5 (100%), generic ICs: 0/5 (0%)]
```