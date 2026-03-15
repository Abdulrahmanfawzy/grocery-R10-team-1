// Helper function test
function calcFinalPrice(price: number, discount: number) {
  const final = price - discount;
  return final < 0 ? 0 : final;
}

function formatGBP(value: number) {
  // screenshot shows whole numbers like £12
  return `£${Math.round(value)}`;
}

export { calcFinalPrice, formatGBP };
