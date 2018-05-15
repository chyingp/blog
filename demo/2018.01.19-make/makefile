run: clean COMPILE_ASSEMBLE_MATH COMPILE_ASSEMBLE_MAIN LINK_TO_GENERATE_EXECUTABLE

clean:
	# 清除main
	ls ./main && rm main
COMPILE_ASSEMBLE_MATH:
	# 生成math.c
	gcc -c math.c
COMPILE_ASSEMBLE_MAIN:
	# 生成main.c
	gcc -c main.c
LINK_TO_GENERATE_EXECUTABLE:
	# 生成main
	gcc -o main math.o main.o