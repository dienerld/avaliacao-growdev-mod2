const qSelect = (select) => document.querySelector(select);

const login = () => {
  const username = qSelect('#input-username').value;
  const password = qSelect('#input-password').value;

  const user = JSON.parse(localStorage.getItem(username));
  if (!user) {
    alert('Login or Password Invalid');
    return;
  }
  if (!(password === user.password)) {
    alert('Login or Password Invalid');
    return;
  }
};
