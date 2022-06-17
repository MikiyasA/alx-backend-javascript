export default class Pricing {
  constructor(amount, currency ) {
      this._amount = amount;
      this._currency = currency;
  }
  // getter method
  get amount(){
      return this._amount;
  }
  get currency(){
      return this._currency;
  }

  // setter method
  set amount(newAmt){
      if (typeof amount === 'number') {
          this._amount = newAmt; }
  }
  set currency(newCur){
      if (currency instanceof Currency){
          this._currency = newCur; } 
  }
  displayFullPrice() {
      return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
}
