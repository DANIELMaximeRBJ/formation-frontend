var villes = ['nantes','paris','saint-nazaire','angers','le mans'];
villes.forEach(function(value){
    console.log(value);

});

console.log("lettreADansToutesLesVilles == " 
, villes.every(function(value) {
    return value.includes("a");  
}));

console.log("auMoinsUneVilleAvecUnTiret == " 
, villes.some(function(value) {
    return value.includes("-");  
}));

console.log("villesSansTiretSansEspace == " 
, villes.filter(villes => !villes.includes(" ") & !villes.includes("-")));

var tab = villes.filter(villes => villes.slice(-1).includes('s'));
console.log(tab.map(ville => ville.toUpperCase()));