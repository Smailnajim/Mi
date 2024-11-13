let i ;

const obj = [
    {
    name: "taha",
    age: 1,
    note: 11,
    },

    {
    name: "smail",
    age: 2,
    note: 22,
    },

    {
    name: "smail",
    age: 3,
    note: 33,
    }
];
// console.log( obj[1].name);

const Bu = document.getElementById('Kh');


Bu.addEventListener("click", (event) => {
    // event.preventDefault();

    const NameChersh = document.getElementById("toChersh").value;
    // console.log(NameChersh);
    for (i = 0; i < obj.length; i++){
        if (NameChersh === obj[i].name){
            console.log(obj[i].age);
            console.log(obj[i].note);
            console.log("---------------");
        }
    }
});

