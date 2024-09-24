// Blog Button

const blogBtn = document.getElementById('blog-btn')
blogBtn.addEventListener('click', function() {
    window.location.href = 'blog.html'
})



// Donate Now Buttons

// Noakhali Flood

document.getElementById('noakhali-donate-now-btn').addEventListener('click', function(e) {
    e.preventDefault()

    const noakhaliInput = getDonateNowInputFieldValue('noakhali-input')
    // document.getElementById('noakhali-input').value = ''

    donationCalculation(noakhaliInput, 'noakhali-donation-amount')

    // console.log(createPopup('popup'));

    // const historyContent = document.getElementById('history-content')

    
    
    if (noakhaliInput === 0 || getDonationAmount('noakhali-input') > getTotalAmount() ) {
        // Do Nothing
    } else {
        const historyTitle = document.getElementById('history-title')
        const noakhaliTitle = document.getElementById('noakhali-title').innerText.slice(10)
    
        document.createElement('div')
        const historyH3 = document.createElement('h3')
        const historyH5 = document.createElement('h5')
        historyH3.innerText = `${noakhaliInput} Taka is Donated for ${noakhaliTitle}`
        historyH5.innerText = `${new Date()}`
        historyH3.style.fontWeight = '700'
        historyH3.style.margin = '10px auto'
        historyH5.style.fontWeight = '400'
        historyH5.style.fontSize = '0.8rem'
    
        historyTitle.appendChild(historyH3)
        historyTitle.appendChild(historyH5)
    }


    // historyDiv.appendChild(historyTitle)

})

// Feni Flood

document.getElementById('feni-donate-now-btn').addEventListener('click', function(e) {
    e.preventDefault()

    const feniInput = getDonateNowInputFieldValue('feni-input')
    // document.getElementById('feni-input').value = ''

    donationCalculation(feniInput, 'feni-donation-amount')

    // const historyTitle = document.getElementById('history-title')
    // const feniTitle = document.getElementById('feni-title').innerText.slice(10)

    // document.createElement('div')
    // const historyH3 = document.createElement('h3')
    // const historyH5 = document.createElement('h5')


    // historyH3.innerText = `${feniInput} Taka is Donated for ${feniTitle}`
    // historyH5.innerText = `${new Date()}`
    // historyH3.style.fontWeight = '700'
    // historyH3.style.margin = '10px auto'
    // historyH5.style.fontWeight = '400'
    // historyH5.style.fontSize = '0.8rem'

    // historyTitle.appendChild(historyH3)
    // historyTitle.appendChild(historyH5)

    if (feniInput === 0 || getDonationAmount('feni-input') > getTotalAmount() ) {
        // Do Nothing
    } else {
        const historyTitle = document.getElementById('history-title')
        const feniTitle = document.getElementById('feni-title').innerText.slice(10)
    
        document.createElement('div')
        const historyH3 = document.createElement('h3')
        const historyH5 = document.createElement('h5')
        historyH3.innerText = `${feniInput} Taka is Donated for ${feniTitle}`
        historyH5.innerText = `${new Date()}`
        historyH3.style.fontWeight = '700'
        historyH3.style.margin = '10px auto'
        historyH5.style.fontWeight = '400'
        historyH5.style.fontSize = '0.8rem'
    
        historyTitle.appendChild(historyH3)
        historyTitle.appendChild(historyH5)
    }

})

// Quota Movement

document.getElementById('quota-donate-now-btn').addEventListener('click', function(e) {
    e.preventDefault()

    const quotaInput = getDonateNowInputFieldValue('quota-input')
    // document.getElementById('quota-input').value = ''

    donationCalculation(quotaInput, 'quota-donation-amount')

    if (quotaInput === 0 || getDonationAmount('quota-input') > getTotalAmount() ) {
        // Do Nothing
    } else {
        const historyTitle = document.getElementById('history-title')
        const quotaTitle = document.getElementById('quota-title').innerText.slice(10)
    
        document.createElement('div')
        const historyH3 = document.createElement('h3')
        const historyH5 = document.createElement('h5')
        historyH3.innerText = `${quotaInput} Taka is Donated for ${quotaTitle}`
        historyH5.innerText = `${new Date()}`
        historyH3.style.fontWeight = '700'
        historyH3.style.margin = '10px auto'
        historyH5.style.fontWeight = '400'
        historyH5.style.fontSize = '0.8rem'
    
        historyTitle.appendChild(historyH3)
        historyTitle.appendChild(historyH5)
    }

})

// Donation & History Buttons

const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')

// Donation Button Event

donationBtn.addEventListener('click', function() {
    document.getElementById('donation').classList.remove('hidden')
    donationBtn.classList.add('bg-primary')
    historyBtn.classList.remove('bg-primary')
    document.getElementById('history').classList.add('hidden')
})

// History Button Event

historyBtn.addEventListener('click', function() {
    document.getElementById('history').classList.remove('hidden')
    document.getElementById('history').classList.add('mt-[280px]')
    historyBtn.classList.add('bg-primary')
    donationBtn.classList.remove('bg-primary')
    document.getElementById('donation').classList.add('hidden')
})

// Modal

// document.getElementById('noakhali-donate-now-btn').addEventListener('click', function() {
//     const modal = document.getElementById('popup')
//     const overlay = document.querySelector('.overlay')
//     const closeBtn = document.querySelector('.close-btn')

//     openPopup(modal)
//     // closePopup(modal)

//     overlay.addEventListener("click", function() {
//         modal.classList.remove('active')
//     })
//     closeBtn.addEventListener('click', function() {
//         modal.classList.remove('active')
//     })
// })

modalMama('noakhali-donate-now-btn', 'noakhali-input')
modalMama('feni-donate-now-btn', 'feni-input')
modalMama('quota-donate-now-btn', 'quota-input')



// document.getElementById('feni-donate-now-btn').addEventListener('click', createPopup('popup'))
// document.getElementById('quota-donate-now-btn').addEventListener('click', createPopup('popup'))









