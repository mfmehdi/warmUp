// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function balloonInstance(str){
	var obj={b:0,
			  a:0,
			  l:0,
			  o:0,
			  n:0}
	var array=[];
	var i=0
	while(i<str.length){

		if(obj[str[i]]!=undefined){
		obj[str[i]] = obj[str[i]]+1;
		}

		i++;
	}
        array=[obj.a/1, obj.b/1, obj.l/2, obj.o/2, obj.n/1]
		return Math.min(...array)
}