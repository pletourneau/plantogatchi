function createCoinCounter() {
  const coinValues = [25, 10, 5, 1];
  const coinNames = ["quarters", "dimes", "nickels", "pennies"];

  function calculateChange(coinValue, coinName) {
    return function (amt) {
      if (amt <= 0) {
        return 0;
      }

      const coinCount = Math.floor(amt / coinValue);
      console.log("Counting " + coinCount + " " + coinName);
      const remainingAmount = amt % coinValue;

      if (remainingAmount === 0) {
        return coinCount;
      }

      return coinCount + calculateChange(remainingAmount, coinName)(amt);
    };
  }

  const coinCounters = coinValues.map(function (coinValue, index) {
    const coinName = coinNames[index];
    return calculateChange(coinValue, coinName);
  });

  return coinCounters;
}

const counters = createCoinCounter();
const quartersCounter = counters[0];
const dimesCounter = counters[1];
const nickelsCounter = counters[2];
const penniesCounter = counters[3];

const amount = 499;
console.log("Quarters: " + quartersCounter(amount));
console.log("Dimes: " + dimesCounter(amount));
console.log("Nickels: " + nickelsCounter(amount));
console.log("Pennies: " + penniesCounter(amount));
