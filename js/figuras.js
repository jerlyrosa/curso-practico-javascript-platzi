//Codigo del cuadrado

console.group("Grupo cuadrado");

const ladoCuadrado = 10;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

console.log(`El perimtro  del cuadrado miden: ${perimetroCuadrado} cm`);

console.log(`El area  del cuadrado miden: ${areaCuadrado} cm^2`);

console.groupEnd();

//Codigo del Triangualo

console.group("Grupo Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 5;

const alturaTriangulo = 5.5;

const perimetroTriangulo  = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

const areaTrinagulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`Los lados del trinagulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm,  ${baseTriangulo} cm`);

console.log(`La altura del trinagulo es de: ${alturaTriangulo}`)

console.log(`El perimtro  del triangulo miden: ${perimetroTriangulo} cm`);

console.log(`El area  del triangulo es ${areaTrinagulo} cm^2`);


console.groupEnd();

//Codigo del circulo

console.group("Grupo Circulo");


//RADIO
const radioCirculo = 4;

//DIAMETRO
const diametroCirculo = radioCirculo * 2;

//PI
const PI = Math.PI;

//CIRCUNFERENCIA
const perimetroCirculo = diametroCirculo  * PI

//AREA
const areaCirculo = (radioCirculo * radioCirculo ) * PI;


console.log(`El radio del circulo es de: ${radioCirculo} cm`);

console.log(`El diametro del circulo es de: ${diametroCirculo} cm`);

console.log(`El perimetro del circulo es de: ${perimetroCirculo} cm`);

console.log(`El area del circulo es de: ${areaCirculo} cm^2`);


console.groupEnd();

