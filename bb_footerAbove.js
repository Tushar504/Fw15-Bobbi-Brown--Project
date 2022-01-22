 var lastAboveFooter=[
    {
        images:"https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_03.jpg",
        names:"CHAT NOW",
        details:"Chat with a makeup artist to get product reccomendations",
        btn:"CHAT NOW"
    },
    {
        images:"https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_05.jpg",
        names:"FREE SHIPPING",
        details:"Get free shipping on all orders $65+. Or join Bobbi Brown Club to get free shipping on all orders.",
        btn:"LEARN MORE"
    },
    {
        images:"https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_07.jpg",
        names:"WE WANT YOU TO LOVE IT",
        details:"That's why we offer free shipping and returns on all foundations, correctors, concealers, and powders.",
        btn:"LEARN MORE"
    },
    {
        images:"https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_09.jpg",
        names:"EXCLUSIVE OFFERS",
        details:"Special somethings, just for you.",
        btn:"GET OFFERS"
    }
];

lastAboveFooter.map(function (lastfour){
    var div1= document.createElement("div");
    div1.setAttribute("class","lastbox");
    var pic= document.createElement("img");
    pic.setAttribute("src",lastfour.images);
    var title= document.createElement("p");
    title.textContent= lastfour.names;
    var comnt= document.createElement("p");
    comnt.textContent=lastfour.details;
    var btn= document.createElement("a");
    btn.setAttribute("class","lastbtn");
    btn.setAttribute("href","#");
    btn.textContent=lastfour.btn;
    div1.append(pic, title, comnt, btn);
    document.querySelector("#lastpart").append(div1);
})