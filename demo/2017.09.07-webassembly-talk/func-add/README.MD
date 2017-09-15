汇编代码如下：（firefox x86）

```
wasm-function[0]:
  sub rsp, 8                            ; 0x000000 48 83 ec 08
  mov ecx, esi                          ; 0x000004 8b ce
  mov eax, ecx                          ; 0x000006 8b c1
  add eax, edi                          ; 0x000008 03 c7
  nop                                   ; 0x00000a 66 90
  add rsp, 8                            ; 0x00000c 48 83 c4 08
  ret   
```

文本格式如下：

```
(module
  (table 0 anyfunc)
  (memory $0 1)
  (export "memory" (memory $0))
  (export "_Z3addii" (func $_Z3addii))
  (func $_Z3addii (param $0 i32) (param $1 i32) (result i32)
    (i32.add
      (get_local $1)
      (get_local $0)
    )
  )
)
```

二进制代码如下：

```
0061 736d 0100 0000 0187 8080 8000 0160
027f 7f01 7f03 8280 8080 0001 0004 8480
8080 0001 7000 0005 8380 8080 0001 0001
0681 8080 8000 0007 9580 8080 0002 066d
656d 6f72 7902 0008 5f5a 3361 6464 6969
0000 0a8d 8080 8000 0187 8080 8000 0020
0120 006a 0b
```