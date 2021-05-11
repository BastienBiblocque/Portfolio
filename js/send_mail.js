let send = document.getElementById('send_button');
let nom = document.getElementById('input_nom');
let mail = document.getElementById('input_mail');
let message = document.getElementById('input_message');


send.onclick = function show_menu(){
    var data = {
        service_id: 'service_4vx25ya',
        template_id: 'template_qtoekd7',
        user_id: 'user_kGYk7rifXChf4tCLue5Vq',
        template_params: {
            'from_name' : nom.value,
            'message': message.value,
            'mail' : 'test',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Votre message a été envoyé.');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    }); 
}