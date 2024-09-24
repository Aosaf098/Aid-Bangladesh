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
    const totalAmountText = getTotalAmount()

    if (totalAmountText >= donation) {
        const newTotalAmount = totalAmountText - donation
        document.getElementById('total-amount').innerText = `${newTotalAmount} BDT`
        const donationAmount = donationAmountStringSplit(id)
        const newDonationAmount = donationAmount + donation
        document.getElementById(id).innerText = `${newDonationAmount} BDT`
    } else {
        alert("You don't have sufficient balance") 
    }
}

// Total Amount Value (Type - Number)
function getTotalAmount() {
    const totalAmount = donationAmountStringSplit('total-amount')
    return totalAmount
}

// User Donation Amount (Type - Number)
function getDonationAmount(id) {
    const inputAmount =  document.getElementById(id).value
    return inputAmount
}

// Open Modal
function openPopup(modalPop) {
    modalPop.classList.add("active")
}

// Close Modal
function closePopup(modalPop) {
    modalPop.classList.remove("active")
}

// Hide Modal
function hiddenPopup(modalPop) {
    modalPop.classList.add('hidden')
}

// Remove Hidden Class 
function removeHidden(modalPop) {
    modalPop.classList.remove('hidden')
}


// Modal
function modalCode(btnId, inputId) {
    document.getElementById(btnId).addEventListener('click', function() {
        const modal = document.getElementById('popup')
        const overlay = document.querySelector('.overlay')
        const closeBtn = document.querySelector('.close-btn')
        
        const gTA = getTotalAmount()
        const gDA = Number(getDonationAmount(inputId))
        // console.log(gTA, gDA);
        // console.log(typeof(gTA), typeof(gDA));

        if (gDA <= 0 || gDA > gTA) {
            hiddenPopup(modal)

        } else if(gTA >= gDA)  {
            removeHidden(modal)
            console.log(12);
            openPopup(modal)

            overlay.addEventListener("click", function() {
                closePopup(modal)
            })

            closeBtn.addEventListener('click', function() {
                closePopup(modal)
            })
        }
        document.getElementById(inputId).value = ''
    })
}



