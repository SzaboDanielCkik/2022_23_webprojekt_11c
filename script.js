/*var objektum = {
    szam1: 34,
    szam2: 23,
    id: 0,
    ertek: "Zöldvár4",
    Torol: Torol(),
    Szomszedok: [234,535,5235,45]
}

function Torol()
{    
    console.log("töröl");
}

console.log(objektum.szam1);
console.log(objektum.Szomszedok[0]);*/


var jatekTer = document.getElementById("jatekTer");
var tabla = document.createElement("div");
var leftSide = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");

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

function Main()
{
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    KartyakatTablabaGeneral(5);
}

Main();