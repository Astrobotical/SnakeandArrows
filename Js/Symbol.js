function selection(webapge){
  window.open(webapge);
  var Firstsym =document.getElementById("BOC").checked;
  var Secondsym =document.getElementById("SB").checked;
  
  if(Firstsym == true)
      localStorage.setItem("UserOption","Chakra");
  else if(Secondsym == true)
      localStorage.setItem("UserOption","Shieldboi");
}
