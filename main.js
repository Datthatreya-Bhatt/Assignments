function print(event){
	event.preventDefault;
	let user_name = document.getElementById("uname").value; 
	let email = document.getElementById("uemail").value;
	let pas = document.getElementById("uPassword").value;
	let dat = document.getElementById("date").value;
	
	let myobj = {
		name : user_name,
		email : email,
		password : pas,
		date : dat
	}
	let serialise = JSON.stringify(myobj);
	localStorage.setItem("obj",serialise);

}