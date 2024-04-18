
function toggleDarkMode() {
  document.body.classList.toggle("dark"); //Function that toggles between the css for light and dark.
}


//This section controls the visibility of pages to ensure the CSS for the pages is hidden when needed, this allows for the navigation bar functionality.

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
//Function that when called, hides and displays the text in the passsword fields specified in the html.

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
//Checks to see if local storage is empty, if it is, it fetches the data from the JSON.
//If local storage is not empty we will use that instead as it contains the JSON data aswell.
 async function datafetch() {
  JFdata = JSON.parse(localStorage.getItem("Users"));
  if( JFdata == null){
  fetch('Datastorage.json')
  .then(response => response.json())
  .then(data =>
    {
      JFdata = data;
      localStorage.setItem("Users", JSON.stringify(JFdata));
    })
    .catch;
  }
}
//Creating the array that stores the JSON file data/ Local storage data.
let JFdata =[];
//Function that calls datafetch as an async to be sure the data is loaded.
async function Mainfunction(){

  await datafetch();
}

//Calling the main function and creating the variable foundname to store the data of the currently "logged in" user.
Mainfunction()
let foundname;
function getusernames(username) {
foundname = JFdata.Users.find(Users => Users.Username === username);
displayaccounts();
}

//This function displays savedsite information as an ordered list. It does this by first clearing the HTML and then redisplaying the HTML with the newest information.
//This ensures no errors occur when displaying the data.
function displayaccounts() {
const accdiv = document.getElementById("Accountdisplay");
accdiv.innerHTML = "";
for(let i = 0; i < foundname.SavedSite.Siteusername.length; i++){
const usernamedisplay = document.createElement("ol");
usernamedisplay.textContent = `Username = ${foundname.SavedSite.Siteusername[i]}`;
accdiv.appendChild(usernamedisplay);
const passworddisplay = document.createElement("ol");
passworddisplay.textContent = `Password = ${foundname.SavedSite.Password[i]}`;
accdiv.appendChild(passworddisplay);
const Websitenamdis = document.createElement("ol");
Websitenamdis.textContent = `Website Name = ${foundname.SavedSite.WebsiteName[i]}`;
accdiv.appendChild(Websitenamdis);
const Linebreak = document.createElement("p");
Linebreak.textContent = `-------------------------------------------------------------------------------------------------------------------------------------------------------------------`
accdiv.appendChild(Linebreak);
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
//Function to check if any of the input fields are empty, if they are it will alert the user, if they are not, it will run the function "Addingaccount".
function isempty() {
  if( document.getElementById("Webuname").value != "" && document.getElementById("Webpass").value != "" && document.getElementById("Wsite").value != "") {

  
Addingaccount();
  }
  else{
    alert("One or more fields are not valid or empty");
  }
}
//This function is called in the section above, this function is resposible for adding the account to Localstorge with some error handling.
   function Addingaccount(){
    var Usernamefound = false;
    for(let i = 0; i < foundname.SavedSite.Siteusername.length; i++) {
      
    
    if(foundname.SavedSite.WebsiteName[i] == document.getElementById("Wsite").value && foundname.SavedSite.Siteusername[i] == document.getElementById("Webuname").value){
    //This if statement ensures if the websitename and username are the same they cannot add the account.
    Usernamefound = true;
    count = i;
    
    }
    }
   if(Passwordstrength(document.getElementById("Webpass").value) == true && Usernamefound == false){ //

      foundname.SavedSite.WebsiteName.push(document.getElementById("Wsite").value)
      foundname.SavedSite.Siteusername.push(document.getElementById("Webuname").value)
      foundname.SavedSite.Password.push(document.getElementById("Webpass").value)
      localStorage.setItem("Users", JSON.stringify(JFdata));
      alert("Success")

   }
   else if(Usernamefound == true){
    alert("You have already used this username for this site");
   }
   else{
    alert("Passwords must contain at least 8 characters, at least one upper and lower case, at least one special character and at least one number");

   }
   displayaccounts();
  }
   
  




// Function to check if a username already exists and if not gets the inputs from the fields and inserts it into JFdata and Localstorage.
  function Makenewac(){
    var Usernamefound = false
    for(let i = 0; i < JFdata.Users.length; i++) {
      if(JFdata.Users[i].Username === document.getElementById("Uname").value){
        alert("This user already exists");
          Usernamefound = true;
        }
      
      }
      if(Usernamefound == false){
        var Userformat = 
        {
          "Username": document.getElementById("Uname").value,
         "Password": document.getElementById("Mpass").value,
         "SavedSite": {
            "Siteusername":[],
            "Password":[],
            "WebsiteName":[],
          }
          
}

        JFdata.Users.push(Userformat);
        localStorage.setItem("Users", JSON.stringify(JFdata));


        loginvis.style.display = "block";
        acvis.style.display = "none";
        lvis.style.display = "none";
        hvis.style.display = "none";
        avis.style.display = "none";
        savedvis.style.display = "none";
      }
      }
      var Websitefound = false;
      var count = 0;
      //This function is for updating the records by getting the value in the website input field and checking it against localstorage.
      function Updaterecord(){
        for(let i = 0; i < foundname.SavedSite.Siteusername.length; i++) {

        
        if(document.getElementById("Wsite").value == foundname.SavedSite.WebsiteName[i]){
        
        Websitefound = true;
        count = i;
        
        }
        }
       if(Passwordstrength(document.getElementById("Webpass").value) == true && Websitefound == true){

        foundname.SavedSite.Siteusername[count] = document.getElementById("Webuname").value; 
          foundname.SavedSite.Password[count] = document.getElementById("Webpass").value; 
          localStorage.setItem("Users", JSON.stringify(JFdata));
          alert("Success")
          displayaccounts();


       }
       else if(Websitefound == false){
        alert("No exising webisite found")
       }
       else{
        alert("Passwords must contain at least 8 characters, at least one upper and lower case, at least one special character and at least one number")

       }
      }

      
      
    // Makes sure the inputs in the password fields its applied to meet the requirements set to ensure it is a strong password.
    function Passwordstrength(password) {
      
      const Haslowercase = /[a-z]/.test(password);
      const Hasuppercase = /[A-Z]/.test(password);
      const Hasdigit = /\d/.test(password);
      const Hasspecial = /(?=.*[/?!@#$%^&*()_=+[{};:'"])/.test(password);
      const Minimumlength = password.length >= 8;
      return Haslowercase && Hasuppercase && Hasdigit && Hasspecial &&  Minimumlength;
      
     }
//This function exports the savedsite information to a JSON file.
     function Exportfunc() {
        var Anchortag = document.createElement('a');
        var Data  = JSON.stringify(foundname.SavedSite); 
        var Downloaddata = new Blob([Data], {type: 'application/json'});
        var Down = URL.createObjectURL(Downloaddata);
        Anchortag.href = Down;
        Anchortag.download = 'Accounts.json'; 
        Anchortag.click();
      }













