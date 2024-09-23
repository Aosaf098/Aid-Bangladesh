// Donate Now Input Fields

function getDonateNowInputFieldValue(id) {
    let donateNowInput = document.getElementById(id).value

    if ((isNaN(donateNowInput) === false) && donateNowInput >= 0) {
        const donateNowInputNum = Number(donateNowInput)
        return donateNowInputNum
    } else {
        alert('Invalid')
        return 0
    }
}

// Donation Amount String Split and Convert it to the Number
// Suppose 120 BDT => ['120', 'BDT'] => Return 120 as a Number

function donationAmountStringSplit(id) {
    const donationAmountString = document.getElementById(id).innerText.split(' ')
    return Number(donationAmountString[0])
}

// Donation Addition and Subtraction from the Total Amount

function donationCalculation(donation, id) {
    const totalAmount = donationAmountStringSplit('total-amount')

    if (totalAmount >= donation) {
        const newTotalAmount = totalAmount - donation
        document.getElementById('total-amount').innerText = `${newTotalAmount} BDT`
        const donationAmount = donationAmountStringSplit(id)
        const newDonationAmount = donationAmount + donation
        document.getElementById(id).innerText = `${newDonationAmount} BDT`
    } else {
        alert("You don't have sufficient balance")
    }
}

