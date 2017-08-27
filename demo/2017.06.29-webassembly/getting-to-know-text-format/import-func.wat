(module
	(import "console" "log" (func $log (param i32)))
	(func (export "cLog") (param $p i32)
		get_local $p
		call $log
	)
)
