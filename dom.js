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
// let items = document.querySelectorAll(".list-group-item");
// items[1].style.color = "green";

// let odd = document.querySelectorAll("li:nth-child(odd)");
// for(let i =0; i < odd.length; i++){
// 	odd[i].style.backgroundColor = "green";
// }

// TRAVERSING THE DOM//
let itemlist = document.querySelector("#items");
//parent Node property
// console.log(itemlist.parentNode); 
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentNode.parentNode.parentNode);


//parent Element
// console.log(itemlist.parentElement); 
// itemlist.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemlist.childNodes);

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = "yellow";

// //firstChild
// console.log(itemlist.firstChild);
// //firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "hello";


//lastChild
// console.log(itemlist.lastChild);
//lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = "hello 4";

//nextSibling
// console.log(itemlist.nextSibling);

//nextElementSibling
// console.log(itemlist.nextElementSibling);

//previous Sibling
// console.log(itemlist.previousSibling);


//previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = "green";

//createElement

//Create a div
let newDiv = document.createElement("div");

//add class
newDiv.className = "hello";

// add id 
newDiv.id = "hello1";

//add atribute
newDiv.setAttribute("title","hello div");

//create text node
let newDivText = document.createTextNode("hello world");

//add text to a newDiv
newDiv.appendChild(newDivText);




let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");




console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv,h1);
























