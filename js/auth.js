//traduz para Portuguess
firebase.auth().languageCode = 'pt=BR'

authForm.onsubmit = function (event) {
  ShowItem(loading);
  event.preventDefault();
  let email = authForm.email.value;
  let password = authForm.Password.value;

  if (authForm.submitAuthForm.innerHTML == 'cadastrar conta') {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      console.error(error);
      hideItem(loading);
    })
  } else {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      console.error(error);
      hideItem(loading);
    })
  }
}

// on change
firebase.auth().onAuthStateChanged(function (user) {
  hideItem(loading);
  if (user) {
    showUserContent(user);
  } else {
    console.log('não autenticadoo');
    showAuth();
  }
})

//logout
function signOut(){
  firebase.auth().signOut().catch(function(error){
    console.log(error);
  })
}

//funcão que verfiica o email

function sendEmailVerification(){
  ShowItem(loading);
  let user = firebase.auth().currentUser
  user.sendEmailVerification(actionCodeSettings).then(function (){
    alert('email de verificação foi enviado para '+ user.email);
  }).catch(function (error){
    alert('erro ao enviar o email');
    console.log(error);
  }).finally(function(){
    hideItem(loading);
  })
}

//passwordReset

function sendPassswordReset(){
  let email = prompt("redefinir senha! informe seu endereço de email", authForm.email.value);
  if(email){
    ShowItem(loading);
    firebase.auth().sendPasswordResetEmail(email, actionCodeSettings).then(function(){
      alert('email enviado para a sua caixa');
    }).catch((error) => {
      alert(error);
    }).finally(()=>{
      hideItem(loading);
    })
  }else{
    alert('prencha o email');
  }
}

//google auth

function signWithGoogle(){
  ShowItem(loading)
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function (error){
    alert('houve um erro inesperado');
    console.log(error);
    hideItem(loading);
  })
}