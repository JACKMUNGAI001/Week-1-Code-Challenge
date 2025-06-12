// Function to estimate the transaction fee for sending money
function estimateTransactionFee(amountToSend) {
    const minFee = 10;           // Minimum possible fee
    const maxFee = 70;           // Maximum possible fee
    const feePercent = 0.015;    // Fee percentage (1.5%)

    let fee = amountToSend * feePercent; // Calculate fee based on percentage
    if (fee < minFee) {
        fee = minFee;            // Apply minimum fee if calculated fee is too low
    } else if (fee > maxFee) {
        fee = maxFee;            // Apply maximum fee if calculated fee is too high
    }

    const totalDebited = amountToSend + fee; // Total amount debited from sender

    // Output the transaction details to the console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}\n`);
    console.log("Send Money Securely!");
}

// Prompt the user for the amount to send
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input); // Convert input to a number

// Validate the input and estimate fee if valid
if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    // Handle invalid input
    console.log("Tafadhali weka kiasi sahihi cha kutuma.");
}