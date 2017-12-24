function validate()
	{
		var x = document.register.name.value;
		if(x=="")
		{
			alert("Name cannot be left Empty");
			return false;
		}
		x = document.register.email.value;
		var emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
		var ematch=x.match(emailPat);
		if (ematch == null) 
		{
    			alert("Your email address seems incorrect. Please try again.");
    			return false;
		}
		x = document.register.number.value;
		if(x.length<10)
		{
			alert("Enter a valid Mobile Number");
			return false;
		}
		x = document.register.dob.value;
		if(x=="")
		{
			alert("Enter a proper Date of Birth");
			return false;
		}
		x = document.register.college.value;
		if(x=="")
		{
			alert("Enter your College Name");
			return false;
		}
		x = document.register.eid.value;
		if(x=="")
		{
			alert("Enter a valid Enantra ID");
			return false;
		}
		alert("Thank your for Signing up for the Enantra Brand Manager Program 2018. Please Check your Inbox/Spam for Further Details.");

	}