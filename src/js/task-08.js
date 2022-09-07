// const refs = {
//   formEvent: document.querySelector(".login-form"),
// };

// refs.formEvent.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const elements = event.currentTarget.elements;
//   if (elements.email.value === "" || elements.password.value === "") {
//     alert("Все поля должны быть заполнены!");
//     return;
//   }

//   const formData = {
//     email: elements.email.value,
//     password: elements.password.value,
//   };
//   console.log(formData);

//   refs.formEvent.reset();
// }

const formRefs = document.querySelector(".login-form");

formRefs.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    return alert("Please, all forms must be fill!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

  formRefs.reset();
}
