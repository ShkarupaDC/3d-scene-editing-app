export const validators = {
  files: (files) =>
    files.length < 10
      ? { errorMessage: "Number files must be 10 or more" }
      : null,
  email: (value) =>
    validateEmail(value) ? null : { errorMessage: "Invalid email address" },
};

const validateEmail = (value) =>
  value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
