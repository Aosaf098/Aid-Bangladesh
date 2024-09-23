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



