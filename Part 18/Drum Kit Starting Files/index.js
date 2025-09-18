// Loop through all elements with the class "drum"
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    // Add a click event listener to each button
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

    // Function to handle the click event
    function handleClick() {
        // Create a new audio object with the snare sound
        var audio = new Audio("sounds/snare.mp3");

        // Play the audio when the button is clicked
        audio.play();
    };
}
