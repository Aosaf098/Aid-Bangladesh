// Donate Now Input Fields
function getDonateNowInputFieldValue(id) {
    const donateNowInput = document.getElementById(id).value

    if ((isNaN(donateNowInput) === false) && donateNowInput >= 0) {
        const donateNowInputNum = Number(donateNowInput)
        return donateNowInputNum
    } else {
        alert('Invalid')
    }
}

// Donation Amount String Split and Convert it to the Number
// Suppose 120 BDT => ['120', 'BDT'] => Return 120 as a Number
function donationAmountStringSplit(id) {
    const donationAmountString = document.getElementById(id).innerText.split(' ')
    return Number(donationAmountString[0])
}