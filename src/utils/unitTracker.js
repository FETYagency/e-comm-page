export default function units(cart = []) {
  if (cart.length > 0) {
    const totalUnits = cart.reduce((acc, curr) => {
      return acc + curr.units;
    }, 0);
    return totalUnits;
  }
  return 0;
}
