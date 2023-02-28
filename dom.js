// console.dir(document);

// console.log(document.getElementById("header-title"));

let header_title = document.getElementById("header-title");
let header = document.getElementById("main-header");
// console.log(header_title);
// header_title.textContent = "hello";
// header_title.innerText = "goodbye";
// console.log(header_title.innerText);
// // header_title.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px #000";


document.getElementById("item").style.fontweight = "bold";
document.getElementById("item").style.color = "green";

//get elements by class name
let items = document.getElementsByClassName("list-group-item");

items[2].style.backgroundColor = "green";

for(let i =0;i<items.length;i++){
	items[i].style.color = "gold";
}