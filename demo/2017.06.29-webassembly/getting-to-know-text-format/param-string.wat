(module
	(import "mem" "uint8Memory" (memory 1))
	(import "console" "log" (func $log (param i32)))
	(func (export "cLog") (param $index i32)
		i32.const 0
		get_local $index
		i32.load8_u
		i32.const 32
		i32.sub		
		i32.store8
		get_local $index
		call $log
	)
)