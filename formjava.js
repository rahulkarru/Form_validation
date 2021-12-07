function validateForm() {
	var name1=document.getElementById("fname").value;
	var name2=document.getElementById("lname").value;
	var emailId=document.getElementById("emailid").value;
	var pw1=document.getElementById("pswd1").value;
	var pw2=document.getElementById("pswd2").value;
	var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (name1=="") {
	console.log("1");
	document.getElementById("fmsg").innerHTML="**Fill the first name";
	return false;
}
if (name2=="") {
	console.log("2");
	document.getElementById("fmsg").innerHTML="";
	document.getElementById("lmsg").innerHTML="**Fill the last name";
	return false;
}
if (emailId=="") {
	console.log("3");
	document.getElementById("lmsg").innerHTML="";
	document.getElementById("emsg").innerHTML="**Enter email id";
	return false;
}

// if (!regex.match(emailId)) {
// 	console.log("4");
// 	document.getElementById("emsg").innerHTML="**Invalid email Id";
// 	return false;
// }
if (pw1=="") {
	console.log("5");
	document.getElementById("emsg").innerHTML="";
	document.getElementById("pmsg").innerHTML="**Fill the password please!";
	return false;
}

if (pw2=="") {
	console.log("6");
	document.getElementById("pmsg").innerHTML="";
	document.getElementById("cpmsg").innerHTML="**Enter the password please!";
	return false;
}
if (pw1!=pw2) {
	console.log("7");
	document.getElementById("cpmsg").innerHTML="**Passwords doesn't match";
	return false;
}
else{
	console.log("11");
   alert("Data entered successfully.");
   document.write("java script form has been submitted successfully");
   return true;
}
}