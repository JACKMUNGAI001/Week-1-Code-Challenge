// Function to calculate chai ingredients based on number of cups
function calculateChaiIngredients(numberOfCups) {
    const waterPerCup = 200; // ml
    const milkPerCup = 50;   // ml
    const teaLeavesPerCup = 1; // tablespoon
    const sugarPerCup = 2;     // teaspoons

    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons\n`);
    console.log("Enjoy your Chai Bora!");
}

// Prompt the user for the number of cups
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

// Validate input and calculate ingredients if valid
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Please enter a valid number of cups.");
}