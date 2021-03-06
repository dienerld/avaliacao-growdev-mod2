const qSelect = (select) => document.querySelector(select);

const createAccount = () => {
  const form = qSelect('#form');

  const user = JSON.parse(localStorage.getItem(form.username.value));

  function verifyPassword(passwd, re_passwd) {
    return passwd === re_passwd;
  }

  if (user) {
    alert('User Already Registered');
    return;
  }
  if (
    !(
      form.username.value === '' ||
      form.password.value === '' ||
      form['password-repeat'].value === ''
    )
  ) {
    if (verifyPassword(form.password.value, form['password-repeat'].value)) {
      localStorage.setItem(
        form.username.value,
        JSON.stringify({
          username: form.username.value,
          password: form.password.value,
          messages: [],
        })
      );
      window.location.href = 'home.html';
      return;
    } else {
      alert('Passwords does not match');
    }
  } else {
    alert('Not accept blank user');
  }
};
