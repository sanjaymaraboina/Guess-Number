let number = document.getElementById("number");
let randomnumber = Math.ceil(Math.random() * 100);
let result = document.getElementById("para1");
let enteredNumbers = document.getElementsByClassName("enterednumbers")[0];
let reset = document.getElementById("reset");
let chancesLeft = 7;

function myFunction() {
    if (chancesLeft > 0) {
        let guessnumber = parseInt(number.value);
        result.style.display = "block"

        if (guessnumber > randomnumber) {
            result.innerHTML = "Too High! Try Again";
            result.style.color = "red";
        } else if (guessnumber < randomnumber) {
            result.innerHTML = "Too low! Try Again.";
            result.style.color = "blue";
        } else if (randomnumber === guessnumber) {
            result.innerHTML = "Congratulations! You got it right.";
            result.style.color = "green";
            reset.style.display = "block"; // Show the refresh button
        } else {
            result.innerHTML = "Please provide a valid input.";
            result.style.color = "red";
        }

        var parentElement = document.getElementById("myList");
        var listItem = document.createElement("li");
        listItem.textContent = ` Number ${guessnumber}`;
        parentElement.appendChild(listItem);

        console.log(guessnumber);
        number.value = "";
        chancesLeft--;
    } else {
        result.innerHTML = "Game Over. You have used all your chances.";
        result.style.color = "orange";
        reset.style.display = "block"; // Show the refresh button
    }
}

reset.addEventListener("click", function () {
    chancesLeft = 7;
    reset.style.display = "none"; // Hide the refresh button
    result.innerHTML = "";
    randomnumber = Math.ceil(Math.random() * 100);
    var parentElement = document.getElementById("myList");
    parentElement.innerHTML = ""; // Clear the entered numbers list
});

// Remove the line below as it's not needed
// reset.removeEventListener("reset", myFunction);