function stringChop(str, size) {
	if(str.length==0){
		return [];
	}
  let ans=[];
	let idx=0;
	while(idx<str.length){
		ans.push(str.slice(idx,idx+size));
		idx+=size;
	}
	return ans;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
