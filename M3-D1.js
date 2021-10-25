function ExerciseHeader(ExName){
    console.log("------- Exercise:",ExName,"-------")
}

/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
ExerciseHeader(1);
function returnSum(input1,input2){
    if(input1==input2){
        console.log((input1+input2)*3)
    }
    else{
        console.log(input1+input2)
    }
}
returnSum(2,1);
returnSum(2,2);

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
ExerciseHeader(2);
function Identifyfifty(input1,input2){
    let sumTwoInputs=input1+input2;
    if(input1==50||input2==50||sumTwoInputs==50){
        console.log(true);
    }
    else{
        console.log(false)
    }
}
Identifyfifty(50,1);

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
ExerciseHeader(3)
function filterstring(InputPosition,Inputstring){
// console.log(InputString.substr(InputPosition,InputString.length))
//console.log(Inputstring.substring(0, InputPosition - 1) + Inputstring.substring(InputPosition, Inputstring.length))

    return Inputstring.substring(0, InputPosition - 1) + Inputstring.substring(InputPosition, Inputstring.length)

}

console.log(filterstring(4,'Str*iveSchool')) //removes * from striveSchool

/* 4. Create a function to find and return the largest of three given integers. */
ExerciseHeader(4)
function findLargest(integer1,integer2,integer3){
    if(integer1==integer2&&integer2==integer3){
        console.log("ALL THREE INOUTS ARE SAME")
    }
    else if(integer1>integer2&&integer1>integer3){
        console.log(integer1,"is greater than",integer2, "and",integer3)
    }
    else if(integer2>integer1&&integer2>integer3){
        console.log(integer2,"is greater than",integer1, "and",integer3)
    }
    else if(integer3>integer1&&integer3>integer2){
        console.log(integer3,"is greater than",integer1, "and",integer2)
    }
}
findLargest(1,1,1)
findLargest(3,2,1)
findLargest(2,3,1)
findLargest(1,2,3)

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
ExerciseHeader(5)
function checkrange(input1,input2){
    if(((input1>=40 && input1<=60)||(input1>=70 && input1<=100))&&((input2>=40 && input2<=60)||(input2>=70 && input2<=100))){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
checkrange(20,30)
checkrange(50,50)
checkrange(90,90)
checkrange(50,90)

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
ExerciseHeader(6)
function cloneString(copies,InputString){
    console.log("Input string",'"',InputString,'"')
    for(let loop=1; loop<=copies;loop++){
        console.log(loop,"number copy of",InputString)
    } 
} 
cloneString(6,'Bilal');

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

ExerciseHeader(7)
    function cityName(Inputstring){
    let firstThree = Inputstring.substring(0,3)
    if(firstThree=='Los'||firstThree=='New'){
        console.log(Inputstring)
    }
    else{
        console.log(false)
    }
}
cityName("NewYork")

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
ExerciseHeader(8)
    let threeElmenetsArray =  [1,2,3]
function sumArray(x){
    console.log(threeElmenetsArray[0]+threeElmenetsArray[1]+threeElmenetsArray[2])
}
sumArray(threeElmenetsArray)

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
ExerciseHeader(9)
function findArray(input1,input2){
    let array = [1,2]
    if((array[0]==input1||array[1]==input1)||(array[0]==input2||array[1]==input2)){
        console.log(true)
    }
    else{
        console.log(false)
    }
    
}
findArray(1,3)

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 
ExerciseHeader(10)
function findArray(){
    let array = [1,2]
        if((array[0]!=1&&array[1]!=1)||(array[0]!=3&&array[1]!=3)){
            console.log(false)
        }
        else{
            console.log(true)
        }
    }
findArray()

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 
ExerciseHeader(11)
function findLargestStr(arr) {
    let prevLength = 0;
    let strFound = "";
  
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];
  
      if (prevLength < str.length) {
        prevLength = str.length;
        strFound = str;
      }
    }
    return strFound;
}
console.log(findLargestStr(["JavaScript", "CSS", "HTML"]));
  
/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
ExerciseHeader(12)
function typeofAngle(angle){
    if(angle>0&&angle<90){
        console.log("acute angle")
    }
    if(angle==90){
        console.log("right")
    }
    if(angle>90&&angle<180){
        console.log("obtuse angle")
    }
    if(angle==180){
        console.log("straight")
    }
}
typeofAngle(180)

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
ExerciseHeader(13)
let MaxNumber = 0
function findlargestNumber(array){
    
    for(let loop = 0 ; loop <= array.length; loop++){
        let currentIndex = array[loop]
        if(MaxNumber<currentIndex){
            MaxNumber = currentIndex
        }
        
    }
    let indexNumber = array.indexOf(MaxNumber)
    return indexNumber;
    
}
// console.log(MaxNumber,"at index of",(findlargestNumber([100,200,300])))
console.log("Index number:",findlargestNumber([100,200,300]), "for:",MaxNumber)


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */