function print(event){
	event.preventDefault();
	let user_name = document.getElementById("username").value; 
	let email = document.getElementById("useremail").value;
	let phone = document.getElementById("phone").value;
	
	var myobj = {
		name : user_name,
		email : email,
		phoneNumber : phone,
	}
	let serialise = JSON.stringify(myobj);
	localStorage.setItem(`${myobj.email}`,serialise);
   	

   	
   	let del = document.createElement("input");
   	del.setAttribute("type","button");
   	del.setAttribute("value","delete");

    let li = document.createElement("li");
    li.innerHTML = `${myobj.name}-${myobj.email}-${myobj.phoneNumber}`;
    del.onclick =()=>{
	 
	 	li.parentNode.removeChild(li);
	 	localStorage.removeItem(`${myobj.email}`);
	 }
    li.appendChild(del);
    document.getElementById("listOfItems").appendChild(li);




   

}