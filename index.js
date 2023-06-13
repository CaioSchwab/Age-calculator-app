const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", " "]
const backspace = "Backspace"

const pDay = document.querySelector('#errorDay')
const pMonth = document.querySelector('#errorMonth')
const pYear = document.querySelector('#errorYear')

const inputs = document.querySelectorAll('.inputs').forEach(input => {

    input.addEventListener('keydown', function (ev) {
        ev.preventDefault()
        if (allowedKeys.includes(ev.key)) {
            input.value += ev.key
            return
        } else if (backspace.includes(ev.key)) {
            input.value = ""
            return
        }
    })



})



document.getElementById('btn').addEventListener('click', function () {

    let day = parseInt(document.querySelector('#day').value);
    let month = parseInt(document.querySelector('#month').value);
    let year = parseInt(document.querySelector('#year').value);

    if (day >= 1 && day <= 31 && year < new Date().getFullYear() + 1 && month >= 1 && month <= 12) {

        document.querySelectorAll('.inputs').forEach(input => { input.classList.remove('errorBorder')})
        document.querySelectorAll('.label').forEach(label => { label.classList.remove('errorTXT')})

        pDay.innerText = ""
        pMonth.innerText = ""
        pYear.innerText = ""

        let dateOfBirth = new Date(year, month - 1, day);
        let today = new Date();

        let ageInMilliseconds = today - dateOfBirth;

        let ageDate = new Date(ageInMilliseconds);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1;


        document.getElementById("resultado").innerHTML =
            "<p><span class='numbers'>" + ageYear + "</span> years</p>" +
            "<p><span class='numbers'>" + ageMonth + "</span> months</p>" +
            "<p><span class='numbers'>" + ageDay + "</span> days</p>"
    } else {
        document.querySelectorAll('.inputs').forEach(input => { input.classList.add('errorBorder')})

        document.querySelectorAll('.label').forEach(label => { label.classList.add('errorTXT')})
        
        pDay.innerText = "Must be a valid day"
        pMonth.innerText = "Must be a valid month"
        pYear.innerText = "Must be a valid year"
        
        alert('erro')
    }
})




/*||*/