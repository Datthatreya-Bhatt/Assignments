function print(event){
	event.preventDefault;
	let user_name = document.getElementById("username").value; 
	let email = document.getElementById("useremail").value;
	let phone = document.getElementById("phone").value;
	
	let myobj = {
		name : user_name,
		email : email,
		phoneNumber : phone,
	}
	let serialise = JSON.stringify(myobj);
	localStorage.setItem(`${email}`,serialise);

}