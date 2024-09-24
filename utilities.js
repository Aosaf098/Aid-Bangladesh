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

function getTotalAmount() {
    const totalAmount = donationAmountStringSplit('total-amount')
    return totalAmount
}

function getDonationAmount(id) {
    const inputAmount =  document.getElementById(id).value
    return inputAmount
}


function openPopup(modalPop) {
    modalPop.classList.add("active")
}

function closePopup(modalPop) {
    modalPop.classList.remove("active")
}
function hiddenPopup(modalPop) {
    modalPop.classList.add('hidden')
}
function removeHidden(modalPop) {
    modalPop.classList.remove('hidden')
}

function modalMama(btnId, inputId) {
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

// function createPopup(id) {
//     let popupNode = document.getElementById(id)
//     let overlay = document.querySelector('.overlay')
//     let closeBtn = document.querySelector('.close-btn')

//     function openPopup() {
//         popupNode.classList.add("active")
//     }

//     function closePopup() {
//         popupNode.classList.remove("active")
//     }
//     overlay.addEventListener("click", closePopup)
//     closeBtn.addEventListener('click', closePopup)
//     return openPopup
// }



// let popup = createPopup('#popup')
// 






{/* <div id="popup" class="popup fixed top-[-100vh] left-0 w-full h-full">
<div class="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-100 ease-in-out delay-200"></div>
<div class="popup-content absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] lg:w-[95%] w-[80%] lg:max-w-[700px] lg:h-[350px] h-[300px] bg-white p-[25px] rounded-[20px] shadow-[0px_2px_2px_5px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out flex flex-col items-center gap-4 transform scale-110 opacity-0">
    <h2 class="font-bold lg:text-4xl text-3xl">Congratulations!</h2>
    <img src="assets/coin.png" alt="">
    <h4 class="lg:text-xl">You have donated for the Mankind</h4>
    <h3 class="lg:text-2xl font-semibold text-xl">Successfully</h3>
    <div class="controls lg:mt-12 mt-6">
        <button class="close-btn bg-primary py-2 px-4 rounded-md hover:bg-slate-300 cursor-pointer">Close Confirmation</button>
    </div>
</div>
</div> */}



