// Constructor Function

function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellboy1 = new BellBoy ("Timmy", 19, true, ["French", "English"]);

// console.log(bellboy1.age); // output :- 19