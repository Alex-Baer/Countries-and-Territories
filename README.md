# Countries-and-Territories
This function set can find the fertility of any country, find the region of any country, get the total fertility of a region, get the total population of a region, and get the average unemployment rate of a region
#
#####takes a country as a parameter and gives back the fertility rate
######country {string} - desired country
######it returns the fertility rate {number} or -1 if the country is not found
**`function getFertilityRate(country)`**
#
#####takes a country as a parameter and gives back the region that the country is located in
######country {string} - desired country
######it returns the region {string} or -1 if the country is not found
**`function getRegion(country)`**
#
#####takes a region as a parameter and gives back the total fertility rates added up for every country in that region
######region {string} - desired region
######it returns the total fertility rate in that region {number} or -1 if the country is not found
**`function getTotalFertility(region)`**
#
#####takes a region as a parameter and gives back the total population of all of the countries in that region added up
######region {string} - desired region
######it returns the total population in that region {number} or -1 if the country is not found
**`function getTotalPopulation(region)`**
#
#####takes a region as a parameter and gives back the average unemployment rate in the desired region
######region {string} - desired region
######it returns the total average unemployment rate in that region {number} or -1 if the country is not found
**`function getAverageUnemploymentRate(region)`**
