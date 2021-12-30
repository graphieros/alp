export interface UnknownObj {
  [key: string]: string | number | any;
}

export type ErrorType = "GENERIC" | "LOGIN_ERROR" | "API_ERROR";

// enforce key
export type ErrorMessage = {
  [key in ErrorType]: string;
};

// enforce the value
export interface OtherErrorMessage {
  [key: string]: ErrorType;
}

export interface TechStack {
  name: string;
  logo: string;
}

export interface Contact {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  id?: string | undefined;
  date?: string | Date | undefined;
}

export interface LanguageOption {
  fr: string;
  en: string;
}

export interface Language {
  abreviation: string;
  options: LanguageOption;
}

export interface TranslationContent {
  contact: UnknownObj;
  nameSubtitle: UnknownObj;
  buttons: UnknownObj;
  drawerProjects: UnknownObj;
  drawerStack: UnknownObj;
  drawerExperience: UnknownObj;
}
