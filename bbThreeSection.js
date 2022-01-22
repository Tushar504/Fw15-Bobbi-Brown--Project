 var newYearExtraCare= [
    {
        images:"https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_WinterSkincare_pc_1.jpg",
        names:"EXTRA CLEANSING BALM",
        cmnt:"\"This is a beautiful face wash- really balmy, hydrating and super luxorious.",
        artist:"-Cassandra Garcia, Global Pro Artist\""
    },
    {
        images:"https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_WinterSkincare_pc_2.jpg",
        names:"EXTRA REPAIR MOISTURE CREAM INTENSE",
        cmnt:"\"This repairing moisturizer penetrates the skin seamlessly and crates the prfect cushioned base for makeup.\"",
        artist:"-Cassandra Garcia, Global Pro Artist"
    },
    {
        images:"https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_WinterSkincare_pc_3.jpg",
        names:"EXTRA REPAIR EYE CREAM INTENSE",
        cmnt:"\"This rich eye cream cushions and plumps fine lines. It's super reparative.\"",
        artist:"-Cassandra Garcia, Global Pro Artist"
    },
    {
        images:"https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_WinterSkincare_pc_4.jpg",
        names:"EXTRA FACE OIL",
        cmnt:"\"This is one of my favourite products. It mimics the natural oils in the skin, making it a great boost in the winter time.\"",
        artist:"-Cassandra Garcia, Global Pro Artist"
    }
];

newYearExtraCare.map(function(dataset){
    var btmdiv= document.createElement("div");
    btmdiv.setAttribute("class","extracare");
    var pic= document.createElement("img");
    pic.setAttribute("src",dataset.images);
    var title= document.createElement("p");
    title.textContent= dataset.names;
    var comnt= document.createElement("p");
    comnt.textContent=dataset.cmnt;
    var artistman= document.createElement("p");
    artistman.textContent=dataset.artist;
    var btn= document.createElement("button");
    btn.setAttribute("class","shopbtn");
    btn.textContent='SHOP NOW'
    btmdiv.append(pic, title, comnt, artistman, btn);
    document.querySelectorAll(".btm")[1].append(btmdiv)
})