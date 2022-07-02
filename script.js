"use strict";
'Семья состоит из: Peter Ann Alex Linda ';

// 1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    const result = arr.join(' ');
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {

    return 'Семья состоит из: ' + result; 
    }
}
showFamily(family);


// 2
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    arr.forEach(member => {
        str +=`${member}\n`;    
    });
    console.log(str.toLowerCase());
}
standardizeStrings(favoriteCities);
