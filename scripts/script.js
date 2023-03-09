$(document).ready(function(){
	//hiding total amount tag initially
	$('#total_amount').hide()


	//form validation 

	$('#form_validate').validate({
		rules:{
			select_dropdown:{
				required:true,
			},
			adults:{
				required:true,
				number:true,
				max:15,

			},
			kids:{
				required:true,
				number:true,
				max:20,
			}
		},
		messages:{
			adults:{
				max:"only 15 tickets can be booked at a time"

			},
			kids:{
				max:"only 20 tickets can be booked at a time"
			}
		}
	})
		//writing event for 
	$('#form_validate').submit(function(e){
		e.preventDefault()
		var adults = $("#adults").val()
		var kids = $('#kids').val()
		var amount = 0;
		var class_type = $('#select_dropdown').val()
		if(class_type=="silver")
		{
			var adult_amount = parseInt(adults)*parseInt(50);
			var kids_amount = parseInt(kids)*parseInt(25);
			var total_amount = parseInt(adult_amount)+parseInt(kids_amount);
		}
		else if(class_type=="gold")
		{
			var adult_amount = parseInt(adults)*parseInt(100);
			var kids_amount = parseInt(kids)*parseInt(50);
			var total_amount = parseInt(adult_amount)+parseInt(kids_amount);
		}
		else if(class_type=="platinum")
		{
			var adult_amount = parseInt(adults)*parseInt(200);
			var kids_amount = parseInt(kids)*parseInt(100);
			var total_amount = parseInt(adult_amount)+parseInt(kids_amount);
		}
		else{
			total_amount = false;
		}
		if(total_amount)
		{
			$('#total_amount').append(total_amount)
			$('#total_amount').show()
		}
		

		
	})
})