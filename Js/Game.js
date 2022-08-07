/*Initializing Values*/
var user_order = localStorage.getItem("UserOption");
var Avatar;
let Symbols = [{BOC :"Chakra"}, {SB : "Shieldboi"}];
let Minutecounter = 0;
var totalSeconds = 0;
let totalhours = 0;
setInterval(setTime, 1000);
function setTime (){++totalSeconds;if(Minutecounter == 0){document.getElementById('Timer').innerHTML = totalSeconds +" Seconds";}else if(Minutecounter != 0){document.getElementById('Timer').innerHTML = Minutecounter +" Min " + totalSeconds +" Seconds"; if(totalSeconds == 60);}if(totalSeconds == 60){totalSeconds = 0; Minutecounter++; document.getElementById('Timer').innerHTML = Minutecounter +" Min " + totalSeconds +" Seconds";}else{} if(Minutecounter == 60 || Minutecounter >= 60){++totalhours; document.getElementById('Timer').innerHTML = totalhours +"hrs " + Minutecounter +" Min " + totalSeconds +" Seconds"; }};
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
	let keys = [{ID: 1, Name : "Genesis"}, {ID: 2, Name : "Illusion"}, {ID: 3, Name : "Anger"}, {ID: 4, Name : "Greed"}, {ID: 5, Name : "Physical plane"}, {ID: 6, Name : "Delusions"}, {ID: 7, Name : "conceit"}, {ID: 8, Name : "Avarice"}, {ID: 9, Name : "Sensual plane"}, {ID: 10, Name : "Purification", ToID : 23, Type : "arrows" }, {ID: 11, Name : "Entertainment"}, {ID: 12, Name : "Envy",ToID : 8, Type : "snake"}, {ID: 13, Name : "Nullity"}, {ID: 14, Name : "Astral plane"}, {ID: 15, Name : "Plane of fantasy"}, {ID: 16, Name : "Jealousy",ToID : 4, Type : "snake"}, {ID: 17, Name : "Mercy",ToID : 69, Type : "arrows"}, {ID: 18, Name : "Plane of Joy"}, {ID: 19, Name : "Plane of action"}, {ID: 20, Name : "Charity",ToID : 32, Type : "arrows"}, {ID: 21, Name : "Atonement"}, {ID: 22, Name : "Plane of dharma",ToID : 60, Type : "arrows"}, {ID: 23, Name : "Celestial plane"}, {ID: 24, Name : "Bad Company",ToID : 7, Type : "snake"}, {ID: 25, Name : "Good Company"}, {ID: 26, Name : "Sorrow"}, {ID: 27, Name : "Selfless Service",ToID : 41, Type : "arrows"}, {ID: 28, Name : "Apt religion",ToID : 50, Type : "arrows"}, {ID: 29, Name : "Irreligiosity",ToID : 6, Type : "snake"}, {ID: 30, Name : "Good tendencies"},{ID: 31, Name : "Plane of sanctity"},{ID : 32, Name : "Plane of balance"}, {ID : 33, Name: "Plane of fragrance"},{ID: 34, Name : "Plane of taste"},{ID: 35, Name : "Pugatory"}, {ID : 36, Name : "Clarity of consciousness"},{ID: 37, Name : "True awareness",ToID : 66, Type : "arrows"},{ID: 38, Name : "Plane of life energy"},{ID: 39, Name : "Plane of elimination"},{ID: 40, Name : "Plane of circulation"},{ID: 41, Name : "Human plane"},{ID : 42, Name : "Plane of fire"},{ID: 43, Name : "Birth of man"},{ID : 44, Name :"Ignorance",ToID : 9, Type : "snake"},{ID : 45, Name :"Right knowledge",ToID : 67, Type : "arrows"},{ID : 46, Name : "Conscience",ToID : 62, Type : "arrows"},{ID: 47, Name : "Place of neutrality"},{ID : 48, Name : "Solar plane"},{ID : 49, Name : "Lunar plane"},{ID : 50,Name:"Plane of austerity"},{ID : 51, Name : "Earth"},{ID : 52, Name : "Plane of violence",ToID : 35, Type : "snake"},{ID : 53, Name: "Liquid plane"},{ID : 54, Name : "Spiritual devotion",ToID : 68, Type : "arrows"},{ID : 55, Name : "Egotism",ToID : 3, Type : "snake"},{ID : 56, Name : "Plane of Primal Vibrations"},{ID : 57, Name : "Gaseous plane"},{ID : 58, Name : "Plane of raduation"},{ID : 59, Name : "Plane of reality"},{ID : 60, Name : "Positive intellect"},{ID : 61, Name : "Negative intellect",ToID : 13, Type : "snake"},{ID : 62, Name : "Happiness"},{ID : 63, Name : "Darkness",ToID : 1, Type : "snake"},{ID : 64, Name : "Phenomenal plane"},{ID : 65, Name : "Plane of inner space"},{ID : 66, Name : "Plane of bliss"},{ID : 67, Name : "Plane of cosmic good"},{ID : 68, Name : "Cosmic Consciousness"},{ID : 69, Name : "Absolute plane"},{ID : 70, Name : "True nature"},{ID : 71, Name : "Activity"},{ID : 72, Name : "Inertia",ToID : 51, Type : "snake"}];
	
	document.addEventListener("DOMContentLoaded", function(event) { 
		SymbolChoice();
	  });
	function Setname(){keys.forEach(async key => {if (position == key.ID){document.getElementById("Nametime").value = key.Name;tileArray.push(key.Name);}});}
	function Commentary(webpage){localStorage.setItem("Comment", position);window.open(webpage);}
	function shakeDice(){document.getElementById("result").innerHTML = "";dieFaceSrc = document.getElementById("die");dieFaceSrc.src ="/Image/die.gif";	document.getElementById("_throw_").style.display = "block";document.getElementById("_again_").style.display = "none";document.getElementById("_shake_").style.display = "none";}
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
		Setname();
		document.getElementById("titlename").value = position;
		for( var i = 0; i < keys.length; i++ ) {
			if (position === keys[i].ID) {
				console.log(keys[i].ID);
				position = parseInt(keys[i].ToID);
				document.getElementById("titlename").value = position;
				if(keys[i].Type === "arrows"){
					total_ascend += 1;
					arrowArray.push(keys[i].Name);
				}
				else if(keys[i].Type === "snake"){
					total_descend += 1;
					snakeArray.push(keys[i].Name);
				}
				return;
			}
			
			else if(position == 68)
			{
				GameWon('statistics.html');
			}
		}
	}

	else if (die_Val == 2)
	{
		position += 2
		Setname();
		document.getElementById("titlename").value = position;
		for( var i = 0; i < keys.length; i++ ) {
			if (position === keys[i].ID) {
				console.log(keys[i].ID);
				position = parseInt(keys[i].ToID);
				document.getElementById("titlename").value = position;
				if(keys[i].Type === "arrows"){
					total_ascend += 1;
					arrowArray.push(keys[i].Name);
				}
				else if(keys[i].Type === "snake"){
					total_descend += 1;
					snakeArray.push(keys[i].Name);
				}
				return;
			}
			
			else if(position == 68)
			{
				GameWon('statistics.html');
			}
		}
	}
	else if (die_Val == 3)
	{
		position += 3
		Setname();
		document.getElementById("titlename").value = position;
		for( var i = 0; i < keys.length; i++ ) {
			if (position === keys[i].ID) {
				console.log(keys[i].ID);
				position = parseInt(keys[i].ToID);
				document.getElementById("titlename").value = position;
				if(keys[i].Type === "arrows"){
					total_ascend += 1;
					arrowArray.push(keys[i].Name);
				}
				else if(keys[i].Type === "snake"){
					total_descend += 1;
					snakeArray.push(keys[i].Name);
			
				}
				return;
			}
			
			else if(position == 68)
			{
				GameWon('statistics.html');
			}
		}

	}
	else if (die_Val == 4)
	{
		position += 4
		Setname();
		for( var i = 0; i < keys.length; i++ ) {
			if (position === keys[i].ID) {
				console.log(keys[i].ID);
				position = parseInt(keys[i].ToID);
				document.getElementById("titlename").value = position;
				if(keys[i].Type === "arrows"){
					total_ascend += 1;
					arrowArray.push(keys[i].Name);
				}
				else if(keys[i].Type === "snake"){
					total_descend += 1;
					snakeArray.push(keys[i].Name);
				}
				return;
			}
			else if(position == 68)
			{
				GameWon('statistics.html');
			}
		}
	}
	else if (die_Val == 5)
	{
		position += 5
		Setname();
		document.getElementById("titlename").value = position;
		for( var i = 0; i < keys.length; i++ ) {
			if (position === keys[i].ID) {
				console.log(keys[i].ID);
				position = parseInt(keys[i].ToID);
				document.getElementById("titlename").value = position;
				if(keys[i].Type === "arrows"){
					total_ascend += 1;
					arrowArray.push(keys[i].Name);
				}
				else if(keys[i].Type === "snake"){
					total_descend += 1;
					snakeArray.push(keys[i].Name);
				}
				return;
			}
			
			else if(position == 68)
			{
				GameWon('statistics.html');
			}
		}

	}
	else if (die_Val == 6)
	{
		position += 6
		Setname();
		document.getElementById("titlename").value = position;
		for( var i = 0; i < keys.length; i++ ) {
			if (position === keys[i].ID) {
				console.log(keys[i].ID);
				position = parseInt(keys[i].ToID);
				document.getElementById("titlename").value =position;
				if(keys[i].Type === "arrows"){
					total_ascend += 1;
					arrowArray.push(keys[i].Name);
				}
				else if(keys[i].Type === "snake"){
					total_descend += 1;
					snakeArray.push(keys[i].Name);
				}
				return;
			}
			
			else if(position == 68)
			{
				GameWon('statistics.html');
			}
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