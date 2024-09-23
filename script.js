const blogBtn = document.getElementById('blog-btn')
blogBtn.addEventListener('click', function() {
    window.open('blog.html', '_self')
})

// Donate Now Buttons

const donateNowButtons = document.querySelectorAll('.donate-now-btn')

donateNowButtons.forEach((donateNowButton) => {
    donateNowButton.addEventListener('click', function(e) {
        e.preventDefault()
        // Noakhali
        let noakhaliInput = getDonateNowInputFieldValue('noakhali-input')
        const noakhaliDonationAmount = document.getElementById('noakhali-donation-amount')
        const newNoakhaliDonationAmount = donationAmountStringSplit('noakhali-donation-amount') + noakhaliInput
        noakhaliDonationAmount.innerText = `${newNoakhaliDonationAmount} BDT`

        // Feni
        const feniInput = getDonateNowInputFieldValue('feni-input')
        const feniDonationAmount = document.getElementById('feni-donation-amount')
        const newFeniDonationAmount = donationAmountStringSplit('feni-donation-amount') + feniInput
        feniDonationAmount.innerText = `${newFeniDonationAmount} BDT`

        // Quota
        const quotaInput = getDonateNowInputFieldValue('quota-input')
        const quotaDonationAmount = document.getElementById('quota-donation-amount')
        const newQuotaDonationAmount = donationAmountStringSplit('quota-donation-amount') + quotaInput
        quotaDonationAmount.innerText = `${newQuotaDonationAmount} BDT`


        console.log(`${noakhaliInput}`);
        console.log(`${feniInput}`);
        console.log(`${quotaInput}`);
    })
})