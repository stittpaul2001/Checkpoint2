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


function mine() {
  let totalBonus = 1,
    clickUpgrades.forEach(upgrade => {
      totalBonus += upgrade.bonus * upgrade.quantity;
    });
  cheese += totalBonus
  updatecheeseDisplay()
  console.log(`mined ${cheese} cheese`);
}

function updatecheeseDisplay() {
  document.getElementById('cheese-count').innerText = `Cheese:${cheese}`;
}