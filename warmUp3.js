// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

<<<<<<< HEAD
// 3-Change all the numbers in the array to be multiplied by two for even indexes.


var arrayFemales=[]
var arrayMales=[]
var arrayInstructors=[]

function middle(array){

	return array[Math.floor((array.length-1)/2)]
}


function multipliedByTwo(array){

return  array.map((val)=>{
 	if(typeof(val)==="number"{
 	 return val *2;
 	}
 		return val
 })
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
