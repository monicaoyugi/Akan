function checkName() {
    var dd, mm, yyyy;
    dd = document.getElementById("dd").value;
    mm = document.getElementById("mm").value;
    yyyy = document.getElementById("yyyy").value;

    var cc = parseInt(yyyy.slice(0, 2));
    var yy = parseInt(yyyy.slice(2, 4));


    if (document.getElementById("inlineRadioMale").checked) {
        gender = "Male";
    } else if (document.getElementById("inlineRadioFemale").checked) {
        gender = "Female";
    } else (alert("Please choose gender"));


    if (dd < 1 && dd > 31) {
        alert("Please enter a valid date");
    }

    if (mm < 1 && mm > 12) {
        alert("Please enter a valid month");
    }

    var f = parseInt(((cc / 4) - ((2 * cc) - 1) + ((5 * yy) / 4) + (26 * (mm + 1) / 10) + dd) % 7);
    alert(f)

    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

    var daysofWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]


    //TODO: Read Use javascript Date(), use momentJs

    

    if (gender == "Female") {
        alert("Your name is " + femaleNames[f - 1] + " You were born on " + daysofWeek[f - 1])
        return;
    }

    if (gender == "Male") {
        alert("Your name is " + meleNames[f - 1] + " You were born on " + daysofWeek[f - 1])
        return;
    }


}

