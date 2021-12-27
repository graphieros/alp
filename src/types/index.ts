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
