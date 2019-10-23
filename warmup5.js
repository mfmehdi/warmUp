// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.



function createOne( name, gender ,nationality, age, phone, email ){
	return {name:name,
		    gender:gender,
			nationality:nationality,
			age,age,
			phone:phone,
			email:email
			}
	}
var arrayClass=[];

function displayFriend(mate){
	return "Name:"+mate.name+"---"+"Gender:"+mate.gender+"---"+"Age:"+mate.age+"---"+"Phone:"+mate.Phone+"---"+"Email:"+mate.email;
}

function addFriend(mate){
	arrayClass.push(mate);
}


function nbOfMale(){
	var j=0;
	for(let i in array){
		if(array[i].gender===="male"){
			j++;
		}
	}
	return j;
}

function searchMates(query, array){

	return array.map((val)=>{
		if(val.name===query)
			return val;
	});
}