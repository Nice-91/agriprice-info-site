const signupForm = document.querySelector('#signup form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = signupForm.querySelector('input[type="text"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector('input[type="password"]').value;
  if(username && email && password){
    alert(`Signup successful!\nUsername: ${username}\nEmail: ${email}`);
    signupForm.reset();
    document.querySelector('#signup').style.display = 'none';
  }
});
const loginForm = document.querySelector('#login form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;
  if(email && password){
    alert(`Login successful!\nEmail: ${email}`);
    loginForm.reset();
    document.querySelector('#login').style.display = 'none';
  }
});
