function Personne(nom,prenom,pseudo){
    this.nom = nom,
    this.prenom = prenom,
    this.pseudo = pseudo,
    this.getNomcomplet = function(){
        return  nom + prenom + pseudo;
    },
    this.getInitiales = function(){
        return  nom.charAt(0) + prenom.charAt(0) ;
    };
}
jules = new Personne("LEMAIRE","Jules","jules77");
paul = new Personne("LEMAIRE","Paul","paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.getNomcomplet());

jules.pseudo = "jules44";

console.log(jules.getNomcomplet());
console.log(jules.age);

Personne.prototype.age;
console.log(jules.age);

jules.age = 30;

console.log(jules.age);

console.log(jules.getInitiales());

var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomcomplet:  function(){
        return  this.nom + this.prenom + this.pseudo;
    }
}

console.log(robert.getNomcomplet());