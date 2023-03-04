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
   	

   	//creating delete button
   	let del = document.createElement("input");
   	del.setAttribute("type","button");
   	del.setAttribute("value","Delete");

   	//creating li element
    let li = document.createElement("li");
    li.innerHTML = `${myobj.name}-${myobj.email}-${myobj.phoneNumber}`;
    
    //creating edit button
    let edit = document.createElement("input");
    edit.setAttribute("type","button");
    edit.setAttribute("value","Edit");

    //delete function
    del.onclick =()=>{
	 
	 	li.parentNode.removeChild(li);
	 	localStorage.removeItem(`${myobj.email}`);
	 }

	 //edit function
	 edit.onclick = () =>{
	 	document.getElementById("username").value = myobj.name;
	 	document.getElementById("useremail").value = myobj.email;
	 	document.getElementById("phone").value = myobj.phoneNumber;
	 	li.parentNode.removeChild(li);
	 	localStorage.removeItem(`${myobj.email}`);
	 }
    li.appendChild(del);
    li.appendChild(edit);
    document.getElementById("listOfItems").appendChild(li);




   

}