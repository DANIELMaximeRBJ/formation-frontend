let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesid = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesid);
/*citiesid =[];
console.log(citiesid);*/
citiesid.push("tokyo");
console.log(citiesid);

function getWeather(cityid){
    let city = cityid.toUpperCase();
    let temperature=20;
    return {city : city, temperature : temperature};
}

const weather  = getWeather(favoriteCityId);

console.log(weather );

let city = weather.city;
let temperature = weather.temperature;
console.log(city );
console.log(temperature );

let [parisId, nycId , ...othersCitiesId] = citiesid;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip{
    constructor(id ,name ,imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
       
    }

    toString(){
        return "Trip ["+this.id +" "+ this.name +" "+ this.imageUrl +" "+ this._price +"]";
    }

    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price = newPrice;
    }

    static getDefaultTrip(){
        
       return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg");
    }
}
let parisTrip = new Trip("paris","Paris","img/paris.jpg");
parisTrip._price=100;

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
const defaultTrip  = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip{

    constructor(id ,name ,imageUrl){
        super(id,name,imageUrl);
        this.price =0;
    }
    toString(){
        return "Free "+super.toString();
    }


}

const freeTrip = new FreeTrip("nantes","Nantes","img/nantes.jpg");
console.log(freeTrip.toString());

class TripService {

    constructor() {
        // TODO Set of 3 trips
        //
        this.Trips = new Set();
        let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg');
        let trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
        let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
        this.Trips.add(trip1);
        this.Trips.add(trip2);
        this.Trips.add(trip3);
    }

    findByName(tripName) {
        // TODO return promise
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                let trip = [...this.Trips].filter(trip => trip.name == tripName).pop();
            
                if(trip) {
                    console.log("trip found",trip);
                    return trip;
                } else {
                    console.log(`No trip with name ${tripName}`);
                }
            }, 2000);  
    });
}
}
let tripService =new TripService();
tripService.findByName("Paris");
tripService.findByName("Marseille");
class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        this.maps = new Map();
        this.maps.set("paris",100);
        this.maps.set("rio-de-janeiro",800);
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                let prix = this.maps.get(tripId);
            
                if(prix) {
                    console.log("price found",prix);
                    return prix;
                } else {
                    console.log(`No price found for id ${tripId}`);
                }
            }, 2000);  
    });
    }
}
let priceService = new PriceService();
priceService.findPriceByTripId("paris");
priceService.findPriceByTripId("nantes");