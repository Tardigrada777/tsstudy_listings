const carMakers: string[] = ['ford', 'toyota', 'opel'];
const dates = [new Date()];

const carsByMake: (string[] | number[])[] = [['ford'], [1], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(1) --> error
carMakers.push('opel2');

// Help with builtIn methods
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
