/* Рекурсия */

const factorial = (num) => {
  if (num === 1) {
    return num;
  }

  return num * factorial(num - 1);
};

console.log(factorial(10));

/* ----------------------------------------------------- */

const fibonachi = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonachi(num - 1) + fibonachi(num - 2);
};

console.log(fibonachi(8));
