const salaryCol = colombia.map((item)=>{
   return  item.salary;
});

const getAverage = (values) =>{
    const sumResult  = values.reduce((acc = 0, cur)=> acc + cur);
    return sumResult / values.length;

}  

const  medianSalary =(values)=>{
    const sortList = values.sort((a,b)=> a -b);
    const isEvent =  values.length % 2  === 0;
    const middleValue = Math.floor(sortList.length / 2);
    const middleFirts = middleValue;
    const middleSecond =  middleFirts - 1;
    const valueResults = [sortList[middleValue], sortList[middleSecond]];

return  isEvent ? ( getAverage( valueResults )):( sortList[middleValue] )

}

console.log(
    medianSalary(salaryCol)
)