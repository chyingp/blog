(module
  (import "js" "mem" (memory 1))
  (func (export "add_one") (param $num i32) (result i32)  	
    i32.const 1
    get_local $num
    i32.add
  )
)