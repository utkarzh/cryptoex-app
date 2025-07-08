export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const isPasswordValid = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}<>\-_+=~`|\\:;"',./])[A-Za-z\d@$!%*?&#^()[\]{}<>\-_+=~`|\\:;"',./]{8,}$/;
  return passwordRegex.test(password);
};
export const validatePassword = (v: string) => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/;
  return re.test(v)
    ? undefined
    : "Password must be 8+ chars, with upper, lower, number & special char.";
};
