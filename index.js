//////////////////////////////////////////////////////////////
// START RESOURCE V3
$(function(){
    CheckFps();
    Alerts();
    MusicPlay();
    ShowToast();
    __GetIP();
    __GetInfo();
   console.log("%c🌳 Name：Vũ Mạnh Tiến | Bio：Sayy Hello | Url：https://www.facebook.com/vmtien140105 🌳", "font-family: ;color:#fff; background: linear-gradient(270deg, #18d7d3, #68b7dd, #8695e6, #986fee); padding: 8px 15px; border-radius: 8px");
   console.log("…………./´¯/)……….. (\\¯’\\\n…………/….//……….. …\\\\….\\\n………../….//………… ….\\\\….\\\n…../´¯/…./´¯\\\\………../¯‘\\\\…./¯’\\\\\n.././…/…./…./.|_|……_| .\\\\…\\\\…\\\\…\\\\.\\\\\n(.(….(….(…./.)..)..(..(. \\\\….)….)….).)\n.\\\\…………….\\/…/…\\\\. ..\\/……………./\n..\\\\…………….. /……..\\\\………………../\n…\\\\…………..(………. ..)……………./");
  });

  console.error("%c☠️     Quay đầu là bờ , mau tắt dev tools     ☠️", "font-family: ;color:red; background: linear-gradient(270deg,#09d31a, #09d31a,#09d31a, #09d31a, #09d31a); padding: 8px 15px; border-radius: 8px");

  
// CHECK FPS
var fps=document.getElementById("fps");
var startTime=Date.now();
var frame=0;
function CheckFps() {
  var time=Date.now();
  frame++;
  if (time - startTime > 1000) {
    fps.innerHTML=(frame / ((time - startTime) / 1000)).toFixed(1);
    startTime=time;
    frame=0;
  }
  window.requestAnimationFrame(CheckFps);
}
// TIEU SU CHỮ CHẠY
let typed=new Typed(".GioiThieu", {
  strings: ["","Hey brother, Welcome to my profile !.", "Some of my contact information =]] "],
  typeSpeed: 95,
  backSpeed: 75,
  loop: true
})


// MUSIC PLAY
const MusicList=[ 
  
  // "//thanhdieu.com/files/Anh-Đã-Quen-Với-Cô-Đơn.mp3",
 
  // "//thanhdieu.com/files/Về-Bên-Anh.mp3",
  
  // "//thanhdieu.com/files/Em-Nào-Có-Tội.mp3",
  "//Đáp án của bạn.mp3",

];
let t=parseInt(localStorage.getItem('td')) || Math.floor(Math.random() * MusicList.length);
const audio=new Audio(MusicList[t]);
function MusicPlay() {audio.play()};
document.addEventListener('click', MusicPlay);
audio.addEventListener("ended", function() {
t=(t + 1) % MusicList.length;
localStorage.setItem('td', t);
audio.src=MusicList[t];
audio.play();
});




// LOADER SCREEN ----------
let spin=document.querySelector('.LoaderCover');
window.addEventListener('load', () => {
  spin.classList.add('HideLoader');
  setTimeout(() => {
    spin.remove();
  }, 5000);
});
function ShowToast() {
	var x=document.getElementById("Toast");
	x.className="show";
	setTimeout(function(){ x.className=x.className.replace("show", ""); }, 3000);
  }
  $(document).ready(function() {
    function OpenUrl(url) {
      setTimeout(function() {
        window.open(url, '_blank');
      }, 100);
    }
    // SET URL FACEBOOK
    $('#Facebook').click(function() {
        OpenUrl('https://www.facebook.com/vmtien140105');
    });

      // SET URL YOUTUBE
    $('#TikTok').click(function() {
        OpenUrl('https://www.tiktok.com/@vutien205');
    });

    // SET URL MOMO
    $('#MoMo').click(function() {
        OpenUrl('https://drive.google.com/file/d/1av4gZI-yaF4mZJ4QuTRvH9_BJTzwL2zR/view?usp=drive_link');
    });

    // // SET URL MOMO
    // $('#MoMo').click(function() {
    //   OpenUrl('https://me.momo.vn/vumanhtien05/');
    // }); 

      // SET URL INSTAGRAM
    $('#Instagram').click(function() {
        OpenUrl('https://www.instagram.com/vmtien_05/');
    });

      // SET URL GITHUB
      $('#Github').click(function() {
        OpenUrl('https://github.com/tienhoclaptrinh2005');
    });

  });
  
