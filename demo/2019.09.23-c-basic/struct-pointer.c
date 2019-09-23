# include <stdio.h>
# include <string.h>

struct SQUARE
{
    int width;
    int height;
};

int main() 
{
	struct SQUARE square;
	struct SQUARE *s = &square;

	(*s).width = 20;
	(*s).height = 20;
	printf("width is %d, height is %d \n", (*s).width, (*s).height);

	s->width = 10; // 等价于 (*s).width = 20
	s->height = 10;
	printf("width is %d, height is %d \n", s->width, s->height);

	return 0;
}