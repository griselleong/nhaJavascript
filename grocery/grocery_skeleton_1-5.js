/*
Main Goal: Have a function that takes a list of groceries, a list of filters, a list of fields we want
and returns the grocery store list accordingly
*/


/*********************** FUNCTIONS ***********************/

/*
Figures out if smallerString is a substring of biggerString, regardless
of lowercase or uppercase

Parameters:
- biggerString: String 
- smallerString: String
Return: True or False
*/
const nameContains = (biggerString, smallerString) => {

    return biggerString.toLowerCase().includes(smallerString.toLowerCase());   
    
};

/*
If there are filters, returns a smaller list of grocery stores that match the filter
If there are no filters, it returns all items

Parameters:
- groceryStores: Array of Objects with the following properties 
{
    name: String,
    borough: String,
    zipcode: Integer,
    owner: String,
    address: String

}
- optionalFilters: Object with the following properties
{
    nameFilter: String, (if the filter is a substring of the grocery name, this is considered a match)
    boroughFilter: String
}

Return: Returns an Array of Objects with the same properties as groceryStores parameter
*/
const getFilteredGroceryStores = (groceryStores, optionalFilters) => {
    
    let filteredGroceryList = [];
    let nameFilter = optionalFilters.nameFilter;
    let boroughFilter = optionalFilters.boroughFilter;

    for (let i = 0; i < groceryStores.length; i++){

        if(nameFilter && !nameContains(groceryStores[i].name, nameFilter)){
            continue;
        }

        if(boroughFilter.length != 0 && !boroughFilter.includes(groceryStores[i].borough)){
            continue;
        }

        filteredGroceryList.push(groceryStores[i]);
    }

    return filteredGroceryList;
    
};


/*
Returns a list of grocery stores, but only with the name of the grocery stores 
PLUS any other fields specified in the neededFields parameter

Parameters:
- groceryStores: Array of Objects with the following properties 
{
    name: String,
    borough: String,
    zipcode: Integer,
    owner: String,
    address: String
}
- neededFields: Array of Strings, that match the possible properties of the groceryStores object

Return: Returns an Array of Objects with the only the properties specified in the neededFields array

*/
const getNeededFieldsGroceryStores = (groceryStores, neededFields) => {

    /* WRITE CODE HERE*/

};


/*
Takes a list of grocery stores and filters the list to only those that meet that criteria, 
AND also returns only the fields that are needed

Parameters
- groceryStores: Array of Objects with the following properties 
{
    name: String,
    borough: String,
    zipcode: Integer,
    owner: String,
    address: String
}
- optionalFilters: Object with the following properties
{
    nameFilter: String, (if the filter is a substring of the grocery name, this is considered a match)
    boroughFilter: String
}
- neededFields: Array of Strings, that match the possible properties of the groceryStores object

Return: Returns an Array of Objects with the only the properties specified in the neededFields array

*/
const getGroceryList = (groceryStores, optionalFilters, neededFields) => {

    /* WRITE CODE HERE*/

};


/*********************** TESTING ***********************/
let allGroceryStores = [
    {
        name: "Walmart",
        borough: "Manhattan",
        zipcode: 10021,
        owner: "Walton Family",
        address: "123 Main St"
    },
    {
        name: "Trader Joe's",
        borough: "Manhattan",
        zipcode: 10017,
        owner: "Mr. Joe",
        address: "455 Broadway Ave"

    },
    {
        name: "Trader Joe's",
        borough: "Bronx",
        zipcode: 10045,
        owner: "Mr. Joe",
        address: "654 Grand St"
    },
];

/* Example */
let nameFilter = "";
let boroughFilter = ["Bronx"];
let optionalFilters = {
    nameFilter: nameFilter,
    boroughFilter: boroughFilter
};

let neededFields = ["address", "zipcode"];

console.log(getGroceryList(allGroceryStores, optionalFilters, neededFields));
