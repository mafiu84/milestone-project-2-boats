/**var templateParams = {
    name: "James",
    notes: "Check this out!"
};*/
var template_params = {
   "from_email": "from_email_value",
   "name": "name_value",
   "company": "company_value",
   "emailaddress": "emailaddress_value",
   "projectsummary": "projectsummary_value",
   "date": "date_value",
   "transport_request": "transport_request_value",
   "from_name": "from_name_value"
}

var service_id = "gmail";
var template_id = "matt";

function sendMail(contactForm) {
    emailjs.send(service_id, template_id, templateParams, "user_LYCAaBmQkGbAnlvCqR3Dy", {
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