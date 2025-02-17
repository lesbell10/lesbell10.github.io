let RW = document.querySelector(".RW");
let C = document.querySelector(".C");
let LW = document.querySelector(".LW");
let RD = document.querySelector(".RD");
let LD = document.querySelector(".LD");

let imgRW = document.querySelector(".imgRW");
let imgC = document.querySelector(".imgC");
let imgLW = document.querySelector(".imgLW");
let imgRD = document.querySelector(".imgRD");
let imgLD = document.querySelector(".imgLD");

let sidepic = document.querySelector(".sidepic");
let player = document.querySelector(".player");

window.addEventListener("load", () => {

  imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471675@2x.jpg";
    
    RW.innerHTML = "Crosby <br> 93%";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/sidney-crosby-8471675";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    
    C.innerHTML = "McDavid <br> 95%";

    imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/connor-mcdavid-8478402";
  });
    
    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477492@2x.jpg";
    
    LW.innerHTML = "MacKinnon <br> 93%";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/nathan-mackinnon-8477492";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167@2x.jpg";
    
    RD.innerHTML = "Hedman <br> 92%";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/victor-hedman-8475167";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600@2x.jpg";

    LD.innerHTML = "Josi <br> 90%";

    imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/roman-josi-8474600";
  });
  
  sidepic.src = "https://wallpaperaccess.com/full/4716269.jpg";

  sidepic.addEventListener("click", (e) => {
    window.location = "https://en.wikipedia.org/wiki/Connor_McDavid";
  });

  player.textContent = "Connor McDavid";

  player.style.marginLeft = "675px" 

  if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "650px"
    }

});

element = document.querySelector(".clubs");

