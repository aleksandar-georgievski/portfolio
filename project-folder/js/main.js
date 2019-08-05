
// VARIABLES
const input = document.getElementById("search-input");
const championsDiv = document.getElementById("champions");
const suggestions = document.getElementById("search-suggestions");
const details = document.getElementById("champion-details");


input.addEventListener('focusin', (e) => {
    suggestions.style.display = 'block';
})
input.addEventListener('keyup', (e) => {
    suggestions.innerHTML = "";
    let counter = 0;
    filter = input.value;
    if(filter.trim() == "")
        return;

    CHAMPIONS.forEach(champion => {
        if(counter >= 5) {
            return;
        }

        if(champion.name.toLowerCase().includes(filter.toLowerCase())){
            let newLink = document.createElement("a");
            newLink.className = 'search-suggestion';
            newLink.innerText = `${champion.name} - ${champion.tags}`;
            newLink.addEventListener('click', () => {
                championsDiv.style.display = 'none';
                details.style.display = 'block';
                populateDetails(champion);
                input.value = "";
                suggestions.innerHTML = "";
            }); 
            suggestions.append(newLink)
            counter++;
        }
    })
})


input.addEventListener('focusout', (e) => {
    setTimeout(() => {
        suggestions.style.display = 'none';
    }, 300);
})

// Conecting champions.JSON
function getJson(location, cb) {
    fetch(location).then(response => response.json()).then((myJson) => cb(myJson));
}


let CHAMPIONS;
getJson('champions.json', (res) => { 
    CHAMPIONS = res;
    // updateChamps();
})


// function writingStats(){
// for (champ in CHAMPIONS) 
//     document.getElementById("champion-stats").innerHTML += champ + `<li> ${JSON.stringify(champ.stats)} <li>`;
//   }


// Opening new "div" and adding champion info
function populateDetails(champ) {
    console.log(`popolni info za ${champ.name}`);
    // document.querySelectorAll("#champion-icon > src").innerHTML = champ.icon;
    document.getElementById("champion-name").innerText = champ.name;
    document.getElementById("champion-tag").innerText = champ.title;
    document.getElementById("champion-desc").innerText = champ.description;
    // document.getElementById("champion-stats").innerHTML = `<li> ${JSON.stringify(champ.stats)} <li>`;
    // writingStats(champ);
}






// function updateChamps() {
//     championsDiv.innerHTML = "";
//     CHAMPIONS.forEach(champion => {
//         let newDiv = document.createElement("div");
//         newDiv.innerText = champion.name;
//         championsDiv.appendChild(newDiv);
//     });
// }



