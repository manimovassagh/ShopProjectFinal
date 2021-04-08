const form=document.querySelector('#form');
console.log(form);
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(event.target.value);
})
