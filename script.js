var user = prompt("Warrior! We need assistance to slay the Ganondorf! Will you join us? Yes, maybe or no?").toUpperCase();

switch(user) {
    case'YES':
        console.log("Splendid! The city of Hyrule will forever be in your debt young warrior");
        var strong = prompt("Are you strong? YES or NO").toUpperCase();
        var ready = prompt("Are you ready? YES or NO").toUpperCase();
        if (strong === "YES" && ready === "YES") {
            console.log("We shall fight!");
        }
        else {
            console.log("We shall wait for the perfect time to strike");
        }
        break;
    case'MAYBE':
        console.log("Young warrior! Princess Zelda highly  regards you as the chosen one to complete this task! Please do consider!");
        var doubts = prompt("Are you having doubts? YES or NO").toUpperCase();
        var chosenOne = prompt("Do you believe to be the Chosen One YES or NO").toUpperCase();
       if (doubts === "YES" || chosenOne === "YES") {
            console.log("You shall not doubt yourself oh chosen one; the prophecy has seen your strength in overcoming Gannon!");
        }
         else {
            console.log("You may not feel like the chosen one but in due time you will!");
        }
        
        break;
    case'NO':
        console.log("Hyrule will fall without you!");
        break;
    default:
        console.log("The people of Hyrule will not fret on your decision");
};
