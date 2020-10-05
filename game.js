var p1=prompt("Please Enter player1 Name","player1");
var p2=prompt("Please Enter player2 Name","player2");
if(p1==""||p1==null){
    p1="Player1";
}
if(p2==""||p2==null){
    p2="Player2";
}
alert("Welcome "+p1+" And "+p2);
var t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,t8=0,t9=0,statu=0,a,b,c,d,e,f,g,h,i,j=0;
function ti1(){
    if(t1==0){t1=1;j=j+1;
    if(statu==0){statu=1;a="X";
    document.getElementById("t1").value="X";
    document.getElementById("t1").style.color="white";
    document.getElementById("t1").style.backgroundColor="lightskyblue";}
    else{
        statu=0;a="O";
        document.getElementById("t1").value="O";
        document.getElementById("t1").style.color="lightskyblue";
        document.getElementById("t1").style.backgroundColor="white";
    }}result();
}
function ti2(){
    if(t2==0){t2=1;j=j+1;
    if(statu==0){statu=1;b="X";
    document.getElementById("t2").value="X";
    document.getElementById("t2").style.color="white";
    document.getElementById("t2").style.backgroundColor="lightskyblue";}
    else{
        statu=0;b="O";
        document.getElementById("t2").value="O";
        document.getElementById("t2").style.color="lightskyblue";
        document.getElementById("t2").style.backgroundColor="white";
    }}result();}
    
    function ti3(){
        if(t3==0){t3=1;j=j+1;
        if(statu==0){statu=4;c="X";
        document.getElementById("t3").value="X";
        document.getElementById("t3").style.color="white";
        document.getElementById("t3").style.backgroundColor="lightskyblue";}
        else{
            statu=0;c="O";
            document.getElementById("t3").value="O";
            document.getElementById("t3").style.color="lightskyblue";
            document.getElementById("t3").style.backgroundColor="white";
        }}result();
    }
    function ti4(){
        if(t4==0){t4=1;j=j+1;
        if(statu==0){statu=4;d="X"
        document.getElementById("t4").value="X";
        document.getElementById("t4").style.color="white";
        document.getElementById("t4").style.backgroundColor="lightskyblue";}
        else{
            statu=0;d="O";
            document.getElementById("t4").value="O";
            document.getElementById("t4").style.color="lightskyblue";
            document.getElementById("t4").style.backgroundColor="white";
        }}result();
    }
    function ti5(){
        if(t5==0){t5=1;j=j+1;
        if(statu==0){statu=4;e="X";
        document.getElementById("t5").value="X";
        document.getElementById("t5").style.color="white";
        document.getElementById("t5").style.backgroundColor="lightskyblue";}
        else{
            statu=0;e="O";
            document.getElementById("t5").value="O";
            document.getElementById("t5").style.color="lightskyblue";
            document.getElementById("t5").style.backgroundColor="white";
        }}result();
    }
    function ti6(){
        if(t6==0){t6=1;j=j+1;
        if(statu==0){statu=1;f="X";
        document.getElementById("t6").value="X";
        document.getElementById("t6").style.color="white";
        document.getElementById("t6").style.backgroundColor="lightskyblue";}
        else{
            statu=0;f="O";
            document.getElementById("t6").value="O";
            document.getElementById("t6").style.color="lightskyblue";
            document.getElementById("t6").style.backgroundColor="white";
        }}result();
    }
    function ti7(){
        if(t7==0){t7=1;j=j+1;
        if(statu==0){statu=1;g="X";
        document.getElementById("t7").value="X";
        document.getElementById("t7").style.color="white";
        document.getElementById("t7").style.backgroundColor="lightskyblue";}
        else{
            statu=0;g="O";
            document.getElementById("t7").value="O";
            document.getElementById("t7").style.color="lightskyblue";
            document.getElementById("t7").style.backgroundColor="white";
        }}result();}
        
        function ti8(){
            if(t8==0){t8=1;j=j+1;
            if(statu==0){statu=1;h="X";
            document.getElementById("t8").value="X";
            document.getElementById("t8").style.color="white";
            document.getElementById("t8").style.backgroundColor="lightskyblue";}
            else{
                statu=0;
                document.getElementById("t8").value="O";h="O";
                document.getElementById("t8").style.color="lightskyblue";
                document.getElementById("t8").style.backgroundColor="white";
            }}result();
        }
        function ti9(){
            if(t9==0){t9=1;j=j+1;
            if(statu==0){statu=1;
            document.getElementById("t9").value="X";i="X";
            document.getElementById("t9").style.color="white";
            document.getElementById("t9").style.backgroundColor="lightskyblue";}
            else{
                statu=0;
                document.getElementById("t9").value="O";i="O";
                document.getElementById("t9").style.color="lightskyblue";
                document.getElementById("t9").style.backgroundColor="white";
            }}result();
        }
