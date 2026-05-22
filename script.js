function tampilPNG(){
    let gambarPNG = '<img class="gambar" src="gambarPNG.png" /> <br />';
    document.getElementById("kontenPNG").innerHTML = gambarPNG;
}

function sembunyiPNG(){
    let kosong = "";
    document.getElementById("kontenPNG").innerHTML = kosong;
}

function tampilJPG(){
    let gambarJPG = '<img class="gambar" src="gambarJPG.jpg" /> <br />';
    document.getElementById("kontenJPG").innerHTML = gambarJPG;
}

function sembunyiJPG(){
    let kosong = "";
    document.getElementById("kontenJPG").innerHTML = kosong;
}

function tampilSVG(){
    let gambarSVG = '<img class="gambar" src="gambarSVG.svg" /> <br />';
    document.getElementById("kontenSVG").innerHTML = gambarSVG;
}

function sembunyiSVG(){
    let kosong = "";
    document.getElementById("kontenSVG").innerHTML = kosong;
}