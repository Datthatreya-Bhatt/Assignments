function print(event){
	event.preventDefault;
	let user_name = document.getElementById("uname").value; 
	let email = document.getElementById("uemail").value;
	let pas = document.getElementById("uPassword").value;
	let dat = document.getElementById("date").value;
	
	localStorage.setItem('Name',`${user_name}`);
	localStorage.setItem('Email',`${email}`);
	localStorage.setItem('Password',`${pas}`);
	localStorage.setItem('Date',`${dat}`);


}