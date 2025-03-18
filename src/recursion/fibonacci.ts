const fib = (num: number): number => {
	if (num === 0) return 0;
	if (num === 1) return 1;

	const a = fib(num - 2);
	const b = fib(num - 1);

	return a + b;
}
