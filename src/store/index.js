/** @format */

import Vuex from "vuex";
import { auth } from "./modules/auth.module";

export default new Vuex.Store({
  modules: {
    auth,
  },
});
