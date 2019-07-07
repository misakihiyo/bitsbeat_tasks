function mainFunction(){
    let frameval = 50;
    let timeinterval = 4300;
    let car=document.getElementById("car");    
    let a = '10%';
    let b = '45%';
    let c = '75%';
    let pos1,pos2;
    var score = 0;
    let gear =1;
    var random;
    let offcarbottom, offcarleft, mycarleft, mycartop;
    var obj ={mycarleft:"", mycartop:"", offcarleft:"", offcarbottom:""};
    let scorehtml = document.getElementById("score");
    let line1= document.getElementById("line1");
    let line2= document.getElementById("line2");
    let posfirst1 = 5;
    let restart = document.getElementById("restart");
     
    document.getElementById("restart").style.display="none";
    document.getElementById("highscore").innerHTML = localStorage.getItem("highscore");
    
    var lineinterval = setInterval(someframe1, frameval);
    function someframe1(){       
        
        if (posfirst1 == 80){
            posfirst1 =-55;            
                              
        }      
        
        else{
            posfirst1++;
            line1.style.top = posfirst1 +"%";
            line2.style.top = posfirst1 +"%";       
            
        }
    }

    var m = setInterval(function(){   
        random = Math.floor(Math.random() * (4-1)+1);    
        downcar(random);
                
    }, timeinterval);

    var p= setInterval(function(){   
        random2 = Math.floor(Math.random() * (4-1)+1);    
        downcar2(random2);        
    }, timeinterval+2000);

    function detectcollision(leftpos,bottompos,value){        
        if (value == 1){
            obj.offcarleft = leftpos;
            obj.offcarbottom = bottompos;
        }
        else{
            obj.mycarleft = leftpos;
            obj.mycartop = bottompos;
        }

        offcarbottom=parseInt(obj.offcarbottom);
        offcarleft = parseInt(obj.offcarleft);
        mycarleft = parseInt(obj.mycarleft);
        mycartop = parseInt(obj.mycartop);

        if ((mycarleft == offcarleft && offcarbottom == 19) ||
            (mycarleft == offcarleft+10 && offcarbottom <=19) ||
            (mycarleft+10 == offcarleft && offcarbottom <=19)
            
            ){
            console.log("collision");
            clearInterval(m);
            clearInterval(p);
            clearInterval(lineinterval);
            document.getElementById("restart").style.display = "block";
            document.getElementById("scorea").innerHTML = score;
            if (localStorage.getItem("highscore")<score){
                localStorage.setItem("highscore",score);
            }
        }       
    }
   
    document.addEventListener("keydown",function(e) {
        switch(e.which) {
            case 37:
                    //left
                if (car.style.left == b){
                    pos1=b;
                    pos2=a;
                    myMove(pos1,pos2);               
                    
                }            
                else if(car.style.left == c) {
                    pos1=c;
                    pos2=b;
                    myMove(pos1,pos2);         
                }
                else{
                    car.style.left = a;
                }         
                break;
            case 38:
                if (frameval>=0){
                    frameval = frameval -10;
                    timeinterval-=500;
                    gear = gear+1;
                    clearInterval(lineinterval);
                    lineinterval = setInterval(someframe1, frameval);
                    document.getElementById("gear").innerHTML= gear;
                }
                break;
            case 39:            
                if (car.style.left == b){
                    pos1=b;
                    pos2=c;
                    myMove(pos1,pos2);         
                }
                else if(car.style.left == a) {
                    pos1=a;
                    pos2=b;
                    myMove(pos1,pos2);         
                }
                else{
                    car.style.left = c;
                }           
                break;
            case 40:
                
                if (frameval<=50){
                frameval +=10;
                timeinterval+=500;
                gear = gear-1;
                clearInterval(lineinterval);
                lineinterval = setInterval(someframe1, frameval);
                document.getElementById("gear").innerHTML= gear;
                }
                break;
                
        }

                       
    });

    function downcar(random){       
        if (random == random2){
            if (random2 == 1){
                random = 3;
            }

            else{
                random = random - 1;
            }
        }
        thecar = 'car'+random;
        var leftpos;
        if (random == 1){
            leftpos = 10;
        }else if (random == 2 ){
            leftpos = 45;
        }else{leftpos = 75;}
        var downcar = document.getElementById(thecar);
        var id = setInterval(frame, frameval);
        downcar.style.display = "block";
        posfirst = 85;
        poslast = 5;
        function frame(){
            if (posfirst % 20 == 0){
                score++;
                scorehtml.innerHTML = score;
            }
            
            if (posfirst == poslast){
                clearInterval(id);
                downcar.style.bottom = "85%";
                downcar.style.display = "none";
                
            } 
            
            else{
                posfirst--;
                console.log("1", posfirst);
                downcar.style.bottom = posfirst +'%';  
                
            }

            detectcollision(leftpos,posfirst,1);
            
            
        } 


        return true;
    }  

    function downcar2(random2){       
        if (random2 == random){
            if (random == 3){
                random2 = 1;
            }

            else{
                random2 = random2 + 1;
            }
        }
        thecar2 = 'car'+random2;
        var leftpos2;
        if (random2 == 1){
            leftpos2 = 10;
        }else if (random2 == 2 ){
            leftpos2 = 45;
        }else{leftpos2 = 75;}
        var downcar2 = document.getElementById(thecar2);
        var id2 = setInterval(frame2, frameval);
        downcar2.style.display = "block";
        posfirst2 = 85;
        poslast2 = 5;
        function frame2(){
                        
            if (posfirst2 == poslast2){
                clearInterval(id2);
                downcar2.style.bottom = "85%";
                downcar2.style.display = "none";
                
            } 
            
            else{
                posfirst2--;
                console.log("2", posfirst2);
                downcar2.style.bottom = posfirst2 +'%';                  
            }

           detectcollision(leftpos2,posfirst2,1);
            
            
        } 


        return true;
    } 
    
    restart.addEventListener("click",function(){
        document.location = "index.html";
    });


    
       
    function myMove(a, b){    
        var id = setInterval(frame, 10);
        pos=parseInt(a.slice(0,2));
        pos2 = parseInt(b.slice(0,2));
           
        function frame(){
            if (pos == pos2){
                clearInterval(id);
            } 
            else if (pos > pos2){
                pos--;
                car.style.left = pos+'%';        
                
            }

            else{
                pos++;
                car.style.left = pos+'%';      
                
            }

            detectcollision(pos,10,0);           
        }               
        return true;    
    }

}


