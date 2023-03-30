function validation(){
  
    var name= document.getElementById("name");
    var email= document.getElementById("email");
    var subject= document.getElementById("subject");
    var message= document.getElementById("meassage");
    
    if(name.value==""){
        alert("please enter your name")
        document.form1.name.focus();
        return false;
      }
   if(email.value==""){
      alert("please enter your email")
      document.form1.email.focus();
      return false;
    }
  
    if(subject.value==""){
      alert("please enter the subject")
      document.form1.subject.focus();
      return false;
    }
  
    if(message.value==""){
      alert("please give your message")
      document.form1.message.focus();
      return false;
    }
  
    
    return true;
  }
  