/*
Main Goal: Have a function that takes a list of groceries and a list of filters 
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

    /* WRITE CODE HERE*/
    
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

let nameFilter = "";
let boroughFilter = [];
let optionalFilters = {
    nameFilter: nameFilter,
    boroughFilter: boroughFilter
};

console.log(getGroceryList(allGroceryStores, optionalFilters, neededFields));

