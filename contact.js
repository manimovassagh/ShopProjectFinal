// i have extracted this from toastify documents it is easy to  use position and gravity is easy editable.
function tosatify() {
  Toastify({
    text: "You have submitted the form",
    backgroundColor: "blueviolet",
    className: "info primary",
    position: "left", // `left`, `center` or `right`
    gravity: "top", // `top` or `bottom`
    close: true,
  }).showToast();
}

//fire toastify base on submit click
// i reserved the submit form for next module i want to attached it to node server later on in the next moodule and use it in proper way

const form = document.querySelector("#form");
console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  tosatify();
  console.log("form submitted");
});

