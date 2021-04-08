//connect to firebase to fetch data from cloud
db.collection("items")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      dataReturnAdmin(doc.data(), doc.id);
    });
  });
//Dom manipulation function
function ComeOnScreen(elementInnerHtml) {
  let div = document.querySelector(".table");
  // console.log(div);
  div.innerHTML += elementInnerHtml;
}
//function to prevent async undefined!!
const dataReturnAdmin = (data, id) => {
  let admintable = `
  <tr>
    <th scope="row">${data.title}</th>
    <td>${data.brand}</td>
    <td>${data.instock}</td>
    <td>${data.price}</td>
    <td>${data.shopid}</td>
   
  </tr>
 
`;
  ComeOnScreen(admintable);
};

const toggler = document.querySelector("#inputshop");
const addtoShop = document.querySelector("#btnAdd");
// console.log(toggler);
// console.log(addtoShop);
addtoShop.addEventListener("click", () => {
  if (toggler.className == "d-none") {
    toggler.className = "d-inline";
  } else {
    toggler.className = "d-none";
  }
});



//grab form data from adding form
const btn=document.querySelector('#submit')
btn.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e.target);
    
})


//check manualy add item to firebase first
// db.collection("items")
//   .doc().set({
//     brand: "some watch",
//     price: 440,
//     title: "model new lorem ippsum",
//   })
//   .then(() => {
//     console.log("Document successfully written!");
//   })
//   .catch((error) => {
//     console.error("Error writing document: ", error);
//   });