function result(){
    console.log(a,b,c,d,e,f,g,h,i,j);
    console.log(typeof(a),typeof(b),typeof(c));
    if(j>9){
        document.getElementById("h1").innerHTML="Draw game ";
        document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1;
        return;
        
    }
    if(t1==1&&t2==1&&t2==t3&&t3==t4&&t5==t6&&t7==t8&&t9==1){
        document.getElementById("h1").innerHTML="Game over ";
        document.getElementById("myNav").style.height = "100%";
    }
    if(a==b&&a==c&&c=="X"){
        document.getElementById("h1").innerHTML="Winner is "+p1;
        document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return; 
    }
    if(a==b&&a==c&&c=="O"){
       document.getElementById("h1").innerHTML="Winner is "+p2;
       document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(d==e&&e==f&&f=="X"){
        document.getElementById("h1").innerHTML="Winner is "+p1;
        document.getElementById("myNav").style.height = "100%";
      
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(d==e&&e==f&&f=="O"){
       document.getElementById("h1").innerHTML="Winner is "+p2;
       document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(g==i&&h==i&&i=="X"){
        document.getElementById("h1").innerHTML="Winner is "+p1;
        document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(g==i&&h==i&&i=="O"){
       document.getElementById("h1").innerHTML="Winner is "+p2;
      document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(a==d&&d==g&&g=="X"){
        document.getElementById("h1").innerHTML="Winner is "+p1;
        document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(a==d&&d==g&&g=="O"){
       document.getElementById("h1").innerHTML="Winner is "+p2;
      document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(b==e&&e==h&&h=="X"){
        document.getElementById("h1").innerHTML="Winner is "+p1;
        document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(b==e&&e==h&&h=="O"){
       document.getElementById("h1").innerHTML="Winner is "+p2;
       document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(i==c&&c==f&&f=="X"){
        document.getElementById("h1").innerHTML="Winner is "+p1;
        document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(i==c&&c==f&&f=="O"){
       document.getElementById("h1").innerHTML="Winner is "+p2;
       document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(c==e&&e==g&&g=="X"){
        document.getElementById("h1").innerHTML="Winner is "+p1;
        document.getElementById("myNav").style.height = "100%";
         t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(c==e&&e==g&&g=="O"){
       document.getElementById("h1").innerHTML="Winner is "+p2;
       document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(a==i&&i==e&&e=="X"){
        document.getElementById("h1").innerHTML="Winner is "+p1;
        document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
    if(a==i&&i==e&&e=="O"){
       document.getElementById("h1").innerHTML="Winner is "+p2;
       document.getElementById("myNav").style.height = "100%";
        t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=1; return;
    }
}
function restart(){
    document.getElementById("t9").value='\u2663';
    document.getElementById("t9").style.color="black";
    document.getElementById("t9").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    document.getElementById("t8").value='\u2663';
    document.getElementById("t8").style.color="black";
    document.getElementById("t8").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    document.getElementById("t7").value='\u2663';
    document.getElementById("t7").style.color="black";
    document.getElementById("t7").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    document.getElementById("t6").value='\u2663';
    document.getElementById("t6").style.color="black";
    document.getElementById("t6").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    document.getElementById("t5").value='\u2663';
    document.getElementById("t5").style.color="black";
    document.getElementById("t5").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    document.getElementById("t4").value='\u2663';
    document.getElementById("t4").style.color="black";
    document.getElementById("t4").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    document.getElementById("t3").value='\u2663';
    document.getElementById("t3").style.color="black";
    document.getElementById("t3").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    document.getElementById("t2").value='\u2663';
    document.getElementById("t2").style.color="black";
    document.getElementById("t2").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    document.getElementById("t1").value='\u2663';
    document.getElementById("t1").style.color="black";
    document.getElementById("t1").style.backgroundColor='rgb(' + 244 + ',' + 248 + ',' + 244 + ')';
    t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=0;j=0;
    a="1";
    b="2";
    c="3";
    d="4";
    f="6";
    e="5";
    g="7";
    h="8";
    i="9";
    statu=0;
    console.log(a,b,c,d,e,f,g,h,i,j);
    console.log(typeof(a),typeof(b),typeof(c));
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }