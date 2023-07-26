import { calculateEditDistance, wordErrorRate } from "./app";

console.log(calculateEditDistance("one hen", "won hen")); // => 1
console.log(wordErrorRate("one hen", "won hen")); // => 0.5

console.log(calculateEditDistance("one hen two ducks", "won hen too ducts")); // => 3
console.log(wordErrorRate("one hen two ducks", "won hen too ducts")); // => 0.25

console.log(calculateEditDistance("goedemorgen. Ik wilde grag wat informatie over de kosten van de posse die jullie aanbieden en kunst meid stellen op welkes verschillende manieren ik daar achter kan komen?", "goedemorgen ik wilde graag wat informatie over de kosten van de posse die jullie aanbieden en kunst meid stellen op welke verschillende manieren ik daar achter kan komen")); // => 5
console.log(wordErrorRate("goedemorgen. Ik wilde grag wat informatie over de kosten van de posse die jullie aanbieden en kunst meid stellen op welkes verschillende manieren ik daar achter kan komen?", "goedemorgen ik wilde graag wat informatie over de kosten van de posse die jullie aanbieden en kunst meid stellen op welke verschillende manieren ik daar achter kan komen")); // => 0.17857142857142858