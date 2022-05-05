const qSelect = (select) => document.querySelector(select);
const form_blank = qSelect('#form');

const createAccount = () => {
  const form = qSelect('#form');

  const user = JSON.parse(localStorage.getItem(form.username.value));

  function verifyPassword(passwd, re_passwd) {
    return passwd === re_passwd;
  }

  if (user) {
    alert('User Already Registered');
  } else {
    if (verifyPassword(form.password.value, form['password-repeat'].value)) {
      localStorage.setItem(
        form.username.value,
        JSON.stringify({
          username: form.username.value,
          password: form.password.value,
          messages: [],
        })
      );
    }
  }

  form.innerHTML = form_blank.innerHTML;
};
