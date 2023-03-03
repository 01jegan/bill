let form=document.querySelector("form");
		form.addEventListener('submit',function(e){
		e.preventDefault();

			let money=parseInt(document.getElementById('money').value);
			let tips=parseInt(document.getElementById('tips').value);
			let tota=document.getElementById('tota');
			let totalamount=document.getElementById('totalamount');
			let btn=document.getElementById('btn');
			let reset=document.getElementById('reset');

	         
	     
	     if((money==" ")||(money<0)||(isNAN(money))){
	     	reset.innerHTML="ENTER YOUR COORECT AMOUND";
	     	}

	      else if((tips==" ")||(tips<0)||(isNAN(tips))){
	     	reset.innerHTML="ENTER YOUR COORECT AMOUND"}

	     	else { let cash=money*(tips/100);
	         tota.value=cash;
	         totalamount.value=money+cash;
			 }
	 }
	 );
