// const person: {
//     name: string;
//     age: number;
// } = 

enum Author {NEW, EXP, NOVICE, MASTER}

// for tuple we need to explisitly setup
// role: [string, number]; by type

const person = {
    name: "Srinivas",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    val: Author.MASTER
}

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());

    if(person.val === Author.NEW) {
        console.log("New User");
    } else {
        console.log("Advanced User")
    }
}


