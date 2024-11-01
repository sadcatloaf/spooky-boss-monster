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
        damage: 3,
        health: 50
    },
    {
        name: 'doug',
        type: 'witch',
        damage: 12,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 7,
    level: 2
}
//#endregion



//#region 🧠 Logic

function decreaseBossHealth() {
    {
        const trioofPumpkins = boss
        trioofPumpkins.health -= calculateHeroDmg()
        console.log('this is health', trioofPumpkins)

        if (boss.health < 0) {
            boss.health = 0
        }

        drawHealth()

    }
}


function calculateHeroDmg() {
    let totalDmg = 0
    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i]
        console.log('hero', i, hero)
        totalDmg += hero.damage

        console.log('damage', totalDmg)
    }

    return totalDmg
}

function bossPunch() {
    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i]
        hero.health -= boss.damage * boss.level
        console.log('hero', hero)
    }
    // TODO Invoke drawhero health function
}

setInterval(bossPunch, 5000)
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

