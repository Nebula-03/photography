const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "702920b71c6515",
        Password: "a206b06265c6b1",
To:"nikki.space0@gmail.com",
From:inputs.elements["email"].value,
Subject:"This is the subject.",
Body: inputs.elements["messgae"].value + "<br>" + inputs.elements["name"]
 }).then(msg=>alert("The email sent successfully."))
})