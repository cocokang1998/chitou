/**
 * 
 */

 $('#accountProfile').on('click',function(e){
    $.ajax({
        type:'get',
        url:'getAccountProfile',
        dataType:'JSON',
        contentType:'application/json',
        success:function(data){
            $('#account1').val(data.username);
        }
    });
});

$('#toEC').on('click',function(e){
	var json = {};
	json.memberID = $('#memberID').val();
	json.booker = $('#booker').val();
	json.email = $('#email').val();
	json.phone = $('#phone').val();
	json.roomID = $('#roomID').val();
	json.roomName = $('#roomName').val();
	json.checkInDate = $('#checkInDate').val();
	json.checkOutDate = $('#checkOutDate').val();
	json.addBed = $('#addBed').val();
	json.numberOfPeople = $('#numberOfPeople').val();
	json.hotelName = $('#hotelName').val();
	json.totalAmount = $('#totalAmount').val();
	console.log(json);
	$.ajax({
		type:"POST",
		url:"getECPay",
		data:JSON.stringify(json),
		contentType:"application/json",
		success:function(data){
			document.write(data);
		}
	});
});