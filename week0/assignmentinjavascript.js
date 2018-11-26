//Conversion of the assignment´s input into a string.
var input = '[ {' +
'"product": "Milk, 1L carton",' +
'"best_before": "2018-10-04",' +
'"price": 15.5'+
'},'+
'{'+
'"product": "Milk, 1L carton",'+
'"best_before": "2018-10-04",'+
'"price": 15.5'+
'},'+
'{'+
'"product": "Eggs 12pcs",'+
'"best_before": "2018-10-04",'+
'"price": 35.0'+
'},'+
'{'+
'"product": "Swedish meatballs",'+
'"best_before": "2018-10-25",'+
'"price": 22.0'+
'} ]'

//Conversion of the JSON text with the input into a Javascript object.
//Source:https://www.w3schools.com/js/js_json.asp
var items = JSON.parse(input); 

//Sorting function in ascending order for the best before date, and in descending order for the price.
//Source:https://www.w3schools.com/js/js_array_sort.asp
items.sort(function(a, b){
    var x = a.best_before;
    var y = b.best_before;
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return b.price - a.price;
}); 

//Conversion of the Javascript object into a JSON text.
//Source:https://www.w3schools.com/js/js_json_stringify.asp
var output = JSON.stringify(items); 

//String representation of the output data.
console.log(output);

//Javascript function:
var input = '[ {' +
'"product": "Milk, 1L carton",' +
'"best_before": "2018-10-04",' +
'"price": 15.5'+
'},'+
'{'+
'"product": "Milk, 1L carton",'+
'"best_before": "2018-10-04",'+
'"price": 15.5'+
'},'+
'{'+
'"product": "Eggs 12pcs",'+
'"best_before": "2018-10-04",'+
'"price": 35.0'+
'},'+
'{'+
'"product": "Swedish meatballs",'+
'"best_before": "2018-10-25",'+
'"price": 22.0'+
'} ]'

var myFirstFunction = function (listtosort) {
    var parsedlist = JSON.parse(listtosort);
    parsedlist.sort(function(a, b){
        var x = a.best_before;
        var y = b.best_before;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return b.price - a.price;
    }); 
    var sortedlist = JSON.stringify(parsedlist); 
    return sortedlist;
    };

console.log(myFirstFunction(input))
