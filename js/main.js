let authForm = document.getElementById('authForm');
console.log(authForm);
let authFormTitle = document.getElementById('title');
console.log(authFormTitle);
let register = document.getElementById('register');
let access = document.getElementById('access');
let loading = document.getElementById('loading');
let auth = document.getElementById('auth');
let userContent = document.getElementById('userContent');
let userEmail = document.getElementById('userEmail');




function toggleToRegister(){
  console.log("executou");
  authForm.submitAuthForm.innerHTML = "cadastrar conta";
  authFormTitle.innerHTML = "insira seus dados para se cadastrar";

  hideItem(register);
  ShowItem(access);
}

function toggleToAccess(){
  console.log("executou");
  authForm.submitAuthForm.innerHTML = "Acessar conta";
  authFormTitle.innerHTML = "Acesse sua conta para continuar";

  hideItem(access);
  ShowItem(register);
}

function ShowItem(element){
  element.style.display = 'block';
}

function hideItem(element){
  element.style.display = 'none';
}

function showUserContent(user){
  console.log(user.email)
  userEmail.innerHTML = user.email+'';
  hideItem(auth);
  ShowItem(userContent);
  
}

function showAuth(){
  authForm.email.value = '';
  authForm.Password.value = '';
  hideItem(userContent);
  ShowItem(auth);
}