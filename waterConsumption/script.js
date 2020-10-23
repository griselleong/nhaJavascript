let waterConsumptionRawData = 
[
    {"year":"1979","new_york_city_population":"7102100","nyc_consumption_million_gallons_per_day":"1512","per_capita_gallons_per_person_per_day":"213"}
    ,{"year":"1980","new_york_city_population":"7071639","nyc_consumption_million_gallons_per_day":"1506","per_capita_gallons_per_person_per_day":"213"}
    ,{"year":"1981","new_york_city_population":"7089241","nyc_consumption_million_gallons_per_day":"1309","per_capita_gallons_per_person_per_day":"185"}
    ,{"year":"1982","new_york_city_population":"7109105","nyc_consumption_million_gallons_per_day":"1382","per_capita_gallons_per_person_per_day":"194"}
    ,{"year":"1983","new_york_city_population":"7181224","nyc_consumption_million_gallons_per_day":"1424","per_capita_gallons_per_person_per_day":"198"}
    ,{"year":"1984","new_york_city_population":"7234514","nyc_consumption_million_gallons_per_day":"1465","per_capita_gallons_per_person_per_day":"203"}
    ,{"year":"1985","new_york_city_population":"7274054","nyc_consumption_million_gallons_per_day":"1326","per_capita_gallons_per_person_per_day":"182"}
    ,{"year":"1986","new_york_city_population":"7319246","nyc_consumption_million_gallons_per_day":"1351","per_capita_gallons_per_person_per_day":"185"}
    ,{"year":"1987","new_york_city_population":"7342476","nyc_consumption_million_gallons_per_day":"1447","per_capita_gallons_per_person_per_day":"197"}
    ,{"year":"1988","new_york_city_population":"7353719","nyc_consumption_million_gallons_per_day":"1484","per_capita_gallons_per_person_per_day":"202"}
    ,{"year":"1989","new_york_city_population":"7344175","nyc_consumption_million_gallons_per_day":"1402","per_capita_gallons_per_person_per_day":"191"}
    ,{"year":"1990","new_york_city_population":"7335650","nyc_consumption_million_gallons_per_day":"1424","per_capita_gallons_per_person_per_day":"194"}
    ,{"year":"1991","new_york_city_population":"7374501","nyc_consumption_million_gallons_per_day":"1469","per_capita_gallons_per_person_per_day":"199"}
    ,{"year":"1992","new_york_city_population":"7428944","nyc_consumption_million_gallons_per_day":"1369","per_capita_gallons_per_person_per_day":"184"}
    ,{"year":"1993","new_york_city_population":"7506166","nyc_consumption_million_gallons_per_day":"1368.50","per_capita_gallons_per_person_per_day":"182"}
    ,{"year":"1994","new_york_city_population":"7570458","nyc_consumption_million_gallons_per_day":"1357.70","per_capita_gallons_per_person_per_day":"179"}
    ,{"year":"1995","new_york_city_population":"7633040","nyc_consumption_million_gallons_per_day":"1325.70","per_capita_gallons_per_person_per_day":"174"}
    ,{"year":"1996","new_york_city_population":"7697812","nyc_consumption_million_gallons_per_day":"1297.90","per_capita_gallons_per_person_per_day":"169"}
    ,{"year":"1997","new_york_city_population":"7773443","nyc_consumption_million_gallons_per_day":"1205.50","per_capita_gallons_per_person_per_day":"155"}
    ,{"year":"1998","new_york_city_population":"7858259","nyc_consumption_million_gallons_per_day":"1219.50","per_capita_gallons_per_person_per_day":"155"}
    ,{"year":"1999","new_york_city_population":"7947660","nyc_consumption_million_gallons_per_day":"1237.20","per_capita_gallons_per_person_per_day":"156"}
    ,{"year":"2000","new_york_city_population":"8008278","nyc_consumption_million_gallons_per_day":"1240.40","per_capita_gallons_per_person_per_day":"155"}
    ,{"year":"2001","new_york_city_population":"8024963.50","nyc_consumption_million_gallons_per_day":"1184","per_capita_gallons_per_person_per_day":"148"}
    ,{"year":"2002","new_york_city_population":"8041649","nyc_consumption_million_gallons_per_day":"1135.60","per_capita_gallons_per_person_per_day":"141"}
    ,{"year":"2003","new_york_city_population":"8058334.50","nyc_consumption_million_gallons_per_day":"1093.70","per_capita_gallons_per_person_per_day":"136"}
    ,{"year":"2004","new_york_city_population":"8075020","nyc_consumption_million_gallons_per_day":"1099.50","per_capita_gallons_per_person_per_day":"136"}
    ,{"year":"2005","new_york_city_population":"8091705.50","nyc_consumption_million_gallons_per_day":"1138","per_capita_gallons_per_person_per_day":"141"}
    ,{"year":"2006","new_york_city_population":"8108391","nyc_consumption_million_gallons_per_day":"1069","per_capita_gallons_per_person_per_day":"132"}
    ,{"year":"2007","new_york_city_population":"8125076.50","nyc_consumption_million_gallons_per_day":"1114","per_capita_gallons_per_person_per_day":"137"}
    ,{"year":"2008","new_york_city_population":"8141762","nyc_consumption_million_gallons_per_day":"1098","per_capita_gallons_per_person_per_day":"135"}
    ,{"year":"2009","new_york_city_population":"8158447.50","nyc_consumption_million_gallons_per_day":"1007.50","per_capita_gallons_per_person_per_day":"123"}
    ,{"year":"2010","new_york_city_population":"8175133","nyc_consumption_million_gallons_per_day":"1039","per_capita_gallons_per_person_per_day":"127"}
    ,{"year":"2011","new_york_city_population":"8272963","nyc_consumption_million_gallons_per_day":"1021","per_capita_gallons_per_person_per_day":"123"}
    ,{"year":"2012","new_york_city_population":"8348032","nyc_consumption_million_gallons_per_day":"1009.10","per_capita_gallons_per_person_per_day":"121"}
    ,{"year":"2013","new_york_city_population":"8398739","nyc_consumption_million_gallons_per_day":"1006.10","per_capita_gallons_per_person_per_day":"120"}
    ,{"year":"2014","new_york_city_population":"8437387","nyc_consumption_million_gallons_per_day":"996","per_capita_gallons_per_person_per_day":"118"}
    ,{"year":"2015","new_york_city_population":"8468181","nyc_consumption_million_gallons_per_day":"1009","per_capita_gallons_per_person_per_day":"119"}
    ,{"year":"2016","new_york_city_population":"8475976","nyc_consumption_million_gallons_per_day":"1002","per_capita_gallons_per_person_per_day":"118"}
    ,{"year":"2017","new_york_city_population":"8438271","nyc_consumption_million_gallons_per_day":"990.2","per_capita_gallons_per_person_per_day":"117"}
    ,{"year":"2018","new_york_city_population":"8398748","nyc_consumption_million_gallons_per_day":"1007.50","per_capita_gallons_per_person_per_day":"120"}
    ,{"year":"2019","new_york_city_population":"8336817","nyc_consumption_million_gallons_per_day":"987.4","per_capita_gallons_per_person_per_day":"118"}
];

