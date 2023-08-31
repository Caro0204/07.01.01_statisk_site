const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("p.price").textContent = "DKK " + product.price;
  document.querySelector(".articletype").textContent = product.brandname + " | " + product.articletype;
  document.querySelector("dd.productdisplayname").textContent = product.productdisplayname;
  document.querySelector("dd.subcategory").textContent = product.subcategory;
  document.querySelector("dd.relid").textContent = product.relid;
  document.querySelector("h2.productdisplayname").textContent = product.productdisplayname;
}
