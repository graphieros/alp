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
  logo: string;
  name: string;
}

export interface Contact {
  date?: string | Date | undefined;
  email: string | undefined;
  id?: string | undefined;
  message: string | undefined;
  name: string | undefined;
}

export interface LanguageOption {
  [key: string]: string | number | any;
  en: string;
  fr: string;
}

export interface Language {
  [key: string]: string | number | any;
  abreviation: string;
  options: LanguageOption;
}

export interface TranslationContent {
  buttons: UnknownObj;
  contact: UnknownObj;
  drawerExperience: UnknownObj;
  drawerProjects: UnknownObj;
  drawerStack: UnknownObj;
  nameSubtitle: UnknownObj;
}

export interface BlogPost {
  content: LanguageOption;
  date: any;
  icon: string;
  id: string;
  title: LanguageOption;
}
