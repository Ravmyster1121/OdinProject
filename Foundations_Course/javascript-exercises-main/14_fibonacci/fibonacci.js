const fibonacci = function (fibCount) {
  // Handling 0 & negative input
  if (fibCount == 0) return 0;
  if (fibCount < 0) return "OOPS";

  // Handling 1 & 2 input
  if (fibCount === 1 || fibCount === 2) return fibseq[fibCount - 1];

  let fibseq = [1];

  for (let i = 0; i < fibCount; i++) {
    if (fibseq.length < 2) {
      fibseq.push(1);
    }
    fibseq.push(fibseq[i] + fibseq[i + 1]);
  }
  return fibseq[fibCount - 1];
};

// Do not edit below this line
module.exports = fibonacci;
