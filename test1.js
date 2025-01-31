function esPalindromo(string) {
  //funcion para ver si es palindromo y que su parametro es texto
  string = string.toLowerCase(); //hacer minusculas
  let newString = string; //almacenar todos los caracteres en uno nuevo

  for (let i = 0; i < string.length; i++) {
    //ciclo mientras haya caracteres en el string se vaya recorriendo
    if (string[i] !== " ") {
      // si el caracter del string no es un espacio blanco
      newString += string[i]; // se guarda el caracter en el nuevo string
    }
  }

  let leftSide = 0; //lado izq del string comienza en 0
  let rightSide = string.length - 1; //lado derrecho del string comienza en el total de longitud del string menos 1, o sea el ultimo

  while (leftSide < rightSide) {
    //ciclo mientras que el lado izquierdo sea menor que el derechow
    if (newString[leftSide] !== newString[rightSide]) {
      // y si el caracter del nuevo string no es igual que el del lado derecho
      return false; // te regresa falso
    }
    leftSide++; //si si es igual, se recorre uno del izquierdo
    rightSide--; //y retrocede uno del derecho
  }
  return true; //y si se completa, regresa true
}

console.log(esPalindromo("somos"));
console.log(esPalindromo("an na"));
console.log(esPalindromo("rodador"));
console.log(esPalindromo("never odd or even"));
