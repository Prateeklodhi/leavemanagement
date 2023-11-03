let i = 1
let len = 9
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
console.log(i);
if(i){
    if(i<0){
        i = Math.max(0,len+i);
    }
    
}else{
    i=0;
}