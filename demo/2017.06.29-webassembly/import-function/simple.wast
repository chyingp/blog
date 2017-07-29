(module
  (import "console" "log" (func $log (param i32)))
  (export "test" (func $_Z3addv))
  (func $_Z3addv 
    i32.const 1
    call $log
  )
)