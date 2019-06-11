function cakes(recipe, available) {
    return Math.min(...Object.keys(recipe).map(function(key){if(available[key] === undefined){return 0} else{return Math.floor(available[key]/recipe[key])}}))}

// Kyu: 5
// link: https://www.codewars.com/kata/525c65e51bf619685c000059
