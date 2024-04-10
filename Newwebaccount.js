var Loginusername = document.getElementById("existuname").value;
var Loginpassword = document.getElementById("existpass").value;
function Loginbtn(){

for(let i = 0; i < JFdata.Users.length; i++){

    if(Loginusername === JFdata.Users[i].Username && Loginpassword === JFdata.Users[i].Password){
        
        
    
    
    
    
    }
}   


async function passwordhashing(password) {
    password  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
    password  = Array.from(new Uint8Array(password)).map(b => b.toString(16).padStart(2, '0')).join(''); //Adminspassword passkey13 are the two different passwords for the two different accounts before hashing.
    return password;
  }




}



//Passwrd = 9299fc3255aef89059446fd69c419e7b3dccf97f08ed831914469085bad580b0 = account is "admin"
//passwo1d = d077869f964b47ba14d7eeea0f69fb0c31bb1c8739e4c8d9a6897f4781db47b1 = account is "user one"
// Adminpassword = 17f6a9b48be6cfb28a05f25e5a8903a6b3975817a6a73115f24beddbde7edd15 =For account Adminsusername under the account admin
//passkey13 = 32dc7d6bcc5212b4b9b3b8e19156bb22225e516faabbfbca9fa1727f48f7ea92 = for the account myusername under the account user one 