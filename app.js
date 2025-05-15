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
    totalBonus += upgrade.quantity * upgrade.bonus
  })
  cheese += totalBonus
  updateCheeseDisplay()
  console.log(`you have mined ${cheese} cheese`)
}

// Section-Draw Section
function updateCheeseDisplay() {
  document.getElementById('cheese-amount').innerText = `Cheese Bank:🧀 ${cheese}`
}
// setInterval(collectAutoUpgrades, 3000);