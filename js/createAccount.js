const qSelect = (select) => document.querySelector(select);

const createAccount = () => {
  const username = qSelect('#input-username').value;
  const password = qSelect('#input-password').value;
  const password_repeat = qSelect('#repeat-password').value;

  const user = JSON.parse(localStorage.getItem(username));
  console.log(user);

  function verifyPassword(passwd, re_passwd) {
    return passwd === re_passwd;
  }

  if (user) {
    alert('User Already Registered');
  } else {
    if (verifyPassword(password, password_repeat)) {
      localStorage.setItem(
        username,
        JSON.stringify({ username, password, messages: [] })
      );
    }
  }
};
