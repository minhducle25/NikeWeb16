import { combineReducers } from "redux";
import reducerURL from "../../components/ListProduct/module/reducer/reducer";
import reducerCart from "../../components/Body/Cart/module/reducer/reducer"
const rootReducer = combineReducers({
  reducerURL,
  reducerCart,
});
export default rootReducer;
