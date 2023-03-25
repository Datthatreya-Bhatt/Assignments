let sub = document.getElementById('item3');
sub.onclick = (e) =>{
	e.preventDefault();

	let amt =document.createTextNode(document.getElementById("item").value+"-");
	let disc = document.createTextNode(document.getElementById("item2").value+"-");
	let cate = document.createTextNode(document.getElementById("cate").value);

	let jamt =document.getElementById("item").value;
	let jdisc = document.getElementById("item2").value;
	let jcate =document.getElementById("cate").value;
	let obj = {
	}
	obj.amount = jamt;
	obj.discription = jdisc;
	obj.category = jcate;
	
	let serial = JSON.stringify(obj);
	localStorage.setItem(jdisc,serial);

	let li = document.createElement("li");
	li.id = "li";

	let dlt = document.createElement("button");
	dlt.className ="btn btn-danger btn-sm float-right delete";
	dlt.id = "delete";
	dlt.innerHTML = "Delete Expence";
	dlt.onclick = () =>{

		localStorage.removeItem(jdisc);
		li.parentNode.removeChild(li);


	}

	let edit = document.createElement("button");
	edit.className ="btn btn-sm float-right"
	edit.id = 'edit';
	edit.innerHTML = "Edit Expence";
	edit.onclick = ()=>{
		let json = JSON.parse(localStorage.getItem(jdisc));
		console.log(json);
		document.getElementById("item").value= json.amount;
		document.getElementById("item2").value=json.discription;
		document.getElementById("cate").value=json.category;
		localStorage.removeItem(jdisc);
		li.parentNode.removeChild(li);

	}


	

	li.appendChild(amt);
	li.appendChild(disc);
	li.appendChild(cate);
	li.appendChild(edit);
	li.appendChild(dlt);

	let items = document.getElementById("items");
	items.appendChild(li);

	

	

		
	
	

}

