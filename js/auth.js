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

firebase.auth().signOut().then(function(){
})

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
