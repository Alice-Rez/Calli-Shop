import logger from "redux-logger";

const { createStore, applyMiddleware } = require("redux");
const { default: reducer } = require("./reducer");

const calliStore = createStore(reducer, applyMiddleware(logger));

export default calliStore;
