import x from './module1'
import y from './module2'
import '../css/main.scss'

x()
y()
let a=0;
let time=setInterval(()=>{
    a++;
    if(a>=10){
        clearInterval(time);
        alert('welcome to new word');
    }
},500)