let groceryStores = [
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

const nameContains = (biggerString, smallerString) => {
    return biggerString.toLowerCase().includes(smallerString.toLowerCase());    
};


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

const getNeededFieldsGroceryStores = (groceryStores, neededFields) => {
    let neededFieldsGroceryStores = [];
    for (let i=0; i<groceryStores.length;i++){
        let groceryStoreObj = {
            name: groceryStores[i].name
        };
        if(neededFields.includes("borough")){
            groceryStoreObj.borough = groceryStores[i].borough;
        }
        if(neededFields.includes("zipcode")){
            groceryStoreObj.zipcode = groceryStores[i].zipcode;
        }
        if(neededFields.includes("owner")){
            groceryStoreObj.owner = groceryStores[i].owner;
        }
        if(neededFields.includes("address")){
            groceryStoreObj.address = groceryStores[i].address;
        }

        neededFieldsGroceryStores.push(groceryStoreObj);
    }

    return neededFieldsGroceryStores;
};

const getGroceryList = (groceryStores, optionalFilters, neededFields) => {
    let filteredGroceryStores = getFilteredGroceryStores(groceryStores, optionalFilters);
    console.log(filteredGroceryStores)
    filteredGroceryStores = getNeededFieldsGroceryStores(filteredGroceryStores, neededFields);
    
    return filteredGroceryStores;
};


let nameFilter = "mart";
let boroughFilter = [];
let optionalFilters = {
    nameFilter: nameFilter,
    boroughFilter: boroughFilter
};

let neededFields = ["zipcode", "borough"];

console.log(getGroceryList(groceryStores, optionalFilters, neededFields));