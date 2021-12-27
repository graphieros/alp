import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
// import functions from "../functions";
import { UnknownObj } from "../types";

export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
  isChart: boolean;
  language: UnknownObj;
  isFrench: boolean;
  textContent: UnknownObj;
}

export const store = createStore<State>({
  state: {
    isChart: true,
    language: {
      abreviation: "fr",
      options: {
        fr: "français",
        en: "english",
      },
    },
    isFrench: true,
    textContent: {
      nameSubtitle: {
        fr: "Développeur Front-end",
        en: "Front-end developer",
      },
      buttons: {
        stack: {
          fr: "Stack technique",
          en: "Tech stack",
        },
        experience: {
          fr: "Experience",
          en: "Experience",
        },
        projects: {
          fr: "Projets",
          en: "Projects",
        },
      },
    },
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
    TOGGLE_CHART(state) {
      if (state.isChart) {
        state.isChart = false;
      } else {
        state.isChart = true;
      }
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
