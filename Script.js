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
async function Mainfunction(){

  await datafetch();
}
let storedat = localStorage.getItem("Users");

function Registeruser() {

  var usernameinput1 = document.getElementById("Uname").value;
  var usernameinput2 = document.getElementById("Unamecheck").value;  
  var passwordinput = document.getElementById("Mpass").value;

  if(usernameinput1 === usernameinput2){

  for(let i = 0; i < JFdata.Users.length; i++) { 
    if(JFdata.Users[i].Username===usernameinput1)
    alert("This user already exits"); 
    console.log(JFdata.users[i]);
  }  



  
  }

} 
Mainfunction()
console.log(JFdata);
if(storedat) {

  JFdata = JSON.parse(localStorage.getItem("Users"));
}
console.log(JFdata);