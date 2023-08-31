let endpoint = '21df3fd21de54b4d8879d4ff33403082';

document.getElementById('button').onclick = click;


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

window.onload = async () =>{
	let res = await axios.get(`https://crudcrud.com/api/${endpoint}/test`);
	let len = res.data.length;

	for(let i =0;i<len;i++){
		let id = res.data[i]._id;

		let row = document.createElement('div');
		row.className = 'row';

		let div1 = div('col-md-3','text','form-control',res.data[i].item);
		let div2 = div('col-md-3','text','form-control',res.data[i].description);
		let div3 = div('col-md-2','text','form-control',res.data[i].quantity);

		let div4 = div('col-md-2','text','form-control',res.data[i].rate);

		let btn = document.createElement('button');
		btn.className = 'btn btn-primary';
		btn.innerHTML = 'BUY';

		btn.onclick = async ()=>{
			let div5 = document.createElement('div');
			div5.className = 'col-md-6';

			let div6 = document.createElement('div');
			div6.className = 'col-md-6';

			let inp = document.createElement('input');
			inp.className = 'form-control';

			let confirm = document.createElement('button');
			confirm.className = 'btn btn-primary';
			confirm.innerHTML = 'Confirm';
			confirm.onclick = async ()=>{
				let dif = res.data[i].quantity - inp.value;
				if(dif>0){
					await axios.put(`https://crudcrud.com/api/${endpoint}/test/${id}`,{
						item:res.data[i].item,
						description:res.data[i].description,
						quantity:dif,
						rate:res.data[i].rate
					})
					location.reload();
				}
				else if (dif === 0){
					await axios.delete(`https://crudcrud.com/api/${endpoint}/test/${id}`);
					row.parentNode.removeChild(row);
				}
				else{
					alert('error');
				}
				div5.parentNode.removeChild(div5);
				div6.parentNode.removeChild(div6);
			}
			div5.appendChild(inp);
			div6.appendChild(confirm);

			row.appendChild(div5);
			row.appendChild(div6);
		}

		let btndiv = document.createElement('div');
		btndiv.className = 'col-md-2';
		btndiv.appendChild(btn);

		row.appendChild(div1);
		row.appendChild(div2);
		row.appendChild(div3);
		row.appendChild(div4);
		row.appendChild(btndiv);

		let container = document.getElementById('container');

		container.appendChild(row);
	}
}

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

		let div1 = div('col-md-3','text','form-control',res.data[last].item);
		let div2 = div('col-md-3','text','form-control',res.data[last].description);
		let div3 = div('col-md-2','text','form-control',res.data[last].quantity);

		let div4 = div('col-md-2','text','form-control',res.data[last].rate);

		let btn = document.createElement('button');
		btn.className = 'btn btn-primary';
		btn.innerHTML = 'BUY';

		btn.onclick = async ()=>{
			let div5 = document.createElement('div');
			div5.className = 'col-md-6';

			let div6 = document.createElement('div');
			div6.className = 'col-md-6';

			let inp = document.createElement('input');
			inp.className = 'form-control';

			let confirm = document.createElement('button');
			confirm.className = 'btn btn-primary';
			confirm.innerHTML = 'Confirm';
			confirm.onclick = async ()=>{
				let dif = res.data[last].quantity - inp.value;
				if(dif>0){
					await axios.put(`https://crudcrud.com/api/${endpoint}/test/${id}`,{
						item:res.data[last].item,
						description:res.data[last].description,
						quantity:dif,
						rate:res.data[last].rate
					})
					location.reload();
				}
				else if (dif === 0){
					await axios.delete(`https://crudcrud.com/api/${endpoint}/test/${id}`);
					row.parentNode.removeChild(row);
				}
				else{
					alert('error');
				}
				div5.parentNode.removeChild(div5);
				div6.parentNode.removeChild(div6);
			}
			div5.appendChild(inp);
			div6.appendChild(confirm);

			row.appendChild(div5);
			row.appendChild(div6);
		}

		let btndiv = document.createElement('div');
		btndiv.className = 'col-md-2';
		btndiv.appendChild(btn);

		row.appendChild(div1);
		row.appendChild(div2);
		row.appendChild(div3);
		row.appendChild(div4);
		row.appendChild(btndiv);

		let container = document.getElementById('container');

		container.appendChild(row);
	

}


//  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const print = async () => {
//   console.log('a');
//   console.log('b');
//   await delay(3000);
//   console.log('c');
//   console.log('d');
//   await delay(0);
//   console.log('e');
// };

// print();