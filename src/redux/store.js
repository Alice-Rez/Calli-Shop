const { createStore } = require("redux");
const { default: reducer } = require("./reducer");

const calliStore = createStore(reducer);

export default calliStore;
