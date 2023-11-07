showNav();
function showNav() {
  const body = document.querySelector('body')
  const searchBtn = document.querySelector(".hqd_search_btn");
  const searchInput = document.querySelector('input[type="text"]');
  const overlay = document.querySelector(".hqd_overlay");
  const menuBtn = document.querySelector(".hqd_icon_menu")
  const btnLists = document.querySelectorAll(".hqd_category button")

  searchBtn.addEventListener('click', function() {
    body.classList.add("active_search");
    searchInput.focus();
    searchInput.value = "";
  });

  overlay.addEventListener('click', function() {
    body.classList.remove("active_search");
  });

  menuBtn.addEventListener('click', function() {
    body.classList.toggle("active_menu");
   
    if(body.classList.value.includes("active_menu")) {
      this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px" fill="var(--primary-color)"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>`
      
    } else {
      this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px" fill="var(--primary-color)"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>`
    }

  })

  // btnLists
  btnLists.forEach(btn=> {
    btn.addEventListener('click', function(){
      this.classList.toggle('active')
      this.innerHTML = this.classList.value.includes("active") ?
      `<svg width="18px" height="18px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="currentColor" /></svg>` :
      `<svg width="18px" height="18px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="currentColor" /></svg>`
    })
  }
  )

  window.addEventListener("scroll", (e) => {
    if (this.scrollY > 100) {
      body.classList.add('active_nav')
    } else {
      body.classList.remove('active_nav', 'active_menu')
    }
  });
}

// AutoRun Slide Item
runSlideshows(".slideshow1", "item", "first", "second", "third", "queue");
runSlideshows(".slide_heroes", "item", "first", "second", "third", "queue");
function runSlideshows(wrapper, item, one, two, three, zero) {
  const slideWrapper = document.querySelector(wrapper);
  if (!slideWrapper) return;
  const slideItems = document.querySelectorAll(`${wrapper} .${item}`);
  let indexLastItem = slideItems.length - 1;
  let i = 0;

  autoRun();
  let timeId = setInterval(autoRun, 2000);
  function autoRun() {
    let first, second, third, queue;

    first = i;

    second = first + 1;
    if (second > indexLastItem) second = 0;
    third = second + 1;
    if (third > indexLastItem) third = 0;

    queue = first - 1;
    if (queue < 0) queue = indexLastItem;

    slideItems[first].className = `${item} ${one}`;
    slideItems[second].className = `${item} ${two}`;
    slideItems[third].className = `${item} ${three}`;
    slideItems[queue].className = `${item} ${zero}`;

    i++;
    if (i > indexLastItem) i = 0;
  }

  slideWrapper.onmouseenter = () => clearInterval(timeId);
  slideWrapper.onmouseleave = () => (timeId = setInterval(autoRun, 2000));
}

