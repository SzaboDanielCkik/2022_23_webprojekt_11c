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
    {id:1,color:1, value:1},
    {id:2,color:1, value:2},
    {id:3,color:1, value:3},
    {id:4,color:1, value:4},
    {id:5,color:2, value:1},
    {id:6,color:2, value:2},
    {id:7,color:2, value:3},
    {id:8,color:2, value:4},
    {id:9,color:3, value:1},
    {id:10,color:3, value:2},
    {id:11,color:3, value:3},
    {id:12,color:3, value:4},
    {id:13,color:4, value:1},
    {id:14,color:4, value:2},
    {id:15,color:4, value:3},
    {id:16,color:4, value:4},
]

var jatekTer = document.getElementById("jatekTer");
var tabla = document.createElement("div");
var leftSide = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");

var cellak = [];

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


function Main()
{   
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
   
}

Main();

