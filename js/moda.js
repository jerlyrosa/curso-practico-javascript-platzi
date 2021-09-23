const list = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];



const mode = ( arr ) =>{
const count ={}
    arr.map((item,index)=>{
        const num = arr[index];
        count[num] = count[num] ? count[num] + 1: 1;
        
    })
  const moda =  Object.entries(count).sort((a,b)=> a[1]-b[1]);

  return moda[moda.length-1]

}

const results = mode(list);

console.log(results)