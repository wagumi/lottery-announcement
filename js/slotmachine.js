/* -------------------------------------- */
/* ------------  Settings  -------------- */
/* -------------------------------------- */

// 配列にリスト　constで

// 当選した人は記録して次当たらないように
// 　→　CSV　→　APIとかDBになっちゃう。。

//　リロードした場合に当たった人に当たってしまったら、ごめんなさいでもう一回

// 名前　→　配列に

// 配列をランダムに生成して、一番上をとる、
//   　　

// 配列の length数　から　ランダムで　（シードに気を付ける）

/*
const arrTest = [
  "aaaaaaaあ愛",
  "bbbbbb1い感謝",
  "bbbbbb2う感謝",
  "bbbbbb4え感謝",
  "bbbbbb5お上",
  "bbbbbb6か川",
  "bbbbbb7き",
  "bbbbbb8く",
  "bbbbbb9け",
  "bbbbbb1oこ",
  "bbbbbb11あ",
  "chideplus（🥷,🏯）ccccccい🙏"
];
*/

const arrTest = [
  "takeshi#1234",
  "muarata#1234",
  "jasagiri#1234",
  "kazy39#1234",
  "CieloChiara#1234",
  "araimono.KaiWai#1234",
  "ukishima#1234",
  "Mameta#1234",
  "自律分散型メイド#1234",
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

// 当選者


//maxLength = 30;

var music = new Audio('https://howlingindicator.net/wp-content/uploads/2022/02/SE114_3.mp3');
var music2 = new Audio('assets/atari.mp3');
var music3 = new Audio('assets/win.mp3');

var image = new Image();
var image2 = new Image();
var targetDiv = document.getElementById('test');
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
  image.style.left = targetDiv.width/2 - width_image/2;
  image.style.top = targetDiv.height/2 - height_image/2;
  image.style.width = width_image;
  image.style.height = height_image;
  targetDiv.appendChild(image);
  setTimeout(hirahira, 2000);
}

function hirahira() {
  targetDiv.removeChild(image);

  image2.id = "img";
  image2.src = "assets/confetti-44.gif";
  image2.style.position = "absolute";
  image2.style.left = 0;
  image2.style.top = 0;
  image2.style.width = "100%";
  image2.style.height = "100vh";
  targetDiv.appendChild(image2);
  music3.currentTime = 0;
  music3.play();
  setTimeout(hirahiraStop, 10000);
}

function hirahiraStop() {
  targetDiv.removeChild(image2);
}

function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

let id;

function exec () {

  var arrTest2 = arrayShuffle(arrTest);
console.log(arrTest2);

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

  //text = '    araimono#1234    ';  // The message displayed
  text = arrTest2[0]; //  '    ukishimaさん#7592    ';  // The message displayed
  //padding = (maxLength - text.trim() / 2);
  //text =   '   CieloChiara#5648   ';  // The message displayed
//  chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890# ';  // All possible Charactrers


//chars = 'ukishimaさん#7592 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#';  // All possible Charactrers

chars = arrTest2[0] + ' ukishimaさん#7592 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#';  // All possible Charactrers

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
    //var tmp = text.length;
    var f = firstLetter+delay*tmp2[i];  //arrayShuffle(10);  //( text.length - Math.ramdom(1-10) );
    
    console.log("f: ", f);
    
    offsetV[i] = endSpeed+breaks*f;
    offset[i] = -(1+f)*(breaks*f+2*endSpeed)/2;

  }
  
  //var timeout = firstLetter+(delay*text.length); //  firstLetter+(delay*maxlength);
  //console.log("timeout: ", timeout);
  //setTimeout(musicPause, timeout);

(onresize = function(){
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
})();

function requestAnimationFrameLoop() {

  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#ff3ec9';
  ctx.fillStyle = '#d10d19';
  ctx.fillRect(0,(canvas.height-scale)/2,canvas.width,scale);

  for(var i=0;i<text.length;i++){
    ctx.fillStyle = '#eeeeee';
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
      //ctx.font = scale*s + 'px Helvetica'
      //ctx.font = scale*s + 'px Impact, sans-serif;'
      ctx.font = scale*s + 'px Impact'
      //ctx.font = scale*s + "px 'Noto Color Emoji';"
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
//  requestAnimationFrame(loop);
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

function animation(){

  let fps = 0;
  let frameCount = 0;
  let startTime;
  let endTime;

  startTime = new Date().getTime();

  requestAnimationFrame(loop = function(){

      frameCount ++;
      endTime = new Date().getTime();
      if(endTime - startTime >= 1000){
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


function animation2(){

  let fps = 0;
  let frameCount = 0;
  let startTime;
  let endTime;

  startTime = new Date().getTime();

  function animationLoop(){

      frameCount ++;
      endTime = new Date().getTime();
      if(endTime - startTime >= 1000){
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

/*
(function(w) {
	w.cancelAnimationFrame = (function() {
		return {
			w.cancelAnimationFrame       ||
			w.webkitCancelAnimationFrame ||
			w.mozCancelAnimationFrame    ||
			w.msCancelAnimationFrame     ||
			w.oCancelAnimationFrame      ||
			function(requestId) {
				w.clearTimeout(requestId);
			}
		};
	})();
})(window);
*/

/*
:sparkling_heart: 
🙏
🙏
🙏
*/





