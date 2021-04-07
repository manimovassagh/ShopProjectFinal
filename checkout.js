// dom library structure for reminding: element, innerHTML,className

let el = localStorage.getItem("cart");
let root = document.querySelector("#injectData");
el = JSON.parse(el);

const init = () => {
  let identifire = localStorage.getItem("identifire");
  // console.log(el);

  // console.log(root);
  root.innerHTML = "";
  for (let i = 0; i < el.length; i++) {
    // console.log(el);
    root.innerHTML += `
  <tr>
  <td>${i + 1}</td>
  <td>${el[i].title}</td> 
  <td>${el[i].price} €</td>
  <td >${el[i].count}</td>
  <td>${el[i].price * el[i].count}€ </td>
  <td class="d-flex justify-content-around text-center"><i v class="increment bi bi-bag-plus" style="font-size: 1.8rem; "></i> <i class="decrement bi bi-bag-dash" style="font-size: 1.8rem;"></i></td>
  </tr>
  `;
    const button = document.querySelectorAll(".increment");
    const buttondecrement = document.querySelectorAll(".decrement");
    
    
    button.forEach((element, id) => {
      element.addEventListener("click", () => {
        ++el[id].count;
        localStorage.setItem("cart", JSON.stringify(el));
        console.log(el[id]);
        init();
      });
    });
    buttondecrement.forEach((element, id) => {
      element.addEventListener("click", () => {
        --el[id].count;
        localStorage.setItem("cart", JSON.stringify(el));
        console.log(el[id]);
        init();
      });
    });
  }
};

init();
