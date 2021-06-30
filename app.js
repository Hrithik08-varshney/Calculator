const bracket_open=document.getElementById('(');
const bracket_close=document.getElementById(')');
const remainder=document.getElementById('%');
const CE=document.getElementById('CE');
const seven=document.getElementById('7');
const eight=document.getElementById('8');
const nine=document.getElementById('9');
const divide=document.getElementById('/');
const four=document.getElementById('4');
const five=document.getElementById('5');
const six=document.getElementById('6');
const x=document.getElementById('x');
const one=document.getElementById('1');
const two=document.getElementById('2');
const three=document.getElementById('3');
const minus=document.getElementById('-');
const zero=document.getElementById('0');
const dot=document.getElementById('.');
const equal=document.getElementById('=');
const sum=document.getElementById('+');
const input=document.querySelector('.insert');
const operator=document.querySelector('.operator');
bracket_open.addEventListener("click",function(){
  operator.innerHTML=`(`;
})
bracket_close.addEventListener("click",function(){
    operator.innerHTML=`)`;
  })
sum.addEventListener("click",addition=()=>{
   operator.innerHTML=`+`;
   let sum=0;
   let s=parseFloat(input.value);
   sum=sum+s;
   input.value="";
   equal.addEventListener("click",function(){
      if(input.value=="")
      {
      input.value=`${sum}`;
      }
      else{
        var new_val=parseFloat(input.value);
        input.value=`${sum+new_val}`;
      }
    })
 })
minus.addEventListener("click",function(){
    operator.innerHTML=`-`;
   let subt=0;
   let sub=parseFloat(input.value);
   subt=subt+sub;
   input.value="";
   equal.addEventListener("click",function(){
      if(input.value=="")
      {
      input.value=`${subt}`;
      }
      else{
        var new_val_sub=parseFloat(input.value);
        input.value=`${subt-new_val_sub}`;
      }
    })
  })
equal.addEventListener("click",function(){
    operator.innerHTML=`=`;
  })
x.addEventListener("click",function(){
    operator.innerHTML=`x`;
    let multi=1;
    let m=parseFloat(input.value);
    multi=multi*m;
    input.value="";
    equal.addEventListener("click",function(){
       if(input.value=="")
       {
       input.value=`${multi}`;
       }
       else{
         var new_val_mult=parseFloat(input.value);
         input.value=`${multi*new_val_mult}`;
       }
     })
  })
divide.addEventListener("click",function(){
    operator.innerHTML=`/`;
    let div=parseFloat(input.value);
    input.value="";
    equal.addEventListener("click",function(){
       if(input.value=="")
       {
       input.value=`${div}`;
       }
       else{
         var new_val_div=parseFloat(input.value);
         input.value=`${div/new_val_div}`;
       }
     })
  })
CE.addEventListener("click",function(){
   location.reload();
  })
remainder.addEventListener("click",function(){
    operator.innerHTML=`%`;
    let rem=parseFloat(input.value);
    input.value="";
    equal.addEventListener("click",function(){
       if(input.value=="")
       {
       input.value=`${rem}`;
       }
       else{
         var new_val_rem=parseFloat(input.value);
         input.value=`${rem%new_val_rem}`;
       }
     })
  })
seven.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}7`);
})
eight.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}8`);
})
nine.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}9`);
})
four.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}4`);
})
five.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}5`);
})
six.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}6`);
})
one.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}1`);
})
two.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}2`);
})
three.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}3`);
})
zero.addEventListener("click",function(){
    var val=input.value;
    input.value=parseFloat(`${val}0`);
})
dot.addEventListener("click",function(){
    var val=input.value;
    input.value=`${val}.`;
})