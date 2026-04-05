import { devToolsEnhancer } from "@redux-devtools/extension";

import { createStore } from "redux";
import todoReducer from "./reducer";

const enhancer = devToolsEnhancer();

export const store = createStore(todoReducer, enhancer);