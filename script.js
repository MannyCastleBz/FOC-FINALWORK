function showImage(imageSrc) {
    var outputImg = document.getElementById('output-img');
    outputImg.src = imageSrc;
}
let button1State = false; // false = off, true = on
    let button2State = false; // false = off, true = on

    function toggleButton(buttonNumber) {
        if (buttonNumber === 1) {
            button1State = !button1State;
            document.getElementById('button1').src = button1State ? 'onbutton.png' : 'offbutton.png';
        } else if (buttonNumber === 2) {
            button2State = !button2State;
            document.getElementById('button2').src = button2State ? 'onbutton.png' : 'offbutton.png';
        }
        updateOutput();
    }

    function updateOutput() {
        let outputImage = document.getElementById('outputImage');

        if (button1State && button2State) {
            outputImage.src = 'and2on.png'; // Both buttons are ON
        } else if (!button1State && !button2State) {
            outputImage.src = 'and2off.png'; // Both buttons are OFF
        } else if (button1State && !button2State) {
            outputImage.src = 'andonoff.png'; // Button 1 is ON, Button 2 is OFF
        } else if (!button1State && button2State) {
            outputImage.src = 'andoffon.png'; // Button 1 is OFF, Button 2 is ON
        }
    }

    function binToHex() {
        var x = document.getElementById("inputBin").value;
        var hexOut = '';
    
        // Validate input: it should be a 4-digit binary number
        if (/^[01]{4}$/.test(x)) {
            hexOut = parseInt(x, 2).toString(16).toUpperCase(); // Convert binary to hex
        } else {
            hexOut = 'Invalid Binary Input'; // Show error message for invalid input
        }
    
        // Display the output in the designated output box
        document.getElementById("hexOutput").innerHTML = hexOut;
    }

    function decToASCII() {
        const input = document.getElementById("inputdec");
        const output = document.getElementById("demo");
    
        // Get the input value and convert it to an integer
        const decimalValue = parseInt(input.value);
    
        // Check if the input is a valid decimal number between 0 and 127
        if (isNaN(decimalValue) || decimalValue < 0 || decimalValue > 127) {
            output.innerHTML = "Invalid input";
        } else {
            // Convert the decimal value to ASCII and display it
            const asciiValue = String.fromCharCode(decimalValue);
            output.innerHTML = asciiValue;
        }
    }

    function showImage(img1, img2) {
        document.getElementById("output-img").src = img1;
        document.getElementById("output-img-2").src = img2;
    }

    function myFunction() {
        var x = document.getElementById("numb").value;
        var unicode = "&#x" + x;
        document.getElementById("demo").innerHTML = unicode;
    }