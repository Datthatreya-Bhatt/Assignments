
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
function createPost(p){
	return new Promise( (resolve,reject)=>{
		setTimeout(()=>{
		post.push(p);
		updateLastUserActivityTime().then(resolve);
		
	},1000)
	})
}


function printPost(){
	for(let i =0;i<post.length;i++ ){
		console.log(post[i]);
	}
}
function deletePost(){
	return new Promise( (resolve,reject)=>{
		setTimeout(()=>{
			post.pop();
			resolve();
		},1000);
	})
}

Promise.all([createPost("1"),createPost("2")]).then(deletePost().then(printPost));