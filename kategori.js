fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showKategorier);

function showKategorier(kats) {
  kats.forEach(showKategori);
}
function showKategori(kat) {
  // fanger vores template
  const template = document.querySelector("template").content;
  // cloner
  const clone = template.cloneNode(true);
  // ændre indhold
  clone.querySelector("a").textContent = kat.category;
  clone.querySelector("a").href = `produktliste.html?category=${kat.category}`;
  // appender
  document.querySelector(".kategoriliste ol").appendChild(clone);
}
