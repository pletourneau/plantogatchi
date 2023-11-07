// This function stores our state.
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const incrementTurn = (state) => {
  return {
    ...state,
    turn: (state.turn || 0) + 1,
  };
};

const decrementValues = (state) => {
  const newState = {
    ...state,
    water: state.water - 2,
    soil: state.soil - 2,
  };
  if (
    newState.water < 0 ||
    newState.soil < 0 ||
    isNaN(newState.water) ||
    isNaN(newState.soil)
  ) {
    document.getElementById("end-game").innerText = "PLANT MURDERER!";
  }

  return newState;
};

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(3);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(3);

window.onload = function () {
  document.getElementById("feed").onclick = function () {
    const newState = stateControl(feed);
    const updatedState = stateControl(incrementTurn);
    document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
    document.getElementById(
      "turn-value"
    ).innerText = `Turn: ${updatedState.turn}`;
    if (updatedState.turn % 3 === 0) {
      const newStateAfterDecrement = stateControl(decrementValues);
      document.getElementById(
        "soil-value"
      ).innerText = `Soil: ${newStateAfterDecrement.soil}`;
      document.getElementById(
        "water-value"
      ).innerText = `Water: ${newStateAfterDecrement.water}`;
    }
  };
  document.getElementById("blue-food").onclick = function () {
    const newState = stateControl(blueFood);
    const updatedState = stateControl(incrementTurn);
    document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
    document.getElementById(
      "turn-value"
    ).innerText = `Turn: ${updatedState.turn}`;
  };
  document.getElementById("hydrate").onclick = function () {
    const newState = stateControl(hydrate);
    const updatedState = stateControl(incrementTurn);
    document.getElementById(
      "water-value"
    ).innerText = `Water: ${newState.water}`;
    document.getElementById(
      "turn-value"
    ).innerText = `Turn: ${updatedState.turn}`;
  };
  document.getElementById("super-water").onclick = function () {
    const newState = stateControl(superWater);
    const updatedState = stateControl(incrementTurn);
    document.getElementById(
      "water-value"
    ).innerText = `Water: ${newState.water}`;
    document.getElementById(
      "turn-value"
    ).innerText = `Turn: ${updatedState.turn}`;
  };
};
