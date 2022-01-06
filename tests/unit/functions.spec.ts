import functions from "../../src/functions/index";

const numberArr = [1, 2, 3, 4];

describe("sum", () => {
  it("Should take an array of numbers and return their sum, or return 0 if array is empty", () => {
    const arrEmpty: number[] = [];
    expect(functions.sum(numberArr)).toBe(10);
    expect(functions.sum(arrEmpty)).toBe(0);
  });
});

describe("average", () => {
  it("Should take a sum, a length, and return their product", () => {
    const sum = functions.sum(numberArr);
    const len = numberArr.length;
    expect(functions.average(sum, len)).toBe(sum / len);
  });
});

describe("getProportionToMax", () => {
  it("Should take an array of numbers, a number, and return its proportion to the max value in the array, or 1", () => {
    const val = 2;
    expect(functions.getProportionToMax(numberArr, val)).toBe(0.5);
    expect(functions.getProportionToMax([], val)).toBe(1);
  });
});

describe("validatePassword", () => {
  it("Should validate password if it has at least 6 characters, including at least one number", () => {
    interface PasswordCheck {
      content: string;
      isValid: boolean;
    }

    const passwords: PasswordCheck[] = [
      { content: "AAAAA1", isValid: true },
      { content: "AAAAA", isValid: false },
      { content: "AAAA1", isValid: false },
      { content: "", isValid: false },
      { content: "A", isValid: false },
      { content: "1", isValid: false },
    ];

    passwords.forEach((password: PasswordCheck) => {
      expect(functions.validatePassword(password.content)).toBe(
        password.isValid
      );
    });
  });
});

describe("isNotDisposableEmail", () => {
  it("Should return true if the email is not in the list of disposable emails", () => {
    const disposableEmails = [
      "test@a-bc.net",
      "test@anonmails.de",
      "test@antireg.ru",
      "test@anonymbox.com",
    ];
    const acceptedEmails = [
      "test@gmail.com",
      "test@yahoo.fr",
      "test@outlook.com",
    ];

    disposableEmails.forEach((email) => {
      expect(functions.isNotDisposableEmail(email)).toBe(false);
    });
    acceptedEmails.forEach((email) => {
      expect(functions.isNotDisposableEmail(email)).toBe(true);
    });
  });
});

describe("isValidUsername", () => {
  it("Should return true if the user name contains only alphanumeric characters and no space, no accents", () => {
    const validName = "Validname1";
    const invalidNameSpace = "Invalid Name1";
    const invalidNameChars = [
      "invalid^",
      "invalid°",
      "invalid'",
      "invalid/",
      "invalid)",
      "invalid[",
      "invalid=",
      "invalid#",
      "invalid%",
      "invalid*",
      "invalid£",
      "invalid€",
    ];

    expect(functions.isValidUsername(validName)).toBe(true);
    expect(functions.isValidUsername(invalidNameSpace)).toBe(false);
    invalidNameChars.forEach((name) => {
      expect(functions.isValidUsername(name)).toBe(false);
    });
  });
});

describe("isValidEmail", () => {
  it("Should return true if the email contains the @ symbol", () => {
    const correctEmail = "correct@email.com";
    const wrongEmails = ["wrong", "wrong.com", "wrong@", "wrong@email"];
    expect(functions.isValidEmail(correctEmail)).toBe(true);
    wrongEmails.forEach((email) => {
      expect(functions.isValidEmail(email)).toBe(false);
    });
  });
});
