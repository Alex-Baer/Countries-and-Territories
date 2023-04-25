var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Geography/Countries%20and%20Territories.csv"
var countryNames = getColumn(url, 1);
var threeLeterCodes = getColumn(url, 2);
var regions = getColumn(url, 4);
var fertilityRates = getColumn(url, 7);
var populations = getColumn(url,6);
var unemploymentRates = getColumn(url,8);
/*
takes a country as a parameter and gives back the fertility rate
country {string} - desired country
it returns the fertility rate {number} or -1 if the country is not found
*/
function getFertilityRate(country) {
  if(typeof country != "string" ){
    return -1;
  }
  for (var i in countryNames) {
    if (countryNames[i].toLowerCase().includes(country.toLowerCase()) || threeLeterCodes[i].toLowerCase().includes(country.toLowerCase())) {
      return fertilityRates[i];
    }
  }
  return -1;
}
/*
takes a country as a parameter and gives back the region that the country is located in
country {string} - desired country
it returns the region {string} or -1 if the country is not found
*/
function getRegion(country) {
  if(typeof country != "string" ){
    return "please input a string";
  }
  for (var i in countryNames) {
    if (countryNames[i].toLowerCase().includes(country.toLowerCase()) || threeLeterCodes[i].toLowerCase().includes(country.toLowerCase())){
      return regions[i];
    }
  }
  return "It seems we can't find the country " + country + ". Please try again.";
}
/*
takes a region as a parameter and gives back the total fertility rates added up for every country in that region
region {string} - desired region
it returns the total fertility rate in that region {number} or -1 if the country is not found
*/
function getTotalFertility(region){
  if(typeof region != "string"){
    return -1;
  }
  var sum = 0;
  for(var i in regions){
    if(regions[i].toLowerCase().includes(region.toLowerCase())){
      sum += parseFloat(fertilityRates[i]);
    }
  }
  if(sum == 0){
    return -1;
  }
  return sum;
}
/*
takes a region as a parameter and gives back the total population of all of the countries in that region added up
region {string} - desired region
it returns the total population in that region {number} or -1 if the country is not found
*/
function getTotalPopulation(region){
  if(typeof region != "string"){
    return -1;
  }
  var sum = 0;
  for(var i in regions){
    if(regions[i].toLowerCase().includes(region.toLowerCase())){
      sum += parseFloat(populations[i]);
    }
  }
  if(sum == 0){
    return -1;
  }
  return sum;
}
/*
takes a region as a parameter and gives back the average unemployment rate in the desired region
region {string} - desired region
it returns the total average unemployment rate in that region {number} or -1 if the country is not found
*/
function getAverageUnemploymentRate(region){
  if(typeof region != "string"){
    return -1;
  }
  var sum = 0;
  var length = 0;
  for(var i in regions){
  if(regions[i].toLowerCase().includes(region.toLowerCase())){
      sum += parseFloat(unemploymentRates[i]);
      length++;
    }
  }
  if(sum == 0){
    return -1;
  }
  return sum/length;
}
function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }