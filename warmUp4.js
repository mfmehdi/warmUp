// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welco','hy'] == > ["hi","hy"]

//-1-
function reverseStr(str){
var i=0;
var newStr="";
	while(i<str.length){
		newStr+=str[str.length-1-i]+(i+1);
		i++;	
	}
	return newStr;
}

//-2-
function sameLength(array){
	var obj={};
	var i=0;
		while(array.length>0)
		{
			first=array[i];
			var j=1;
			while(j<array.length)
		{	if(first.length===array[j].length){
              		if(obj[first.length]!==undefined){
						obj[first.length].push(array[j])
						
						console.log("j "+array[j])
					
						array.splice(j,1);
						j=j-1;
						} else{
							obj[first.length]=[first,array[j]];
							
							array.splice(j,1);
							
						console.log("j== "+array[j])
							j=j-1;

						      }
		    }
		    
		    j=j+1;
	    }
		array.splice(0,1);
		

}
return obj;
}