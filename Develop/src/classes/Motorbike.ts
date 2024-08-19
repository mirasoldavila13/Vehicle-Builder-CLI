// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import Car from './Car.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import VehicleAttributes from '../interfaces/VehicleAttributes.js';
import Truck from './Truck.js';

//The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle implements VehicleAttributes {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];


  // Create a constructor that accepts the properties of the Motorbike class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
}

  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails(); // Call the parent class method
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
    });
  }
}
// Export the Motorbike class as the default export
export default Motorbike;
