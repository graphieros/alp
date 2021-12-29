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
  showStack: boolean;
  showProjects: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

export const store = createStore<State>({
  state: {
    isMobile: false,
    isTablet: false,
    showExperience: false,
    showStack: false,
    showProjects: false,
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
      drawerProjects: {
        title: {
          fr: "Projets",
          en: "Projects",
        },
        projects: {
          agilePkr: {
            intro: {
              fr: "Solution ludique d'agile poker pour faire des sessions d'estimations de user-stories un moment agréable et productif, tout spécialement pour les équipes agiles en télétravail.",
              en: "Original implementation of the classic 'agile poker' to make estimating sessions of user stories a playful and productive gathering, especially for remote agile teams.",
            },
            stack: {
              fr: "PWA codée en Vue2 + Vuetify + Firebase",
              en: "PWA written in Vue2 + Vuetify + Firebase",
            },
            cta: {
              fr: "Accéder à l'application",
              en: "Check out the app",
            },
          },
          graphierosReact: {
            intro: {
              fr: "Présentation de la langue construite 'graphieros': origines, fonctionnement, lexique, éditeur de glyphes en SVG et autres ressources.",
              en: "Presentation of the 'graphieros' conlang: origins, how the languag works, glyphs SVG editor and other resources.",
            },
            stack: {
              fr: "Application codée en React avec vanilla JS",
              en: "Application written in React with Vanilla JS",
            },
            cta: {
              fr: "Accéder à l'application",
              en: "Check out the app",
            },
          },
          graphierosVue: {
            intro: {
              fr: "Présentation de la langue construite graphieros, dans une version revue en bilingue, et un éditeur de texte SVG amélioré.",
              en: "Presentation ",
            },
            stack: {
              fr: "Application codée avec Vue3 et Vanilla JS",
              en: "Application written in Vue3 with Vanilla JS",
            },
            cta: {
              fr: "Accéder à l'application",
              en: "Check out the app",
            },
          },
          toiletMogul: {
            intro: {
              fr: "Un jeu de trading 'idle' amusant et ironique que le joueur peut choisir de laisser tourner ou essayer frénétiquement de gagner autant d'argent que possible. Achetez et vendez des actions de l'Universal Toilet Paper Index, altérez le marché, évitez la SEC, achetez et vendez des biens immobiliers, créez une entreprise et amenez-la sur la lune.",
              en: "A funny and ironic trading idle game the player can choose to leave to play on itself, or frenetically try to earn as much cash as possible. Buy and sell shares of the Universal Toilet Paper Index, tamper with the market, avoid the SEC, buy and sell real estate, create a company and bring it to the moon.",
            },
            stack: {
              fr: "Application codée avec Vue3, TypeScript et WaveUI",
              en: "Application written in Vue3, TypeScript and WaveUI",
            },
            cta: {
              fr: "Accéder au jeu",
              en: "Check out the game",
            },
          },
        },
      },
      drawerStack: {
        title: {
          fr: "Stack technique",
          en: "Tech stack",
        },
        intro: {
          fr: "Connaissances approfondies en Vanilla JS, pour une utilisation optimale des principaux frameworks avec TypeScript, en particulier VueJs. Forte sensibilité data-analyse et visualisation data, et excellentes compétences en édition d'images, et inline SVG.",
          en: "In-depth Vanilla JS knowledge, for an optimal use of main frameworks with TypeScript, especially VueJs. Strong data-analysis, data visualization, excellent image editing and inline SVG skills.",
        },
        fundamentals: {
          fr: "Fondamentaux",
          en: "Fundamentals",
        },
        frameworks: {
          fr: "Frameworks",
          en: "Frameworks",
        },
        other: {
          fr: "Autres",
          en: "Other",
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
