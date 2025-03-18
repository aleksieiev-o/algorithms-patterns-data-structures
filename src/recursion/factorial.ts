const fact = (num: number): number => {
	if (num === 0 || num === 1) return 1;

	return fact(num - 1) * num;
}