// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

let alienColors: string = "green";

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.

//version 1 of the program
if(alienColors === "green"){
    console.log("Version 1: Player Earned 5 points");
}
else if (alienColors === "yellow"){
    console.log("Player Earned 10 points");
}
else if (alienColors === "red"){
    console.log("Player Earned 15 points");
}
else{
    console.log("Please select right color")
}

//version 2 of the program
alienColors = "yellow";

if(alienColors === "green"){
    console.log("Player Earned 5 points");
}
else if (alienColors === "yellow"){
    console.log("Version 2: Player Earned 10 points");
}
else if (alienColors === "red"){
    console.log("Player Earned 15 points");
}
else{
    console.log("Please select right color")
}


//version 3 of the program
alienColors = "red";

if(alienColors === "green"){
    console.log("Player Earned 5 points");
}
else if (alienColors === "yellow"){
    console.log("Player Earned 10 points");
}
else if (alienColors === "red"){
    console.log("Version 3: Player Earned 15 points");
}
else{
    console.log("Please select right color")
}




// • Write three versions of this program, making sure each message is printed for the appropriate color alien.