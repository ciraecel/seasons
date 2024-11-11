      // Function to start the transition
      function startTransition() {
        // Play the audio
        const audio = document.getElementById("audio");
        audio.play();

        document.getElementById("cornerText").style.opacity = 0;
        document.getElementById("content").classList.add("slide-up");
        const popupTitle = document.getElementById("popupTitle");
        const popupSubtitle = document.getElementById("popupSubtitle");
        popupTitle.style.display = "block";
        popupSubtitle.style.display = "block";
        
        setTimeout(() => {
            popupTitle.classList.add("popup-in");
        }, 1200);
        setTimeout(() => {
            popupSubtitle.classList.add("popup-in");
        }, 2200);

        setTimeout(async () => {
            document.body.classList.add("black-bg");
            popupTitle.classList.remove("popup-in");
            popupSubtitle.classList.remove("popup-in");

            setTimeout(() => {
                popupTitle.style.display = "none";
                popupSubtitle.style.display = "none";
                document.getElementById("fadeText").style.display = "block";
                startTextSequence();
            }, 1000);
        }, 3000);
    }

    // Function to change text with fade animation
    function ChangeText(text, stayTime) {
        const fadeText = document.getElementById("fadeText");
        fadeText.classList.remove("fade-in");

        return new Promise(resolve => {
            fadeText.textContent = text;
            fadeText.classList.add("fade-in");
            
            setTimeout(() => {

                if (fadeText.textContent.trim() !== "Seasons") {
                    fadeText.classList.remove("fade-in");
                }

                setTimeout(resolve, 7000); // Wait for fade-out before resolving
            }, stayTime);
        });
    }

    // Function to start the sequence of text changes
    async function startTextSequence() {
        await ChangeText("Can time truly embrace love’s deepest ache?", 5000);
        await ChangeText("Is time greater than the warmth we feel?", 5000);
        await ChangeText("Love is eternal, Time is the fleeting moment.", 5000);
        await ChangeText("Love is emotional, Time is practical.", 5000);
        await ChangeText("Love has shades, Time is black and white.", 5000);
        await ChangeText("A love that feels endless can still be torn, yet time will never erase it.", 8000);
        await ChangeText("It seems ironic that time does not exist, but why is it more powerful than love?", 7000);
        await ChangeText("We question how something unseen, invisible like this can carry the weight of love and numb the pain of it.", 8000);
        await ChangeText("Love may fade like old pictures left out in the sun, while time keeps moving on.", 6000);
        await ChangeText("Time may heal, but it can never remplace what love leaves behind.", 5000);
        await ChangeText("No matter how far love stretches, time can never erase its mark.", 5000);
        await ChangeText("So, next time you fall in love...", 3000);
        await ChangeText("Let time stand still.", 3000);
        await ChangeText("As the seasons change, love endures, through pain and joy.", 5000);
        await ChangeText("Emotions", 2000);
        await ChangeText("are", 2000);
        await ChangeText("Seasons", 7000);
        await document.body.classList.remove("black-bg");
        await document.fadeText.classList.add("black-text");
    }