const displayData = () => {

    /* PAY ATTENTION TO HOW THIS IS DONE - 
    You'll use this to complete this website */
    let helloText = document.createTextNode("Hello World!");

    let container = document.getElementById("container");
    container.appendChild(helloText);
    
};

/* Function to help create a cell in the table */
let createHTMLTableCell = (cellData) => {
    let newCell = document.createElement("TD");
    newCell.appendChild(document.createTextNode(cellData));

    return newCell;

};

/* Function to help create a header row for the water consumption data */
const createHTMLTableHeaderWaterConsumption = () =>{
    //Create <thead> tag
    let header = document.createElement("thead");

    //Create a row, which is a <TR> tag and attac it to the header
    let headerRow = document.createElement("TR");
    header.appendChild(headerRow);

    //Create Column that says "Year" and attach it to the row
    let headerYearCol = createHTMLTableCell("Year");
    headerRow.appendChild(headerYearCol);

    //Create Column that says "City Population" and attach it to row
    let headerPopulationCol = createHTMLTableCell("City Population");
    headerRow.appendChild(headerPopulationCol);

    //Create Column that says "Water Consumption (million gallons)" and attach it to row
    let headerConsumption = createHTMLTableCell("Water Consumption (million gallons)");
    headerRow.appendChild(headerConsumption);

    /* return all the HTML that we created */
    return header;

};

/* Function to help create all the HTML for the water consumption data */
const createHTMLFromData = (waterConsumptionData) =>{
    
    /* WRITE CODE HERE  */

};

