// if/when ゲームエンジン
// 依存: questions_when.js, questions_if.js, questions_if_when.js を先に読み込むこと

// ===== モード定義 =====
// section: "when" | "if" | "combined" でどの問題プールを使うか制御
var MODES = [
  {"id":"all_when",   "icon":"⏰", "name":"when の練習",      "section":"when",     "gs":null},
  {"id":"all_if",     "icon":"🤔", "name":"if の練習",        "section":"if",       "gs":null},
  {"id":"all_combined","icon":"🔀","name":"if と when 総合",   "section":"combined", "gs":null},
  {"id":"when_basic", "icon":"📐", "name":"① 基本用法",       "section":"when",     "gs":["basic"]},
  {"id":"when_will",  "icon":"⚠️", "name":"② willに注意",    "section":"when",     "gs":["will"]},
  {"id":"when_arr",   "icon":"🔡", "name":"③ 並べ替え",       "section":"when",     "gs":["arrange"]},
  {"id":"when_err",   "icon":"🔍", "name":"④ 誤り指摘",       "section":"when",     "gs":["error"]},
  {"id":"when_trans", "icon":"🌐", "name":"⑤ 和訳",           "section":"when",     "gs":["translate"]},
  {"id":"when_jae",   "icon":"✍️", "name":"⑥ 日→英",         "section":"when",     "gs":["ja_to_en"]},
  {"id":"when_dlg",   "icon":"💬", "name":"⑦ 対話補充",       "section":"when",     "gs":["dialog"]},
  {"id":"when_type",  "icon":"⌨️", "name":"⑧ タイピング",     "section":"when",     "gs":["typing"]},
  {"id":"if_basic",   "icon":"📐", "name":"① 基本用法",       "section":"if",       "gs":["if_basic"]},
  {"id":"if_will",    "icon":"⚠️", "name":"② willに注意",    "section":"if",       "gs":["if_will"]},
  {"id":"if_arr",     "icon":"🔡", "name":"③ 並べ替え",       "section":"if",       "gs":["if_arrange"]},
  {"id":"if_err",     "icon":"🔍", "name":"④ 誤り指摘",       "section":"if",       "gs":["if_error"]},
  {"id":"if_trans",   "icon":"🌐", "name":"⑤ 和訳",           "section":"if",       "gs":["if_translate"]},
  {"id":"if_jae",     "icon":"✍️", "name":"⑥ 日→英",         "section":"if",       "gs":["if_ja_to_en"]},
  {"id":"if_dlg",     "icon":"💬", "name":"⑦ 対話補充",       "section":"if",       "gs":["if_dialog"]},
  {"id":"if_type",    "icon":"⌨️", "name":"⑧ タイピング",     "section":"if",       "gs":["if_typing"]},
  {"id":"comb_when",  "icon":"⏰", "name":"when 問題",        "section":"combined", "gs":["comb_when"]},
  {"id":"comb_if",    "icon":"🤔", "name":"if 問題",          "section":"combined", "gs":["comb_if"]},
  {"id":"comb_mixed", "icon":"🎯", "name":"if か when か",    "section":"combined", "gs":["comb_mixed"]},
];

// タグのCSSクラスマッピング
var TC = {
  "basic":"tb","will":"te","arrange":"ts","error":"te",
  "translate":"tt","ja_to_en":"tja","dialog":"tdl","typing":"typ","review":"tpc",
  "if_basic":"tib","if_will":"tie","if_arrange":"tis","if_error":"tie",
  "if_translate":"tit","if_ja_to_en":"tija","if_dialog":"tidl","if_typing":"tityp","if_review":"tipc",
  "comb_when":"tcw","comb_if":"tci","comb_mixed":"tcm"
};

