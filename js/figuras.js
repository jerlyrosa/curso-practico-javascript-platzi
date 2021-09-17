// //PI
const PI = Math.PI;

//Codigo del cuadrado

// ARROW FUNCTION PERIMETRO CUADRADO
const perimetroCuadrado = (lado) => {
    try {
        if(lado  === ""){
            throw new Error(`Debe introducir un valor para poder calcular el perimetro`) //Personalizando error 
        }
    return  lado * 4;
    } 
    catch (error) {
        return error  
        
    }
} 

//ARROW FUNCTION AREA CUADRADO
const areaCuadrado = (lado) => {
    try {
        if(lado  === ""){
            throw new Error(`Debe introducir un valor para poder calcular el area`);
        }
    return  lado * lado;
    } 
    catch (error) {
        return error  
        
    }
}

//Codigo del Triangualo

//PERIMETRO TRIANGULO
const perimetroTriangulo  = (lado1,lado2,base) =>  {
    try {
        if( lado1  === "" ||  lado1  ==="" ||  base  ==="" ){
            throw new Error(`Introduzca todos lo valores correcto para calcular el perimetro, recuerde que son: lado A, Lado B y altura`);
        }
        return Number(lado1)+Number(lado2)+Number(base);
    } catch (error) {
        return error  
      }
}

//ARROW FUNCTIONAREA TRIANGULO
const areaTrinagulo = (base, altura) =>{
        try {
            if( base  === "" ||  altura  ===""  ){
                throw new Error(`Introduzca todos lo valores correcto para calcular el area, recuerde que son: base y altura`);
            }
          return  (base * altura) / 2;
        } catch (error) {
          return error  
        }
} 

//Desafio extra
const alturaTrianguloIsósceles = (lado1, lado2, base) => {
    if(lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt(lado1**2 - base**2/ 4);
        return altura
    }
    else{
        alert('no lo se')
    }
}


//Codigo del circulo

//ARROW FUNCTION DIAMETRO CIRCULO
const diametroCirculo = (radio) => {

    try {
        if(radio  === ""){
            throw new Error(`Debe introducir un valor para poder calcular el diametro`);
        }
    return radio * 2;
    } 
    catch (error) {
        return error  
        
    }

}


//ARROW FUNCTION PERIMETRO CIRCULO
const perimetroCirculo = (radio) => {
    try {
        if(radio  === ""){
            throw new Error(`Debe introducir un valor para poder calcular el perimetro`);
        }
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    } 
    catch (error) {
        return error  
    }
}

//ARROW FUNCTION  AREA CIRCULO
const areaCirculo = (radio) =>{

    try {
        if(radio  === ""){
            throw new Error(`Debe introducir un valor para poder calcular el area`); 
        }
        const diametro = diametroCirculo(radio);
        return (radio * radio ) * PI;
    } 
    catch (error) {
        return error  
    }

}



//Funciones HTML

//Cuadrado 
const calcularPerimetroCuadrado =()=> {
    const  value = document.getElementById("InputCuadrado").value;
     const perimetro = perimetroCuadrado(value);
     alert(perimetro);

}

const calcularAreaCuadrado =()=>{
    const  value = document.getElementById("InputCuadrado").value;
    const area = areaCuadrado(value);
    alert(area);
}


//Triangulo

const calcularPerimetroTriangulo =()=> {
    const  ladoA = document.getElementById("InputTrianguloLadoA").value;
    const  ladoB = document.getElementById("InputTrianguloLadoB").value;
    const  base = document.getElementById("InputTrianguloBase").value;

     const perimetro = perimetroTriangulo(ladoA, ladoB, base);

     alert(perimetro);
    }


const calcularAreaTriangulo =()=>{
    const  base = document.getElementById("InputTrianguloBase").value;
    const  altura = document.getElementById("InputTrianguloAltura").value;

    const area = areaTrinagulo(base, altura);

    alert(area);
}


//Circulo

const calcularDiametroCirculo =()=> {
    const  value = document.getElementById("InputCirculo").value;

     const perimetro = diametroCirculo(value);

     alert(perimetro);

}

const calcularPerimetroCirculo =()=> {
    const  value = document.getElementById("InputCirculo").value;

     const perimetro = perimetroCirculo(value);

     alert(perimetro);

}

const calcularAreaCirculo =()=>{
    const  value = document.getElementById("InputCirculo").value;

    const area = areaCirculo(value);
    
    alert(area);
}
