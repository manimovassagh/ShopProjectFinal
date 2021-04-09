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
const container = document.querySelector(".second");
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (e) => {
  let brand = document.querySelector("#brand").value;
  let title = document.querySelector("#title").value;
  let price = document.querySelector("#price").value;
  let instock = document.querySelector("#instock").value;
  let shopid = document.querySelector("#shopid").value;
  let image = document.querySelector("#image").value;
  let neuUhr = {
    brand,
    title,
    price,
    instock,
    shopid,
    image,
  };
  console.log(neuUhr);

  db.collection("items")
    .doc()
    .set(neuUhr)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
});
