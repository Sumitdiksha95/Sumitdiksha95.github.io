var body  = document.querySelector('body') 
var btn_101  = document.querySelector('.btn-101')
var value =  5 ;
var countdown_container = document.querySelector('.countdown-container ')
var overlay_container = document.querySelector('.overlay-container')

var tap_me_btn = document.querySelector('.tap_me_btn')
var heart_container = document.querySelector('.heart-container')
var insert_headphone_container = document.querySelector('.insert_headphone_container')
var raise_volume_container = document.querySelector('.raise_volume_container')
var final_container = document.querySelector('.final-message')

var yes_headphones = document.querySelector('.yes-headphone')
var yes_raise      = document.querySelector('.yes-raise')
var final_tap      = document.querySelector('.final_tap')


btn_101.addEventListener('click', ()=>{
   btn_101.style.display = 'none' ;

    setTimeout(() => {
          countdown_container.style.display = 'block' ;
         var myvar = setInterval(() => {
                value -= 1  ; 
               
                countdown_container.innerHTML = value ;

                if(value == 0 )
                {
                    clearInterval(myvar) ;
                    countdown_container.style.display = 'none' ;
                    setTimeout(() => {
                            heart_container.style.display = 'block'; 
                    }, 2000);
                }
         }, 1000);


       
   }, 2000);

})


tap_me_btn.addEventListener('click', ()=>{
    heart_container.style.display = 'none' ;
    insert_headphone_container.style.display = 'block';
})

yes_headphones.addEventListener('click', ()=>{
   insert_headphone_container.style.display = 'none'
   raise_volume_container.style.display = 'block'
})


yes_raise.addEventListener('click', ()=>{
   raise_volume_container.style.display = 'none';
   final_container.style.display = 'block'
})

final_tap.addEventListener('click', ()=>{
    final_container.style.display = 'none';
   setTimeout(() => {
    overlay_container.style.display = 'none ' ;   
     var x = document.createElement('audio')
     x.setAttribute('autoplay', 'autoplay')
     x.setAttribute('src', 'Pagal - Gurnam Bhullar (DjPunjab.Com).mp3')
      document.body.appendChild(x);
   }, 2000);
})

