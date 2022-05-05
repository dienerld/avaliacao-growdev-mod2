const session = localStorage.getItem('session');
let logged = sessionStorage.getItem('logged');

// Functions
function checkLogged() {
  if (session) {
    sessionStorage.setItem('logged', session);
    logged = session;
  }

  if (!logged) {
    window.location.href = 'index.html';
    return;
  }

  const dataUser = localStorage.getItem(logged);
  if (dataUser) {
    data = JSON.parse(dataUser);
  }
}

checkLogged();
