const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#smallProductTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);

  copy.querySelector(".productdisplayname").textContent = product.productdisplayname;

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("p.price").textContent = "DKK " + product.price;
  copy.querySelector(".articletype").textContent = product.brandname + " | " + product.articletype;

  // discount
  if (product.discount) {
    const discountedPrice = product.price - (product.price / 100) * product.discount;
    copy.querySelector("p.rpris").textContent = "DKK " + discountedPrice.toFixed(0); // for den til at vise uden decimaler
    copy.querySelector("p.rrabat").textContent = product.discount + "%";
  } else {
    const discountElement = copy.querySelector(".discount");
    if (discountElement) {
      discountElement.remove();
    }
  }
  if (product.soldout) {
    // produktet er udsolgt
    copy.querySelector("article").classList.add("soldout");
  }
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  document.querySelector("main").appendChild(copy);
}
