// const person: {
//     name: string;
//     age: number;
// } = 
var Author;
(function (Author) {
    Author[Author["NEW"] = 0] = "NEW";
    Author[Author["EXP"] = 1] = "EXP";
    Author[Author["NOVICE"] = 2] = "NOVICE";
    Author[Author["MASTER"] = 3] = "MASTER";
})(Author || (Author = {}));
var person = {
    name: "Srinivas",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    val: Author.MASTER
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    if (person.val === Author.NEW) {
        console.log("New User");
    }
    else {
        console.log("Advanced User");
    }
}
