/*Initializing Values*/
var user_order = localStorage.getItem("UserOption");
var Avatar;
let Symbols = [{BOC :"Chakra"}, {SB : "Shieldboi"}];
let Minutecounter = 0;
var totalSeconds = 0;

let setTime = () =>{++totalSeconds;if(Minutecounter == 0){document.getElementById('Timer').innerHTML = totalSeconds +" Seconds";}else if(Minutecounter != 0){document.getElementById('Timer').innerHTML = Minutecounter +" Min " + totalSeconds +" Seconds"; if(totalSeconds == 60){totalSeconds = 0; Minutecounter++; document.getElementById('Timer').innerHTML = "Minutes " + Minutecounter + ":" + totalSeconds;}else{}console.log(totalSeconds);}};
setInterval(setTime, 1000);
let SymbolChoice = () => {if (user_order == Symbols[0].BOC){document.getElementById("Symname").value = Symbols[0].BOC;}else if (user_order == Symbols[1].SB){document.getElementById("Symname").value = Symbols[1].SB;}};
//Die Functions
var die_Val; 
var dieFaceSrc;
var FaceVal;
var shakeAgain =false;
const Prev = die_Val;
// Snake Swallow function
var total_ascend = 0;
var head;
var total_descend = 0;
var correct_order;
var swallowed;

arrowArray = ["arrows"];
snakeArray = ["snakes"];
tileArray = ["tiles"];
//12,16,24,29,44,52,55,61,63,71

var position = 68;
var spawned = false;
var prevdisplay = "";
var presstwice = false;
//window.addEventListener("load", title)

