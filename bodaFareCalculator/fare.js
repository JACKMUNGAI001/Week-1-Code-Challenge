// Function to calculate the total boda fare based on distance
function calculateBodaFare(distanceInKm) {
    const baseFare = 50;         // Fixed starting fare
    const chargePerKm = 15;      // Cost per kilometer

    const distanceFare = distanceInKm * chargePerKm; // Calculate fare for the distance
    const totalFare = baseFare + distanceFare;       // Total fare is base fare plus distance fare

    // Output the fare breakdown to the console
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

// Prompt the user for the distance in kilometers
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(input); // Convert input to a number

// Validate the input and calculate fare if valid
if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    // Handle invalid input
    console.log("Tafadhali weka nambari sahihi ya kilomita.");
}