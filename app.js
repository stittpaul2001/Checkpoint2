// Global Variables

let cheese = 0;


let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 10,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'drill',
    price: 20,
    quantity: 0,
    bonus: 10
  }
];

let automaticUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    bonus: 20
  },
  {
    name: 'spacestation',
    price: 1000,
    quantity: 0,
    bonus: 50
  }
];

// Section-Logic Section
// function to increase the cheese amount

function mine() {
  let totalBonus = 1
  clickUpgrades.forEach(upgrade => {
    totalBonus += upgrade.bonus * upgrade.quantity
  })
  cheese += totalBonus
  updateCheeseDisplay()
  console.log(`you have mined ${cheese} cheese`)
}

function buyPickaxe() {
  const pickaxe = clickUpgrades.find(upgrade => upgrade.name === 'pickaxe')
  if (cheese >= pickaxe.price) {
    cheese -= pickaxe.price
    pickaxe.price++
    pickaxe.quantity++
    console.log('You purchased a pickaxe')
    updateCheeseDisplay()
  }
  updatePickaxe()
}

function buyDrill() {
  const drill = clickUpgrades.find(Upgrade => Upgrade.name === 'drill')
  if (cheese >= drill.price) {
    cheese -= drill.price
    drill.price++
    drill.quantity++
    console.log('You purchased a drill')
    updateCheeseDisplay()
  }
  updateDrill()
}


function buyRover() {
  const rover = automaticUpgrades.find(upgrade => upgrade.name === 'rover')
  if (cheese >= rover.price) {
    cheese -= rover.price
    rover.price++
    rover.quantity++
    console.log('Purchasing a rover')
    updateCheeseDisplay()
  }
  updateRover()
}

function buySpacestation() {
  const spacestation = automaticUpgrades.find(upgrade => upgrade.name === 'spacestation')
  if (cheese >= spacestation.price) {
    cheese -= spacestation.price
    spacestation.price++
    spacestation.quantity++
    console.log('Purchasing a spacestation')
    updateCheeseDisplay()
  }
  updateSpacestation()
}

function collectAutomaticUpgrades() {
  automaticUpgrades.forEach(upgrade => {
    cheese += upgrade.quantity * upgrade.bonus
  })
  updateCheeseDisplay()
}

function buyAutomaticUpgrade() {
  automaticUpgrades.forEach(upgrade => {
    if (cheese >= upgrade.price)
      cheese -= upgrade.price
    upgrade.price++
    upgrade.quantity++
    console.log('automatic upgrades being purchased')
    collectAutomaticUpgrades()
  })
  updateCheeseDisplay()
  updateAutomaticUpgrades()
}

// Section-Draw Section
function updateCheeseDisplay() {
  document.getElementById('cheese-amount').innerText = `Cheese Bank:🧀 ${cheese}`
}

function updatePickaxe() {
  const pickaxe = clickUpgrades.find(upgrade => upgrade.name === 'pickaxe')
  let pickaxeElem = document.getElementById('pickaxe-quantity')
  pickaxeElem.innerText = `${pickaxe.quantity}`
}

function updateDrill() {
  const drill = clickUpgrades.find(upgrade => upgrade.name === 'drill')
  let drillElem = document.getElementById('drill-quantity')
  drillElem.innerText = `${drill.quantity}`
}

function updateRover() {
  const rover = automaticUpgrades.find(upgrade => upgrade.name === 'rover')
  let roverElem = document.getElementById('rover-count')
  roverElem.innerText = `${rover.quantity}`

}

function updateSpacestation() {
  const spacestation = automaticUpgrades.find(upgrade => upgrade.name === 'spacestation')
  let spacestationElem = document.getElementById('spacestation-owned')
  spacestationElem.innerText = `${spacestation.quantity}`
}

function updateAutomaticUpgrades() {
  const rover = automaticUpgrades.find(upgrade => upgrade.name === 'rover')
  let roverElem = document.getElementById('rovers-count')
  roverElem.innerText = `Total Rovers: ${rover.quantity}`

  const spacestation = automaticUpgrades.find(upgrade => upgrade.name === 'spacestation')
  let spacestationElem = document.getElementById('spacestations-owned')
  spacestationElem.innerText = `Total Spacestations ${spacestation.quantity}`
}




// Loads when open
setInterval(collectAutomaticUpgrades, 3000)