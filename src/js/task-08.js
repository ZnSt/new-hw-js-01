const refs = {
  formEvent: document.querySelector(".login-form"),
};

refs.formEvent.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  if (elements.email.value === "" || elements.password.value === "") {
    alert("Все поля должны быть заполнены!");
    return;
  }

  const formData = {
    email: elements.email.value,
    password: elements.password.value,
  };
  console.log(formData);

  refs.formEvent.reset();
}
