console.log("PLEASE ENTER YOUR ANSWERS AS DIRECTED!!!")
// Global variables
var score = 0
var achievements = []
var race = ""
// Produces a boolean depending on a random number
function fight(){
	var res = Math.floor(Math.random() * 1)
	if(res == 1){
		score++;
		return true

	}
	else if(res == 0){
		score--;
		return false
		
	}
}
// Produces a different ending based on score accrued 
// throughout the game
function calcEnding(race){
	var end = ""
	if(score < -1 ){
		end = "You have failed. Your army has been brought to its knees. You are remembered as a failure, and you have brought disgrace to your aardvark kin. 40 years later, you are executed for war crimes."
	}
	else if(score > 1){
		end = "Conditional surrender of both parties is agreed upon. Hopefully this squabble does not affect the relations of these two great nations. You settle down at a town on the edge of the Kingdom."
	}
	else{
		end = "You and your superior army have subjugated the enemy through sheer military might. You will be known as a great leader, conqueror and poet. Your days of war never end, and you die on the fields of battle years down the line."
	}
	return "Your race is: " + race + "\nHere are the achievements you picked up!: " + achievements + "\n" + end
}
// The first choice in the story
var choice1 = prompt("Armed conflict has started between the frogs and capybaras.They both approach you, a distinguished aardvark general. You will bring great influence to the outcome of the war, make your decision.(F/C)")

if(choice1 == "F"){
	race = "Frog"
	achievements.push("Frog Time ")
	console.log("You choose the frogs, and go to their HQ. Captain Jean Webbed Finger, Commander of the Poison Dart Frog Kamikaze Battalion greets you, and asks your name.")
	var name = prompt("What is your name?")
	console.log("I am the Great High Major Brigadier General of the Elite Aardvark Assault Division Commanding the 4th Frog Army, 8th Toad Subdivision, and the 1st Red-Eyed Tree Frog Parachute Commando Squadron, " + name)
	console.log("\nJean: Awesome. We are going to attack an outpost now, you get to choose what is done. Would you like to either, (A) Attack the front gate with a head on assault, or (B) Use the parachute commandos to conduct a stealth mission.")
	var b1 = prompt("What will you choose?(A/B)")
	if(b1 == "A"){
		achievements.push("Bull in a china shop ")
		score--;
		console.log("Three different frog platoons that trusted your guiding hand marched into battle, and were slaughtered in droves. The frog army and people will mark this day that brought shame, on their calendar, to honor the fallen.")
	}
	if(b1 == "B"){
		achievements.push("Swift as Night ")
		score++;
		console.log("In the dead of night, one of the most elite fighting forces in the world, the Red-Eyed Tree Frogs, parachute into enemy territory, and completely destroy a capybara base by exploiting the terrible design of the gas and electric utilities. They return as heroes, though having lost some great men to achieve victory")
	}
	var b2 = prompt("Jean: We should be on the defensive now, but I will let you choose what we do. (A) increase the amount of toads patrolling the front line. (B) Send out the battle hardened Frog paratroopers again to attack another enemy base.(A/B)")
	if(b2 == "A"){
		score++
		console.log("The toads capture a capybara spy. After interrogation, it is revealed that they are planning an attack on the base you are commanding from. It is also revealed that he has a family so he is not killed, and is kept in a nice cell waiting for the war to end.")
	}
	if(b2 == "B"){
		score--
		achievements.push("Band of Brothers ")
		console.log("Bad news, the Tree Frog paratroopers were captured. They were brutally tortured and interrogated, until their execution via firing squad.")
	}
	console.log("These series of battles are drawing to a close. Something big is about to happen")
	var b3 = prompt("Jean: OUR BASE IS UNDER ATTACK!!! Commander, will you (A) stay and fight with us, or will you (B) flee from the capybara horde?(A/B)")
	if(b3 == "A"){
		score++
		achievements.push("Brave to the End ")
		var b4 = ("You rally your men and charge into the war zone. A Capybara in full iron armor charges through the crowd, and knocks you to your feet. You hastily get up, and look at him. You can’t see his face, but you know he is staring back at you. You can either (A) lie down and accept your likely fate, or (B) fight until the end.(A/B)")
		if(b4 == "A"){
			console.log("DEATH")
		}
		if(b4 == "B"){
			if(fight()){
				score++
				console.log("You charge your opponent, swiping at him with your officer sword. He parrys the first few attacks, but is then picked up and body slammed to the ground by Jean. You and him stick together defending the base, until it is clear of all insurgents ")
			}
			else{
				score--
				console.log("The cloaked menace dashes at you before you have a chance act, cleaving you in half. You fall to the ground, cigarette still in your mouth, a smile on your face knowing you fought for your life.")
			}
		}
	}
	if(b3 == "B"){
		achievements.push("Slimy Weasel ")
		score--;
		var b4 = ("You flee from the war zone, but you hear something behind you. A Capybara in full iron armor charges through the crowd, and knocks you to your feet. You hastily get up, and look at him. You can’t see his face, but you know he is staring back at you. You can either (A) lie down and accept your likely fate, or (B) fight until the end.(A/B)")
		if(b4 == "A"){
			console.log("DEATH")
		}
		if(b4 == "B"){
			if(fight()){
				score++
				console.log("You charge your opponent, swiping at him with your officer sword. He parrys the first few attacks, but is then picked up and body slammed to the ground by Jean. You and him stick together defending the base, until it is clear of all insurgents")
			}
			else{
				score--
				console.log("The armored menace dashes at you before you have a chance act, cleaving you in half. You fall to the ground, cigarette still in your mouth, a smile on your face knowing you fought for your life.")
			}
		}
	}
	console.log(calcEnding())
	// ending
}

