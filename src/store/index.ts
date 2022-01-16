import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
// import functions from "../functions";
import {
  BlogPost,
  Contact,
  Language,
  TranslationContent,
  UnknownObj,
} from "../types";
import firebaseApp from "../firebase";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore/lite";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

const db = getFirestore(firebaseApp);

export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
  [key: string]: string | number | any;
  isChart: boolean;
  language: Language;
  isFrench: boolean;
  textContent: TranslationContent;
  showExperience: boolean;
  showStack: boolean;
  showProjects: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isLoggedIn: boolean;
  contactRequests: Contact[];
  blogPosts: BlogPost[];
}

export const store = createStore<State>({
  state: {
    blogPosts: [],
    contactRequests: [],
    isLoggedIn: false,
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
      contact: {
        intro: {
          fr: "Indiquez ici vos coordonnées et votre message:",
          en: "Please leave your contact details and your message to get in touch:",
        },
        title: {
          fr: "Demande de contact",
          en: "Contact request",
        },
        form: {
          name: {
            fr: "Votre nom",
            en: "Your name",
          },
          email: {
            fr: "Votre e-mail",
            en: "Your e-mail",
          },
          message: {
            fr: "Votre message",
            en: "Your message",
          },
          button: {
            fr: "ENVOYER",
            en: "SEND",
          },
          success: {
            fr: "Message envoyé. Merci !",
            en: "Message sent. Thank you !",
          },
          errors: {
            empty: {
              fr: "Vous devez compléter les champs pour envoyer la demande de contact.",
              en: "You must fill-in all the fields to send your contact request.",
            },
            phonyEmail: {
              fr: "Vous devez utiliser une adresse e-mail non jetable.",
              en: "You must use a non-disposable e-mail.",
            },
          },
          validators: {
            required: {
              fr: "Champ obligatoire",
              en: "Required",
            },
            name: {
              fr: "Max 30 caractères",
              en: "Max 30 characters",
            },
            message: {
              fr: "Max 512 caractères",
              en: "Max 512 characters",
            },
            email: {
              fr: "E-mail invalide.",
              en: "Invalid e-mail.",
            },
          },
        },
      },
      nameSubtitle: {
        fr: "Développeur Front-end",
        en: "Front-end developer",
      },
      buttons: {
        blog: {
          fr: "Blog",
          en: "Blog",
        },
        stack: {
          fr: "Stack technique",
          en: "Technical stack",
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
          basiCalc: {
            intro: {
              fr: "Une calculatrice simple réalisée avec React",
              en: "A simple calculator built with React",
            },
            stack: {
              fr: "Codée avec React et TypeScript",
              en: "Written in React and TypeScript",
            },
            cta: {
              fr: "Accéder à l'application",
              en: "Check out the app",
            },
          },
          yohann: {
            intro: {
              fr: "Site officiel du comédien et metteur en scène Yohann Lavéant.",
              en: "Official website of the comedian and director Yohann Lavéant.",
            },
            stack: {
              fr: "PWA codée avec TypeScript, Vue2, Vuetify, Firebase",
              en: "PWA written in TypeScript, Vue2, Vuetify, Firebase",
            },
            cta: {
              fr: "Accéder à l'application",
              en: "Check out the app",
            },
          },
          agilePkr: {
            intro: {
              fr: "Solution ludique d'agile poker pour faire des sessions d'estimations de user-stories un moment agréable et productif, tout spécialement pour les équipes agiles en télétravail.",
              en: "Original implementation of the classic 'agile poker' to make estimating sessions of user stories a playful and productive gathering, especially for remote agile teams.",
            },
            stack: {
              fr: "PWA codée avec TypeScript, Vue2, Vuetify, Firebase",
              en: "PWA written in TypeScript, Vue2, Vuetify, Firebase",
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
              fr: "Application codée en Vanilla JS et React",
              en: "Application written in Vanilla JS and React",
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
              fr: "Application codée avec Vanilla JS et Vue3",
              en: "Application written in Vanilla JS and Vue3",
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
              fr: "Application codée avec TypeScript, Vue3, WaveUI",
              en: "Application written in TypeScript, Vue3, WaveUI",
            },
            cta: {
              fr: "Accéder au jeu",
              en: "Check out the game",
            },
          },
          thisSite: {
            name: {
              fr: "Ce site",
              en: "This website",
            },
            intro: {
              fr: "Mieux qu'un CV statique, ce site tente de montrer d'une façon sobre l'étendue de mes compétences actuelles en matière de développement front-end.",
              en: "Better than a static CV, this site attemps to show in a sober fashion the extent of my current front-end skills.",
            },
            stack: {
              fr: "Application codée avec TypeScript, Vue3, WaveUI, Firebase",
              en: "Application written in TypeScript, Vue3, WaveUI, Firebase",
            },
            cta: {
              fr: "Fermer",
              en: "Close",
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
    TOGGLE_LANGUAGE(state): void {
      if (state.isFrench) {
        state.language.abreviation = "en";
        state.isFrench = false;
      } else {
        state.language.abreviation = "fr";
        state.isFrench = true;
      }
    },
    TOGGLE_CHART(state): void {
      if (state.isChart) {
        state.isChart = false;
      } else {
        state.isChart = true;
      }
    },
    TOGGLE_DRAWER(state, payload: UnknownObj): void {
      const { name, isOpen } = payload;
      state[`show${name}`] = isOpen;
    },
    UPDATE_FIELD(state, { field, val }: UnknownObj): void {
      if (field) state[field.toString()] = val;
    },
  },
  actions: {
    POST_BLOG(
      { commit }: UnknownObj,
      payload: BlogPost
    ): Promise<BlogPost | boolean> {
      const id = uuidv4();
      payload.id = id;
      payload.date = new Date().toLocaleDateString();

      return new Promise((resolve, reject) => {
        setDoc(doc(db, "blog", payload.id), { ...payload })
          .then(() => {
            if (commit) {
              resolve(true);
            }
          })
          .catch((err) => {
            console.error(err.message);
            reject(err);
          });
      });
    },
    SEND_CONTACT_REQUEST(
      { commit }: UnknownObj,
      payload: UnknownObj
    ): Promise<Contact | boolean> {
      const id = uuidv4();
      payload.id = id;
      payload.date = new Date().toLocaleDateString();

      return new Promise((resolve, reject) => {
        setDoc(doc(db, "contacts", payload.id), { ...payload })
          .then(() => {
            if (commit) {
              resolve(true);
            }
          })
          .catch((err) => {
            console.error(err.message);
            reject(err);
          });
      });
    },
    LOG_IN(
      { commit }: UnknownObj,
      payload: UnknownObj
    ): Promise<UnknownObj | boolean> {
      const { email, pwd } = payload;
      const auth = getAuth();
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, pwd)
          .then(() => {
            store.state.isLoggedIn = true;
            if (commit) {
              resolve(true);
            }
          })
          .catch((err) => {
            console.error(err.message);
            reject(err);
          });
      });
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
