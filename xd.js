const values = [2,5,6,3,4,1,2];

let result = values.reduce((a,b,index,vector)=>{
	console.log(`-------------------${index}---------------`)
	console.log(`a  value: ${a}`);
	console.log(`b  value: ${b}`);
	console.log(`vector: ${vector}`)
	console.log(`------------------------------------------`)
	return a+b
},2)

console.log('resultado: ', result);

const findResult = values.filter(v=>{return v === 2})
console.log('find Result: ', findResult);

const obj = {
	a: 'valor a',
	b: 22,
	c: [2,4,'5', 'ocho'],
	d: {name: 'dariel', email: 'xdariel@nauta.cu'}	
}



const keys = Object.keys(obj).map(key => obj[key]);
console.debug('Objects keys: ', keys)