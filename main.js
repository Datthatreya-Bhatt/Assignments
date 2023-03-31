
function print(event){
	event.preventDefault();
	let user_name = document.getElementById("username").value; 
	let email = document.getElementById("useremail").value;
	let phone = document.getElementById("phone").value;
	
	// var myobj = {
	// 	name : user_name,
	// 	email : email,
	// 	phoneNumber : phone,
	// }
	//let serialise = JSON.stringify(myobj);

	//Posting data to crudcrud
	axios.post("https://crudcrud.com/api/511bd323a23f481db5e5a2feeed209e8/test",{
		name : `${user_name}`,
		email : `${email}`,
		phoneNumber : `${phone}`,
	})
	.then( (res)=>{console.log(res)})
	.catch( (rej)=>{console.log(rej)});
   	

   	//creating delete button
   	let del = document.createElement("input");
   	del.setAttribute("type","button");
   	del.setAttribute("value","Delete");

   	//creating li element
    let li = document.createElement("li");
    li.innerHTML = `${user_name}-${email}-${phone}`;
    
    //creating edit button
    let edit = document.createElement("input");
    edit.setAttribute("type","button");
    edit.setAttribute("value","Edit");

    //delete function
    del.onclick =()=>{
	 //deleting from server
	 	
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


axios.get("https://crudcrud.com/api/511bd323a23f481db5e5a2feeed209e8/test")
.then((res)=>{
	console.log(res,res.data[0].name);
	
	let length = res.data.length;
	for(let i =0;i<length;i++){
		//creating li element
		console.log(length);
	    let li = document.createElement("li");
	    li.innerHTML = `${res.data[i].name}-${res.data[i].email}-${res.data[i].phoneNumber}`;
	    console.log(`${res.data[i].name}-${res.data[i].email}-${res.data[i].phoneNumber}`);
	    
	};
})
.catch( (rej)=>{
	console.log(rej);
});

