function signin_hide()
{
     var x = document.getElementById('Signin');
     if (x.style.display === "none") {
       x.style.display = "block";
     } else {
       x.style.display = "none";
     }
   }

function signin_show()
{
    document.getElementsByClassName('Signin').hidden = false
}
