//I will write a function that says hi
// This function will take one argument,
//called name, which is a sting
function sayHi(name){

  //console.log('Hi,' + name);
}

// I will write some variables, which will be
//strings of people's names.
var myName='Sadia';
var friendName='Saba';
// Here I call the function sayHi.
sayHi(myName);
sayHi(friendName);

//I will write function that will greet a person
//The person will be passed to the function as an object
//The function will parse that object and greet the person
function greetPerson(person){
  //console.log('Hi,'+person.firstName+'. You are '+person.age+'years old.');

}
//I will make an object that describes me
var myObject={
  firstName: 'Sadia',
  lastName: 'Akhtar',
  age: 22
}
//I will make another object that describes my friend
var friendObject = {
    firstName: 'Medha',
    lastName: 'Kashyap',
    age: 21
}
//I will call the greetPerson function, passing object at its argument
greetPerson(myObject);
greetPerson(friendObject);

//I will now make an array of objects, each object will describe a person
var personList = [
{
firstName: 'Sadia',
lastName: 'Akhtar',
age: 22
},
{
    firstName: 'Medha',
    lastName: 'Kashyap',
    age: 21
  },
  {
    firstName: 'Sameeksha',
    lastName: 'Kumar',
    age: 40
  },
  {
    firstName: 'Halima',
    secondName: 'Khan',
    age: 24
  },
];

//I will write a function that will greet people
//It takes as its argument an array, and each item
//in the array is an object that describes a person.
function greetPeople(list) {

  // I will loop through the items in my array with a for loop
  for (var i = 0;i<list.length;i++) {

    //This variable is the current item in the array that
    //the for loop is iterating through
    var currentPerson = list[i];
    // Great each person in turn.
    //console.log('Hi, '+currentPerson.firstName+'. You are '+currentPerson.age+'years old.');
  }}


// Call the greetPeople function and pass personList to it
greetPeople(personList);

// I will make a function that sorts people by age
// This fucntion takes an argument, called list,
//which is an array of people, where each person is
//an object.
  function sortPeople(list){

   // Craete two arrays, one for older people, and one for younger people
   //These will be blank arrays, that we will populate with our forEach loop
   var older = [];
   var younger = [];

   // loop through array
   list.forEach(function(d,i){

    if (d.age <30){
    younger.push(d);
    } else {
      older.push(d);
    }
})
     // This function wil return our arrays as an object
     var buckets= {
       olderList: older,
       youngerList: younger,
     };

     return buckets;


}


// call sort people and pass the personList to it
sortPeople(personList);

 //Make another array with more people
 var morePeople = [
   {
     firstName: 'Wamika',
     lastName:  'Gupta',
     age: 10
   },
    {
     firstName: 'Shikha',
     lastName: 'Singh',
     age: 33
   },
   {
     firstName: 'Tina',
     lastName:   'Handa',
     age: 78
   },
 ];
 //run the function again with the new array
 sortPeople(morePeople);

 //create two variables, where sortPeople returns sorted lists of people
 var morePeopleSorted = sortPeople(morePeople);
 var personListSorted = sortPeople(personList);

//isolate the youngerlist from the sorted person list
var personListYounger = personListSorted.youngerList;

//console log the new list and the original list to compare
console.log(personListYounger);
console.log(personList);
