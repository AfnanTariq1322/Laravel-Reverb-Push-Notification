import './bootstrap';

window.Echo.channel('public-messages').listen('MessageSent',(event)=>{
    console.log('Event Received',event);
    showNotification(event.message);
});


function showNotification(message){
    let toast = document.createElement('div');
    toast.innerText = message;
    toast.style.cssText= 
    `background: #333;
     color: #fff;
     padding: 10px 20px;
     border-radius: 5px;
     position:relative;
     margin-bottom:10px;
     box-shadow: 0 0 10px rgba(0,0,0,1);  
    `;
    let toastContainer= document.getElementById('toast-container');
    toastContainer.appendChild(toast);
    setTimeout(()=>{
        toast.style.opacity= '0';
        setTimeout(()=>toast.remove(),500);
    },3000);

}