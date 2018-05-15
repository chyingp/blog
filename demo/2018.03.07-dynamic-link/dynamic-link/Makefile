MAIN: CLEAN GENERATE_DYNAMIC_LIB_MATH GENERATE_EXECUTABLE RUN_EXECUTABLE

CLEAN:
	# 清除main
	if [ -f main ]; then rm main; fi

GENERATE_DYNAMIC_LIB_MATH:
	# 生成动态链接库mymath.so
	gcc -fPIC -shared -o libmymath.so mymath.c

GENERATE_EXECUTABLE:
	# 生成可执行文件main
	gcc -o main main.c -lmymath -L .

RUN_EXECUTABLE:
	# 运行可执行文件
	./run.sh