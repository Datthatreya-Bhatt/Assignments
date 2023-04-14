let endpoint = 'c51ee9eafb47400f9487874576b82f3b';


function div(className,type,inputClass,value){
	let div = document.createElement('div');
	div.className = className;

	let input = document.createElement('input');
	input.type = type;
	input.value = value;
	input.className = inputClass; 

	div.appendChild(input);

	return div;
}
try{


window.onload = async () =>{
	
	let res = await axios.get(`https://crudcrud.com/api/${endpoint}/test`);
	let len = res.data.length;

	for(let i =0;i<len;i++){
		let id = res.data[i]._id;

		let row = document.createElement('div');
		row.className = 'row';

		let div1 = div('col-md-2','text','form-control',res.data[i].item);
		let div2 = div('col-md-2','text','form-control',res.data[i].description);
		let div3 = div('col-md-2','text','form-control',res.data[i].quantity);
		let div4 = div('col-md-2','text','form-control',res.data[i].rate);

		let btn = document.createElement('button');
		btn.className = 'btn btn-primary';
		btn.innerHTML = 'BUY 1';
	
		btn.addEventListener('click',async ()=>{
				let qaunt = res.data[i].quantity;
				let dif = 1;
				if(qaunt>=dif){
					await axios.put(`https://crudcrud.com/api/${endpoint}/test/${id}`,{
						item:res.data[i].item,
						description:res.data[i].description,
						quantity:res.data[i].quantity-1,
						rate:res.data[i].rate
					})
					location.reload();
				}
				else{
					alert('error: quantity not available');
				}
			
		})

		let btn2 = document.createElement('button');
		btn2.className = 'btn btn-primary';
		btn2.innerHTML = 'BUY 2';

		btn2.addEventListener('click',async ()=>{
				let qaunt = res.data[i].quantity;
				let dif = 2;
				if(qaunt>=dif){
					await axios.put(`https://crudcrud.com/api/${endpoint}/test/${id}`,{
						item:res.data[i].item,
						description:res.data[i].description,
						quantity:res.data[i].quantity-2,
						rate:res.data[i].rate
					})
					location.reload();
				}
				else{
					alert('error: quantity not available');
				}
		})
		
		let btn3 = document.createElement('button');
		btn3.className = 'btn btn-primary';
		btn3.innerHTML = 'BUY 3';

		btn3.addEventListener('click',async ()=>{
			let qaunt = res.data[i].quantity;
			let dif = 3;
			if(qaunt>=dif){
				await axios.put(`https://crudcrud.com/api/${endpoint}/test/${id}`,{
					item:res.data[i].item,
					description:res.data[i].description,
					quantity:res.data[i].quantity-3,
					rate:res.data[i].rate
				})
				location.reload();
			}
			else{
				alert('error: quantity not available');
			}
		})

		let btndiv2 = document.createElement('div');
		btndiv2.className = 'col-md-1';
		btndiv2.appendChild(btn3);

		let btndiv1 = document.createElement('div');
		btndiv1.className = 'col-md-1';
		btndiv1.appendChild(btn2);



		let btndiv = document.createElement('div');
		btndiv.className = 'col-md-1';
		btndiv.appendChild(btn);

		row.appendChild(div1);
		row.appendChild(div2);
		row.appendChild(div3);
		row.appendChild(div4);
		row.appendChild(btndiv);
		row.appendChild(btndiv1);
		row.appendChild(btndiv2);

		let container = document.getElementById('container');

		container.appendChild(row);
	}
}
}
catch(err){
	console.log(err);
}
try{

document.getElementById('button').addEventListener('click',click);


async function click(){
	let item = document.getElementById('item').value;
	let description = document.getElementById('description').value;
	let quantity = document.getElementById('quantity').value;
	let rate = document.getElementById('rate').value;

	await axios.post(`https://crudcrud.com/api/${endpoint}/test`,{
		item:item,
		description:description,
		quantity:quantity,
		rate:rate
	})

	let res = await axios.get(`https://crudcrud.com/api/${endpoint}/test`);

	let last = res.data.length-1;
	let id = res.data[last]._id;

	let row = document.createElement('div');
		row.className = 'row';

		let div1 = div('col-md-2','text','form-control',res.data[last].item);
		let div2 = div('col-md-2','text','form-control',res.data[last].description);
		let div3 = div('col-md-2','text','form-control',res.data[last].quantity);
		let div4 = div('col-md-2','text','form-control',res.data[last].rate);

		let btn = document.createElement('button');
		btn.className = 'btn btn-primary';
		btn.innerHTML = 'BUY 1';

		btn.addEventListener('click',async ()=>{
				let qaunt = res.data[last].quantity;
				let dif = 1;
				if(qaunt>=dif){
					await axios.put(`https://crudcrud.com/api/${endpoint}/test/${id}`,{
						item:res.data[last].item,
						description:res.data[last].description,
						quantity:res.data[last].quantity-1,
						rate:res.data[last].rate
					})
					location.reload();
				}
				else{
					alert('error: quantity not available');
				}
			
		})

		let btn2 = document.createElement('button');
		btn2.className = 'btn btn-primary';
		btn2.innerHTML = 'BUY 2';

		btn2.addEventListener('click',async ()=>{
				let qaunt = res.data[last].quantity;
				let dif = 2;
				if(qaunt>=dif){
					await axios.put(`https://crudcrud.com/api/${endpoint}/test/${id}`,{
						item:res.data[last].item,
						description:res.data[last].description,
						quantity:res.data[last].quantity-2,
						rate:res.data[last].rate
					})
					location.reload();
				}
				else{
					alert('error: quantity not available');
				}
		})

		let btn3 = document.createElement('button');
		btn3.className = 'btn btn-primary';
		btn3.innerHTML = 'BUY 3';

		btn3.addEventListener('click',async ()=>{
				let qaunt = res.data[last].quantity;
				let dif = 3;
				if(qaunt>=dif){
					await axios.put(`https://crudcrud.com/api/${endpoint}/test/${id}`,{
						item:res.data[last].item,
						description:res.data[last].description,
						quantity:res.data[last].quantity-3,
						rate:res.data[last].rate
					})
					location.reload();
				}
				else{
					alert('error: quantity not available');
				}
			
		})
		let btndiv2 = document.createElement('div');
		btndiv2.className = 'col-md-1';
		btndiv2.appendChild(btn3);

		let btndiv1 = document.createElement('div');
		btndiv1.className = 'col-md-1';
		btndiv1.appendChild(btn2);



		let btndiv = document.createElement('div');
		btndiv.className = 'col-md-1';
		btndiv.appendChild(btn);

		row.appendChild(div1);
		row.appendChild(div2);
		row.appendChild(div3);
		row.appendChild(div4);
		row.appendChild(btndiv);
		row.appendChild(btndiv1);
		row.appendChild(btndiv2);

		let container = document.getElementById('container');

		container.appendChild(row);
	

}
}
catch(err){
	console.log(err);
}