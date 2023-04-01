let base = '602d05af5b4b427fadced46549e517ed';


window.onload = ()=>{
	axios.get(`https://crudcrud.com/api/${base}/test`)
	.then((res)=>{
		
		
		let length = res.data.length;
		for(let i =0;i<length;i++){
			
			let li = list(`${res.data[i].name}-${res.data[i].email}-${res.data[i].phoneNumber}`);
			
		    li.appendChild(delbtn(()=>console.log('del clicked')));
		    li.appendChild(editbtn( ()=>console.log('edit')));
		    document.getElementById("listOfItems").appendChild(li);
		    
		};
	})
	.catch( (rej)=>{
		console.log(rej);
	});
}

//delete button function
function delbtn(click){
	//creating delete button
   	let del = document.createElement("input");
   	del.setAttribute("type","button");
   	del.setAttribute("value","Delete");
   	del.className = "btn btn-danger";
   
   	//delete function
    del.onclick =()=>{
	 //deleting from server
	 	click();
	 }

	 return del;
}
//edit button function
function editbtn(click){
	 //creating edit button
    let edit = document.createElement("input");
    edit.setAttribute("type","button");
    edit.setAttribute("value","Edit");
    edit.className = "btn btn-success";

	//edit function
	edit.onclick = () =>{

	 	click();
	 }
	 return edit;
}

//list items functiom
function list(item){
	let li = document.createElement('li');
	li.innerHTML = item;
	return li;
}


function print(event){
	event.preventDefault();
	let user_name = document.getElementById("username").value; 
	let email = document.getElementById("useremail").value;
	let phone = document.getElementById("phone").value;

	//Posting data to crudcrud
	axios.post(`https://crudcrud.com/api/${base}/test`,{
		name : `${user_name}`,
		email : `${email}`,
		phoneNumber : `${phone}`,
	})
	.then( (res)=>{console.log(res)})
	.catch( (rej)=>{console.log(rej)});
   	
	let li = list(`${user_name}-${email}-${phone}`);
    li.appendChild(delbtn(()=>console.log('del clicked')));
    li.appendChild(editbtn( ()=>console.log('edit')));
    document.getElementById("listOfItems").appendChild(li);




   

}


