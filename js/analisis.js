const salaryCol = colombia.map((item)=>{
   return  item.salary;
}).sort((a,b)=> a -b);

//FUNCION MEDIANA SALARIAL

const getAverage = (values) =>{
    const sumResult  = values.reduce((acc = 0, cur)=> acc + cur);
    return sumResult / values.length;
}  

const  medianSalary =(values)=>{
    const sortList = values;
    const isEvent =  values.length % 2  === 0;
    const middleValue = Math.floor(sortList.length / 2);
    const middleFirts = middleValue;
    const middleSecond =  middleFirts - 1;
    const valueResults = [sortList[middleValue], sortList[middleSecond]];

return  isEvent ? ( getAverage( valueResults )):( sortList[middleValue] );

}

const medianaGeneralSalario = medianSalary(salaryCol);

const spliceStart = (salaryCol.length * 80) / 100;
const spliceCount = salaryCol.length - spliceStart;


const salaryTop10 = salaryCol.splice( spliceStart, spliceCount);
  
const medianaTop10Col = medianSalary(salaryTop10)


console.log(
    medianaGeneralSalario,   
    medianaTop10Col
)