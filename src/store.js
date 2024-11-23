import { createStore, combineReducers } from "redux";
import { appReducer } from "./redux/app.reducer";

const rootReducers = combineReducers({
  app: appReducer
})

export const store = createStore(rootReducers);

/* store
{
  app: {
    carts: []
  }
}
*/