// ブレークダウン表示ラベル
var BL = {
  "basic":"基本用法(when)","will":"willに注意(when)","arrange":"並べ替え(when)","error":"誤り指摘(when)",
  "translate":"和訳(when)","ja_to_en":"日→英(when)","dialog":"対話補充(when)","typing":"タイピング(when)","review":"総合確認(when)",
  "if_basic":"基本用法(if)","if_will":"willに注意(if)","if_arrange":"並べ替え(if)","if_error":"誤り指摘(if)",
  "if_translate":"和訳(if)","if_ja_to_en":"日→英(if)","if_dialog":"対話補充(if)","if_typing":"タイピング(if)","if_review":"総合確認(if)",
  "comb_when":"when問題","comb_if":"if問題","comb_mixed":"if か when か"
};

var TL = {"fill":15,"error":15,"arrange":30,"dialog":20,"translate":15,"ja_to_en":20,"typing":25};

// ===== セクションごとの問題プール取得 =====
function getPoolBySection(section, level) {
  if (section === "when") {
    if (level === "mid" || level === "adv") return ALL_Q_MID;
    return ALL_Q;
  }
  if (section === "if") {
    if (level === "mid" || level === "adv") return IF_Q_MID;
    return IF_Q_BASIC;
  }
  if (section === "combined") {
    return COMBINED_Q;
  }
  return ALL_Q;
}

/* ===== GAME ENGINE ===== */
var combo=0,maxCombo=0,quizStartTime=0;
var LEVEL_NAMES=["見習い","初心者","練習生","英語使い","英語マスター","英語の達人","英語の神"];
var LEVEL_XP=[0,100,250,500,1000,2000,3500];
function getXP(){return parseInt(localStorage.getItem('ifw_xp')||'0');}
function setXP(v){localStorage.setItem('ifw_xp',v);}
function getLv(xp){var l=0;for(var i=0;i<LEVEL_XP.length;i++){if(xp>=LEVEL_XP[i])l=i;}return l;}
function xpToNext(xp){var l=getLv(xp);if(l>=LEVEL_XP.length-1)return{cur:100,max:100};var base=LEVEL_XP[l],next=LEVEL_XP[l+1];return{cur:xp-base,max:next-base};}
function addXP(pts){var old=getXP();var nw=old+pts;setXP(nw);return{old:old,nw:nw,leveled:getLv(nw)>getLv(old),newLv:getLv(nw)};}
function updateLevelUI(){
  var xp=getXP(),lv=getLv(xp),prog=xpToNext(xp);
  var el=document.getElementById('level-info');
  if(el)el.textContent='Lv.'+(lv+1)+' '+LEVEL_NAMES[lv]+'　XP: '+xp;
  var bar=document.getElementById('level-bar');
  if(bar)bar.style.width=Math.round(prog.cur/prog.max*100)+'%';
}

var BADGE_DEF={
  first:{icon:'🌟',name:'初挑戦'},
  perfect:{icon:'🏆',name:'パーフェクト'},
  speed:{icon:'⚡',name:'スピードスター'},
  combo5:{icon:'🔥',name:'コンボ5'},
  combo10:{icon:'💥',name:'コンボ10'}
};
function getBadges(){return JSON.parse(localStorage.getItem('ifw_badges')||'[]');}
function awardBadge(id){var b=getBadges();if(b.indexOf(id)===-1){b.push(id);localStorage.setItem('ifw_badges',JSON.stringify(b));return true;}return false;}

var audioCtx=null;
function getAudioCtx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx;}
function playSound(type){
  try{
    var ctx=getAudioCtx(),gain=ctx.createGain();gain.connect(ctx.destination);
    if(type==='correct'){
      var o=ctx.createOscillator();o.connect(gain);o.type='sine';
      o.frequency.setValueAtTime(523,ctx.currentTime);o.frequency.setValueAtTime(784,ctx.currentTime+0.1);
      gain.gain.setValueAtTime(0.25,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3);
      o.start(ctx.currentTime);o.stop(ctx.currentTime+0.3);
    }else if(type==='wrong'){
      var o=ctx.createOscillator();o.connect(gain);o.type='sawtooth';
      o.frequency.setValueAtTime(220,ctx.currentTime);o.frequency.setValueAtTime(165,ctx.currentTime+0.15);
      gain.gain.setValueAtTime(0.18,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.35);
      o.start(ctx.currentTime);o.stop(ctx.currentTime+0.35);
    }else if(type==='combo'){
      [523,659,784,1047].forEach(function(f,i){
        var o=ctx.createOscillator();o.connect(gain);o.type='sine';o.frequency.value=f;
        o.start(ctx.currentTime+i*0.07);o.stop(ctx.currentTime+i*0.07+0.12);
      });
      gain.gain.setValueAtTime(0.2,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.5);
    }else if(type==='levelup'){
      [523,523,659,784,784,1047].forEach(function(f,i){
        var o=ctx.createOscillator();o.connect(gain);o.type='sine';o.frequency.value=f;
        o.start(ctx.currentTime+i*0.1);o.stop(ctx.currentTime+i*0.1+0.18);
      });
      gain.gain.setValueAtTime(0.25,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.9);
    }
  }catch(e){}
}

