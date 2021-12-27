import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
// import functions from "../functions";
import { UnknownObj } from "../types";

export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
  language: UnknownObj;
  isFrench: boolean;
}

export const store = createStore<State>({
  state: {
    language: {
      abreviation: "fr",
      options: {
        fr: "français",
        en: "english",
      },
    },
    isFrench: true,
  },
  mutations: {
    TOGGLE_LANGUAGE(state) {
      if (state.isFrench) {
        state.language.abreviation = "en";
        state.isFrench = false;
      } else {
        state.language.abreviation = "fr";
        state.isFrench = true;
      }
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
