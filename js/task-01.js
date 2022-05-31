const categoryOfList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryOfList.length}`);

categoryOfList.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  const countItems = element.querySelectorAll("li")
  console.log(`Elements: ${countItems.length}`);
})