element.addEventListener("change", (e) => {
  let value = e.target.value;

  if (value === "Best Ratings") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471675@2x.jpg";
    
    RW.innerHTML = "Crosby <br> 93%";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/sidney-crosby-8471675";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    
    C.innerHTML = "McDavid <br> 95%";

    imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/connor-mcdavid-8478402";
  });
    
    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477492@2x.jpg";
    
    LW.innerHTML = "MacKinnon <br> 93%";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/nathan-mackinnon-8477492";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167@2x.jpg";
    
    RD.innerHTML = "Hedman <br> 92%";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/victor-hedman-8475167";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600@2x.jpg";

    LD.innerHTML = "Josi <br> 90%";

    imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/roman-josi-8474600";
  });

    sidepic.src = "https://wallpaperaccess.com/full/4716269.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Connor_McDavid";
    });

    player.textContent = "Connor McDavid";

    player.style.marginLeft = "675px" 

    if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "650px"
    }
  }

  if (value === "Most Points") {

    imgRW.src ="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476456.jpg";
    
    RW.innerHTML = "Huberdeau <br> 115 pts";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/jonathan-huberdeau-8476456";
  });

    imgC.src ="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    
    C.innerHTML = "McDavid  <br> 123 pts";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/connor-mcdavid-8478402";
  });

    imgLW.src ="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476346.jpg";
    
    LW.innerHTML = "Gaudreau <br> 115 pts";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/johnny-gaudreau-8476346";
  });

    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    
    RD.innerHTML = "Josi <br> 96 pts";

    imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/roman-josi-8474600";
  });

    imgLD.src ="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    
    LD.innerHTML = "Makar <br> 86 pts";

    imgLD.addEventListener("click", (e) => {
      window.location = "https://www.nhl.com/player/cale-makar-8480069";
        });

    sidepic.src =
      "https://besthqwallpapers.com/Uploads/29-12-2019/117186/thumb2-johnny-gaudreau-nhl-grunge-art-calgary-flames-hockey-stars.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Johnny_Gaudreau";
    });

    player.textContent = "Johnny Gaudreau";

    player.style.marginLeft = "650px"

  }

  if (value === "Most Goals") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934.jpg";
    
    RW.innerHTML = "Draisaitl <br> 55 g";

    imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/leon-draisaitl-8477934";
    });
    
    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479318.jpg";
    
    C.innerHTML = "Matthews <br> 60 g";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/auston-matthews-8479318";
  });
    
    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475184.jpg";

    LW.innerHTML = "Kreider <br> 52 g";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/chris-kreider-8475184";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    
    RD.innerHTML = "Josi <br> 23 g";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/roman-josi-8474600";
  });
    
    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    
    LD.innerHTML = "Makar <br> 28 g";

    imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/cale-makar-8480069";
  });
    
    sidepic.src =
      "https://mir-s3-cdn-cf.behance.net/projects/404/0caad9126284697.Y3JvcCwxMDgwLDg0NCwwLDE0Nw.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Auston_Matthews";
    });

    player.textContent = "Auston Matthews";

    player.style.marginLeft = "650px" 
  }

  if (value === "Most Assists") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476456.jpg";
    
    RW.innerHTML = "Huberdeau <br> 85 a";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/jonathan-huberdeau-8476456";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    
    C.innerHTML = "McDavid <br> 79 a";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/connor-mcdavid-8478402";
  });

    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476346.jpg";
    
    LW.innerHTML = "Gaudreau <br> 75 a";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/johnny-gaudreau-8476346";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    
    RD.innerHTML = "Josi <br> 73 a";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/roman-josi-8474600";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167.jpg";
    
    LD.innerHTML = "Hedman <br> 65 a";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/victor-hedman-8475167";
  });

    sidepic.src =
      "https://editorial01.shutterstock.com/preview/10189428o/2e22f7b2/Shutterstock_10189428o.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Jonathan_Huberdeau";
    });

    player.textContent = "Jonathan Huberdeau";
    
    player.style.marginLeft = "650px" 

    if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "600px"
    }

    if (window.innerWidth <= 800) { 
      player.style.marginLeft = "625px"
    }
  }

  if (value === "Power Play Points") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476468@2x.jpg";
    
    RW.innerHTML = "Miller <br> 38 pts";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/j-t-miller-8476468";
  });

    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    
    C.innerHTML = "McDavid <br> 44 pts";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/connor-mcdavid-8478402";
  });

    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934@2x.jpg";
    
    LW.innerHTML = "Draisaitl <br> 41 pts";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/leon-draisaitl-8477934";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167@2x.jpg";
    
    RD.innerHTML = "Hedman <br> 38 pts";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/victor-hedman-8475167";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    
    LD.innerHTML = "Josi <br> 37 pts";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/roman-josi-8474600";
  });

    sidepic.src ="https://besthqwallpapers.com/Uploads/25-3-2019/84954/thumb2-leon-draisaitl-4k-hockey-stars-edmonton-oilers-nhl.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Leon_Draisaitl";
    });

    
    player.textContent = "Leon Draisaitl";

    player.style.marginLeft = "675px" 

    if (window.innerWidth <= 600) { 
      player.style.marginLeft = "650px"
    }
  }

  if (value === "Plus/Minus") {

    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479314.jpg";
    
    RW.innerHTML = "Tkachuk <br> +57";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/matthew-tkachuk-8479314";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477496.jpg";
    
    C.innerHTML = "Lindholm <br> +61";
    
imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/elias-lindholm-8477496";
  });

    imgLW.src ="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476346.jpg";
    
    LW.innerHTML = "Gaudreau <br> +64";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/johnny-gaudreau-8476346";
  });
    
    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478038.jpg";
    
    RD.innerHTML = "Toews <br> +52";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/devon-toews-8478038";
  });

    imgLD.src ="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    
    LD.innerHTML = "Makar <br> +48";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/cale-makar-8480069";
  });

    sidepic.src ="https://wallpapers.com/images/high/colorado-avalanche-cale-makar-z2kixwygsaxw0hl9.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Cale_Makar";
    });

    
      player.textContent = "Cale Makar";
    player.style.marginLeft = "700px" 
    
    if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "675px"
    }
  }

  if (value === "Penalty Minutes") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479520.jpg";
    
    RW.innerHTML = "Duhaime <br> 122 min";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/brandon-duhaime-8479520";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474034.jpg";
    
    C.innerHTML = "Maroon <br> 134 min";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/pat-maroon-8474034";
  });
    
    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479661.jpg";
    
    LW.innerHTML = "Jeannot <br> 130 min";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/tanner-jeannot-8479661";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474697.jpg";
    
    RD.innerHTML = "Borowiecki <br> 151 min";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/mark-borowiecki-8474697";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475462.jpg";
    
    LD.innerHTML = "Gudas <br> 105 min";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/radko-gudas-8475462";
  });

    sidepic.src ="https://cms.nhl.bamgrid.com/images/photos/330841306/1024x576/cut.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Mark_Borowiecki";
    });
    
    player.textContent = "Mark Borowiecki";

    player.style.marginLeft = "650px" 
  }

  if (value === "Points per Game") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476453@2x.jpg";
    
    RW.innerHTML = "Kucherov <br> 1.47/g";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/nikita-kucherov-8476453";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    
    C.innerHTML = "McDavid <br> 1.54/g";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/connor-mcdavid-8478402";
  });

    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479318@2x.jpg";
    
    LW.innerHTML = "Matthews <br> 1.45/g";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/auston-matthews-8479318";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    
    RD.innerHTML = "Josi <br> 1.20/g";

    imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/roman-josi-8474600";
  });

    imgLD.src ="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    
    LD.innerHTML = "Makar <br> 1.12/g";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/cale-makar-8480069";
  });

    sidepic.src ="https://cdn.vox-cdn.com/thumbor/DlLg3a4FKkcUMz8uXV4Kz9fMtCI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/10583141/Kuch_100_Points_Graphic.png";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Nikita_Kucherov";
    });
    
    player.textContent = "Nikita Kucherov";

    player.style.marginLeft = "675px" 

    if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "650px"
    }
  }

  if (value === "Shorthanded goals") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481624@2x.jpg";
    
    RW.innerHTML = "Mikheyev <br> 4 g";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/ilya-mikheyev-8481624";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479675@2x.jpg";
    
    C.innerHTML = "Moore <br> 5 g";
  
    imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/trevor-moore-8479675";
    });
    
    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480029@2x.jpg";

    LW.innerHTML = "Formenton <br> 5 g";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/alex-formenton-8480029";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477498@2x.jpg";
    
    RD.innerHTML = "Nurse <br> 2 g";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/darnell-nurse-8477498";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470966@2x.jpg";
    
    LD.innerHTML = "Giordano <br> 2 g";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/mark-giordano-8470966";
  });
    
    sidepic.src ="https://cdn.vox-cdn.com/thumbor/WUHIISIj3nrMrZj5BfoWhQ0gT6o=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23195564/1366646697.jpg";

    sidepic.addEventListener("click", (e) => {

      window.location = "https://en.wikipedia.org/wiki/Alex_Formenton";
    });
    
    player.textContent = "Alex Formenton";

    player.style.marginLeft = "675px" 

    if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "650px"
    }
  }

  if (value === "Overtime Goals") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479339.jpg";
    
    RW.innerHTML = "Laine <br> 3 g";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/patrik-laine-8479339";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    
    C.innerHTML = "McDavid <br> 4 g";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/connor-mcdavid-8478402";
  });

    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479337.jpg";
    
    LW.innerHTML = "DeBrincat <br> 4 g";

    imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/alex-debrincat-8479337";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    
    RD.innerHTML = "Makar <br> 3 g";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/cale-makar-8480069";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477447.jpg";
    
    LD.innerHTML = "Theodore <br> 3 g";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/shea-theodore-8477447";
  });

    sidepic.src ="https://s.yimg.com/os/creatr-uploaded-images/2022-06/beb5f170-f108-11ec-beef-3b4887186f69";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Alex_DeBrincat";
    });
    
    player.textContent = "Alex DeBrincat";

    player.style.marginLeft = "700px"

    if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "650px"
    }
  }

  if (value === "Game Winning Goals") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474564.jpg";
    
    RW.innerHTML = "Stamkos <br> 11 g";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/steven-stamkos-8474564";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934.jpg";
    
    C.innerHTML = "Draisaitl <br> 11 g";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/leon-draisaitl-8477934";
  });

    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480027.jpg";

    LW.innerHTML = "Robertson <br> 11 g";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/jason-robertson-8480027";
  });

    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    
    RD.innerHTML = "Makar <br> 6 g";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/cale-makar-8480069";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475753.jpg";
    
    LD.innerHTML = "Faulk <br> 6 g";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/justin-faulk-8475753";
  });
    
    sidepic.src ="https://w0.peakpx.com/wallpaper/606/451/HD-wallpaper-steven-stamkos-hockey-players-tampa-bay-lightning-nhl-hockey-stars-steven-christopher-stamkos-hockey-neon-lights-usa.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Steven_Stamkos";
    });
    
    player.textContent = "Steven Stamkos";

    player.style.marginLeft = "675px" 
    
     if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "650px"
    }
  }

  if (value === "Most Shots") {
    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478414.jpg";
    
    RW.innerHTML = "Meier <br> 326 s";

    imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/timo-meier-8478414";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479318.jpg";
    
    C.innerHTML = "Matthews <br> 348 s";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/auston-matthews-8479318";
  });

    imgLW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471214.jpg";
    
    LW.innerHTML = "Ovechkin <br> 334 s";

imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/alex-ovechkin-8471214";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    
    RD.innerHTML = "Josi <br> 281 s";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/roman-josi-8474600";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    
    LD.innerHTML = "Makar <br> 240 s";

    imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/cale-makar-8480069";
  });

    sidepic.src = "https://wallpaperaccess.com/full/4989466.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Alexander_Ovechkin";
    });
    
    player.textContent = "Alexander Ovechkin";

    player.style.marginLeft = "650px" 

     if (window.innerWidth <= 1000) { 
      player.style.marginLeft = "625px"
    }
  }

  if (value === "Time on Ice per Game") {

    imgRW.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474141.jpg";

    RW.innerHTML = "Kane <br> 21:49/g";

imgRW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/patrick-kane-8474141";
  });

    imgC.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    
    C.innerHTML = "McDavid <br> 22:04/g";

imgC.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/connor-mcdavid-8478402";
  });

    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934.jpg";
    
    LW.innerHTML = "Draisaitl <br> 22:21/g";
    
imgLW.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/leon-draisaitl-8477934";
  });

    imgRD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477495.jpg";
    
    RD.innerHTML = "Jones <br> 26:13/g";

imgRD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/seth-jones-8477495";
  });

    imgLD.src = "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478469.jpg";
    
    LD.innerHTML = "Chabot <br> 26:12/g";

imgLD.addEventListener("click", (e) => {
    window.location = "https://www.nhl.com/player/thomas-chabot-8478469";
  });

    sidepic.src = "https://cdn.wallpapersafari.com/57/14/JhZANR.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Patrick_Kane";
    });
    
    player.textContent = "Patrick Kane";
    
    player.style.marginLeft = "675px" 

  }
});
