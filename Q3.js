// Write a “person” class to hold all the details.

class Person{
    Constructor(name,education,city){
        this.name = name;
        this.education = education;
        this.city = city;
    }
}

let details1 = new Person("saravana","engineering","salem");
let details2 = new Person("sathish","medicine","covai");
let details3 = new Person("santhosh","arts","chennai");

console.log(details1.name);
console.log(details1.education);
console.log(details1.city);

console.log(details2.name);
console.log(details2.education);
console.log(details2.city);

console.log(details3.name);
console.log(details3.education);
console.log(details3.city);

console.log(`"all person name":${details1.name},${details2.name},${details3.name}`);

