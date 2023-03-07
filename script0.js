var kartyaAdatok = [
    {id:1,value:-3,sign:''},
    {id:2,value:2,sign:''},
    {id:3,value:5,sign:''},
    {id:4,value:4,sign:''},
    {id:5,value:3,sign:''},
    {id:6,value:0,sign:'pap'},
    {id:7,value:-6,sign:''},
    {id:8,value:6,sign:''},
    {id:9,value:0,sign:'taliga'},
    {id:10,value:2,sign:''},
    {id:11,value:0,sign:'hegy'},
    {id:12,value:-5,sign:''},
    {id:13,value:4,sign:''},
    {id:14,value:0,sign:'sarkany'},
    {id:15,value:5,sign:''},
    {id:16,value:6,sign:''},
    {id:17,value:-4,sign:''},
    {id:18,value:1,sign:''},
    {id:19,value:-1,sign:''},
    {id:20,value:-2,sign:''},
    {id:21,value:1,sign:''},
    {id:22,value:3,sign:''},
    {id:23,value:0,sign:'hegy'}
	

];
var varAdatok = [
    {id:1,value:1, hp:1},
    {id:2,value:1, hp:2},
    {id:3,value:1, hp:3},
    {id:4,value:1, hp:4},
    {id:5,value:2, hp:1},
    {id:6,value:2, hp:2},
    {id:7,value:2, hp:3},
    {id:8,value:2, hp:4},
    {id:9,value:3, hp:1},
    {id:10,value:3, hp:2},
    {id:11,value:3, hp:3},
    {id:12,value:3, hp:4},
    {id:13,value:4, hp:1},
    {id:14,value:4, hp:2},
    {id:15,value:4, hp:3},
    {id:16,value:4, hp:4},
    {id:17,value:5, hp:1},
    {id:18,value:5, hp:2},
    {id:19,value:5, hp:3},
    {id:20,value:5, hp:4}
]

var jatekTer = document.getElementById("jatekTer");
var tabla = document.createElement("div");
var leftSide = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");

var kartyakTablan = [];

function JatekTerBetoltese()
{
    leftSide.appendChild(kartyaBox);
    leftSide.appendChild(pontBox);
    jatekTer.appendChild(leftSide);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);
    
    kartyaBox.innerHTML="kartya box";
    pontBox.innerHTML = "pontok";
    korokBox.innerHTML= "korok";
}

function JatekTerElrendezese()
{
    leftSide.id = "leftside";
    kartyaBox.id = "kartyabox";
    pontBox.id = "pontbox";
    tabla.id = "tabla";
    korokBox.id = "korokbox";
}

function TablaGeneralasa()
{
    var k = 0;
    for(var i = 0; i<5; i++)
    {
        var sorDiv=document.createElement("div");
        sorDiv.classList += " sordiv";
        for(var j = 0; j<6; j++)
        {
            var oszlopDiv = document.createElement("div");
            //oszlopDiv.innerHTML = "X";
            oszlopDiv.classList += " oszlopdiv";
            oszlopDiv.id = k;
            k++;
            sorDiv.appendChild(oszlopDiv);

        }
        tabla.appendChild(sorDiv);
    }
}

function KartyakatTablabaGeneral(db)
{
    //Egy kártyát kiválaszt és elhelyez az első mezőben
    //A kártya elhelyezése egy véletlen helyre
    //db képet helyezzen el véletlen helyre
    //nem ismétlődhet a kép id alapján és a hely sem

    for(var i = 0; i<db; i++)
    {
        var velkartyaszam = Math.floor(Math.random()*23+1);
        var kep1 = document.createElement("img");
        kep1.src = "img/kartyak/kartya"+velkartyaszam+".png";
        var velhelyszam = Math.floor(Math.random()*30);
        var hely = document.getElementById(velhelyszam);
        hely.value = kartyaAdatok[velhelyszam];
        hely.appendChild(kep1);
        //Házi feladat - dizájnolás
        //Csináld meg, hogy ne legyen ismétlődés a helyek és számok között
    }
}

function  KartyaFeltoltesSorban(){
    kartyakTablan = [];
    for(var i = 1; i < 24; i++)
    {
        var kep = document.createElement("img");
        kep.src = "img/kartyak/kartya"+i+".png";
        kartyakTablan.push(kep);
    }
    for(var i = 1; i < 5; i++)
    {
        var kep = document.createElement("img");
        kep.src = "img/tornyok/torony_3_"+i+".png";
        kartyakTablan.push(kep);
    }
    for(var i = 1; i < 4; i++)
    {
        var kep = document.createElement("img");
        kep.src = "img/tornyok/torony_4_"+i+".png";
        kartyakTablan.push(kep);
    }    
}

function KartyaKihelyezesTablara()
{
    for(var i = 0; i<kartyakTablan.length; i++)
    {
        var cella = document.getElementById(i);
        cella.appendChild(kartyakTablan[i]);
    }
}

function KartyaKeveres()
{
    for(var i = 0; i<200; i++)
    {
        var r1 = Math.floor(Math.random()*30);
        var r2 = Math.floor(Math.random()*30);
        //console.log(r1+" "+r2);
        var sv = kartyakTablan[r1];
        kartyakTablan[r1] = kartyakTablan[r2];
        kartyakTablan[r2] = sv;
    }
    //console.log(kartyakTablan);
}

function TablaFeltoltes()
{
    KartyaFeltoltesSorban();
    KartyaKeveres();
    KartyaKihelyezesTablara();
}

function ErtekSzamolas()
{
    var sorOsszeg = [];
    var oszlopOsszeg = [];
    for(var i = 0; i<kartyakTablan.length; i++)
    {
        var aktCella = document.getElementById(i);
        console.log(aktCella.id);
        sorOsszeg[i / 6] += kartyaAdatok[aktCella.id].value;
        oszlopOsszeg[i % 6] += kartyaAdatok[aktCella.id].value; 
    }
    var bekezdes = document.createElement("p");
    for(var i = 0; i<sorOsszeg.length; i++)
        bekezdes.innerHTML += sorOsszeg[i] +" ";
    bekezdes += "<br>";
    for(var i = 0; i<oszlopOsszeg.length; i++)
        bekezdes.innerHTML += oszlopOsszeg[i] +" ";
    jatekTer.appendChild(bekezdes);

}

function Main()
{
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    //KartyakatTablabaGeneral(5);
    TablaFeltoltes();
    ErtekSzamolas();
}

Main();

