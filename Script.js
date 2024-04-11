
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}




var loginvis = document.getElementById("Loginaccountpage");
var acvis = document.getElementById("Submitnewacountpage");
var hvis = document.getElementById("Homecontent");
var lvis = document.getElementById("newpass");
var avis = document.getElementById("accessibilitysettings");
var savedvis = document.getElementById("Savedpass");
document.getElementById('submitnewpass').addEventListener('click',(event) => {
  
    
      lvis.style.display = "block";
      hvis.style.display = "none";
      avis.style.display = "none";
      acvis.style.display = "none";
      loginvis.style.display = "none";
      savedvis.style.display = "none";
      
} )
document.getElementById('tophomebutton').addEventListener('click',(event) => {
  
  
  hvis.style.display = "block";
  avis.style.display = "none";
  lvis.style.display = "none";
  acvis.style.display = "none";
  loginvis.style.display = "none";
  savedvis.style.display = "none";
})     

document.getElementById('accessibility').addEventListener('click',(event) => {
  
  avis.style.display = "block";   
  lvis.style.display = "none";
  hvis.style.display = "none";
  acvis.style.display = "none";
  loginvis.style.display = "none";
  savedvis.style.display = "none";
})

document.getElementById('Newwebsite').addEventListener('click',(event) => {
  
  
  acvis.style.display = "block";
  lvis.style.display = "none";
  hvis.style.display = "none";
  avis.style.display = "none";
  loginvis.style.display = "none";
  savedvis.style.display = "none";
})

document.getElementById('Loginpage').addEventListener('click',(event) => {
  
  
  loginvis.style.display = "block";
  acvis.style.display = "none";
  lvis.style.display = "none";
  hvis.style.display = "none";
  avis.style.display = "none";
  savedvis.style.display = "none";
})

document.getElementById('Savedpasswords').addEventListener('click',(event) => {
  
  savedvis.style.display = "block";
  loginvis.style.display = "none";
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
let foundname
function getusernames(username) {
foundname = JFdata.Users.find(Users => Users.Username === username);
displayaccounts();
}
/*function displaypasswords(username) {
console.log(username)
  
foundname = getusernames(username);
//let usersearch = "admin";
//let Users = Users.find(Users => Users.Username === usersearch);
if (foundname.Username == username) {
    let Savedsite = foundname.Savedsite.Siteusername; 
    console.log(Savedsite);
} else {
    console.log("User not found");
}
 console.log(foundname);
 } */
/* function grabsavedsitedata(username) {
  console.log(username);

  foundname = getusernames(username);
  if (foundname && foundname.Username == username) {
      if (foundname.SavedSite) {
          let Savedsite = foundname.SavedSite;
      } else {
          console.log("Savedsite is undefined");
      }
  } else {
      console.log("User not found");
  }
  console.log(foundname); 

}
*/

function displayaccounts() {
const accdiv = document.getElementById("Accountdisplay")
for(let i = 0; i < foundname.SavedSite.Siteusername.length; i++){
const usernamedisplay = document.createElement("ol")
usernamedisplay.textContent = `Username = ${foundname.SavedSite.Siteusername[i]}`;
accdiv.appendChild(usernamedisplay)
const passworddisplay = document.createElement("ol")
passworddisplay.textContent = `Password = ${foundname.SavedSite.Password[i]}`;
accdiv.appendChild(passworddisplay)
const Websitenamdis = document.createElement("ol")
Websitenamdis.textContent = `Website Name = ${foundname.SavedSite.WebsiteName[i]}`;
accdiv.appendChild(Websitenamdis)




}}


var Loginusername = document.getElementById("existuname").value;
var Loginpassword = document.getElementById("existpass").value;
function Loginbtn(){
  var Loginusername = document.getElementById("existuname").value;
  var Loginpassword = document.getElementById("existpass").value;
for(let i = 0; i < JFdata.Users.length; i++){
  console.log(Loginusername);
  console.log(Loginpassword);

    if(Loginusername === JFdata.Users[i].Username && Loginpassword === JFdata.Users[i].Password){
        
        
      var savedaccountnav = document.getElementById("Savedpasswords")
      var newpasswordnav = document.getElementById("Newwebsite")
      var hidecreateac = document.getElementById("submitnewpass")
      var hideloginpage = document.getElementById("Loginpage")
      var hideloginscreen = document.getElementById("Loginaccountpage")
      var showpassafterlogin = document.getElementById("Savedpass")
      savedaccountnav.style.display = "block";
      newpasswordnav.style.display = "block";
      hidecreateac.style.display = "none";
      hideloginpage.style.display = "none";
      hideloginscreen.style.display = "none";
      showpassafterlogin.style.display = "block";
      getusernames(Loginusername);
      
    
    
    
    }
}   
}


/*async function passwordhashing(password) {
    password  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
    password  = Array.from(new Uint8Array(password)).map(b => b.toString(16).padStart(2, '0')).join(''); //Adminspassword passkey13 are the two different passwords for the two different accounts before hashing.
    return password; */ //Decided against adding hashing.
  








//Passwrd = 9299fc3255aef89059446fd69c419e7b3dccf97f08ed831914469085bad580b0 = account is "admin"
//passwo1d = d077869f964b47ba14d7eeea0f69fb0c31bb1c8739e4c8d9a6897f4781db47b1 = account is "user one"
// Adminpassword = 17f6a9b48be6cfb28a05f25e5a8903a6b3975817a6a73115f24beddbde7edd15 =For account Adminsusername under the account admin
//passkey13 = 32dc7d6bcc5212b4b9b3b8e19156bb22225e516faabbfbca9fa1727f48f7ea92 = for the account myusername under the account user one 













