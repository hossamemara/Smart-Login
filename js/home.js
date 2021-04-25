welcome_message=document.querySelector('#welcome-message')
var msg=new URLSearchParams(location.search)

welcome_message.innerHTML='Welcome '+msg.get('ms');