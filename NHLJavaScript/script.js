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
  imgRW.src =
    "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471675@2x.jpg";
  RW.innerHTML = "Crosby <br> 93%";
  imgC.src =
    "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
  C.innerHTML = "McDavid <br> 95%";
  imgLW.src =
    "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477492@2x.jpg";
  LW.innerHTML = "MacKinnon <br> 93%";
  imgRD.src =
    "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167@2x.jpg";
  RD.innerHTML = "Hedman <br> 92%";
  imgLD.src =
    "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
  LD.innerHTML = "Yosi <br> 90%";

  sidepic.src = "https://wallpaperaccess.com/full/4716269.jpg";

  sidepic.addEventListener("click", (e) => {
    window.location = "https://en.wikipedia.org/wiki/Connor_McDavid";
  });

  player.textContent = "Connor McDavid";
});

element = document.querySelector(".clubs");

element.addEventListener("change", (e) => {
  let value = e.target.value;

  if (value === "Best Ratings") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471675@2x.jpg";
    RW.innerHTML = "Crosby <br> 93%";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    C.innerHTML = "McDavid <br> 95%";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477492@2x.jpg";
    LW.innerHTML = "MacKinnon <br> 93%";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167@2x.jpg";
    RD.innerHTML = "Hedman <br> 92%";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    LD.innerHTML = "Yosi <br> 90%";

    sidepic.src = "https://wallpaperaccess.com/full/4716269.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Connor_McDavid";
    });

    player.textContent = "Connor McDavid";
  }

  if (value === "Most Points") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476456.jpg";
    RW.innerHTML = "Huberdeau <br> 115 pts";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    C.innerHTML = "McDavid  <br> 123 pts";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476346.jpg";
    LW.innerHTML = "Gaudreau <br> 115 pts";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    RD.innerHTML = "Yosi <br> 96 pts";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    LD.innerHTML = "Makar <br> 86 pts";

    sidepic.src =
      "https://besthqwallpapers.com/Uploads/29-12-2019/117186/thumb2-johnny-gaudreau-nhl-grunge-art-calgary-flames-hockey-stars.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Johnny_Gaudreau";
    });

    player.textContent = "Johnny Gaudreau";
  }

  if (value === "Most Goals") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934.jpg";
    RW.innerHTML = "Draisaitl <br> 55 g";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479318.jpg";
    C.innerHTML = "Matthews <br> 60 g";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475184.jpg";
    LW.innerHTML = "Kreider <br> 52 g";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    RD.innerHTML = "Yosi <br> 23 g";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    LD.innerHTML = "Makar <br> 28 g";

    sidepic.src =
      "https://mir-s3-cdn-cf.behance.net/projects/404/0caad9126284697.Y3JvcCwxMDgwLDg0NCwwLDE0Nw.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Auston_Matthews";
    });

    player.textContent = "Auston Matthews";
  }

  if (value === "Most Assists") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476456.jpg";
    RW.innerHTML = "Huberdeau <br> 85 a";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    C.innerHTML = "McDavid <br> 79 a";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476346.jpg";
    LW.innerHTML = "Gaudreau <br> 75 a";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    RD.innerHTML = "Yosi <br> 73 a";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167.jpg";
    LD.innerHTML = "Hedman <br> 65 a";

    sidepic.src =
      "https://editorial01.shutterstock.com/preview/10189428o/2e22f7b2/Shutterstock_10189428o.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Jonathan_Huberdeau";
    });

    player.textContent = "Jonathan Huberdeau";
  }

  if (value === "Power Play Points") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476468@2x.jpg";
    RW.innerHTML = "Miller <br> 38 pts";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    C.innerHTML = "McDavid <br> 44 pts";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934@2x.jpg";
    LW.innerHTML = "Draisaitl <br> 41 pts";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167@2x.jpg";
    RD.innerHTML = "Hedman <br> 38 pts";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    LD.innerHTML = "Josi <br> 37 pts";

    sidepic.src =
      "https://besthqwallpapers.com/Uploads/25-3-2019/84954/thumb2-leon-draisaitl-4k-hockey-stars-edmonton-oilers-nhl.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Leon_Draisaitl";
    });

    
      player.textContent = "Leon Draisaitl";
  }

  if (value === "Plus/Minus") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479314.jpg";
    RW.innerHTML = "Tkachuk <br> +57";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477496.jpg";
    C.innerHTML = "Lindholm <br> +61";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476346.jpg";
    LW.innerHTML = "Gaudreau <br> +64";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478038.jpg";
    RD.innerHTML = "Toews <br> +52";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    LD.innerHTML = "Makar <br> +48";

    sidepic.src =
      "https://wallpapers.com/images/high/colorado-avalanche-cale-makar-z2kixwygsaxw0hl9.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Cale_Makar";
    });

    
      player.textContent = "Cale Makar";
  }

  if (value === "Penalty Minutes") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479520.jpg";
    RW.innerHTML = "Duhaime <br> 122 min";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474034.jpg";
    C.innerHTML = "Maroon <br> 134 min";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479661.jpg";
    LW.innerHTML = "Jeannot <br> 130 min";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474697.jpg";
    RD.innerHTML = "Borowiecki <br> 151 min";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475462.jpg";
    LD.innerHTML = "Gudas <br> 105 min";

    sidepic.src =
      "https://cms.nhl.bamgrid.com/images/photos/330841306/1024x576/cut.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Mark_Borowiecki";
    });
    
      player.textContent = "Mark Borowiecki";
  }

  if (value === "Points per Game") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476453@2x.jpg";
    RW.innerHTML = "Kucherov <br> 1.47/g";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    C.innerHTML = "McDavid <br> 1.54/g";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479318@2x.jpg";
    LW.innerHTML = "Matthews <br> 1.45/g";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    RD.innerHTML = "Yosi <br> 1.20/g";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    LD.innerHTML = "Makar <br> 1.12/g";

    sidepic.src =
      "https://cdn.vox-cdn.com/thumbor/DlLg3a4FKkcUMz8uXV4Kz9fMtCI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/10583141/Kuch_100_Points_Graphic.png";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Nikita_Kucherov";
    });
    
      player.textContent = "Nikita Kucherov";
  }

  if (value === "Shorthanded goals") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481624@2x.jpg";
    RW.innerHTML = "Mikheyev <br> 4 g";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479675@2x.jpg";
    C.innerHTML = "Moore <br> 5 g";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480029@2x.jpg";
    LW.innerHTML = "Formenton <br> 5 g";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477498@2x.jpg";
    RD.innerHTML = "Nurse <br> 2 g";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470966@2x.jpg";
    LD.innerHTML = "Giordano <br> 2 g";

    sidepic.src =
      "https://cdn.vox-cdn.com/thumbor/WUHIISIj3nrMrZj5BfoWhQ0gT6o=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23195564/1366646697.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Alex_Formenton";
    });
    
      player.textContent = "Alex Formenton";
  }

  if (value === "Overtime Goals") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479339.jpg";
    RW.innerHTML = "Laine <br> 3 g";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    C.innerHTML = "McDavid <br> 4 g";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479337.jpg";
    LW.innerHTML = "DeBrincat <br> 4 g";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    RD.innerHTML = "Makar <br> 3 g";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477447.jpg";
    LD.innerHTML = "Theodore <br> 3 g";

    sidepic.src =
      "https://s.yimg.com/os/creatr-uploaded-images/2022-06/beb5f170-f108-11ec-beef-3b4887186f69";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Alex_DeBrincat";
    });
    
      player.textContent = "Alex DeBrincat";
  }

  if (value === "Game Winning Goals") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474564.jpg";
    RW.innerHTML = "Stamkos <br> 11 g";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934.jpg";
    C.innerHTML = "Draisaitl <br> 11 g";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480027.jpg";
    LW.innerHTML = "Robertson <br> 11 g";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    RD.innerHTML = "Makar <br> 6 g";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475753.jpg";
    LD.innerHTML = "Faulk <br> 6 g";

    sidepic.src =
      "https://w0.peakpx.com/wallpaper/606/451/HD-wallpaper-steven-stamkos-hockey-players-tampa-bay-lightning-nhl-hockey-stars-steven-christopher-stamkos-hockey-neon-lights-usa.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Steven_Stamkos";
    });
    
      player.textContent = "Steven Stamkos";
  }

  if (value === "Most Shots") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478414.jpg";
    RW.innerHTML = "Meier <br> 326 s";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479318.jpg";
    C.innerHTML = "Matthews <br> 348 s";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471214.jpg";
    LW.innerHTML = "Ovechkin <br> 334 s";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600.jpg";
    RD.innerHTML = "Yosi <br> 281 s";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069.jpg";
    LD.innerHTML = "Makar <br> 240 s";

    sidepic.src = "https://wallpaperaccess.com/full/4989466.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Alexander_Ovechkin";
    });
    
      player.textContent = "Alexander Ovechkin";
  }

  if (value === "Time on Ice per Game") {
    imgRW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474141.jpg";
    RW.innerHTML = "Kane <br> 21:49/g";
    imgC.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402.jpg";
    C.innerHTML = "McDavid <br> 22:04/g";
    imgLW.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934.jpg";
    LW.innerHTML = "Draisaitl <br> 22:21/g";
    imgRD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477495.jpg";
    RD.innerHTML = "Jones <br> 26:13/g";
    imgLD.src =
      "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478469.jpg";
    LD.innerHTML = "Chabot <br> 26:12/g";

    sidepic.src = "https://cdn.wallpapersafari.com/57/14/JhZANR.jpg";

    sidepic.addEventListener("click", (e) => {
      window.location = "https://en.wikipedia.org/wiki/Patrick_Kane";
    });
    
      player.textContent = "Patrick Kane";
  }
});
