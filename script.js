//1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie{
    constructor(title,studio,rating ="PG")
    {
       this.title  = title
       this.studio = studio
       this.rating = rating
    }
    getMovieDetails()
    {
        return`Movie Name: ${this.title}\nStudio: ${this.studio}\nRating: ${this.rating}`
    }
    static getPG(movies){
        const PG_rated = movies.filter(movie => movie.rating === "PG")
        return`${PG_rated.map(movie => movie.title)}`

    }
}
var res = [new Movie("Casino Royale","   Eon Productions","PG13"),
           new Movie("Ice Age","Blue Sky Studios","PG"),
           new Movie("John Carter","Walt Disney Pictures","PG-13"),
           new Movie("Home Alone","20th Century Studios","PG"),
           new Movie("Jumanji","Columbia Pictures"),
           new Movie("Final Destination","Zide/Perry","R")];
res.forEach(movie=>(console.log(movie.getMovieDetails())))          
console.log("PG rated Movies:",Movie.getPG(res))




console.log(`***********************************`)
//2.Create a class Circle based on UML digram provided in github
//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return `Radius of the Circle: ${this.radius}`
    }
    setRadius(radius){
        return`Updated radius of the circle: ${this.radius = radius}`
    }
    getColor(){
        return `Color of the Circle: ${this.color}`
    }
    setColor(color)
    {
        return`Updated color of the circle: ${this.color = color}`
     
    }
    toString()
    {
      return `Circle[radius =${this.radius},color =${this.color}]`; 
    }
    getArea()
    {
      return`Area of the circle is ${(Math.PI * this.radius * this.radius)}`
    }
    getCircumference()
    {
      return`Circumference of the Circle ${Math.floor(2 * Math.PI * this.radius)}`
    }
}

var res = new Circle(1.0,"red");
console.log(res);
console.log(res.getRadius());
console.log(res.setRadius(4.2));
console.log(res.getColor());
console.log(res.setColor("Yellow"));
console.log(res.toString());
console.log(res.getArea());
console.log(res.getCircumference());
console.log(`***********************************`)



//3.Write a “person” class to hold all the details.
class Person {
    constructor(name, age, gender,profession,email,city,phonenumber) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.profession=profession;
        this.email=email;
        this.city=city;
        this.phonenumber=phonenumber;

    }
    getPersonDetails() {
        return `Name: ${this.name}\nGender: ${this.gender}\nProfession: ${this.profession}\nEmail: ${this.email}\nCity: ${this.city}\nPhoneNumber: ${this.phonenumber}`
    }
    setPhoneNumber(phonenumber) {
        return `Updated of phonenumber Person 2: ${this.phonenumber = phonenumber}`;
    }
}
const person1 = new Person("Hemanath", 30, "Male","Doctor","hemanath2@gmail.com","Chennai","9856324727");
const person2 = new Person("Rathina", 25, "Female","Teacher","rathi@gmail.com","Tirchy","9275644522");
console.log(person1.getPersonDetails());
console.log(person2.setPhoneNumber("9632587410"));
console.log(person2.getPersonDetails());
console.log(`***********************************`)



//4. Write a class to calculate the Uber price.
class UberPriceCalculator{
    constructor(baseFare,distance,ratePerKm,ratePerMinute,totalduration)
    {
        this.baseFare  = baseFare;
        this.distance  = distance;
        this.ratePerKm = ratePerKm;
        this.ratePerMinute = ratePerMinute;
        this.totalduration = totalduration
        
    }
     getTotalPrice(){
        return `${(this.baseFare + (this.distance * this.ratePerKm) + (this.ratePerMinute * this.totalduration))}`
        
    }
}
var res = new UberPriceCalculator(5,10,2,0.5,30);
//console.log(res);
console.log("Total Price:",res.getTotalPrice());

