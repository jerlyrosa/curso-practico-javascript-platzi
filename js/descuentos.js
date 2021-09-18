const DiscountFunction = (price, discount) =>{

    try {
        if(price == 0){
            throw new Error("No introdujo el precio a descontar");
        }else if( discount == 0){
            throw new Error("Introduzca el valor a descontar");
        }
        return   price * (100 - discount ) /100
    } catch (error) {
        return  alert (error)
        
    }
}


const onClickButtonPriceDiscount = () =>{
    const price = document.getElementById('InputPrice').value;
    const discount = document.getElementById('InputDiscount').value;

  const result =  DiscountFunction(price, discount);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = `El precio con descuento son: $${result}`;

}


