// Blog Button
const blogBtn = document.getElementById('blog-btn')
blogBtn.addEventListener('click', function() {
    window.open('blog.html', '_self')
})

// Donate Now Buttons

// Noakhali Flood

document.getElementById('noakhali-donate-now-btn').addEventListener('click', function(e) {
    e.preventDefault()

    const noakhaliInput = getDonateNowInputFieldValue('noakhali-input')
    document.getElementById('noakhali-input').value = ''

    donationCalculation(noakhaliInput, 'noakhali-donation-amount')

})

// Feni Flood

document.getElementById('feni-donate-now-btn').addEventListener('click', function(e) {
    e.preventDefault()

    const feniInput = getDonateNowInputFieldValue('feni-input')
    document.getElementById('feni-input').value = ''

    donationCalculation(feniInput, 'feni-donation-amount')

})

// Quota Movement

document.getElementById('quota-donate-now-btn').addEventListener('click', function(e) {
    e.preventDefault()

    const quotaInput = getDonateNowInputFieldValue('quota-input')
    document.getElementById('quota-input').value = ''

    donationCalculation(quotaInput, 'quota-donation-amount')

})


const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')

donationBtn.addEventListener('click', function() {
    document.getElementById('donation').classList.remove('hidden')
    donationBtn.classList.add('bg-primary')
    historyBtn.classList.remove('bg-primary')
    document.getElementById('history').classList.add('hidden')
})

historyBtn.addEventListener('click', function() {
    document.getElementById('history').classList.remove('hidden')
    document.getElementById('history').classList.add('mt-[280px]')
    historyBtn.classList.add('bg-primary')
    donationBtn.classList.remove('bg-primary')
    document.getElementById('donation').classList.add('hidden')
})



