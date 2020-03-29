function sendMail(contactForm) {
    emailjs.send('gmail', 'matt', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'request': contactForm.projectsummary.value,
        'from_company': contactForm.company.value,
        'from_date': contactForm.date.value
    })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    return false;
}
