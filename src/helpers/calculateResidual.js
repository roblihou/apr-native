function calculateResidual(rate, principle, monthlyPayments, noPayments) {
  // console.log(rate, principle, monthlyPayments, noPayments);
  return (monthlyPayments * (1 - Math.pow((1 + rate), -noPayments))/rate) - principle;
}

module.exports = calculateResidual;