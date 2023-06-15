class Calculation {
  constructor(itemArray, discount, tax) {
    this.itemArray = itemArray;
    this.discount = discount;
    this.tax = tax;
  }

  calSubTotal() {
    return this.itemArray.reduce(
      (subTotal, currVal) =>
        +currVal.itemQuantity * +currVal.itemRate + subTotal,
      0
    );
  }

  discountAmt() {
    return this.calSubTotal() * (this.discount / 100);
  }

  taxAmt() {
    return (this.calSubTotal() - this.discountAmt()) * (this.tax / 100);
  }

  total() {
    return this.calSubTotal() - this.discountAmt() + this.taxAmt();
  }
}

export default Calculation;
