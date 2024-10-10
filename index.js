// Prompt the user to input a farenheit temp and let them know we will conver to Celsius
// create a function called convertToCelsius that takes the user input and returns the Celsius temp
// Celsius temp= farnheit temp-32*5/9
// Create a function called describeTemperature which will take in a Fahrenheit temperature and return a description based on the following...
 //Temperature     -     Description
 //< 32              -     "very cold"
 //< 64              ->          "cold"        
 //< 86              ->         "warm"     
//< 100             ->           "hot"       
//>= 100            ->        "very hot"  
// Send an alert to the user including the Fahrenheit temperature they entered, what that temperature is when it is converted to Celsius, and how that feels.

function convertToCelsius(Ftemp) {
    return (Ftemp - 32) * (5/9);
}

function describeTemperature(Ftemp) {
    if (Ftemp >=0 && Ftemp<=32) {
       return "very cold"; 
    }else if (Ftemp >=33 && Ftemp<=64) {
        return "cold";
    }else if (Ftemp >=65 && Ftemp<=86) {
        return "warm";
    }else if (Ftemp >=87 && Ftemp<=100) {
        return "hot";
    }else if (Ftemp >=101) {
        return "very hot";
    }

    }


let Ftemp = prompt(`Enter a Farenheit temp to be converted to Celsius`);
const celsiusValue = convertToCelsius(Number(Ftemp));
const description = describeTemperature(Number(Ftemp));
console.log (`Temp in Celsius: ${celsiusValue}`);
console.log (`Temp description: ${description}`);
alert (`Temp in Farenheit: ${Ftemp}, Temp in Celsius: ${celsiusValue}, Temp description: ${description}`)