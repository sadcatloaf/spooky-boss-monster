// console.log('please work')



//#region 🗃️ Arrays
const heroes = [
    {
        name: 'Oscar',
        type: 'hotdog',
        damage: 5,
        health: 100
    },
    {
        name: 'Meera',
        type: 'witch',
        damage: 10,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}
//#endregion


function decreaseBossHealth() {
    const trioofPumpkins = boss
    trioofPumpkins.health -= 15
    console.log('this is health', trioofPumpkins)
    drawHealth()
}


// function decreaseBossHealth() {
//     for (let i = 0; i < heroes.length; i++) {
//         const heroe = heroes[i]
//         let healthDecrease = 15
//         console.log('health', healthDecrease)
//     }
// }




//#region 🧠 Logic


//#endregion



//#region 🖌️ Drawing
// ANCHOR the - don't matter in element ID pulling from HTML
function drawHealth() {
    const trioofPumpkinsElem = document.getElementById('Trio of Pumpkins')
    const trioofPumpkinsParagraphElem = trioofPumpkinsElem.querySelector('h2')
    const trioofPumpkins = boss
    trioofPumpkinsParagraphElem.innerText = `Trio of Pumpkins | Health ${trioofPumpkins.health}`
}

//#endregion

