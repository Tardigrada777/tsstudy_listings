const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name --> ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const printVehicle = ({ name, year }: Vehicle): void => {
  console.log(`
    Name: ${name},
    Year: ${year},
  `);
};

printVehicle(oldCivic);
