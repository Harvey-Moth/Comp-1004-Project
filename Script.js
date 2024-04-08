document.getElementById('toploginbutton').addEventListener('click',(event) => {
  
    var lvis = document.getElementById("Logincontent");
     
      lvis.style.display = "block";
      var hvis = document.getElementById("Homecontent");
      hvis.style.display = "none";

} )
document.getElementById('tophomebutton').addEventListener('click',(event) => {
  
  var hvis = document.getElementById("Homecontent");
    hvis.style.display = "block";
  var lvis = document.getElementById("Logincontent");
     
      lvis.style.display = "none";
})
