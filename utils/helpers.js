function validatePassword(password) {
  console.log("password", password);
  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const result = regex.test(password);
  console.log(result);
  return result;
}

module.exports = { validatePassword };
