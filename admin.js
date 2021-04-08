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
  console.log(data);
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
