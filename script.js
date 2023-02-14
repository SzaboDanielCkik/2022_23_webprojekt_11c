
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
        var velhelyszam = Math.floor(Math.random()*29+1);
        var hely = document.getElementById(velhelyszam);
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
        kep.src = "img/tornyok/toronyPiros"+i+".png";
        kartyakTablan.push(kep);
    }
    for(var i = 1; i < 4; i++)
    {
        var kep = document.createElement("img");
        kep.src = "img/tornyok/toronySarga"+i+".png";
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
        console.log(r1+" "+r2);
        var sv = kartyakTablan[r1];
        kartyakTablan[r1] = kartyakTablan[r2];
        kartyakTablan[r2] = sv;
    }
    console.log(kartyakTablan);
}

function TablaFeltoltes()
{
    KartyaFeltoltesSorban();
    KartyaKeveres();
    KartyaKihelyezesTablara();
}

function Main()
{
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    //KartyakatTablabaGeneral(5);
    TablaFeltoltes();
}

Main();