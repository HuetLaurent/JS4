//exercice 1

let starWars = [{name : "Yoda", side : "light"}, {name : "Count Dooku", side : "dark"}, {name : "Obiwan Kenobi", side : "light"}, {name : "Mace Windu", side : "light"}, {name : "Darth Sidious", side : "dark"}, {name : "Darth Maul", side : "dark"}];

const jedi = (a) => {
    let filter1 = a.filter(b => b.side == "light").map(c => c.name);
    console.log(filter1);
}

jedi(starWars);

//exercice 2

let campus = [{city : "Bordeaux", curriculums : ["PHP/Symfony", "JS/React"]}, {city : "La Loupe", curriculums : ["JS/Angular"]}, {city : "Lille", curriculums : ["PHP/Symfony", "JS/React"]}, {city : "Marseille", curriculums : ["JS/React"]}, {city : "Orléans", curriculums : ["PHP/Symfony"]}, {city : "Reims", curriculums : ["JS/React"]}, {city : "Toulouse", curriculums : ["JEE/Android", "JS/React"]}];

const campusJS = (a) => {
    let filter2 = a.filter(b => b.curriculums.includes("JS/React")).map(c => c.city);
    console.log(filter2);
}

campusJS(campus);