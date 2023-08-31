window.onload = async()=>{
	let res = await axios.get('http://localhost:3000');
	let length = res.data.length;
	console.log(length);
	for(let i = 0;i<length;i++){
		let id = res.data[i].id;
		let item = res.data[i].item;
		let description = res.data[i].description;
		let quantity = res.data[i].quantity;
		let rate = res.data[i].rate;

		let row = document.createElement('div');
		row.className = 'row';
		console.log(item,description,quantity,rate);

		let li1 = document.createElement('input');
		li1.className = 'form-control';
		li1.value = item;
		let li2 = document.createElement('input');
		li2.value = description;
		li2.className = 'form-control';
		let li3 = document.createElement('input');
		li3.value = quantity;
		li3.className = 'form-control';
		let li4 = document.createElement('input');
		li4.value = rate;
		li4.className = 'form-control';

		let div1 = document.createElement('div');
		div1.className = 'col-md-2';
		let div2 = document.createElement('div');
		div2.className = 'col-md-2';
		let div3 = document.createElement('div');
		div3.className = 'col-md-2';
		let div4 = document.createElement('div'); 
		div4.className = 'col-md-2';

		let div5 = document.createElement('div');
		div5.className = 'col-md-1';
		let div6 = document.createElement('div');
		div6.className = 'col-md-1';
		let div7 = document.createElement('div');
		div7.className = 'col-md-1';

		let btn1 = document.createElement('button');
		btn1.className = 'btn btn-primary';
		btn1.innerText = 'BUY 1';
		let btn2 = document.createElement('button');
		btn2.className = 'btn btn-primary';
		btn2.innerText = 'BUY 2';
		let btn3 = document.createElement('button');
		btn3.className = 'btn btn-primary';
		btn3.innerText = 'BUY 3';

		btn1.addEventListener('click',async()=>{
			quantity -= 1;
			await axios.put(`http://localhost:3000/buy/${id}/${quantity}`,{
				item: item,
				description:description,
				quantity:quantity,
				rate:rate
			});
			location.reload();
		});
		
		btn2.addEventListener('click',async()=>{
			quantity -= 2;
			await axios.put(`http://localhost:3000/buy/${id}/${quantity}`,{
				item: item,
				description:description,
				quantity:quantity,
				rate:rate
			});
			location.reload();
		});
		
		btn3.addEventListener('click',async()=>{
			quantity -= 3;
			await axios.put(`http://localhost:3000/buy/${id}/${quantity}`,{
				item: item,
				description:description,
				quantity:quantity,
				rate:rate
			});
			location.reload();
		});
		
		div1.appendChild(li1);
		div2.appendChild(li2);
		div3.appendChild(li3);
		div4.appendChild(li4);
		div5.appendChild(btn1);
		div6.appendChild(btn2);
		div7.appendChild(btn3);
		
		row.appendChild(div1);
		row.appendChild(div2);
		row.appendChild(div3);
		row.appendChild(div4);
		row.appendChild(div5);
		row.appendChild(div6);
		row.appendChild(div7);

		document.getElementById('container').appendChild(row);


	}
};

document.getElementById('button').addEventListener('click',async()=>{
	let item = document.getElementById('item').value;
	let description = document.getElementById('description').value;
	let quantity = document.getElementById('quantity').value;
	let rate = document.getElementById('rate').value;

	await axios.post('http://localhost:3000/',{
		item: item,
		description: description,
		quantity: quantity,
		rate: rate
	})

	location.reload();


});