function Alerts() {
  Swal.fire({
    title: '𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 !',
    text: '=>> 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐛𝐚𝐜𝐤 𝐭𝐨 𝐭𝐡𝐞 𝐡𝐨𝐦𝐞 𝐩𝐚𝐠𝐞 <<=',
    showConfirmButton: false
  });
}
// Skill Language
$('.skill-per').each(function() {
    var $this=$(this);
    var per=$this.attr('per');
    $this.css("width", per + '%');
    $({
      animatedValue: 0
    }).animate({
      animatedValue: per
    }, {
      duration: 12000,
      step: function() {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function() {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });
var maxtheard;
var testurl;
var lsat_date=0;
var CountryCode_ThanhDieu={
    US: "United States",
    CA: "California",
    HK: "HongKong (Trung Quốc)",
    TW: "Taiwan (Đài Loan)",
    SG: "Singapore",
    JP: "Japan",
    KR: "Korea",
    AU: "Australia",
    NZ: "New Zealand",
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa (United States)",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    VG: "British Virgin Islands (United Kingdom)",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CV: "Cape Verde",
    KY: "Cayman Islands (United Kingdom)",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CO: "Colombia",
    KM: "Comoros",
    CD: "Congo (Kinshasa)",
    CK: "Cook Islands (New Zealand)",
    CR: "Costa Rica",
    CI: "Ivory Coast",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominique",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FO: "Faroe Islands (Denmark)",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana (France)",
    PF: "French Polynesia",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar (United Kingdom)",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam (United States)",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HN: "Honduras",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Republic of Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "North Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao (China)",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Republic of Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique (France)",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Federated States of Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat (UK)",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia (France)",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    MP: "Northern Mariana Islands (USA)",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    CN: "China",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico (United States)",
    QA: "Qatar",
    CG: "Republic of the Congo",
    ZW: "Zimbabwe",
    RE: "Reunion (France)",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon (France)",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Republic of Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "East Timor",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Türkiye",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands (United Kingdom)",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna (France)",
    YE: "Yemen",
    ZM: "Zambia"
};
var all_down_sum=0;
var run=false;
var checkIP=false;
var visibl=true;
var thread_down=[];
var lsat_all_down=0;
var refresh_lay=5e3;
async function start_thread(index) {
    try {
        const response=await fetch(testurl, {
            cache: "no-store",
            mode: "cors",
            referrerPolicy: "no-referrer"
        });
        const reader=response.body.getReader();
        while (true) {
            const {
                value,
                done
            }=await reader.read();
            if (done) {
                reader.cancel();
                start_thread(index);
                break;
            }
            if (!run) {
                reader.cancel();
                break;
            }
            thread_down[index] += value.length;
        }
    } catch (err) {
        console.log(err);
        if (run) start_thread(index);
    }
}
var gbip=null; 
function __GetIP() {
    function ckip(ip_addr, tag) {
    }
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag=document.getElementById("geoip");
            tag.innerText=data.ip + " " + data.isp;
            if (data.ip !== gbip) {
                tag.style.color="";
                ckip(data.ip, tag);
            }
            gbip=data.ip;
        });
    }
    setTimeout(geoip, 3000);
}
function __GetInfo() {
    function ckip(ip_addr, tag) {
    }
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag=document.getElementById("geoinfo");
            tag.innerText=data.region + " " + data.country;
            if (data.ip !== gbip) {
                tag.style.color="";
                ckip(data.ip, tag);
            }
            gbip=data.ip;
        });
    }
    setTimeout(geoinfo, 5000);
}