var N1 = "Genesis";
	var N2 = "Illusion";
	var N3 ="Anger";
	var N4="Greed";
	var N5 = "Physical plane";
	var N6="Delusions";
	var N7="conceit";
	var N8="Avarice";
	var N9="Sensual plane";
	var N10="Mercy";
	var N11 = "Entertainment";
	var N12 = "Envy";
	var N13 ="Nullity";
	var N14="Astral plane";
	var N15 = "Plane of fantasy";
	var N16="Jealousy";
	var N17="Mercy";
	var N18="Plane of Joy";
	var N19="Plane of action";
	var N20="Charity";
	var N21 = "Atonement";
	var N22 = "Plane of dharma";
	var N23 ="Celestial plane";
	var N24="Bad Company";
	var N25 = "Good Company";
	var N26="Sorrow";
	var N27="Selfless Service";
	var N28="Apt religion";
	var N29="Irreligiosity";
	var N30="Good tendencies";
	let keys = [{ID: 1, Name : "Genesis"}, {ID: 2, Name : "Illusion"}, {ID: 3, Name : "Anger"}, {ID: 4, Name : "Greed"}, {ID: 5, Name : "Physical plane"}, {ID: 6, Name : "Delusions"}, {ID: 7, Name : "conceit"}, {ID: 8, Name : "Avarice"}, {ID: 9, Name : "Sensual plane"}, {ID: 10, Name : "Mercy"}, {ID: 11, Name : "Entertainment"}, {ID: 12, Name : "Envy"}, {ID: 13, Name : "Nullity"}, {ID: 14, Name : "Astral plane"}, {ID: 15, Name : "Plane of fantasy"}, {ID: 16, Name : "Jealousy"}, {ID: 17, Name : "Mercy"}, {ID: 18, Name : "Plane of Joy"}, {ID: 19, Name : "Plane of action"}, {ID: 20, Name : "Charity"}, {ID: 21, Name : "Atonement"}, {ID: 22, Name : "Plane of dharma"}, {ID: 23, Name : "Celestial plane"}, {ID: 24, Name : "Bad Company"}, {ID: 25, Name : "Good Company"}, {ID: 26, Name : "Sorrow"}, {ID: 27, Name : "Selfless Service"}, {ID: 28, Name : "Apt religion"}, {ID: 29, Name : "Irreligiosity"}, {ID: 30, Name : "Good tendencies"},{ID: 31, Name : "Plane of sanctity"},{ID : 32, Name : "Plane of balance"}, {ID : 33, Name: "Plane of fragrance"},{ID: 34, Name : "Plane of taste"},{ID: 35, Name : "Pugatory"}, {ID : 36, Name : "Clarity of consciousness"},{ID: 37, Name : "True awareness"},{ID: 38, Name : "Plane of life energy"},{ID: 39, Name : "Plane of elimination"},{ID: 40, Name : "Plane of circulation"},{ID: 41, Name : "Human plane"},{ID : 42, Name : "Plane of fire"},{ID: 43, Name : "Birth of man"},{ID : 44, Name :"Ignorance"},{ID : 45, Name :"Right knowledge"},{ID : 46, Name : "Conscience"},{ID: 47, Name : "Place of neutrality"},{ID : 48, Name : "Solar plane"},{ID : 49, Name : "Lunar plane"},{ID : 50,Name:"Plane of austerity"},{ID : 51, Name : "Earth"},{ID : 52, Name : "Plane of violence"},{ID : 53, Name: "Liquid plane"},{ID : 54, Name : "Spiritual devotion"},{ID : 55, Name : "Egotism"},{ID : 56, Name : "Plane of Primal Vibrations"},{ID : 57, Name : "Gaseous plane"},{ID : 58, Name : "Plane of raduation"},{ID : 59, Name : "Plane of reality"},{ID : 60, Name : "Positive intellect"},{ID : 61, Name : "Negative intellect"},{ID : 62, Name : "Happiness"},{ID : 63, Name : "Darkness"},{ID : 64, Name : "Phenomenal plane"},{ID : 65, Name : "Plane of inner space"},{ID : 66, Name : "Plane of bliss"},{ID : 67, Name : "Plane of cosmic good"},{ID : 68, Name : "Cosmic Consciousness"},{ID : 69, Name : "Absolute plane"},{ID : 70, Name : "True nature"},{ID : 71, Name : "Activity"},{ID : 72, Name : "Inertia"}];
	
	document.addEventListener("DOMContentLoaded", function(event) { 
		SymbolChoice();
	  });
	function Setname()
	{
	   keys.forEach(async key => {
			if (position == key.ID)
			{
				document.getElementById("Nametime").value = key.Name;
				tileArray.push(key.Name);
			}
		}
		);
	}
function Commentary(webpage)
{
		localStorage.setItem("Comment", position)
		window.open(webpage)
	
}
	
function shakeDice(){
	document.getElementById("result").innerHTML = "";
	dieFaceSrc = document.getElementById("die");     
	dieFaceSrc.src ="/Image/die.gif";	
	document.getElementById("_throw_").style.display = "block";
	document.getElementById("_again_").style.display = "none";
	document.getElementById("_shake_").style.display = "none";
}

