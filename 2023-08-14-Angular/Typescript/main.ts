import {Vehicle, Car} from './vehicle.js';
import { Employee } from './employee.js';

var vehicle: Vehicle = new Car();
vehicle.name = "BMW"; vehicle.gears=7; vehicle.speed = 100;
console.log("vehicle", vehicle);
vehicle.decrementSpeed(30);
console.log("vehicle", vehicle);

var vehicle1: Vehicle = new Car("Audi", 6);
var vehicle2: Vehicle = new Car("Audi", 6, 200);

var emp = new Employee(1, "Anil", 10000);
emp.location = "Penang";
console.log("emp", emp);