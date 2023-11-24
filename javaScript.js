
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $(".header-nav").css("background" , "#0C0C0C");
        }
  
        else{
            $(".header-nav").css("background" , "transparent");  	
        }
    });

  })

function validateForm() {
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var phoneNumber = document.getElementById('phoneNumber').value;
            var email = document.getElementById('email').value;
            var enquiry = document.getElementById('enquiry').value;
        
            document.getElementById('firstNameError').innerHTML = firstName === '' ? 'Please enter your first name.' : '';
            document.getElementById('lastNameError').innerHTML = lastName === '' ? 'Please enter your last name.' : '';
            document.getElementById('phoneNumberError').innerHTML = phoneNumber === '' ? 'Please enter your mobile number.' : '';
            document.getElementById('emailError').innerHTML = email === '' ? 'Please enter your email address.' : '';
            document.getElementById('enquiryError').innerHTML = enquiry === '' ? 'Please enter your enquiry.' : '';
        
            // If any field is empty, prevent form submission
            if (firstName === '' || lastName === '' || phoneNumber === '' || email === '' || enquiry === '') {
              return false;
            }
        
            // Otherwise, allow form submission
            return true;
}

