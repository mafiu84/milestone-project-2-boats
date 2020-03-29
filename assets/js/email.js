var templateParams = {
    name: "James",
    notes: "Check this out!"
};


function sendMail(contactForm) {
    emailjs.send("gmail", "matt", templateParams, "user_LYCAaBmQkGbAnlvCqR3Dy", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "transport_request": contactForm.projectsummary.value
    })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    return false;
}