const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', false, 0];

const drinks: Drink[] = [pepsi, sprite];

const carSpecs: [number, number] = [400, 3354];
