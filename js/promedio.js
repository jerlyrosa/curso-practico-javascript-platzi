const list  = [ 100,200,300,500];


const MediaAritmetica = (values) =>{
    const sumResult  = values.reduce((acc = 0, cur)=>{
       return  acc + cur;
    })
    return sumResult / values.length;

}  

const results = MediaAritmetica(list);

console.log(results)