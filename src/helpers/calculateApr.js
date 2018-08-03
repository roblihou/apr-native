function calculateApr(principle, monthlyPayments, noPayments) {
  let rate = 0.05;
  let rateA = 0.001; // This should produce a negative residual
  let rateB = 1; // This should produce a positive residual
  let residual = 1000;
  // let pvPayments = 0;
  let itteration = 1;    
  while(Math.abs(residual) > 1){
    // console.log(`Itteration: ${itteration}`);
    // console.log(`RateA: ${rateA}`);
    // console.log(`RateB: ${rateB}`);
    // console.log(`Monthly Payments: ${monthlyPayments}`);
    rate = (rateA + rateB) / 2;
    // console.log(`rate: ${rate}`);
    residual = this.calculateResidual(rate, principle, monthlyPayments, noPayments);
    // pvPayments = monthlyPayments * (1 - Math.pow((1 + rate), -noPayments))/rate;
    // console.log(`pvPayments: ${pvPayments}`);
    // residual = pvPayments - principle;
    if(residual < 0){
      rateB = rate;
    }
    else{
      rateA = rate;
    }
    itteration ++;
    if(itteration > 1000){
      return 'too many itterations';
    }
    // console.log(`itternation no ${itteration}: ${rate} %, residual = ${residual}`);
  }
  // console.log(rate * 12);
  this.setState({
    apr: Math.round((Math.pow((1 + rate), 12) -1)* 100 * 100)/100,
    isHidden: false,
  });
}

module.exports = calculateApr;
