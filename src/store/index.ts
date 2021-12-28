import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
// import functions from "../functions";
import { UnknownObj } from "../types";

export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
  [key: string]: string | number | any;
  isChart: boolean;
  language: UnknownObj;
  isFrench: boolean;
  textContent: UnknownObj;
  showExperience: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

export const store = createStore<State>({
  state: {
    isMobile: false,
    isTablet: false,
    showExperience: false,
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
          fr: "Expérience",
          en: "Experience",
        },
        projects: {
          fr: "Projets",
          en: "Projects",
        },
      },
      drawerExperience: {
        title: {
          fr: "Expérience",
          en: "Experience",
        },
        intro: {
          fr: "Développeur front-end autodidacte avec une expérience préalable comme data-analyst dans le domaine des cosmétiques.",
          en: "Self-taught front-end developer with previous experience as data-analyst in the field of skincare & cosmetics.",
        },
        painting: {
          fr: "Entre 1988 et 2020, artiste peintre et créateur de l'idéolangue graphieros, dont voici un tableau:",
          en: "Between 1988 and 2020, self-taught oil painter and creator of the graphieros conlang. Here is an example of a painting:",
        },
        button: {
          fr: "Découvrir le graphieros",
          en: "Discover graphieros",
        },
        timeline: {
          fr: [
            {
              title: "Depuis 2018",
              content: "Développeur front-end",
            },
            { title: "2014 - 2021", content: "Data-analyst" },
            {
              title: "2009 - 2014",
              content: "Adjoint Opérations",
            },
            {
              title: "2006 - 2009",
              content: "Hôte d'accueil & conseiller de vente",
            },
          ],
          en: [
            {
              title: "Since 2018",
              content: "Front-end developer",
            },
            { title: "2014 - 2021", content: "Data-analyst" },
            {
              title: "2009 - 2014",
              content: "Deputy operations officer",
            },
            {
              title: "2006 - 2009",
              content: "Spa receptionist",
            },
          ],
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
    TOGGLE_DRAWER(state, payload: UnknownObj) {
      const { name, isOpen } = payload;
      state[`show${name}`] = isOpen;
    },
    UPDATE_FIELD(state, { field, val }: UnknownObj): void {
      if (field) state[field.toString()] = val;
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
