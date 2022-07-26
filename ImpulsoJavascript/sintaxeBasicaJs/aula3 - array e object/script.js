// Array

let array = ['string', true, 23, ['array2'], false]
console.log(array);

// forEach

array.forEach(function(item, indice){console.log(item,indice)});

array.push(45); // adiciona item no fim do array
console.log('push',array);

array.pop(); // remove item do fim do array
console.log('pop',array);

array.unshift('inicio'); // adiciona item no inicio do array
console.log('unshift',array);

array.shift(); // remove item do fim do array
console.log('shift',array);

console.log(array.indexOf(23))


// objetos

let object = {string: 'string', numero: 23, bolean: true, array: ['array'], objectInterno:{objetoInterno: 'objeto interno'}}
console.log(object);
console.log(object.objectInterno.objetoInterno)

var {bolean} = object;
console.log(bolean)
