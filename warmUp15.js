// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr1(str){
	var strRev=""
	var word=""
	for (var i = 0; i < str.length; i++) {
		
		if((str[i]===" " ) || (i===str.length-1)){
			if(i===str.length-1){
				 word=word+str[i];
				}
			strRev= word+" "+strRev
			word="";

		}
		else{
		    word=word+str[i];
		}
	}
	return strRev;
}