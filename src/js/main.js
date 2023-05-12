import { ShipFactory, Player } from "./ship";

const ship = ShipFactory(3);
console.log(ship.getLength());
const jimmie = Player("jim", 10);
const badGuy = Player("jeff", 5);
jimmie.attack(badGuy);
jimmie.attack(badGuy);
const carrier = ShipFactory(5);
console.log(carrier.getLength());