function launchConfetti(){
  var cv=document.createElement('canvas');
  cv.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(cv);
  var cx=cv.getContext('2d');cv.width=window.innerWidth;cv.height=window.innerHeight;
  var cols=['#f43f5e','#3b82f6','#10b981','#f59e0b','#8b5cf6','#ec4899','#06b6d4'];
  var pieces=[];
  for(var i=0;i<150;i++){pieces.push({x:Math.random()*cv.width,y:-20,w:Math.random()*11+4,h:Math.random()*7+3,color:cols[Math.floor(Math.random()*cols.length)],vx:Math.random()*5-2.5,vy:Math.random()*4+2,rot:Math.random()*360,vrot:Math.random()*8-4});}
  var fr=0;
  (function draw(){cx.clearRect(0,0,cv.width,cv.height);
    pieces.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.rot+=p.vrot;p.vy+=0.04;cx.save();cx.translate(p.x,p.y);cx.rotate(p.rot*Math.PI/180);cx.fillStyle=p.color;cx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cx.restore();});
    fr++;if(fr<200)requestAnimationFrame(draw);else cv.remove();
  })();
}

var _bpEl=null;
function showBadgeToast(id){
  if(!_bpEl){_bpEl=document.createElement('div');_bpEl.className='badge-popup';document.body.appendChild(_bpEl);}
  var d=BADGE_DEF[id];_bpEl.textContent=d.icon+' 新しいバッジ「'+d.name+'」を獲得！';
  _bpEl.classList.add('show');
  setTimeout(function(){_bpEl.classList.remove('show');},2800);
}

function updateComboUI(){
  var el=document.getElementById('combo-display');if(!el)return;
  if(combo<2){el.classList.remove('show');return;}
  var msg='';
  if(combo>=10)msg='<span class="combo-fire">💥</span> '+combo+'連続！MAX COMBO!!!';
  else if(combo>=5)msg='<span class="combo-fire">🔥</span> '+combo+'連続！すごい！';
  else msg='🔗 '+combo+'連続正解！';
  el.innerHTML=msg;el.classList.add('show');
  el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');
}

var ACCENT="#10b981";
var currentLevel="basic";
var currentSection="when"; // "when" | "if" | "combined"
var selMode="all_when",pool=[],idx=0,score=0,answered=false,breakdown={};
var arSel=[],arWords=[],timerID=null,timeLeft=0,totalTime=0;
var correctCount=0,lastPts=0,lastComboMult=1;

function getQPool(){return getPoolBySection(currentSection, currentLevel);}

function cnt(m){
  var qp=getPoolBySection(m.section, currentLevel);
  if(!m.gs)return qp.length;
  return qp.filter(function(q){return m.gs.indexOf(q.g)>=0;}).length;
}
function sfl(a){return a.slice().sort(function(){return Math.random()-.5;});}

function updateBadgeInfo(){
  var el=document.getElementById("badge-info");if(!el)return;
  var qp=getQPool();
  if(currentLevel==="basic"){
    el.textContent="🏆 全"+qp.length+"問 · 100点満点";
  }else{
    var icon=currentLevel==="mid"?"🔥":"⭐";
    el.textContent=icon+" 全"+qp.length+"問 · ポイント制（最大1000pts/問）";
  }
}

