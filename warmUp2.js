// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.


function greatest(a,b){
		if(a===0) return b	
			if(b===0) return a
				if(a===b) return b
				if(a<b) {
			    var k=a
			    a=b
					b=k
					
				}	 
return  greatest(a-b ,b)
}

function sum (a,b){
   if(b===0) return a;
	return sum(a+1,b-1)
}
