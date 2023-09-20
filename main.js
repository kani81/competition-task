var a= ["anna","beth","cara"];
let result=a.map(function(e,c){
    if(c==0){
        document.write("gold winnwear:"+e+"<br>"); 
    }
    else if(c==1){
        document.write("silver winnwear:"+e+"<br>");
    }
    else if(c==2){
        document.write("bronze winnwear:"+e+"<br>");
    }
   
})
