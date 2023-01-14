// 応募者リスト
const applicants = [
  "takeshi",
  "muarata",
  "jasagiri",
  "kazy39",
  "Mameta",
  "自律分散型メイド",
  "Taka｜DAOWorker",
  "KenKen",
  "JunIto",
  "CAMU",
  "dogo",
  "Hiroships",
  "masameta",
  "ちえみ",
  "Win-Win",
  "sazanami",
  "Uwaizumi.eth",
  "渡辺隆行 nabe",
  "MetaFuku",
  "ryuzaum",
  "Polonity",
  "oinarisan",
  "わたなべとおる",
  "whiz",
  "Arts",
  "Tatsuya",
  "hana",
  "Monep | 1Block",
  "Hirox",
  "Takuya Kitagawa",
  "yuka",
  "kki",
  "カミンスキー",
  "FLOPS",
  "m.oura",
  "Million(MEGA=10^6)",
  "みみみみこ",
  "ruyau",
  "tacrew",
  "Saygo",
  "mashharuki",
  "まゆ",
  "zkYuki",
  "Kuni",
  "ht",
  "Masa",
  "Iovebaby",
  "hideplus",
  "suzaq79324",
  "tokio",
  "Kinuma",
  "Sota Morimaya",
  "humzoh",
  "masp047",
  "しんさん",
  "nyaru",
  "EdwinGan",
  "yusuke",
  "Smichan",
  "yossy",
  "azu-chan",
  "MetaTanuki",
  "いかちゃんねる",
  "Kkk",
  "Kenji",
  "sasami",
  "hassaku8",
  "davinci9",
  "Hayato"
];

let winners = [];

if (window.localStorage) {
	let json = localStorage.getItem('winners');
  if (json) {
    winners = JSON.parse(json);
  } else {
    winners = [];
  }
  console.log('winners(first): ', winners);
}

console.log('winners : ', winners);

var music = new Audio('assets/drumroll.mp3');
var music2 = new Audio('assets/hit.mp3');
var music3 = new Audio('assets/fanfare.mp3');

var image = new Image();
var image2 = new Image();
//var targetDiv = document.getElementById('main_canvas_wrapper');
var targetDiv = document.getElementById('main');
var width_image = 960;
var height_image = 540;
//music.cloneNode();

var musicPlay = function() {
  //alert("pause");
  console.log('music play');
  music.play();
}

var musicPause = function() {
  //alert("pause");
  console.log('music pause');
  music.pause();
  music.currentTime = 0;
  music2.play();
  music2.currentTime = 0;

  image.id = "img";
  image.src = "assets/cracker.png";
  image.style.position = "absolute";
  image.style.left = (targetDiv.offsetWidth/2 - width_image/2) + 'px';
  image.style.top = ((targetDiv.offsetHeight/2 - height_image/2) - 50) + 'px';
  image.style.width = width_image;
  image.style.height = height_image;
  targetDiv.appendChild(image);
  setTimeout(confetti, 2000);
}

function confetti() {
  targetDiv.removeChild(image);

  image2.id = "img";
  image2.src = "assets/confetti.gif";
  image2.style.position = "absolute";
  image2.style.left = 0;
  image2.style.top = 0;
  image2.style.width = "100%";
  image2.style.height = "100vh";
  targetDiv.appendChild(image2);
  music3.currentTime = 0;
  music3.play();
  setTimeout(confettiStop, 10000);
}

function confettiStop() {
  targetDiv.removeChild(image2);
}

function sleep(waitMsec) {
  var startMsec = new Date();
   // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

function reset() {
  const confirmStr = '本当にリセットを行いますか？\r\n' +
                      '(LocalStrageから当選者情報の削除)\r\n' +
                      '当選者: ' + winners.length + '名';
  let result = window.confirm(confirmStr);
  if (result) {
    localStorage.removeItem("winners");
    winners = [];
    alert('リセットが実行されました');
    console.log('リセットが実行されました');
  }
  return;
}

let id;

function exec() {
  let workApplicants = arrayShuffle(applicants);

  console.log('workApplicants: ', workApplicants);
  console.log('winners: ', winners);

  workApplicants = workApplicants.filter(function(v){
    return ! winners.includes(v);
  });

  console.log('workApplicants(removed) : ', workApplicants);
  if (workApplicants.length > 0) {
    winners.push(workApplicants[0]);
  } else {
    console.log('対象の抽選者がいません');
    alert('対象の抽選者がいません');
    return;
  }

  if (window.localStorage) {
    let json = JSON.stringify(winners, undefined, 1);
    localStorage.setItem('winners', json);
  }

  console.log(workApplicants);
  //  canvas2 = document.getElementById('cracker');
  //  ctx2 = canvas2.getContext('2d');
  //  ctx2.fillStyle = 'rgb(0,0,255)'; //塗りつぶしの色は赤
  //  ctx2.fillRect(20,40,100,100);

  window.cancelAnimationFrame(id);

  let fps = 0;
  let frameCount = 0;
  let startTime;
  let endTime;
  
  startTime = new Date().getTime();

  music.volume = 0.3;
  music2.volume = 0.5;
  music3.volume = 0.15;

  music.currentTime = 0;
  music2.currentTime = 0;
  music2.pause();
  music.play();
  setTimeout(musicPause, 5500);
  text = workApplicants[0];
  len = text.length;

  let leftPadding, rightPadding;

  if ((len % 2) == 0) {
    let temp = 20 - len;
    leftPadding = temp / 2;
    rightPadding = temp / 2;
  } else {
    let temp = 19 - len;
    leftPadding = temp / 2;
    rightPadding = (temp / 2) + 1;
  }

  console.log('len=', len);
  console.log('leftPadding=', leftPadding);
  console.log('rightPadding=', rightPadding);

  for (var i=0; i<leftPadding; i++) {
    text = ' ' + text;
  }
  for (var i=0; i<rightPadding; i++) {
    text = text + ' ';
  }

  console.log(text);

  chars = workApplicants[0] + ' あいうえおabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#*';
  chars = shuffleText(chars);

  const scale = 70;  // Font size and overall scale
  const breaks = 0.003;  // Speed loss per frame
  const endSpeed = 0.05;  // Speed at which the letter stops
  const firstLetter = 120;  // Number of frames untill the first letter stopps (60 frames per second)
  const delay = 10;  // Number of frames between letters stopping

  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');

  text = text.split('');
  chars = chars.split('');
  charMap = [];
  offset = [];
  offsetV = [];

  for(var i=0;i<chars.length;i++){
    charMap[chars[i]] = i;
  }
  //charMap = arrayShuffle(charMap);
  //chars = array.join('');

  var tmp = [];
  for (var i=0;i<text.length;i++) {
    tmp.push(i);
  }
  var tmp2 = arrayShuffle(tmp);

  for(var i=0;i<text.length;i++){
    var f = firstLetter+delay*tmp2[i];
    console.log("f: ", f);
    offsetV[i] = endSpeed+breaks*f;
    offset[i] = -(1+f)*(breaks*f+2*endSpeed)/2;
  }
  
  (onresize = function(){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  })();

  function requestAnimationFrameLoop() {
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.globalAlpha = 1;
    //ctx.fillStyle = '#ff3ec9';
    //ctx.fillStyle = '#d10d19';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0,(canvas.height-scale)/2,canvas.width,scale);

    for(var i=0;i<text.length;i++){
      //ctx.fillStyle = '#eeeeee';
      //ctx.fillStyle = '#e7240e';
      //ctx.fillStyle = '#c70c17';
      ctx.fillStyle = '#d71c27';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fontWeight = '700';
      ctx.setTransform(1,0,0,1,Math.floor((canvas.width-scale*(text.length-1))/2),Math.floor(canvas.height/2));
      var o = offset[i];
      while(o<0)o++;
      o %= 1;
      var h = Math.ceil(canvas.height/2/scale)

      for(var j=-h;j<h;j++){
        var c = charMap[text[i]]+j-Math.floor(offset[i]);
        while(c<0) {
          c+=chars.length;
        }
        
        c %= chars.length;
        var s = 1-Math.abs(j+o)/(canvas.height/2/scale+1)
        ctx.globalAlpha = s
        ctx.font = scale*s + 'px Impact'
        ctx.fontWeight = 'bold'
        ctx.fillText(chars[c],scale*i,(j+o)*scale);
      }

      offset[i] += offsetV[i];
      offsetV[i] -= breaks;
      if(offsetV[i]<endSpeed){
        offset[i] = 0;
        offsetV[i] = 0;
      }
    }

    frameCount ++;
    endTime = new Date().getTime();
    if(endTime - startTime >= 1000){
        fps = frameCount;
        frameCount = 0;
        startTime = new Date().getTime();

    }
    let animationFPS = document.getElementById("fps");
    animationFPS.innerHTML = fps;
    id = requestAnimationFrame(requestAnimationFrameLoop);
  }
  requestAnimationFrameLoop();
}
  
function arrayShuffle(array) {
  for(var i = (array.length - 1); 0 < i; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

function shuffleText(text) {
	let obj = {};
	for (let i = 0; i < text.length; i++) {
		let rand = Math.floor(Math.random() * 10000000);
		if (!obj[rand]) {
			obj[rand] = text[i];
		} else {
			i--;
		}
	}
	return Object.values(obj).join('');
}

function animation() {
  let fps = 0;
  let frameCount = 0;
  let startTime;
  let endTime;
  startTime = new Date().getTime();
  requestAnimationFrame(loop = function() {
    frameCount ++;
    endTime = new Date().getTime();
    if (endTime - startTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        startTime = new Date().getTime();
    }

    let animationFPS = document.getElementById("fps");
    animationFPS.innerHTML = fps;

    id = requestAnimationFrame(loop);
  });
  //animationLoop();
}

function animation2() {
  let fps = 0;
  let frameCount = 0;
  let startTime;
  let endTime;

  startTime = new Date().getTime();

  function animationLoop() {
      frameCount ++;
      endTime = new Date().getTime();
      if (endTime - startTime >= 1000) {
          fps = frameCount;
          frameCount = 0;
          startTime = new Date().getTime();
      }

      requestAnimationFrame(animationLoop);

      let animationFPS = document.getElementById("fps2");
      animationFPS.innerHTML = fps;
  }
  animationLoop();
}
