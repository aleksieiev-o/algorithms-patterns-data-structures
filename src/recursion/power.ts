const power = (num: number, pow: number): number => {
	if (pow === 0) return 1;
	if (pow === 1) return num;

	return power(num, pow - 1) * num;
}
