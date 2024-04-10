
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}




var loginvis = document.getElementById("Loginaccountpage");
var acvis = document.getElementById("Submitnewacountpage");
var hvis = document.getElementById("Homecontent");
var lvis = document.getElementById("newpass");
var avis = document.getElementById("accessibilitysettings");
document.getElementById('submitnewpass').addEventListener('click',(event) => {
  
    
      lvis.style.display = "block";
      hvis.style.display = "none";
      avis.style.display = "none";
      acvis.style.display = "none";
      loginvis.style.display = "none";
      
} )
document.getElementById('tophomebutton').addEventListener('click',(event) => {
  
  
  hvis.style.display = "block";
  avis.style.display = "none";
  lvis.style.display = "none";
  acvis.style.display = "none";
  loginvis.style.display = "none";
})     

document.getElementById('accessibility').addEventListener('click',(event) => {
  
  avis.style.display = "block";   
  lvis.style.display = "none";
  hvis.style.display = "none";
  acvis.style.display = "none";
  loginvis.style.display = "none";
})

document.getElementById('Newwebsite').addEventListener('click',(event) => {
  
  
  acvis.style.display = "block";
  lvis.style.display = "none";
  hvis.style.display = "none";
  avis.style.display = "none";
  loginvis.style.display = "none";

})

document.getElementById('Loginpage').addEventListener('click',(event) => {
  
  
  loginvis.style.display = "block";
  acvis.style.display = "none";
  lvis.style.display = "none";
  hvis.style.display = "none";
  avis.style.display = "none";

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
  var Exsistingusername = false
  if(usernameinput1 === usernameinput2){

  for(let i = 0; i < JFdata.Users.length; i++) { 
    if(JFdata.Users[i].Username===usernameinput1) {
    alert("This user already exits"); 
    console.log(JFdata.users[i]);
    Exsistingusername = true
    }
  }  
  



  
  }

} 
Mainfunction()
console.log(JFdata);
if(storedat) {

  JFdata = JSON.parse(localStorage.getItem("Users"));
}
console.log(JFdata);


