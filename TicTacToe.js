window.onload = function(){
    var felder = document.getElementsByClassName("Feld");
    console.log(felder);
    var bilder = ["Red_X.svg.png", "Gelber_Punkt.svg.png"]
    var body = document.getElementsByTagName("body")[0];
    var bSpieler1 = document.getElementsByClassName("Spieler1")[0];
    var bSpieler2 = document.getElementsByClassName("Spieler2")[0];
    var neuesSpiel = document.getElementsByClassName("neuesSpiel")[0];
    var afeld11 = 0;
    var afeld12 = 0;
    var afeld13 = 0;
    var afeld21 = 0;
    var afeld22 = 0;
    var afeld23 = 0;
    var afeld31 = 0;
    var afeld32 = 0;
    var afeld33 = 0;
    var bfeld11 = 0;
    var bfeld12 = 0;
    var bfeld13 = 0;
    var bfeld21 = 0;
    var bfeld22 = 0;
    var bfeld23 = 0;
    var bfeld31 = 0;
    var bfeld32 = 0;
    var bfeld33 = 0;
    var p;

    for (let index = 0; index < felder.length; index++) {
        felder[index].addEventListener("click", function () {
            felder[index].style.backgroundColor = "#363635";
            p = document.createElement('p');
            p.innerHTML = "Drücke Spieler1 oder Spieler2";
            p.className = "textspiel";
            body.appendChild(p);
            
            
            bSpieler1.addEventListener("click", sp1);
            function sp1 (){
                if (felder[index] == felder[0]) {
                    afeld11 = 11;
                }
                if (felder[index] == felder[1]) {
                    afeld12 = 12;
                }
                if (felder[index] == felder[2]) {
                    afeld13 = 13;
                }
                if (felder[index] == felder[3]) {
                    afeld21 = 21;
                }
                if (felder[index] == felder[4]) {
                    afeld22 = 22;
                }
                if (felder[index] == felder[5]) {
                    afeld23 = 23;
                }
                if (felder[index] == felder[6]) {
                    afeld31 = 31;
                }
                if (felder[index] == felder[7]) {
                    afeld32 = 32;
                }
                if (felder[index] == felder[8]) {
                    afeld33 = 33;
                }
                body.removeChild(p);
                const myImg = document.createElement('img');
                myImg.src = "Red_X.svg.png";
                myImg.className = "Kreuz11";
                felder[index].appendChild(myImg);
                bSpieler1.removeEventListener("click", sp1);
                bSpieler2.removeEventListener("click", sp2);
                felder[index].style.backgroundColor = "#afafaf";
                felder[index].style.width = "160px";
                felder[index].style.height = "160px";
            
                if (afeld11 == 11 && afeld12 == 12 && afeld13 == 13 || afeld11 == 11 && afeld21 == 21 && afeld31 == 31 || afeld11 == 11 && afeld21 == 21 && afeld31 == 31 || afeld11 == 11 && afeld22 == 22 && afeld33 == 33 || afeld12 == 12 && afeld22 == 22 && afeld32 == 32 ||afeld13 == 13 && afeld23 == 23 && afeld33 == 33 ||afeld21 == 21 && afeld22 == 22 && afeld23 == 23 ||afeld31 == 31 && afeld32 == 32 && afeld33 == 33 || afeld13 == 13 && afeld22 == 22 && afeld31 == 31) {
                    alert("Spieler1 hat gewonnen!");
                }
            }
            

            bSpieler2.addEventListener("click", sp2);
            function sp2 (){
                if (felder[index] == felder[0]) {
                    bfeld11 = 11;
                }
                if (felder[index] == felder[1]) {
                    bfeld12 = 12;
                }
                if (felder[index] == felder[2]) {
                    bfeld13 = 13;
                }
                if (felder[index] == felder[3]) {
                    bfeld21 = 21;
                }
                if (felder[index] == felder[4]) {
                    bfeld22 = 22;
                }
                if (felder[index] == felder[5]) {
                    bfeld23 = 23;
                }
                if (felder[index] == felder[6]) {
                    bfeld31 = 31;
                }
                if (felder[index] == felder[7]) {
                    bfeld32 = 32;
                }
                if (felder[index] == felder[8]) {
                    bfeld33 = 33;
                }
                body.removeChild(p);
                const myImg = document.createElement('img');
                myImg.src = "Gelber_Punkt.svg.png";
                myImg.className = "Kreis11";
                felder[index].appendChild(myImg);
                bSpieler1.removeEventListener("click", sp1);
                bSpieler2.removeEventListener("click", sp2);
                felder[index].style.backgroundColor = "#afafaf";
                felder[index].setAttribute("style","width:160px");
                felder[index].setAttribute("style","height:160px");
                if (bfeld11 == 11 && bfeld12 == 12 && bfeld13 == 13 ||bfeld11 == 11 && bfeld21 == 21 && bfeld31 == 31 || bfeld11 == 11 && bfeld21 == 21 && bfeld31 == 31||bfeld11 == 11 && bfeld22 == 22 && bfeld33 == 33 || bfeld12 == 12 && bfeld22 == 22 && bfeld32 == 32 || bfeld13 == 13 && bfeld23 == 23 && bfeld33 == 33 || bfeld21 == 21 && bfeld22 == 22 && bfeld23 == 23 || bfeld31 == 31 && bfeld32 == 32 && bfeld33 == 33 || bfeld13 == 13 && bfeld22 == 22 && bfeld31 == 31) {
                    alert("Spieler2 hat gewonnen!");
                }
            }  
        });    
        
        }
    }  