function calcPoints(){
  if(currentLevel==='basic')return 1;
  var base=1000;
  if(combo<=0){lastComboMult=1;return base;}
  lastComboMult=parseFloat(Math.min(2.0,1+combo*0.1).toFixed(1));
  return Math.round(base*lastComboMult);
}
function fmtPts(n){
  if(n>=1000){var t=Math.floor(n/1000);var r=('000'+(n%1000)).slice(-3);return t+','+r;}
  return String(n);
}
function updateScoreLive(){
  var wrap=document.getElementById('score-live-wrap');if(!wrap)return;
  if(currentLevel==='basic'){
    wrap.innerHTML='現在の得点：<b id="score-live">'+score+'</b> 点';
  }else{
    wrap.innerHTML='現在の得点：<b id="score-live">'+fmtPts(score)+'</b><span class="pts-label"> pts</span>';
  }
}

function showSc(id){document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("active");});document.getElementById("sc-"+id).classList.add("active");window.scrollTo(0,0);}

// ===== タブ切り替え =====
var currentTab = "when";
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');});
  document.getElementById('tab-'+tab).classList.add('active');
  buildModes(tab);
}

function buildModes(section){
  var g=document.getElementById("mode-grid"),h="";
  MODES.forEach(function(m){
    if(m.section!==section)return;
    var c=cnt(m);if(c===0)return;
    h+='<div class="mc" data-id="'+m.id+'"><span class="mc-icon">'+m.icon+'</span><div class="mc-name">'+m.name+'</div><div class="mc-cnt">'+c+'問</div></div>';
  });
  g.innerHTML=h;
  g.querySelectorAll(".mc").forEach(function(el){
    el.addEventListener("click",function(){
      g.querySelectorAll(".mc").forEach(function(c){c.classList.remove("sel");});
      el.classList.add("sel");selMode=el.dataset.id;
      currentSection=MODES.find(function(m){return m.id===selMode;}).section;
    });
  });
  // デフォルト選択
  var defaultId = section==="when"?"all_when":section==="if"?"all_if":"all_combined";
  selMode=defaultId;
  currentSection=section;
  var def=g.querySelector('[data-id="'+defaultId+'"]');
  if(def)def.classList.add("sel");
}

function startQuiz(){
  var mode=MODES.find(function(m){return m.id===selMode;});
  var gs=mode?mode.gs:null;
  var qp=getQPool();
  pool=sfl(gs?qp.filter(function(q){return gs.indexOf(q.g)>=0;}):qp.slice());
  idx=0;score=0;correctCount=0;answered=false;breakdown={};combo=0;maxCombo=0;quizStartTime=Date.now();
  qp.forEach(function(q){if(!breakdown[q.g])breakdown[q.g]={c:0,t:0};});
  showSc("quiz");renderQ();
}
function startTimer(sec){}
function stopTimer(){clearInterval(timerID);}

