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
let sendEmailVerificationDiv = document.getElementById('sendEmailVerificationDiv');
let emailVerified = document.getElementById('emailVerified');
let passwordReset = document.getElementById('passwordReset');
let userImg = document.getElementById('userImg');
let userName = document.getElementById('userName');




function toggleToRegister(){
  console.log("executou");
  authForm.submitAuthForm.innerHTML = "cadastrar conta";
  authFormTitle.innerHTML = "insira seus dados para se cadastrar";

  hideItem(register);
  ShowItem(access);
  hideItem(passwordReset);
}

function toggleToAccess(){
  console.log("executou");
  authForm.submitAuthForm.innerHTML = "Acessar conta";
  authFormTitle.innerHTML = "Acesse sua conta para continuar";

  hideItem(access);
  ShowItem(register);
  ShowItem(passwordReset);
}

function ShowItem(element){
  element.style.display = 'block';
}

function hideItem(element){
  element.style.display = 'none';
}

function showUserContent(user){
  console.log(user)
  if(user.emailVerified){
    hideItem(sendEmailVerificationDiv);
    emailVerified.innerHTML = 'email verificado';
  }else{
    emailVerified.innerHTML = 'email não verificado';
  }
  userImg.src = user.photoURL ? user.photoURL : 'img/unknowUser.png';
  userName.innerHTML = user.displayName+'';
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

//atributos extras de configuração de email

let actionCodeSettings = {
  url: 'http://127.0.0.1:5500/'
};