// hero stats kdr
statsRender(".hqd_static_card_wrapper");
function statsRender(hqdWrapper) {
  const heroesStatsKdr = [
    {
      name: "Gerald Lightseeker",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-gerald-lightseeker-trong.html",
      aTitle: "Anh Hùng Gerald Lightseeker Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj69SpLtr-KdE4WmjdKxWm8lWTx3fsaJ6ykfNzlYI6PrRo37gbtR6KDMi8HVbYIFB2odZDvEsJGQTuBqTKDzdcYQynAjfKlFj0ur1EzAPa7sXpisv4iqrQdM71RgngSO1RGYBAxZjp72zRTgUDdZAInaK4FUKZ7GEe7Ktf1MBcMKf2QP1H4buf1464MFl30/s1600/GeraldSmall.webp",
      imgAlt: "Icon_Gerald",
      heart: "580",
      melee: "24-40",
      ranged: "",
      shield: "80%",
      axe: "1s",
      moved: "2.2",
    },
    {
      name: "Alleria Swiftwind",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-alleria-swiftwind-trong.html",
      aTitle: "Anh Hùng Alleria Swiftwind Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlUyW27Btai5ks03JXAlFH0qfverehQaSTWFZ4edyEBhEEkzfbeDNaTvM6QsQc8rQ8J4OQRZ35BxGC5bhC1iW5gKPCx_-nhnXaJMg6jUbmyU3woc1TVtnO0cN6h7Mvwpl394zCX5-8k2Ju0BZI3YtTDVvUIV6BzKwkQItCfgL3PloTyRr_SLN5SxM3pFlp/s1600/AlleriaSwiftwindSmall.webp",
      imgAlt: "Icon_Alleria",
      heart: "430",
      melee: "17-25",
      ranged: "15-26",
      shield: "None",
      axe: "0.6s",
      moved: "3.0",
    },
    {
      name: "Malik Hammerfury",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-malik-hammerfury-trong-kingdom-rush.html",
      aTitle: "Anh hùng Malik Hammerfury Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtRf5Qyy__nGP-oO_EzvPfVG0pckRtn4_VcIP4dDO1a8G4P_Fwac0cJ8WArIc95ewjZNDHvbs2w-rsdGxr4sdnB3vJn_D8qHoxFjacV4itlljSizryfldZO_XFzu2MplCdMAL52O-C6R4gj8NrVHQY66j-rdiX11xZig-Fy1yphX-bKrQXOr6HPZpAscN8/s1600/MalikHammerfurySmall.webp",
      imgAlt: "Icon_Malik",
      heart: "720",
      melee: "29-43",
      ranged: "",
      shield: "50%",
      axe: "1s",
      moved: "2.0",
    },
    {
      name: "Bolin Farslayer",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-bolin-farslayer-trong-kingdom.html",
      aTitle: "Anh Hùng Bolin Farslayer Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTbHgSw_TBycrL5NjerBFSy-y3B7jjOdYXBSJkeSF5yTAmT7Pi7PhU01f23-bIR1fEzJZdZ_aRWLrSY2HdKdXLkCxT9eUh3CQQwEcC3kuZriRaMd2nb86Dnb6iMUX7AaT6hcCdR2S0ANbZkKz0G7lNAiTv8czMTnVzMiwoZA73KIMWl7j16FxSY8BjzTw7/s1600/BolinFarslayerSmall.webp",
      imgAlt: "Icon_Bolin",
      heart: "670",
      melee: "23-38",
      ranged: "23-38",
      shield: "None",
      axe: "1s|3.8s",
      moved: "2.0",
    },
    {
      name: "Magnus Spellbane",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-magnus-spellbane-trong-kingdom.html",
      aTitle: "Anh hùng Magnus Spellbane Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzkeIQQ4VaOk-I6msxWIgymzVxPdOWzU9lxUhFLuGokzQuxH0pttIDue3y73aNigAFj7p-pCV19cRk2-K-r5-6pfWLSnD0beC3HW4IkXD6--lTrlPfbUTL6kZ1NWJGyabppGE-GywREhZa7VpbgWdwqRr0nqJ6LJ7Nv5ZZ_mXVv8xBAYjDJQNsd0LP6CGd/s1600/MagnusSpellbaneSmall.webp",
      imgAlt: "Icon_Magnus",
      heart: "350",
      melee: "8-12",
      ranged: "23-68",
      shield: "None",
      axe: "1s|1.1s",
      moved: "Teleport",
    },
    {
      name: "Ignus",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-ignus-trong-kingdom-rush.html",
      aTitle: "Anh hùng Ignus Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUyZXXQnXB-I-Ua7zG6wcDCEmw_74Fbk38K4zFRQqHPZ4XRuNNrkTboWdlomhNUetk8hYC3n-LYaBnl23D5PV6Y_65lMCqxczG4YP2NK44czW1dI1k3rBmJZpFYF9SNx_KwdyXSBlq4vbUwd1tV8BYS8VLNU1a1bjptxMtNC3ODnd8gbg4S75QPqLJ9r5J/s1600/IgnusSmall.webp",
      imgAlt: "Icon_Ignus",
      heart: "670",
      melee: "32-53",
      ranged: "",
      shield: "None",
      axe: "1s",
      moved: "3.0",
    },
    {
      name: "King Denas",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-king-denas-trong-kingdom-rush.html",
      aTitle: "Anh hùng King Denas Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_tkD0avdgycq4bx5oqk0QDqD3STj33aHzW7NUmQyq0qDVnd9JRGvOpNwAmbcbvyAgnyQ10A_YV4e_JCY6rMNytJftL0guEFs7LK61hMAbxSKH0H6_54es5_A43SNzLG5FV41AXlwzc62wN436hg5V3L3GQc8mPl2ZRaY7ZtD6-lfHsoQQ0KCKOWFWWJkx/s1600/KingDenasSmall.webp",
      imgAlt: "Icon_Denas",
      heart: "480",
      melee: "37-61",
      ranged: "37-61",
      shield: "None",
      axe: "1.5s|0.67s",
      moved: "2.0",
    },
    {
      name: "Elora Wintersong",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-elora-wintersong-trong-kingdom.html",
      aTitle: "Anh hùng Elora Wintersong Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTBvsbBQsvReVMaOrgz8xfzzgCr_AHOfj8_Q0nZOXhaXTr-PwOKs8JX9hqd9tXFSg4XRqBzDj1YQw-RFVTMUR4AZsyV0z_P6rZY5Qrl8GYoTHvQgnp7Vj7IbeVcqcwZhVc2lSQLKOujNdE0V0tv79pqtflB63PBnLVSlMw5TFfdSGfb0v51-qodZzAMzMG/s1600/EloraWintersongSmall.webp",
      imgAlt: "Icon_Elora",
      heart: "450",
      melee: "15-23",
      ranged: "34-101",
      shield: "50%",
      axe: "1s|1.8s",
      moved: "3.0",
    },
    {
      name: "Ingvar Bearclaw",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-ingvar-bearclaw-trong-kingdom.html",
      aTitle: "Anh hùng Ingvar Bearclaw Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOLnnza0eghX-Uu6FJsJHIuLvjXaYLHBnfDvSP_DmPXURXKQHLTyMdToKXcH6VH11D5n5ScY0rumWlTMf1fTilYuQ4br-VWRp3EUWcah9sSCT8bCMvRqKQr5SybJQJnI6oP5qTAWbf5Ie33XnBnvXDSx62CHNiMUdLWBlZyJcXaGHL3KhanVxX3b53WlSf/s1600/IngvarBearclawSmall.webp",
      imgAlt: "Icon_Ingvar",
      heart: "670",
      melee: "43-71",
      ranged: "",
      shield: "40%",
      axe: "1.5s",
      moved: "2.5",
    },
    {
      name: "Hacksaw",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-hacksaw-trong-kingdom-rush.html",
      aTitle: "Anh hùng Hacksaw Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiETJxKKfnhmaLM_kc-zFm_ZLSDqiqyDMkmbERywRhcABhzjiT_mtuf2_zBTzP7rLgjFhXVpGbvZ9RQsN2gftNOl74wXl9h1S0MGEDym25ThTfwzko-RjqQsS1sZqa1KGebIEMiZyZpP9ISIMuzq5pg3QkF9H0Ka8ME_l7z3vvsOpkcLua4kisGei2ROhzb/s1600/HacksawSmall.webp",
      imgAlt: "Icon_Hacksaw",
      heart: "600",
      melee: "18-54",
      ranged: "",
      shield: "80%",
      axe: "1.2s",
      moved: "1.8",
    },
    {
      name: "Oni",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-oni-trong-kingdom-rush.html",
      aTitle: "Anh hùng Oni Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3vttO3s52jANNKcEoAUOdKea7_ZXjW-KJ-ynXIIH3JEzXtvif7vTREGUxjs6i0fuGy65OCRQgWToocJYXAvLM8BlGhL7sO3xoQFmD59HhV7RsJBlS2QohSoZ-uNc3D2twlkH5PWo5qxZiF3Dr7lpAdgzdZEX1HF17LMxmmx5bZbqDNyavtv03uaR5BhMb/s1600/OniSmall.webp",
      imgAlt: "Icon_Oni",
      heart: "650",
      melee: "25-71",
      ranged: "",
      shield: "60%",
      axe: "1.25s",
      moved: "2.7",
    },
    {
      name: "Thor",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-thor-trong-kingdom-rush.html",
      aTitle: "Anh hùng Thor Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig3TmJQIm8FyWnSghFehWE2UvzdGdv0OBW_JX-5og6wpFihOVzedKNXr68cYkwst9FDyTa9VJOldAtvGwmUmWd70COP3eTzz4Kxc0lsdwSCWDHCgu0Lv_7LTiwYX8gsyWk2IFq7rpsbRysJuTZG3AVPbsMKkKKdaH-QTZVjbz5Q0RmaOdMio9yYwDkzhzg/s1600/ThorSmall.webp",
      imgAlt: "Icon_Thor",
      heart: "650",
      melee: "44-55",
      ranged: "",
      shield: "70%",
      axe: "1.5s",
      moved: "2.7",
    },
    {
      name: "Ten'Shi",
      aLink:
        "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-tenshi-trong-kingdom-rush.html",
      aTitle: "Anh hùng Ten'Shi Trong Kingdom Rush",
      imgLink:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhp5IxWN2XCIN-qet_vGOnTYCwTFrptsxIdtdB90O1ZjBm5elIqLQb-nybgEbwBW7TOJKixdD47qTKmejmlD9OuvXSkls_CQVfO45Je_Y3HuRo4dwVke8nPA890TPKemyNR5EnJAw5DZ5-67GaPu7z3OuGlY1KhopmdRVqjtU286Ger9F7mh-R0FHOgTQq4/s1600/TenShiSmall.PNG.webp",
      imgAlt: "Icon_Tenshi",
      heart: "560",
      melee: "32-49",
      ranged: "",
      shield: "50%",
      axe: "1.35s",
      moved: "Teleport",
    },
  ];
  const statsWrapper = document.querySelector(hqdWrapper);
  if (!statsWrapper) return;

  statsWrapper.innerHTML = heroesStatsKdr
    .map(
      (data) =>
        `
<div class="hqd_static_card">
<div>
  <img
      src="${data.imgLink}"
      alt="${data.imgAlt}"
  />
</div>
<div>
  <h2>
    <a
      href="${data.aLink}"
      title="${data.aTitle}"
      >${data.name}</a
    >
  </h2>
  <div class="hqd_stats_wrapper">
    <div>
      <div>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAjD4hGZ35qaSwkvbz3YsBeowmIp-Ghn1El5VznoJRBuCXbPEzFoF3WN6sl-sTSoLmFym5FBbl-l8gvW0h5POXqc52LRG7RaVrTHKSgeewPQ1HDqkCGNfVWe47nXE8sSbj30fEoDksA2Q5Jat_-7-3Ferg7Gor7HDavIXTrv0JC_fWZeuUt0ZG1gjNZaUt/s1600/icon_heart.webp" alt="icon_heart" />
        <span>${data.heart}</span>
      </div>
      <div>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixJayHYdkA5jACNVPhWk-okoIo9LvtLl-VRl5GyWbYHeT51ft_Ddxw6EVFmpEfa32oV4g4DU1SlJLBLQ5SdO0ZnwdS2bY5HREJN_h0xn-gcsOHkrol-mF9YSGNA7pACIQQFB28b3s36YcKHwbdYiOUrTIGQQBR08YrDtPyK0KjuB_axvwCPYzLyoyRZvsp/s1600/icon_melee.webp" alt="icon_melee" />
        <span>${data.melee}</span>
      </div>
      <div>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE2Rd7jzN2nQEqQKKu09031WcbaQaj4aH-sMSWbD_-ccSbM8a3VYPCP24cVPMrd-QW7408X61fg_8dEpHm_i0A-xqF4nFJWRdZusXs3mErpGa85g0rpz3WGCe5KrxdEL3wZhhybGBsKl2iUnH8nl1fLylGZHEpxlAAwLvVrFTyyWxz1f0tJXDZ1Bd8Iu6f/s1600/icon_ranged.webp" alt="icon_ranged" />
        <span>${data.ranged}</span>
      </div>
    </div>
    <div>
      <div>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFGUXJHIjuASy_8bYdf1-qKgoq0o_aMJxaKp_yC0B1P--SH3XMXWGeT7hbEe9xSss3mPTnqYV0C5x8F-cse2xhLDo0simUbAcP0Bs5iTke8bV2WJO9og9Hjx0U0IqARNNvGy-B76ih1mCpdvxNpazlGKgggnV5nAK7is4GkzjKHPN39c2MJ_ECW17ub0PT/s1600/icon_shield.webp" alt="icon_shield" />
        <span>${data.shield}</span>
      </div>
      <div>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZkWaJW8A4R1fQBAbboEgirbb_OP_TkuNtnM1VfygVpzZkrGApIBDTBBSGu4na1oSced7L0Nav3B99scYy4K1vuT-umMiXvZxFC12FhHhnBR2Go7wKgVK9IqHwoqScRQsh2OLcTf1fmD6xT3V8pBaGfEAKykWIYg5Tgo1VROXo_xRJBey5yRwAmYwDjnxl/s1600/icon_axe.webp" alt="icon_axe" />
        <span>${data.axe}</span>
      </div>
      <div>
        <img
          style="width: 20px; height: auto; margin-left: -3px"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWJ6ilV_ae5SZXtwbY4sKGpFZUgFz9G2A82Pqf2BnLxLEX4EyMUPA2_Nu4c7JW34vrVarXjR9_r-MCtgMBiOI9cwRm-KyvoMBu7aHQeXrZ5uAF5120L36AlTWFu0WJmphkviYOLE1ZXx-zyX8leXpTyDD7PNfpGBLRXTmPNI9woBres9P2sTOBjDEaCSXE/s1600/icon_moved.webp"
          alt="icon_moved"
        />
        <span>${data.moved}</span>
      </div>
    </div>
  </div>
</div>
</div>
`
    )
    .join("");
}
