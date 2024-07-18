interface ITotalPriceArgs {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: ITotalPriceArgs) => {
  const instalmentAmount = (price * (100 - discount)) / 100;
  const paymentAmount = instalmentAmount / months;

  return paymentAmount;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
