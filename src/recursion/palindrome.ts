const isPalindrome = (str: string, i = 0): boolean =>  {
	if (i === Math.floor(str.length / 2)) return true;
	if (str[i] !== str[str.length - 1 - i]) return false;

	return isPalindrome(str, i + 1);
}

const isPalindromeWithSlice = (str: string): boolean =>  {
	if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindromeWithSlice(str.slice(1, -1));
}
