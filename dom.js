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


// document.getElementById("item").style.fontweight = "bold";
// document.getElementById("item").style.color = "green";

// //get elements by class name
// let items = document.getElementsByClassName("list-group-item");

// items[2].style.backgroundColor = "green";

// for(let i =0;i<items.length;i++){
// 	items[i].style.color = "gold";
// }

// //elements by tag name
// let li = document.getElementsByTagName("li");

// for(let i =0; i<li.length;i++){
// 	li[i].style.backgroundColor = "grey";
// }

// QUERY SLECTOR
// let secondItems = document.querySelector(".list-group-item:nth-child(2)");
// secondItems.style.backgroundColor = "green";

// let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.color = "white";

// QUERY SELECTOR ALL
let items = document.querySelectorAll(".list-group-item");
items[1].style.color = "green";

let odd = document.querySelectorAll("li:nth-child(odd)");
for(let i =0; i < odd.length; i++){
	odd[i].style.backgroundColor = "green";
}