function throwDice(){
	
	if (presstwice == false)
	{
		
	shakeAgain =false;	
	
	FaceVal = die_Val = Math.round(Math.random() * 6);
	
	if (spawned)
	{
	if (die_Val == 1)
	{
		position += 1;
		Setname()
		document.getElementById("titlename").value = position;
		if (position == 10)
		{
			position = 23;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Purification");
		}
		if (position == 17)
		{
			position = 69;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Mercy");
			
		}
		if (position == 20)
		{
			position = 32;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Charity");
		}
		if (position == 22)
		{
			position = 60;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Plane of dharma");
		}
		if (position == 27)
		{
			position = 41;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Selfless Service");
		}
		if (position == 28)
		{
			position = 50;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Apt Religion");
		}
		if (position == 37)
		{
			position = 66;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("True Awareness");
		}
		if (position == 45)
		{
			position = 67;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Right Knowledge");
		}
		if (position == 46)
		{
			position = 62;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Conscience");
		}
		if (position == 54)
		{
			position = 68;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Spiritual Devotion");
		}
		
		
		if (position == 12)
		{
			position = 8;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Envy")
		}
		if (position == 16)
		{
			position = 4;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Jealousy")
		}
		if (position == 24)
		{
			position = 7;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Bad Company")
		}
		if (position == 29)
		{
			position = 6;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Irreligiosity")
		}
		if (position == 44)
		{
			position = 9;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Ignorance")
		}
		if (position == 52)
		{
			position = 35;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Plane of Violence")
		}
		if (position == 55)
		{
			position = 3;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Egotism")
		}
		if (position == 61)
		{
			position = 13;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Negative Intellect")
		}
		if (position == 63)
		{
			position = 1;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Darkness")
		}
		if (position == 72)
		{
			position = 51;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Inertia")
		}	
		
		if (position == 68)
		{
			GameWon('statistics.html');
		}
		

	}
	else if (die_Val == 2)
	{
		position += 2
		Setname()
		document.getElementById("titlename").value = position;
		if (position == 10)
		{
			position = 23;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Purification");
		}
		if (position == 17)
		{
			position = 69;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Mercy");
			
		}
		if (position == 20)
		{
			position = 32;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Charity");
		}
		if (position == 22)
		{
			position = 60;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Plane of dharma");
		}
		if (position == 27)
		{
			position = 41;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Selfless Service");
		}
		if (position == 28)
		{
			position = 50;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Apt Religion");
		}
		if (position == 37)
		{
			position = 66;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("True Awareness");
		}
		if (position == 45)
		{
			position = 67;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Right Knowledge");
		}
		if (position == 46)
		{
			position = 62;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Conscience");
		}
		if (position == 54)
		{
			position = 68;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Spiritual Devotion");
		}
		
		
		if (position == 12)
		{
			position = 8;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Envy")
		}
		if (position == 16)
		{
			position = 4;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Jealousy")
		}
		if (position == 24)
		{
			position = 7;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Bad Company")
		}
		if (position == 29)
		{
			position = 6;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Irreligiosity")
		}
		if (position == 44)
		{
			position = 9;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Ignorance")
		}
		if (position == 52)
		{
			position = 35;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Plane of Violence")
		}
		if (position == 55)
		{
			position = 3;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Egotism")
		}
		if (position == 61)
		{
			position = 13;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Negative Intellect")
		}
		if (position == 63)
		{
			position = 1;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Darkness")
		}
		if (position == 72)
		{
			position = 51;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Inertia")
		}	
		
		if (position == 68)
		{
			GameWon('statistics.html');
		}
		

	}
	else if (die_Val == 3)
	{
		position += 3
		Setname();
		document.getElementById("titlename").value = position;
		if (position == 10)
		{
			position = 23;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Purification");
		}
		if (position == 17)
		{
			position = 69;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Mercy");
			
		}
		if (position == 20)
		{
			position = 32;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Charity");
		}
		if (position == 22)
		{
			position = 60;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Plane of dharma");
		}
		if (position == 27)
		{
			position = 41;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Selfless Service");
		}
		if (position == 28)
		{
			position = 50;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Apt Religion");
		}
		if (position == 37)
		{
			position = 66;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("True Awareness");
		}
		if (position == 45)
		{
			position = 67;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Right Knowledge");
		}
		if (position == 46)
		{
			position = 62;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Conscience");
		}
		if (position == 54)
		{
			position = 68;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Spiritual Devotion");
		}
		
		
		if (position == 12)
		{
			position = 8;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Envy")
		}
		if (position == 16)
		{
			position = 4;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Jealousy")
		}
		if (position == 24)
		{
			position = 7;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Bad Company")
		}
		if (position == 29)
		{
			position = 6;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Irreligiosity")
		}
		if (position == 44)
		{
			position = 9;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Ignorance")
		}
		if (position == 52)
		{
			position = 35;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Plane of Violence")
		}
		if (position == 55)
		{
			position = 3;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Egotism")
		}
		if (position == 61)
		{
			position = 13;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Negative Intellect")
		}
		if (position == 63)
		{
			position = 1;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Darkness")
		}
		if (position == 72)
		{
			position = 51;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Inertia")
		}	
		
		if (position == 68)
		{
			GameWon('statistics.html');
		}
		

	}
	else if (die_Val == 4)
	{
		position += 4
		Setname();
		document.getElementById("titlename").value = position;
		if (position == 10)
		{
			position = 23;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Purification");
		}
		if (position == 17)
		{
			position = 69;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Mercy");
			
		}
		if (position == 20)
		{
			position = 32;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Charity");
		}
		if (position == 22)
		{
			position = 60;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Plane of dharma");
		}
		if (position == 27)
		{
			position = 41;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Selfless Service");
		}
		if (position == 28)
		{
			position = 50;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Apt Religion");
		}
		if (position == 37)
		{
			position = 66;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("True Awareness");
		}
		if (position == 45)
		{
			position = 67;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Right Knowledge");
		}
		if (position == 46)
		{
			position = 62;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Conscience");
		}
		if (position == 54)
		{
			position = 68;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Spiritual Devotion");
		}
		
		
		if (position == 12)
		{
			position = 8;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Envy")
		}
		if (position == 16)
		{
			position = 4;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Jealousy")
		}
		if (position == 24)
		{
			position = 7;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Bad Company")
		}
		if (position == 29)
		{
			position = 6;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Irreligiosity")
		}
		if (position == 44)
		{
			position = 9;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Ignorance")
		}
		if (position == 52)
		{
			position = 35;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Plane of Violence")
		}
		if (position == 55)
		{
			position = 3;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Egotism")
		}
		if (position == 61)
		{
			position = 13;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Negative Intellect")
		}
		if (position == 63)
		{
			position = 1;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Darkness")
		}
		if (position == 72)
		{
			position = 51;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Inertia")
		}	
		
		if (position == 68)
		{
			GameWon('statistics.html');
		}
		

	}
	else if (die_Val == 5)
	{
		position += 5
		Setname();
		document.getElementById("titlename").value = position;
		if (position == 10)
		{
			position = 23;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Purification");
		}
		if (position == 17)
		{
			position = 69;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Mercy");
			
		}
		if (position == 20)
		{
			position = 32;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Charity");
		}
		if (position == 22)
		{
			position = 60;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Plane of dharma");
		}
		if (position == 27)
		{
			position = 41;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Selfless Service");
		}
		if (position == 28)
		{
			position = 50;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Apt Religion");
		}
		if (position == 37)
		{
			position = 66;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("True Awareness");
		}
		if (position == 45)
		{
			position = 67;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Right Knowledge");
		}
		if (position == 46)
		{
			position = 62;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Conscience");
		}
		if (position == 54)
		{
			position = 68;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Spiritual Devotion");
		}
		
		
		if (position == 12)
		{
			position = 8;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Envy")
		}
		if (position == 16)
		{
			position = 4;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Jealousy")
		}
		if (position == 24)
		{
			position = 7;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Bad Company")
		}
		if (position == 29)
		{
			position = 6;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Irreligiosity")
		}
		if (position == 44)
		{
			position = 9;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Ignorance")
		}
		if (position == 52)
		{
			position = 35;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Plane of Violence")
		}
		if (position == 55)
		{
			position = 3;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Egotism")
		}
		if (position == 61)
		{
			position = 13;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Negative Intellect")
		}
		if (position == 63)
		{
			position = 1;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Darkness")
		}
		if (position == 72)
		{
			position = 51;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Inertia")
		}	
		
		if (position == 68)
		{
			GameWon('statistics.html');
		}
		

	}
	else if (die_Val == 6)
	{
		position += 6
		Setname();
		document.getElementById("titlename").value = position;
		if (position == 10)
		{
			position = 23;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Purification");
		}
		if (position == 17)
		{
			position = 69;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Mercy");
			
		}
		if (position == 20)
		{
			position = 32;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Charity");
		}
		if (position == 22)
		{
			position = 60;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Plane of dharma");
		}
		if (position == 27)
		{
			position = 41;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Selfless Service");
		}
		if (position == 28)
		{
			position = 50;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Apt Religion");
		}
		if (position == 37)
		{
			position = 66;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("True Awareness");
		}
		if (position == 45)
		{
			position = 67;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Right Knowledge");
		}
		if (position == 46)
		{
			position = 62;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Conscience");
		}
		if (position == 54)
		{
			position = 68;
			document.getElementById("titlename").value = position;
			total_ascend += 1;
			arrowArray.push("Spiritual Devotion");
		}
		
		
		if (position == 12)
		{
			position = 8;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Envy")
		}
		if (position == 16)
		{
			position = 4;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Jealousy")
		}
		if (position == 24)
		{
			position = 7;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Bad Company")
		}
		if (position == 29)
		{
			position = 6;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Irreligiosity")
		}
		if (position == 44)
		{
			position = 9;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Ignorance")
		}
		if (position == 52)
		{
			position = 35;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Plane of Violence")
		}
		if (position == 55)
		{
			position = 3;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Egotism")
		}
		if (position == 61)
		{
			position = 13;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Negative Intellect")
		}
		if (position == 63)
		{
			position = 1;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Darkness")
		}
		if (position == 72)
		{
			position = 51;
			document.getElementById("titlename").value = position;
			total_descend += 1;
			snakeArray.push("Inertia")
		}	
		
		if (position == 68)
		{
			GameWon('statistics.html');
		}
		
	}
	}
	else
	{
		if (die_Val == 6)
		{
			spawned = true;
			position = 1;
			document.getElementById("titlename").value = position;
		}
	}
	
	switch(die_Val){
		case 1: dieFaceSrc.src = "/Image/1.png"; break;
		case 2: dieFaceSrc.src = "/image/2.png"; break;
		case 3: dieFaceSrc.src = "/image/3.png"; break;
		case 4: dieFaceSrc.src = "/image/4.png"; break;
		case 5: dieFaceSrc.src = "/image/5.png"; break;
		case 6: dieFaceSrc.src = "/image/6.png"; break;
		default: shakeAgain =true; break;
	}
    } 
	
	if (presstwice)
	 {
		 document.getElementById("prevtile").value = prevtile;
	    document.getElementById("prevroll").value = prevdisplay;
		presstwice = false;
	 }
	 else
	 {
		 prevtile = document.getElementById("Nametime").value; 
	    prevdisplay = die_Val;
	    presstwice = true;
		
	 } 
	
	if (shakeAgain == true){
		document.getElementById("_again_").style.display = "block";
		document.getElementById("_throw_").style.display = "none";
		document.getElementById("_shake_").style.display = "none";
	}
	else{
		document.getElementById("_again_").style.display = "none";
		document.getElementById("_throw_").style.display = "none";
		document.getElementById("_shake_").style.display = "block";		
	}	

	getPoints();
}

function GameWon(webpage)
{
	localStorage.setItem("TimePlayed", totalSeconds);
	localStorage.setItem("ArrowsClimbed", total_ascend);
	localStorage.setItem("SnakesEaten", total_descend);
	
	localStorage.setItem("ArrowArray", arrowArray);
	localStorage.setItem("SnakeArray", snakeArray);
	localStorage.setItem("TileArray", tileArray);
	window.open(webpage);
}

function getPoints()
{
	{
	if (shakeAgain == true)
		document.getElementById("result").innerHTML = "";
	else
		document.getElementById("result").innerHTML = parseInt(FaceVal);	
	}
}