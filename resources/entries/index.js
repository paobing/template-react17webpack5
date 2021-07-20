import update from "../config/hot";
import MenuTree from "../modules/router/router";

import { Provider } from "react-redux";
import store from "../modules/redux/store";

if (module.hot) {
    module.hot.accept(update());
}

ReactDOM.render(
    <Provider store={store}>
        <MenuTree />
    </Provider>,
document.getElementById("root"));
