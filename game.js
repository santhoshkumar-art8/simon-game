let color=['red','blue','yellow','green'];

let a=[];
let b=[];

let started=false;
let level=0;
$(document).keypress(function(){
if(!started){
  $('#level-title').html("level "+level);
  nextsequence();
  started=true;
}
});

$('.btn').click(function(){
let usercolor = $(this).attr('id');
a.push(usercolor);
music(usercolor);
animation(usercolor);
check(a.length-1);

});

function check(cuurentlevel){
  if(b[cuurentlevel]===a[cuurentlevel]){
    if(b.length===a.length){
      setTimeout(function(){
        nextsequence();
      },1000);
      
    }
  }
  else{
    music('wrong');
    $('body').addClass('game-over');
    $('#level-title').text("Game over enter any key to restart");
    setTimeout(function(){
$('body').removeClass('game-over');
    },200);
    startover();
  }
}



function nextsequence(){
  a=[];
  level++;
  $('#level-title').html('level '+level);
  let random=Math.floor(Math.random()*4);
  let autocolor=color[random];
  b.push(autocolor);
  $('#'+autocolor).fadeIn(100).fadeOut(100).fadeIn(100);
  music(autocolor);
}

function animation(currentcolor){
  $('#'+currentcolor).addClass('pressed');
  setTimeout(function(){
$('#'+currentcolor).removeClass('pressed');
  },100);
}

function music(name){
  let audio=new Audio("music/"+name+".mp3");
  audio.play();
}

function startover(){
  level=0;
  b=[];
  started=false;
}

