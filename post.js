
const post = [];
function lastActivityTime(time){
	return lastSeen = time;
}
function updateLastUserActivityTime(){
	return new Promise ( (resolve, reject)=>{
		setTimeout( ()=>{
			let date = new Date().getTime();
			let seen = lastActivityTime(date);
			console.log(seen);
			resolve();
		},1000)
	})
}

async function test(){
	function createPost(p){
		setTimeout(()=>{
		post.push(p);
		updateLastUserActivityTime();
		console.log(p);
		
	},1000)

	}
	function deletePost(){
	
		setTimeout(()=>{
			post.pop();
			
		},1000);
	
	}

	await createPost('123');
	await deletePost();

}


function printPost(){
	for(let i =0;i<post.length;i++ ){
		console.log(post[i]);
	}
}


/*
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise ( (resolve,reject)=>{
	setTimeout( ()=>{
		resolve('ticket');
	},3000)
});




const getPopcorn= promiseWifeBringingTicks.then( (t)=>{
	console.log('wife: i have the ticket ')
	console.log('husband: we should go in');
	console.log('wife: no i am hungry');

	return new Promise( (resolve,reject)=> resolve(`${t} popcorn`));
});

const getbutter = getPopcorn.then( (t)=>{
	console.log('husband: i got some popcorn');
	console.log('husband: we should go in');
	console.log('wife: I need butter on my popcorn');
	return new Promise ( (resolve,reject)=>resolve(`${t} butter`));
});

getbutter.then( (t)=>console.log(t));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
//-------------------------------------------------------------//

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() =>{

	const promiseWifeBringingTicks = new Promise( (resolve,reject)=>{
		setTimeout( ()=>resolve('ticket'),3000);
	});

const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));
const addButter = new Promise((resolve,reject) => resolve('butter'));
const getColdDrinks = new Promise((resolve,reject)=> resolve('cold drink'));

let ticket = await promiseWifeBringingTicks;
console.log(`wife: i have the ticket ${ticket}`)
console.log('husband: we should go in');
console.log('wife: no i am hungry');

let popcorn = await getPopcorn;

console.log(`husband: i got some popcorn${popcorn}`);
console.log('husband: we should go in');
console.log('wife: I need butter on my popcorn');

let butter = await addButter;

console.log(`husband: i got some popcorn${popcorn} on popcorn`);
console.log(`husband:anything else darling`);
console.log('wife: i need cold drink');

let coldDrink = await getColdDrinks;
console.log('husband:I got cold drink too');
console.log(`wife: lets go we are getting late`);
console.log(`husband: thank you for reminder *grins`);





return ticket; 
}	

preMovie().then( (m) =>console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');










*/

