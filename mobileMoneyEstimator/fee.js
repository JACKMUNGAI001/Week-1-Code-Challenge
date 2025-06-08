function estimateTransactionFee(amountToSend) {
    const minFee = 10;
    const maxFee = 70;
    const feePercent = 0.015;

    let fee = amountToSend * feePercent;
    if (fee < minFee) {
        fee = minFee;
    } else if (fee > maxFee) {
        fee = maxFee;
    }

    const totalDebited = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}\n`);
    console.log("Send Money Securely!");
}


const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);

if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Tafadhali weka kiasi sahihi cha kutuma.");
}