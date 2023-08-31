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

  // discount
  if (product.discount) {
    const discountedPrice = product.price - (product.price / 100) * product.discount;
    document.querySelector("p.rpris").textContent = "DKK " + discountedPrice.toFixed(0); // for den til at vise uden decimaler
    document.querySelector("p.rrabatryk").textContent = product.discount + "%";
  } else {
    const discountElement = copy.querySelector(".discount");
    if (discountElement) {
      discountElement.remove();
    }
  }
}
