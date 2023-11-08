// const canEat = function(creature) {
//   const obj = {
//     eat: function(food) {
//       return `The ${creature} eats the ${food}.`
//     }
//   }
//   return obj;
// }
// const cat = canEat("cat");

// First use closures to create three dance moves. For instance, a dancer should be able to do the following:

// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"

const canPaint = function (color) {
  return {
    paints: function () {
      return `Paints ${color}!`;
    },
  };
};
const painter1 = canPaint("green");
const painter2 = canPaint("yellow");
const painter3 = canPaint("red");

const sound = function (sound) {
  return {
    sound: function () {
      return `${sound}!`;
    },
  };
};
const faucet = sound("Drip drip drip");
const oldCar = sound("Grumble grumble");
const sleepyBear = sound("Grrr... yawn");

function sendIt() {
  return function (distance) {
    return function (speed) {
      return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour!`;
    };
  };
}

const battleRobot1 = sendIt();
const throwResult = battleRobot1(100)(200);
console.log(throwResult); // "The battle robot throws the spear 100 yards at 200 miles per hour!"

function createDanceMove(move) {
  return function () {
    return `The dancer ${move}s!`;
  };
}

const samba = createDanceMove("samba");
const tango = createDanceMove("tango");
const waltz = createDanceMove("waltz");

const dancer = {
  samba: samba,
  tango: tango,
  waltz: waltz,
};

const belowG = (n) => {
  if (n >= 1000) {
    return 0;
  } else {
    if (n % 3 === 0 || n % 5 === 0) {
      return n + belowG(n + 1);
    } else {
      return belowG(n + 1);
    }
  }
};
const belowGr = (n, sum = 0) => {
  if (n >= 1000) {
    return sum;
  } else {
    if (n % 3 === 0 || n % 5 === 0) {
      return belowGr(n + 1, sum + n);
    } else {
      return belowGr(n + 1, sum);
    }
  }
};
// https://projecteuler.net/problem=1

const Fibo = (n, sum = 2, oldN) => {
  if (n >= 4000000) {
    return sum;
  } else {
    if (n % 2 === 0) {
      return Fibo(n + oldN, sum + n, n);
    } else {
      return Fibo(n + oldN, sum, n);
    }
  }
};
