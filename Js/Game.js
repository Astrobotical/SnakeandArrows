
var user_order = localStorage.getItem("UserOption");
var Avatar;
var Symbol1 = "Chakra";
var Symbol2 = "Shieldboi";

var totalSeconds = 0;
setInterval(setTime, 1000);
let Minutecounter = 0;
function setTime() {
  ++totalSeconds;
  if(Minutecounter == 0)
  {
	document.getElementById('Timer').innerHTML = totalSeconds +" Seconds";
  }
  else if(Minutecounter != 0)
  {
	document.getElementById('Timer').innerHTML = Minutecounter +" Min " + totalSeconds +" Seconds";
  }
 if(totalSeconds == 60)
  {
	  totalSeconds = 0;
	  Minutecounter++;
	  document.getElementById('Timer').innerHTML = "Minutes " + Minutecounter + ":" + totalSeconds;
  }else{}
 
  console.log(totalSeconds);
}


function SymChoice()
{
   if (user_order == "BOC")
{
  document.getElementById("Symname").value = Symbol1;
  
}
else if (user_order == "SB")
{
  document.getElementById("Symname").value = Symbol2;
  //document.getElementById("order").src ="Image/Yes.png"
}
}
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
	
	
	function Setname()
	{
		if (position == 1)
		{
			document.getElementById("Nametime").value = N1;
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 2)
		{
			document.getElementById("Nametime").value = N2;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 3)
		{
			document.getElementById("Nametime").value = N3;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 4)
		{
			document.getElementById("Nametime").value = N4;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 5)
		{
			document.getElementById("Nametime").value = N5;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 6)
		{
			document.getElementById("Nametime").value = N6;
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 7)
		{
			document.getElementById("Nametime").value = N7;
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 8)
		{
			document.getElementById("Nametime").value = N8;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position==9)
		{
			document.getElementById("Nametime").value = N9;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 10)
		{
			document.getElementById("Nametime").value = N10;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 11)
		{
			document.getElementById("Nametime").value = N11;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 12)
		{
			document.getElementById("Nametime").value = N12;
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 13)
		{
			document.getElementById("Nametime").value = N13;
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 14)
		{
			document.getElementById("Nametime").value = N14;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 15)
		{
			document.getElementById("Nametime").value = N15;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 16)
		{
			document.getElementById("Nametime").value = N16;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 17)
		{
			document.getElementById("Nametime").value = N17;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 18)
		{
			document.getElementById("Nametime").value = N18;
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 19)
		{
			document.getElementById("Nametime").value = N19;
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 20)
		{
			document.getElementById("Nametime").value = N20;
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 21)
		{
			document.getElementById("Nametime").value = "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 22)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 23)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 24)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 25)
		{
			document.getElementById("Nametime").value = "Genesis";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 26)
		{
			document.getElementById("Nametime").value = "Illusion";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 27)
		{
			document.getElementById("Nametime").value = "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 28)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 29)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 30)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 31)
		{
			document.getElementById("Nametime").value = "Genesis";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 32)
		{
			document.getElementById("Nametime").value = "Illusion";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 33)
		{
			document.getElementById("Nametime").value = "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 34)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 35)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 36)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 37)
		{
			document.getElementById("Nametime").value = "Genesis";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 38)
		{
			document.getElementById("Nametime").value = "Illusion";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 39)
		{
			document.getElementById("Nametime").value = "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 40)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 41)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 42)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 43)
		{
			document.getElementById("Nametime").value = "Genesis";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 44)
		{
			document.getElementById("Nametime").value = "Illusion";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 45)
		{
			document.getElementById("Nametime").value = "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 46)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 47)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 48)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 49)
		{
			document.getElementById("Nametime").value = "Genesis";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 50)
		{
			document.getElementById("Nametime").value = "Illusion";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 51)
		{
			document.getElementById("Nametime").value = "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 52)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 53)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 54)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 55)
		{
			document.getElementById("Nametime").value = "Genesis";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 56)
		{
			document.getElementById("Nametime").value = "Illusion";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 57)
		{
			document.getElementById("Nametime").value = "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 58)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 59)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 60)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 61)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 62)
		{
			document.getElementById("Nametime").value = "Genesis";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 63)
		{
			document.getElementById("Nametime").value = "Illusion";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 64)
		{
			document.getElementById("Nametime").value= "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 65)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 66)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 67)
		{
			document.getElementById("Nametime").value = "Delusions";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 68)
		{
			document.getElementById("Nametime").value = "Genesis";
			tileArray.push(document.getElementById("Nametime").value);
		}
		else if (position == 69)
		{
			document.getElementById("Nametime").value = "Illusion";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 70)
		{
			document.getElementById("Nametime").value = "Anger";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 71)
		{
			document.getElementById("Nametime").value = "Greed";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
		else if (position == 72)
		{
			document.getElementById("Nametime").value = "Physical plane";
			tileArray.push(document.getElementById("Nametime").value);
		}
	
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