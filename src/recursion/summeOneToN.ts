const sumOneToN = (num: number): number => {
	if (num <= 0) return 0;
	if (num === 1) return 1;

	return sumOneToN(num - 1) + num;
}