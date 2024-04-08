document.getElementById('submitnewpass').addEventListener('click',(event) => {
  
    var lvis = document.getElementById("newpass");
     
      lvis.style.display = "block";
      var hvis = document.getElementById("Homecontent");
      hvis.style.display = "none";

} )
document.getElementById('tophomebutton').addEventListener('click',(event) => {
  
  var hvis = document.getElementById("Homecontent");
    hvis.style.display = "block";
  var lvis = document.getElementById("newpass");
     
      lvis.style.display = "none";
})

function Passwordvis(Passwordvisibility) {
  let Passvis = document.getElementById(Passwordvisibility);
  if (Passvis.type === "password")
  {
    Passvis.type = "text";
  }
  else
  {
    Passvis.type = "password";
  }

}

async function datafetch()
{
  fetch('Datastorage.json')
  .then(response => response.json())
  .then(data =>
    {
      JFdata = data;
      localStorage.setItem("Users", JSON.stringify(JFdata));
      console.log(JFdata)
    })
    .catch;
  
}

let JFdata =[]
datafetch();


