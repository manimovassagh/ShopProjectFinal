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


const form=document.querySelector('#form');
console.log(form);
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    
    tosatify()
    console.log('form submitted');
})