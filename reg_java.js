document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registrationForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please enter matching passwords.");
        return;
      }
  
      var confirmed = confirm("Are you sure you want to submit the form?");
  
      if (confirmed) {
        form.submit();
      } else {
        console.log("Form submission cancelled.");
      }
    });
});
