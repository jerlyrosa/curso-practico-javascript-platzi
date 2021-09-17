// //PI
const PI = Math.PI;

//Codigo del cuadrado

// ARROW FUNCTION PERIMETRO CUADRADO
const perimetroCuadrado = (lado) => lado * 4;

//ARROW FUNCTION AREA CUADRADO
const areaCuadrado = (lado) => lado * lado;



//Codigo del Triangualo

//PERIMETRO TRIANGULO
const perimetroTriangulo  = (lado1,lado2,base) =>  lado1 + lado2 + base;

//ARROW FUNCTIONAREA TRIANGULO
const areaTrinagulo = (base, altura) => (base * altura) / 2;



//Codigo del circulo


//ARROW FUNCTION DIAMETRO CIRCULO
const diametroCirculo = (radio) => radio * 2;


//ARROW FUNCTION PERIMETRO CIRCULO
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}


//ARROW FUNCTION PERIMETRO CIRCULO
const areaCirculo = (radio) =>(radio * radio ) * PI




