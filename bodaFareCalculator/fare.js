function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;

    const distanceFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceFare;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}


const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(input);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Tafadhali weka nambari sahihi ya kilomita.");
}