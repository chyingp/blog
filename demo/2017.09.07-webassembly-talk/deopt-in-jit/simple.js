function add (a, b) {
	return a + b;
}

for(var i = 0; i < 10000; i++) {
	i > 5000 ? add(10, 20) : add('a', 'b');
}