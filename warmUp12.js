/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '156814121110137';

    mysteryRange(inputString,10) // [6,15]
        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */


 function mysteryRange(str,num){

 	var start=str.length-num;
 	var end=str.length-1;
console.log(start) ;console.log(end)
    var array=[];
    for (var i = 0; i <str.length; i++) {
if(array.length<num)
    	{if(str.substr(i,1)>=start){
   			array.push(str.substr(i,1))
   			// console.log("str.substr(i,1)----i="+i+"==> "+str.substr(i,1))
   		}
     else{
   		if(str.substr(i,2) <= end &&  str.substr(i,2) >= start)
       {array.push(str.substr(i,2))
       	i=i+1
       	// console.log("str.substr(i,2)----i="+i+"==> "+str.substr(i,2))
       }
   }
    }}
   // console.log(array)

    return [Math.min(...array),Math.max(...array)]
 }