function renderQ(){
  var q=pool[idx];answered=false;
  document.getElementById("prog").style.width=(idx/pool.length*100)+"%";
  document.getElementById("prog-num").textContent=(idx+1)+" / "+pool.length;
  updateScoreLive();
  document.getElementById("fb").className="fb";
  document.getElementById("next-btn").className="next-btn";
  document.getElementById("q-sub-area").innerHTML="";
  document.getElementById("q-img-area").innerHTML="";
  var tcVal=TC[q.g]||"tb";
  document.getElementById("tag-area").innerHTML='<span class="tag '+tcVal+'">'+q.tag+'</span>';
  var ctxArea=document.getElementById("ctx-area");
  if(q.ctx){ctxArea.innerHTML='<div class="ctx-box"><div class="ctx-label">💬 質問文</div>'+q.ctx+'</div>';}
  else{ctxArea.innerHTML="";}
  document.getElementById("q-text").textContent=q.q;
  startTimer(TL[q.t]||15);
  var body=document.getElementById("q-body");
  if(q.t==="fill"){
    document.getElementById("q-text").textContent=q.q.replace(/___ ___/g,"【　　　　　】").replace(/___/g,"【　　　】");
    if(q.sub)document.getElementById("q-sub-area").innerHTML='<div class="q-sub">💡 '+q.sub+'</div>';
    renderChoice(body,q,false);
  }else if(q.t==="error"){
    document.getElementById("q-sub-area").innerHTML='<div class="q-sub">⚠️ 間違っている単語をクリックしてください</div>';
    renderChoice(body,q,true);
  }else if(q.t==="arrange"){
    document.getElementById("q-text").textContent="単語を正しい順番に並べましょう";
    if(q.sub)document.getElementById("q-sub-area").innerHTML='<div class="q-sub">💡 '+q.sub+'</div>';
    arSel=[];arWords=sfl(q.words);
    body.innerHTML='<div class="al">並べた文：</div><div class="ans-area" id="ans-area"></div><div class="al">単語（クリックで追加 / 再クリックで取り消し）：</div><div class="pool-area" id="pool-area"></div><button class="check-btn" id="check-btn">答え合わせ ✓</button>';
    var pa=document.getElementById("pool-area");
    arWords.forEach(function(w,i){var b=document.createElement("button");b.className="w-btn";b.textContent=w;b.dataset.pi=i;b.addEventListener("click",function(){addWord(b);});pa.appendChild(b);});
    document.getElementById("check-btn").addEventListener("click",checkArr);
  }else if(q.t==="dialog"){
    document.getElementById("q-text").textContent="";
    document.getElementById("q-sub-area").innerHTML='<div class="dialog-box">'+q.q+'</div><div class="q-sub">'+q.sub+'</div>';
    renderChoice(body,q,false);
  }else if(q.t==="typing"){
    if(q.sub)document.getElementById("q-sub-area").innerHTML='<div class="q-sub">💡 '+q.sub+'</div>';
    body.innerHTML='<input class="typing-input" id="typing-input" type="text" placeholder="英語で入力してください..." autocomplete="off" autocorrect="off" spellcheck="false"><button class="submit-btn" id="submit-btn">答え合わせ ✓</button>';
    document.getElementById("submit-btn").addEventListener("click",checkTyping);
    document.getElementById("typing-input").addEventListener("keydown",function(e){if(e.key==="Enter")checkTyping();});
    document.getElementById("typing-input").focus();
  }else{
    if(q.sub)document.getElementById("q-sub-area").innerHTML='<div class="q-sub">💡 '+q.sub+'</div>';
    renderChoice(body,q,false);
  }
}
function renderChoice(body,q,two){
  var idxs=sfl([0,1,2,3]);
  body.innerHTML='<div class="choices'+(two?" two":"")+'" id="cw"></div>';
  var cw=document.getElementById("cw");
  idxs.forEach(function(i){
    var b=document.createElement("button");b.className="c-btn";b.textContent=q.ch[i];b.dataset.idx=i;
    b.addEventListener("click",function(){checkC(b,i,q.ans,q);});cw.appendChild(b);
  });
}
function checkC(btn,chIdx,ansIdx,q){
  if(answered)return;answered=true;stopTimer();breakdown[q.g].t++;
  var ok=chIdx===ansIdx;if(ok){lastPts=calcPoints();score+=lastPts;correctCount++;breakdown[q.g].c++;}
  document.querySelectorAll(".c-btn").forEach(function(b){
    b.disabled=true;var bi=parseInt(b.dataset.idx);
    if(bi===ansIdx)b.className="c-btn correct";else if(b===btn&&!ok)b.className="c-btn wrong";
  });
  showFB(ok,q.ch[ansIdx],(!ok&&q.ex)?"<br><div class='ex-box'>📖 "+q.ex+"</div>":"");
}
function checkTyping(){
  if(answered)return;
  var inp=document.getElementById("typing-input");if(!inp.value.trim())return;
  answered=true;stopTimer();var q=pool[idx];breakdown[q.g].t++;
  var user=inp.value.trim().replace(/[.?!,]/g,"").toLowerCase();
  var ok=q.ans.some(function(a){return a.toLowerCase().replace(/[.?!,]/g,"")===user;});
  if(ok){lastPts=calcPoints();score+=lastPts;correctCount++;breakdown[q.g].c++;inp.className="typing-input correct";}
  else inp.className="typing-input wrong";
  inp.disabled=true;document.getElementById("submit-btn").disabled=true;
  showFB(ok,q.ans[0],(!ok&&q.ex)?"<br><div class='ex-box'>📖 "+q.ex+"</div>":"");
}
function addWord(btn){
  if(answered)return;var pi=parseInt(btn.dataset.pi);
  arSel.push({pi:pi,w:arWords[pi]});btn.classList.add("used");
  var area=document.getElementById("ans-area");
  var sp=document.createElement("button");sp.className="w-btn aw";sp.textContent=arWords[pi];sp.dataset.pi=pi;sp.dataset.si=arSel.length-1;
  sp.addEventListener("click",function(){rmWord(sp);});area.appendChild(sp);
}
function rmWord(btn){
  if(answered)return;var pi=parseInt(btn.dataset.pi);
  document.getElementById("pool-area").querySelectorAll(".w-btn").forEach(function(b){if(parseInt(b.dataset.pi)===pi)b.classList.remove("used");});
  arSel=arSel.filter(function(_,i){return i!==parseInt(btn.dataset.si);});
  document.getElementById("ans-area").querySelectorAll(".aw").forEach(function(b,i){b.dataset.si=i;});
  btn.remove();
}
function checkArr(){
  if(answered)return;answered=true;stopTimer();var q=pool[idx];breakdown[q.g].t++;
  var user=arSel.reduce(function(acc,s,i){return acc+(i===0?s.w:(/^[,.]$/.test(s.w)?s.w:" "+s.w));},"");
  var corr=q.ans.replace(/[?!]$/,"");var ok=user.trim()===corr.trim();
  if(ok){lastPts=calcPoints();score+=lastPts;correctCount++;breakdown[q.g].c++;}
  document.getElementById("check-btn").disabled=true;
  document.querySelectorAll(".w-btn").forEach(function(b){b.disabled=true;});
  showFB(ok,q.ans,(!ok&&q.ex)?"<br><div class='ex-box'>📖 "+q.ex+"</div>":"");
}
function showFB(ok,label,extra){
  var fb=document.getElementById("fb");
  if(ok){
    fb.className="fb show ok";
    var _cm=(currentLevel!=='basic'&&combo>=1)?' 🔥×'+lastComboMult.toFixed(1):'';
    fb.innerHTML="✅ 正解！"+(currentLevel!=='basic'?'<span class="pts-flash">+'+fmtPts(lastPts)+' pts'+_cm+'</span>':'')+extra;
    combo++;if(combo>maxCombo)maxCombo=combo;
    updateComboUI();
    if(combo===5){playSound('combo');if(awardBadge('combo5'))showBadgeToast('combo5');}
    else if(combo===10){playSound('combo');if(awardBadge('combo10'))showBadgeToast('combo10');}
    else if(combo>0&&combo%3===0&&combo<5){playSound('combo');}
    else{playSound('correct');}
  }else{
    fb.className="fb show ng";fb.innerHTML="❌ 不正解。正しい答え：<strong>"+label+"</strong>"+extra;
    combo=0;updateComboUI();playSound('wrong');
  }
  updateScoreLive();
  var nb=document.getElementById("next-btn");nb.className="next-btn show";
  nb.textContent=idx===pool.length-1?"結果を見る 🏆":"次の問題へ ▶";
}
function nextQ(){idx++;if(idx>=pool.length){showResult();return;}renderQ();}
function showResult(){
  stopTimer();showSc("result");
  var isBasic=currentLevel==='basic';
  if(isBasic){
    document.getElementById("res-pts").textContent=score;
    document.getElementById("res-denom").style.display="";
  }else{
    document.getElementById("res-pts").textContent=fmtPts(score);
    document.getElementById("res-denom").style.display="none";
    document.getElementById("res-pct").textContent=correctCount+"/"+pool.length+" 問正解";
  }
  var pct=isBasic?Math.round(score/pool.length*100):Math.round(correctCount/pool.length*100);
  if(isBasic){document.getElementById("res-pct").textContent=pct+"％";}
  var rank,msg;
  if(pct>=95){rank="🥇";msg="パーフェクト！if と when を完全マスター！"}
  else if(pct>=85){rank="🥇";msg="すばらしい！あと少しで完璧です！"}
  else if(pct>=75){rank="🥈";msg="よくできました！間違えた問題を復習しよう。"}
  else if(pct>=60){rank="🥉";msg="もう少し！苦手なモードを集中練習しよう。"}
  else{rank="📚";msg="繰り返し練習が大切！各モードで練習してみよう。"}
  document.getElementById("res-rank").textContent=rank;
  document.getElementById("res-msg").textContent=msg;
  var html="";
  Object.keys(BL).forEach(function(g){
    var dd=breakdown[g];if(!dd||dd.t===0)return;
    var pp=Math.round(dd.c/dd.t*100);
    var fc=pp>=80?"#059669":pp>=50?"#b45309":"#dc2626";
    html+='<div class="bd-row"><span class="bd-tag '+(TC[g]||'tb')+'">'+BL[g]+'</span><div class="bar-wrap"><div class="bar-fill" style="width:'+pp+'%;background:'+fc+'"></div></div><span class="bd-score" style="color:'+fc+'">'+dd.c+"/"+dd.t+'</span></div>';
  });
  document.getElementById("res-bd").innerHTML=html;
  var earnedXP=(isBasic?score:correctCount)*10+(maxCombo>=10?50:maxCombo>=5?20:0);
  var xpRes=addXP(earnedXP);
  var lvBanner=document.getElementById('lvup-banner');
  if(xpRes.leveled){
    playSound('levelup');
    lvBanner.textContent='🎉 レベルアップ！ Lv.'+(xpRes.newLv+1)+' 「'+LEVEL_NAMES[xpRes.newLv]+'」になった！';
    lvBanner.classList.add('show');
  }else{
    lvBanner.classList.remove('show');
  }
  updateLevelUI();
  var newBadges=[];
  if(awardBadge('first'))newBadges.push('first');
  if(pct===100&&awardBadge('perfect'))newBadges.push('perfect');
  var elapsed=(Date.now()-quizStartTime)/1000;
  if(elapsed<pool.length*5&&awardBadge('speed'))newBadges.push('speed');
  var allB=getBadges(),bhtml='';
  if(allB.length){
    bhtml='<div style="font-size:13px;font-weight:800;color:#475569;margin:.6rem 0 .3rem">🎖️ 獲得バッジ</div>';
    allB.forEach(function(id){
      var d=BADGE_DEF[id];if(!d)return;
      var isNew=newBadges.indexOf(id)>=0;
      bhtml+='<span class="badge-item'+(isNew?' new-badge':'')+'">'+d.icon+' '+d.name+'</span>';
    });
  }
  document.getElementById('res-badges').innerHTML=bhtml;
  if(pct===100){setTimeout(launchConfetti,200);}
  if(newBadges.length){var _i=0;(function next(){if(_i>=newBadges.length)return;showBadgeToast(newBadges[_i++]);setTimeout(next,3200);})();}
}

// ===== イベントリスナー =====
document.getElementById("start-btn").addEventListener("click",startQuiz);
document.getElementById("next-btn").addEventListener("click",nextQ);
document.getElementById("retry-btn").addEventListener("click",startQuiz);
document.getElementById("home-btn").addEventListener("click",function(){showSc("level");});
document.querySelectorAll('.lv-card').forEach(function(card){
  card.addEventListener('click',function(){
    currentLevel=card.dataset.level;
    buildModes(currentTab);
    updateBadgeInfo();
    showSc('start');
  });
});

// 初期表示
switchTab("when");
updateLevelUI();