// CAPYBARA CODE 
else if(choice1 == "C"){
	race = "Capybara"
	achievements.push("Capybara Time ")
  console.log("You choose the capybaras, and are escorted to their base. You are greeted by Elise, Commodore of the Capybaran Air Defence and Protection Squadron. She asks your name.")
  var name = prompt("What is your name?")
	console.log("I am the Great High Major Brigadier General of the Elite Aardvark Assault Division Commanding the 2nd Capybara Army, 1st Swedish Viking Rat Elite Berserker Squadron, and the 5th Capybara Submerge and Sabotage Division, " + name)
	var b1 = prompt("Elise: Great, we are expecting an attack soon\nTheir armies are here, the choice is yours. You can either (A) Attack before those frog devils have a chance to, or (B) Bolster the front line defenses.(A/B)")
	if(b1 == "A"){
		achievements.push("Impatient idiot ")
		score--;
		console.log("2 battalions of capybaras march out of the base and into no man's land. IT’S AN AMBUSH!! Frogs attack from all sides. Chaos and bloodshed ensue, and the capybaras stand very little chance. They are decimated while there are few frog casualties")
	}
	if(b1 == "B"){
		achievements.push("The Siegfried Line ")
		score++;
		console.log("You lie in wait for the enemy to attack. The assault comes but you and your men are ready for it. The frogs are stopped. Surely this has reminded them who they are facing.")
	}
	var b2 = prompt("Elise: This now is our time to attack, you choose what we do. (A) Use the highly trained submerge and sabotage unit to cripple the enemies ports and harbors. (B) Deploy the Swedish Viking Rats to directly attack the largest enemy outpost.(A/B)")
	if(b2 == "A"){
		score++
		achievements.push("Better than the Navy Seals ")
		console.log("Elise: These capybara commandos pulled it off without a hitch. Severe destruction of multiple enemy ports will cripple them, and surely lead to our victory!")
	}
	if(b2 == "B"){
		score--
		achievements.push("FOR VALHALLA ")
		console.log("Elise: That was a bold move, and we paid for it. All the viking rats are either missing or confirmed dead.")
	}
	console.log("These series of battles are drawing to a close. Something big is about to happen")
	var b3 = prompt("Elise: OUR BASE IS UNDER ATTACK!!! Commander, will you (A) stay and fight with us, or will you (B) flee from the hoard of frogs?(A/B)")
	if(b3 == "A"){
		score++
		achievements.push("Brave To The End ")
		var b4 = prompt("You rally your men and charge into the war zone. A frog in a cloak jumps over the crowd, and knocks you to your feet. You hastily get up, and look at him. You can’t see his face, but you know he is staring back at you. You can either (A) lie down and accept your likely fate, or (B) fight until the end.(A/B)")
		if(b4 == "A"){
			if(fight()){
				score++
				console.log("You charge your opponent, swiping at him with your officer sword. He parrys the first few attacks, but is then picked up and body slammed to the ground by Elise. You and her stick together defending the base, until it is clear of all insurgents")
			}
			else{
				score--
				console.log("The cloaked menace dashes at you before you have a chance act, cleaving you in half. You fall to the ground, cigarette still in your mouth")
			}
		}
		if(b4 == "B"){
			console.log("DEATH")
		}
	}
	if(b3 == "B"){
		score--
		achievements.push("Slimy Weasel ")
		var b4 = prompt("You run away with you're tail between your legs. A frog in a cloak jumps over the crowd, and knocks you to your feet. You hastily get up, and look at him. You can’t see his face, but you know he is staring back at you. You can either (A) lie down and accept your likely fate, or (B) fight until the end.(A/B)")
		if(b4 == "A"){
			if(fight()){
				score++
				console.log("You charge your opponent, swiping at him with your officer sword. He parrys the first few attacks, but is then picked up and body slammed to the ground by Elise. You and her stick together defending the base, until it is clear of all insurgents")
			}
			else{
				score--
				console.log("The cloaked menace dashes at you before you have a chance act, cleaving you in half. You fall to the ground, cigarette still in your mouth")
			}
		}
		if(b4 == "B"){
			console.log("DEATH")
		}
	}
	console.log(calcEnding(race))
	// ending
}
