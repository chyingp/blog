run: clean GENERATE_TARGET_FILE_MATCH GENERATE_STATIC_LIB_MATCH GENERATE_EXECUTABLE

clean:
	# 清除main
	if [ -f main ]; then rm main; fi

GENERATE_TARGET_FILE_MATCH:
	# 生成math.o
	gcc -c math.c

GENERATE_STATIC_LIB_MATCH:
	# 生成静态库math.a
	ar -crv libmath.a math.o

GENERATE_EXECUTABLE:
	# 生成main
	gcc -o main main.c -L./ -lmath