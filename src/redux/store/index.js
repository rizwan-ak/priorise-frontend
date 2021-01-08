import { createStore } from "redux";
import Reducer from "../reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export default { store, persistor };
``