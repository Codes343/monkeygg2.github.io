// ═══════════════════════════════════════════════════════
// GAMEVAULT — gamevault.js  (local games only)
// ═══════════════════════════════════════════════════════

const GAMES = [
  // HOT
  {id:'polytrack',        name:'Polytrack',              cat:'racing',     emoji:'🏎️', hot:true,  isNew:true, path:'https://yinnotayl.github.io/Polytrack/',  tip:'WASD or Arrows to drive, R to restart, custom cars included'},
  {id:'slope',            name:'Slope',                  cat:'racing',     emoji:'🔵', hot:true,             path:'games/slope/',                   tip:'Left and right arrows to steer, avoid red blocks'},
  {id:'retro-bowl',       name:'Retro Bowl',             cat:'sports',     emoji:'🏈', hot:true,             path:'games/retro-bowl/',              tip:'Swipe to pass, tap to run and juke'},
  {id:'ovo',              name:'OvO',                    cat:'platformer', emoji:'🤸', hot:true,             path:'games/ovo/',                     tip:'Arrow keys to move, space to jump, down to slide, shift to dash'},
  {id:'1v1-lol',          name:'1v1.LOL',                cat:'action',     emoji:'🏗️', hot:true,             path:'games/1v1-lol/',                 tip:'WASD to move, mouse to aim, Z and X to build'},
  {id:'geometry-dash',    name:'Geometry Dash',          cat:'platformer', emoji:'🔷', hot:true,             path:'games/geometry-dash-remastered/',tip:'Tap or space to jump, match the beat'},
  {id:'cookie-clicker',   name:'Cookie Clicker',         cat:'clicker',    emoji:'🍪', hot:true,             path:'games/cookie-clicker/',          tip:'Click the big cookie'},
  {id:'basket-random',    name:'Basket Random',          cat:'sports',     emoji:'🏀', hot:true,             path:'games/basket-random/',           tip:'W for player 1, up arrow for player 2'},
  {id:'basketball-stars', name:'Basketball Stars',       cat:'sports',     emoji:'⛹️', hot:true,             path:'games/basketball-stars/',        tip:'WASD to move, space to shoot or steal'},
  {id:'run-3',            name:'Run 3',                  cat:'retro',      emoji:'👟', hot:true,             path:'games/run-3/',                   tip:'Left and right to steer, space to jump'},
  {id:'flappy-bird',      name:'Flappy Bird',            cat:'retro',      emoji:'🐤', hot:true,             path:'games/flappy-bird/',             tip:'Tap or space to flap, do not hit the pipes'},
  {id:'stickman-hook',    name:'Stickman Hook',          cat:'platformer', emoji:'🕷️', hot:true,             path:'games/stickman-hook/',           tip:'Tap and hold to swing'},
  {id:'getaway-shootout', name:'Getaway Shootout',       cat:'action',     emoji:'🔫', hot:true,             path:'games/getaway-shootout/',        tip:'Q and E for player 1 hop, left and right for player 2'},
  {id:'time-shooter',     name:'Time Shooter',           cat:'action',     emoji:'⏱️', hot:true,             path:'games/time-shooter/',            tip:'Move to slow time, shoot to eliminate enemies'},
  {id:'time-shooter-3',   name:'Time Shooter 3',         cat:'action',     emoji:'🔫', hot:true,  isNew:true, path:'games/time-shooter-3/',          tip:'Move to slow time, shoot everyone'},
  {id:'monkey-mart',      name:'Monkey Mart',            cat:'sim',        emoji:'🐒', hot:true,             path:'games/monkey-mart/',             tip:'WASD or tap to move your monkey'},
  {id:'tiny-fishing',     name:'Tiny Fishing',           cat:'clicker',    emoji:'🎣', hot:true,  isNew:true, path:'games/tiny-fishing/',            tip:'Cast and reel, upgrade your gear'},
  {id:'subway-surfers',   name:'Subway Surfers',         cat:'action',     emoji:'🏃', hot:true,  isNew:true, path:'games/subway-surfers/',          tip:'Swipe to dodge trains and collect coins'},
  {id:'five-nights',      name:'Five Nights at Epsteins',cat:'action',     emoji:'😨', hot:true,             path:'games/five-nights-at-epsteins/', tip:'Survive the night and manage power'},
  {id:'duck-life-4',      name:'Duck Life 4',            cat:'sports',     emoji:'🦆', hot:true,             path:'games/duck-life-4/',             tip:'Train your duck and win races'},
  // RACING
  {id:'drift-boss',       name:'Drift Boss',             cat:'racing',     emoji:'💨', hot:false,            path:'games/drift-boss/',              tip:'Click or tap to drift right, release for left'},
  {id:'drive-mad',        name:'Drive Mad',              cat:'racing',     emoji:'🚗', hot:false,            path:'games/drive-mad/',               tip:'Left and right arrows to drive, do not flip'},
  {id:'drive-mad-s',      name:'Drive Mad S',            cat:'racing',     emoji:'🛻', hot:false,            path:'games/drive-mad-s/',             tip:'Trickier tracks, do not flip'},
  {id:'motox3m',          name:'Moto X3M',               cat:'racing',     emoji:'🏍️', hot:false,            path:'games/motox3m/',                 tip:'Up for gas, down to brake, left and right to balance'},
  {id:'tunnel-rush',      name:'Tunnel Rush',            cat:'racing',     emoji:'🌀', hot:false,            path:'games/tunnel-rush/',             tip:'Left and right to dodge obstacles and survive'},
  {id:'tanuki-sunset',    name:'Tanuki Sunset',          cat:'racing',     emoji:'🦝', hot:false,            path:'games/tanuki-sunset/',           tip:'A and D to lean and cruise on a longboard'},
  {id:'two-ball-3d',      name:'Two Ball 3D',            cat:'racing',     emoji:'🔴', hot:false,            path:'games/two-ball-3d/',             tip:'Left and right to steer two balls at once'},
  // SPORTS
  {id:'soccer-random',    name:'Soccer Random',          cat:'sports',     emoji:'⚽', hot:false,            path:'games/soccer-random/',           tip:'W or up arrow to jump and score goals'},
  {id:'boxing-random',    name:'Boxing Random',          cat:'sports',     emoji:'🥊', hot:false,            path:'games/boxing-random/',           tip:'W or up arrow to punch and knock out your opponent'},
  {id:'volley-random',    name:'Volley Random',          cat:'sports',     emoji:'🏐', hot:false,            path:'games/volley-random/',           tip:'W or up arrow to jump and spike the ball'},
  {id:'rooftop-snipers',  name:'Rooftop Snipers',        cat:'sports',     emoji:'🎯', hot:false,            path:'games/rooftop-snipers/',         tip:'W to jump and shoot for player 1, up arrow for player 2'},
  {id:'rocket-league-2d', name:'Rocket League 2D',       cat:'sports',     emoji:'🚀', hot:false,            path:'games/rocket-league-2d/',        tip:'Drive the ball into the goal and use boost'},
  // PLATFORMER
  {id:'vex-3',            name:'Vex 3',                  cat:'platformer', emoji:'🏃', hot:false,            path:'games/vex-3/',                   tip:'WASD to move, avoid spikes and reach the end'},
  {id:'vex-4',            name:'Vex 4',                  cat:'platformer', emoji:'🏃', hot:false,            path:'games/vex-4/',                   tip:'WASD with new mechanics, dodge everything'},
  {id:'vex-5',            name:'Vex 5',                  cat:'platformer', emoji:'🏃', hot:false,            path:'games/vex-5/',                   tip:'WASD, harder and faster than before'},
  {id:'vex-6',            name:'Vex 6',                  cat:'platformer', emoji:'🏃', hot:false,            path:'games/vex-6/',                   tip:'WASD, precision platforming required'},
  {id:'vex-7',            name:'Vex 7',                  cat:'platformer', emoji:'🏃', hot:false, isNew:true, path:'games/vex-7/',                   tip:'Latest Vex, WASD to survive'},
  {id:'fireboy-1',        name:'Fireboy and Watergirl 1',cat:'platformer', emoji:'🔥', hot:false,            path:'games/fireboy-and-watergirl/',   tip:'Player 1 uses WASD, player 2 uses arrow keys, teamwork required'},
  {id:'fireboy-2',        name:'Fireboy and Watergirl 2',cat:'platformer', emoji:'💡', hot:false,            path:'games/fireboy-and-watergirl-2/', tip:'Light Temple, two player teamwork'},
  {id:'fireboy-3',        name:'Fireboy and Watergirl 3',cat:'platformer', emoji:'❄️', hot:false,            path:'games/fireboy-and-watergirl-3/', tip:'Ice Temple with slippery floors'},
  {id:'fireboy-4',        name:'Fireboy and Watergirl 4',cat:'platformer', emoji:'💎', hot:false,            path:'games/fireboy-and-watergirl-4/', tip:'Crystal Temple with new puzzles'},
  {id:'doodle-jump',      name:'Doodle Jump',            cat:'platformer', emoji:'👾', hot:false,            path:'games/doodle-jump/',             tip:'Tilt or use left and right arrows to aim and jump forever'},
  {id:'mario-game',       name:'Super Mario',            cat:'platformer', emoji:'🍄', hot:false,            path:'games/mario-game/',              tip:'Arrow keys to move, space to jump, stomp goombas'},
  {id:'geometry-vibes',   name:'Geometry Vibes',         cat:'platformer', emoji:'🔷', hot:false,            path:'games/geometry-vibes/',          tip:'Tap to jump and sync with the beat'},
  // ACTION
  {id:'10-minutes-dawn',  name:'10 Minutes Till Dawn',   cat:'action',     emoji:'🌙', hot:false,            path:'games/10-minutes-till-dawn/',    tip:'WASD to move, mouse to aim, survive 10 minutes'},
  {id:'evowars',          name:'EvoWars.io',             cat:'action',     emoji:'⚔️', hot:false,            path:'games/evowars/',                 tip:'Move to attack, eat XP, evolve bigger'},
  {id:'shadow-fight',     name:'Shadow Fight',           cat:'action',     emoji:'👤', hot:false,            path:'games/shadow-fight/',            tip:'WASD or arrows, combo attacks to win'},
  {id:'temple-run-2',     name:'Temple Run 2',           cat:'action',     emoji:'🏛️', hot:false,            path:'games/temple-run-2/',            tip:'Swipe to turn, slide, jump, and tilt'},
  {id:'friday-night-funkin',name:'Friday Night Funkin',  cat:'action',     emoji:'🎤', hot:false,            path:'games/friday-night-funkin/',     tip:'Arrow keys to hit the beats and win rap battles'},
  {id:'gunspin',          name:'Gun Spin',               cat:'action',     emoji:'🔫', hot:false,            path:'games/gunspin/',                 tip:'Click or tap to spin and travel as far as possible'},
  {id:'sabercut',         name:'Sabercut',               cat:'action',     emoji:'🗡️', hot:false,            path:'games/sabercut/',                tip:'Mouse to aim and cut everything'},
  {id:'slice-master',     name:'Slice Master',           cat:'action',     emoji:'🔪', hot:false,            path:'games/slice-master/',            tip:'Hold or tap to fall and slice all objects'},
  {id:'x-trench-run',     name:'X Trench Run',           cat:'action',     emoji:'✈️', hot:false,            path:'games/x-trench-run/',            tip:'Mouse to steer, space to shoot'},
  {id:'yohoho',           name:'YoHoHo.io',              cat:'action',     emoji:'🏴‍☠️',hot:false,            path:'games/yohoho/',                  tip:'Move to attack, last pirate standing wins'},
  {id:'gons-io',          name:'Gons.io',                cat:'action',     emoji:'🔵', hot:false,            path:'games/gons-io/',                 tip:'Move to grow and eat smaller dots'},
  {id:'rookie-bowman',    name:'Rookie Bowman',          cat:'action',     emoji:'🏹', hot:false,            path:'games/rookie-bowman/',           tip:'Mouse to aim, hold then release to fire'},
  {id:'brawl-stars-laser',name:'Brawl Stars Laser',      cat:'action',     emoji:'⭐', hot:false,            path:'games/brawl-stars-project-laser/',tip:'Move and auto aim to defeat enemies'},
  {id:'pull-of-war',      name:'Pull Of War',            cat:'action',     emoji:'💪', hot:false,            path:'games/pull-of-war/',             tip:'Spam click faster than your opponent'},
  {id:'dune',             name:'Dune!',                  cat:'action',     emoji:'🏜️', hot:false,            path:'games/dune/',                    tip:'Click or tap to jump and ride the dunes'},
  {id:'n-gon',            name:'N-Gon',                  cat:'action',     emoji:'🔷', hot:false,            path:'games/n-gon/',                   tip:'Survive waves of shapes, dodge and shoot'},
  // PUZZLE
  {id:'2048',             name:'2048',                   cat:'puzzle',     emoji:'🔢', hot:false,            path:'games/2048/',                    tip:'Swipe or arrows to slide tiles and reach 2048'},
  {id:'idle-breakout',    name:'Idle Breakout',          cat:'puzzle',     emoji:'🧱', hot:false,            path:'games/idle-breakout/',           tip:'Click to drop balls and break all the blocks'},
  {id:'hextris',          name:'Hextris',                cat:'puzzle',     emoji:'⬡',  hot:false,            path:'games/hextris/',                 tip:'Left and right to rotate the hexagon and match 3 colors'},
  {id:'cut-the-rope',     name:'Cut The Rope',           cat:'puzzle',     emoji:'🍬', hot:false,            path:'games/cut-the-rope/',            tip:'Drag to cut rope and feed the monster'},
  {id:'there-is-no-game', name:'There Is No Game',       cat:'puzzle',     emoji:'🤫', hot:false,            path:'games/there-is-no-game/',        tip:'Click everything, there is definitely a game'},
  {id:'breaklock',        name:'Breaklock',              cat:'puzzle',     emoji:'🔓', hot:false,            path:'games/breaklock/',               tip:'Crack the pattern lock by deducing the code'},
  {id:'sandspiel',        name:'Sandspiel',              cat:'puzzle',     emoji:'🌊', hot:false,            path:'games/sandspiel/',               tip:'Draw sand water and fire and watch it interact'},
  {id:'conways-life',     name:'Conway\'s Game of Life', cat:'puzzle',     emoji:'🔬', hot:false,            path:'games/conways-game-of-life/',    tip:'Click cells and watch life evolve'},
  {id:'core-ball',        name:'Core Ball',              cat:'puzzle',     emoji:'⚪', hot:false,            path:'games/core-ball/',               tip:'Click to shoot and destroy the core'},
  {id:'smart-ball',       name:'Smart Ball',             cat:'puzzle',     emoji:'🔵', hot:false,            path:'games/smart-ball/',              tip:'Guide the ball through physics puzzles'},
  {id:'rift-shift',       name:'Rift Shift',             cat:'puzzle',     emoji:'🌀', hot:false,            path:'games/rift-shift/',              tip:'Shift between dimensions and solve puzzles'},
  {id:'where-water',      name:'Where Is the Water',     cat:'puzzle',     emoji:'💧', hot:false,            path:'games/where-is-the-water/',      tip:'Dig channels and guide water to the croc'},
  {id:'maptroid',         name:'Maptroid',               cat:'puzzle',     emoji:'🗺️', hot:false,            path:'games/maptroid/',                tip:'Metroid style exploration, find all upgrades'},
  {id:'family-feud',      name:'Family Feud',            cat:'puzzle',     emoji:'📺', hot:false,            path:'games/family-feud/',             tip:'Type your answer, survey says'},
  // CLICKER / SIM
  {id:'clicker-heroes',   name:'Clicker Heroes',         cat:'clicker',    emoji:'⚔️', hot:false,            path:'games/clicker-heroes/',          tip:'Click monsters, hire heroes, and prestige'},
  {id:'doge-miner',       name:'Doge Miner',             cat:'clicker',    emoji:'🐕', hot:false,            path:'games/doge-miner/',              tip:'Click to mine, much doge, very coin'},
  {id:'particle-clicker', name:'Particle Clicker',       cat:'clicker',    emoji:'⚛️', hot:false,            path:'games/particle-clicker/',        tip:'Click to collide particles and unlock upgrades'},
  {id:'incremancer',      name:'Incremancer',            cat:'clicker',    emoji:'💀', hot:false,            path:'games/incremancer/',             tip:'Click to summon undead and grow your army'},
  {id:'progress-knight',  name:'Progress Knight',        cat:'sim',        emoji:'⚔️', hot:false,            path:'games/progress-knight-quest/',   tip:'Idle RPG, level up jobs and gain skills'},
  {id:'progress-knight-r',name:'Progress Knight Reborn', cat:'sim',        emoji:'🛡️', hot:false,            path:'games/progress-knight-reborn/', tip:'Reborn edition with more content'},
  {id:'bit-life',         name:'BitLife',                cat:'sim',        emoji:'🧬', hot:false,            path:'games/bit-life/',                tip:'Tap choices and live your whole life'},
  {id:'planet-life',      name:'Planet Life',            cat:'sim',        emoji:'🌍', hot:false,            path:'games/planet-life/',             tip:'Build a planet ecosystem and evolve life'},
  {id:'the-final-earth',  name:'The Final Earth 2',      cat:'sim',        emoji:'🏙️', hot:false,            path:'games/the-final-earth/',         tip:'Build a floating city and manage resources'},
  {id:'a-dark-room',      name:'A Dark Room',            cat:'sim',        emoji:'🕯️', hot:false,            path:'games/a-dark-room/',             tip:'Text based survival, start a fire'},
  {id:'aground',          name:'Aground',                cat:'sim',        emoji:'⛏️', hot:false,            path:'games/aground/',                 tip:'Mine craft and build to survive on a deserted island'},
  {id:'crossy-road',      name:'Crossy Road',            cat:'sim',        emoji:'🐔', hot:false,            path:'games/crossy-road/',             tip:'Tap or swipe to hop and do not get squashed'},
  // RETRO
  {id:'chrome-dino',      name:'Chrome Dino',            cat:'retro',      emoji:'🦕', hot:false,            path:'games/chrome-dino/',             tip:'Space or tap to jump, alt to duck'},
  {id:'web-osu',          name:'Web OSU',                cat:'retro',      emoji:'🎵', hot:false,            path:'games/web-osu/',                 tip:'Click circles to the beat, rhythm game'},
  {id:'pcraft',           name:'P.craft',                cat:'retro',      emoji:'⛏️', hot:false,            path:'games/pcraft/',                  tip:'Minecraft style building in the browser'},
  // ADVENTURE
  {id:'reach-the-core',   name:'Reach The Core',         cat:'adventure',  emoji:'⛏️', hot:false,            path:'games/reach-the-core/',          tip:'Drill down, upgrade, and reach the core'},
  {id:'amidst-sky',       name:'Amidst The Sky',         cat:'adventure',  emoji:'☁️', hot:false,            path:'games/amidst-the-sky/',          tip:'Fly through beautiful skies and collect stars'},
  {id:'another-gentleman',name:'Another Gentlemans Adv', cat:'adventure',  emoji:'🎩', hot:false,            path:'games/another-gentlemans-adventure/',tip:'Puzzle platformer with style'},
  {id:'scuba-bear',       name:'Scuba Bear',             cat:'adventure',  emoji:'🐻', hot:false,            path:'games/scuba-bear/',              tip:'Underwater exploration and collect pearls'},
  {id:'eggy-car',         name:'Eggy Car',               cat:'adventure',  emoji:'🥚', hot:false,            path:'games/eggy-car/',                tip:'Do not drop the egg, drive carefully'},
  // STRATEGY
  {id:'ages-of-conflict',  name:'Ages of Conflict',      cat:'strategy',   emoji:'⚔️', hot:false,            path:'games/ages-of-conflict/',        tip:'Command troops and conquer territories'},
  {id:'awesome-tanks',     name:'Awesome Tanks',         cat:'strategy',   emoji:'🪖', hot:false,            path:'games/awesome-tanks/',           tip:'WASD to move, mouse to aim, blast enemies'},
  {id:'awesome-tanks-2',   name:'Awesome Tanks 2',       cat:'strategy',   emoji:'🔴', hot:false,            path:'games/awesome-tanks-2/',         tip:'More upgrades and bigger levels'},
];

const CATS = [
  {id:'all',label:'⚡ All'},{id:'racing',label:'🏎️ Racing'},{id:'sports',label:'🏈 Sports'},
  {id:'platformer',label:'🦸 Platformer'},{id:'action',label:'⚔️ Action'},{id:'puzzle',label:'🧩 Puzzle'},
  {id:'clicker',label:'👆 Clicker'},{id:'sim',label:'🌍 Sim'},{id:'retro',label:'🕹️ Retro'},
  {id:'adventure',label:'🗺️ Adventure'},{id:'strategy',label:'♟️ Strategy'},
];

// ── STATE ─────────────────────────────────────────────
const S = {
  get favs()        {try{return JSON.parse(localStorage.getItem('gv_favs')||'[]');}catch{return [];}},
  set favs(v)       {localStorage.setItem('gv_favs',JSON.stringify(v));},
  get blank()       {return localStorage.getItem('gv_blank')==='true';},
  set blank(v)      {localStorage.setItem('gv_blank',String(v));},
  get cloak()       {return localStorage.getItem('gv_cloak')!=='false';},
  set cloak(v)      {localStorage.setItem('gv_cloak',String(v));},
  get cloakTitle()  {return localStorage.getItem('gv_cloaktitle')||'Google Classroom';},
  set cloakTitle(v) {localStorage.setItem('gv_cloaktitle',v);},
  get cloakIcon()   {return localStorage.getItem('gv_cloakicon')||'https://ssl.gstatic.com/classroom/favicon.png';},
  set cloakIcon(v)  {localStorage.setItem('gv_cloakicon',v);},
  get scan()        {return localStorage.getItem('gv_scan')!=='false';},
  set scan(v)       {localStorage.setItem('gv_scan',String(v));},
  get anim()        {return localStorage.getItem('gv_anim')!=='false';},
  set anim(v)       {localStorage.setItem('gv_anim',String(v));},
  get thumbs()      {try{return JSON.parse(localStorage.getItem('gv_thumbs')||'{}');}catch{return {};}},
  set thumbs(v)     {localStorage.setItem('gv_thumbs',JSON.stringify(v));},
};

// ── TAB CLOAK ─────────────────────────────────────────
function applyCloak() {
  if (!S.cloak) return;
  document.title = S.cloakTitle;
  let lnk = document.querySelector("link[rel*='icon']");
  if (!lnk) { lnk = document.createElement('link'); lnk.rel = 'shortcut icon'; document.head.appendChild(lnk); }
  lnk.href = S.cloakIcon;
}

// ── OPEN GAME ─────────────────────────────────────────
function openGame(path) {
  if (S.blank) openBlank(path);
  else window.open(path, '_blank');
}

function openBlank(path) {
  const w = window.open('about:blank', '_blank');
  if (!w) { alert('Please allow popups for Blank Tab mode.'); return; }
  const title   = S.cloak ? S.cloakTitle : 'New Tab';
  const favicon = S.cloak ? S.cloakIcon  : '';
  const fav     = favicon ? '<link rel="icon" href="' + favicon + '">' : '';
  // Build correct absolute URL for GitHub Pages
  const origin  = window.location.origin;
  const dir     = window.location.pathname.replace(/\/[^/]*$/, '/');
  const fullPath = path.startsWith('http') ? path : origin + dir + path;
  w.document.write('<!DOCTYPE html><html><head>'
    + '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">'
    + '<title>' + title + '</title>' + fav
    + '<style>*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:hidden;background:#000}'
    + '.b{position:fixed;top:0;left:0;right:0;height:36px;background:rgba(0,0,0,.93);display:flex;align-items:center;padding:0 8px;gap:5px;z-index:99;border-bottom:1px solid #1a1a1a;font-family:-apple-system,sans-serif}'
    + 'button{background:#1a1a1a;border:1px solid #2a2a2a;color:#aaa;border-radius:4px;padding:3px 8px;cursor:pointer;font-size:11px}'
    + 'button:hover{background:#2a2a2a;color:#fff}'
    + '.w{position:fixed;top:36px;bottom:0;left:0;right:0}iframe{width:100%;height:100%;border:none}</style></head><body>'
    + '<div class="b">'
    + '<button onclick="window.close()">X Close</button>'
    + '<button onclick="document.getElementById(\'f\').src=document.getElementById(\'f\').src">Reload</button>'
    + '<button onclick="this.closest(\'.b\').style.display=\'none\'">Hide Bar</button>'
    + '<button onclick="var e=document.querySelector(\'.w\');(e.requestFullscreen||e.webkitRequestFullscreen||function(){}).call(e)">Full</button>'
    + '</div>'
    + '<div class="w"><iframe id="f" src="' + fullPath + '" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;pointer-lock;gamepad" allowfullscreen></iframe></div>'
    + '</body></html>');
  w.document.close();
}

// ── THUMBNAILS ────────────────────────────────────────
const BUILT_IN_THUMBS = {
  '10-minutes-dawn':   'games/10-minutes-till-dawn/splash.png',
  '1v1-lol':           'games/1v1-lol/logo.png',
  'bit-life':          'games/bit-life/splash.png',
  'drive-mad-s':       'games/drive-mad-s/icon.jpg',
  'eggy-car':          'games/eggy-car/icon-256.png',
  'evowars':           'games/evowars/icon-256.png',
  'fireboy-1':         'games/fireboy-and-watergirl/icon-60x60.png',
  'fireboy-2':         'games/fireboy-and-watergirl-2/icon-60x60.png',
  'fireboy-3':         'games/fireboy-and-watergirl-3/icon-60x60.png',
  'fireboy-4':         'games/fireboy-and-watergirl-4/icon-60x60.png',
  'another-gentleman': 'games/another-gentlemans-adventure/icon-256.png',
  'scuba-bear':        'games/scuba-bear/icon-256.png',
  'time-shooter':      'games/time-shooter/logo.png',
  'time-shooter-3':    'games/time-shooter-3/logo.png',
  'tiny-fishing':      'games/tiny-fishing/thumb.png',
  'where-water':       'games/where-is-the-water/icon-256.png',
  'polytrack':         'img/polytrack.svg',
  'slope':             'img/slope.svg',
  'retro-bowl':        'img/retrobowl.svg',
  'ovo':               'img/ovo.svg',
  'geometry-dash':     'img/geometrydash.svg',
  'cookie-clicker':    'img/cookie.svg',
  'flappy-bird':       'img/flappy.svg',
  'basket-random':     'img/basketrandom.svg',
  'basketball-stars':  'img/basketball.svg',
  'run-3':             'img/run3.svg',
  '2048':              'img/2048.svg',
};

function thumbFor(g) {
  const custom = S.thumbs[g.id];
  if (custom) return custom;
  return BUILT_IN_THUMBS[g.id] || null;
}

// ── CARD HTML ─────────────────────────────────────────
function cardHTML(g) {
  const isFav = S.favs.includes(g.id);
  const thumb  = thumbFor(g);
  const thumbEl = thumb
    ? '<img src="' + thumb + '" alt="' + g.name + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'
      + '<div class="thumb-fallback" style="display:none">' + g.emoji + '</div>'
    : '<div class="thumb-fallback">' + g.emoji + '</div>';

  return '<div class="game-card' + (g.hot ? ' hot' : '') + (g.isNew ? ' isnew' : '') + '"'
    + ' data-id="' + g.id + '" data-cat="' + g.cat + '" data-path="' + g.path + '"'
    + ' data-name="' + g.name.toLowerCase().replace(/"/g,'') + '">'
    + '<div class="game-thumb">' + thumbEl
    + '<span class="fav-star' + (isFav ? ' active' : '') + '" data-fav="' + g.id + '">' + (isFav ? '★' : '☆') + '</span>'
    + '<div class="thumb-overlay"><div class="play-circle">▶</div></div>'
    + '</div>'
    + '<div class="game-info">'
    + '<div class="game-name">' + g.name + '</div>'
    + '<div class="game-meta"><span class="game-cat">' + g.cat + '</span><span>📱</span></div>'
    + '</div>'
    + '<div class="open-choice">'
    + '<div class="open-btn play-now" data-path="' + g.path + '">▶ Play</div>'
    + '<div class="open-divider"></div>'
    + '<div class="open-btn blank-btn" data-path="' + g.path + '">⬜ Blank</div>'
    + '</div></div>';
}

function renderGrids() {
  const hg = document.getElementById('hotGrid');
  const ag = document.getElementById('allGrid');
  if (hg) hg.innerHTML = GAMES.filter(g => g.hot).map(cardHTML).join('');
  if (ag) ag.innerHTML = GAMES.filter(g => !g.hot).map(cardHTML).join('');
}

// ── CLICKS ────────────────────────────────────────────
document.addEventListener('click', function(e) {
  const star = e.target.closest('.fav-star');
  if (star) {
    e.stopPropagation();
    const id = star.dataset.fav;
    let favs = S.favs;
    if (favs.includes(id)) {
      favs = favs.filter(function(f){ return f !== id; });
      star.textContent = '☆'; star.classList.remove('active');
    } else {
      favs.push(id); star.textContent = '★'; star.classList.add('active');
      star.style.transform = 'scale(1.5)';
      setTimeout(function(){ star.style.transform = ''; }, 220);
    }
    S.favs = favs;
    var fc = document.getElementById('favCount'); if (fc) fc.textContent = S.favs.length;
    return;
  }
  const pn = e.target.closest('.play-now');
  if (pn) { e.stopPropagation(); openGame(pn.dataset.path); return; }
  const bb = e.target.closest('.blank-btn');
  if (bb) { e.stopPropagation(); openBlank(bb.dataset.path); return; }
  const card = e.target.closest('.game-card');
  if (card && !e.target.closest('.open-choice') && !e.target.closest('.fav-star'))
    openGame(card.dataset.path);
});

// ── CAT FILTER ────────────────────────────────────────
function initCatFilter() {
  const cf = document.getElementById('catFilter');
  if (!cf) return;
  cf.innerHTML = CATS.map(function(c) {
    return '<div class="cat-pill' + (c.id === 'all' ? ' active' : '') + '" data-cat="' + c.id + '">' + c.label + '</div>';
  }).join('');
  cf.addEventListener('click', function(e) {
    const p = e.target.closest('.cat-pill'); if (!p) return;
    cf.querySelectorAll('.cat-pill').forEach(function(x){ x.classList.remove('active'); });
    p.classList.add('active');
    const cat = p.dataset.cat; let vis = 0;
    document.querySelectorAll('.game-card').forEach(function(c) {
      const show = cat === 'all' || c.dataset.cat === cat;
      c.classList.toggle('hidden', !show); if (show) vis++;
    });
    const hh = document.getElementById('hotHeader'); if (hh) hh.style.display = cat === 'all' ? '' : 'none';
    const nr = document.getElementById('noResults'); if (nr) nr.style.display = vis === 0 ? 'block' : 'none';
  });
}

// ── SETTINGS ──────────────────────────────────────────
function openSettings() { document.getElementById('settingsOverlay') && document.getElementById('settingsOverlay').classList.add('open'); }
function closeSettings() { document.getElementById('settingsOverlay') && document.getElementById('settingsOverlay').classList.remove('open'); }

function initSettings() {
  var sb = document.getElementById('settingsBtn'); if (sb) sb.addEventListener('click', openSettings);
  var ns = document.getElementById('navSettings'); if (ns) ns.addEventListener('click', openSettings);
  var ov = document.getElementById('settingsOverlay');
  if (ov) ov.addEventListener('click', function(e){ if (e.target === ov) closeSettings(); });

  function mkToggle(id, get, set, cb) {
    var el = document.getElementById(id); if (!el) return;
    el.classList.toggle('on', !!get());
    el.addEventListener('click', function() {
      el.classList.toggle('on'); var v = el.classList.contains('on'); set(v); if (cb) cb(v);
    });
  }
  mkToggle('tgCloak', function(){ return S.cloak; }, function(v){ S.cloak = v; if(v) applyCloak(); else document.title = 'GameVault'; });
  mkToggle('tgBlank', function(){ return S.blank; }, function(v){ S.blank = v; });
  mkToggle('tgScan',  function(){ return S.scan;  }, function(v){ S.scan = v; document.body.classList.toggle('scanlines', v); });
  mkToggle('tgAnim',  function(){ return S.anim;  }, function(v){ S.anim = v; document.querySelectorAll('.game-card').forEach(function(c){ c.style.transition = v ? '' : 'none'; }); });
  document.body.classList.toggle('scanlines', S.scan);

  document.querySelectorAll('.cloak-preset').forEach(function(p) {
    p.addEventListener('click', function() {
      S.cloakTitle = p.dataset.title; S.cloakIcon = p.dataset.icon || '';
      var i = document.getElementById('cloakInput'); if (i) i.value = p.dataset.title;
      var pv = document.getElementById('cloakPreview'); if (pv) pv.textContent = p.dataset.title;
      if (S.cloak) applyCloak();
    });
  });
  var inp = document.getElementById('cloakInput');
  if (inp) {
    inp.value = S.cloakTitle;
    inp.addEventListener('input', function() {
      S.cloakTitle = inp.value;
      var pv = document.getElementById('cloakPreview'); if (pv) pv.textContent = inp.value;
      if (S.cloak) applyCloak();
    });
  }
  var pv = document.getElementById('cloakPreview'); if (pv) pv.textContent = S.cloakTitle;

  initThumbManager();
}

// ── THUMBNAIL MANAGER ─────────────────────────────────
function initThumbManager() {
  var btn = document.getElementById('thumbManagerBtn');
  var overlay = document.getElementById('thumbManagerOverlay');
  var closeBtn = document.getElementById('thumbManagerClose');
  var list = document.getElementById('thumbManagerList');
  var saveBtn = document.getElementById('thumbManagerSave');
  if (!btn || !overlay) return;

  btn.addEventListener('click', function() {
    list.innerHTML = GAMES.map(function(g) {
      var current = S.thumbs[g.id] || '';
      return '<div class="thumb-row">'
        + '<div class="thumb-row-info"><span class="thumb-row-emoji">' + g.emoji + '</span>'
        + '<span class="thumb-row-name">' + g.name + '</span></div>'
        + '<input class="thumb-row-input" data-id="' + g.id + '" type="text" placeholder="Paste image URL..." value="' + current + '" autocomplete="off">'
        + '</div>';
    }).join('');
    overlay.classList.add('open');
    closeSettings();
  });

  if (closeBtn) closeBtn.addEventListener('click', function(){ overlay.classList.remove('open'); });
  overlay.addEventListener('click', function(e){ if (e.target === overlay) overlay.classList.remove('open'); });

  if (saveBtn) saveBtn.addEventListener('click', function() {
    var custom = {};
    overlay.querySelectorAll('.thumb-row-input').forEach(function(inp) {
      var val = inp.value.trim();
      if (val) custom[inp.dataset.id] = val;
    });
    S.thumbs = custom;
    overlay.classList.remove('open');
    renderGrids(); initCatFilter();
    alert('Thumbnails saved!');
  });
}

// ── SEARCH ────────────────────────────────────────────
function initSearch() {
  var input = document.getElementById('searchInput'); if (!input) return;
  var grid = document.getElementById('searchGrid');
  var ph   = document.getElementById('searchPlaceholder');
  var nr   = document.getElementById('noResults');
  var ri   = document.getElementById('resultsInfo');
  var fr   = document.getElementById('filterRow');

  if (grid) grid.innerHTML = GAMES.map(cardHTML).join('');
  var activeCat = 'all';

  function doSearch() {
    var q = input.value.toLowerCase().trim();
    if (!q && activeCat === 'all') {
      if (grid) grid.style.display = 'none';
      if (ph) ph.style.display = 'block';
      if (nr) nr.style.display = 'none';
      if (ri) ri.style.display = 'none';
      return;
    }
    if (grid) grid.style.display = 'grid';
    if (ph) ph.style.display = 'none';
    var vis = 0;
    if (grid) grid.querySelectorAll('.game-card').forEach(function(c) {
      var ok = (activeCat === 'all' || c.dataset.cat === activeCat)
             && (!q || c.dataset.name.includes(q) || c.dataset.cat.includes(q));
      c.classList.toggle('hidden', !ok); if (ok) vis++;
    });
    if (nr) nr.style.display = vis === 0 ? 'block' : 'none';
    if (ri) { ri.style.display = vis > 0 ? 'block' : 'none'; ri.innerHTML = '<span>' + vis + '</span> game' + (vis !== 1 ? 's' : '') + ' found'; }
  }

  input.addEventListener('input', doSearch);
  if (fr) {
    fr.innerHTML = CATS.map(function(c) {
      return '<div class="fpill' + (c.id === 'all' ? ' active' : '') + '" data-cat="' + c.id + '">' + c.label + '</div>';
    }).join('');
    fr.addEventListener('click', function(e) {
      var p = e.target.closest('.fpill'); if (!p) return;
      fr.querySelectorAll('.fpill').forEach(function(x){ x.classList.remove('active'); });
      p.classList.add('active'); activeCat = p.dataset.cat; doSearch();
    });
  }
  var q = new URLSearchParams(location.search).get('q');
  if (q) { input.value = q; doSearch(); } else input.focus();
}

// ── FAVORITES ─────────────────────────────────────────
function initFavorites() {
  var grid = document.getElementById('favGrid');
  var empty = document.getElementById('emptyState');
  var count = document.getElementById('favCount');
  if (!grid) return;
  function render() {
    var favGames = S.favs.map(function(id){ return GAMES.find(function(g){ return g.id === id; }); }).filter(Boolean);
    if (count) count.textContent = favGames.length;
    if (favGames.length === 0) { if (empty) empty.style.display = 'block'; grid.innerHTML = ''; }
    else { if (empty) empty.style.display = 'none'; grid.innerHTML = favGames.map(cardHTML).join(''); }
  }
  render();
  document.addEventListener('click', function(e) {
    if (e.target.closest('.fav-star')) setTimeout(render, 60);
  });
}

// ── CHAT (real, no bots) ──────────────────────────────
function initChat() {
  var fab      = document.getElementById('chatFab');
  var panel    = document.getElementById('chatPanel');
  var msgsEl   = document.getElementById('chatMsgs');
  var input    = document.getElementById('chatInput');
  var sendBtn  = document.getElementById('chatSend');
  var closeBtn = document.getElementById('chatClose');
  var badge    = document.getElementById('unreadBadge');
  var navChat  = document.getElementById('navChat');
  if (!fab || !panel) return;

  var open = false;
  var ME = (function() {
    var u = localStorage.getItem('gv_username');
    if (!u) {
      var adjs  = ['Dark','Hyper','Shadow','Neon','Ghost','Turbo','Prime','Omega','Ultra','Cyber'];
      var nouns = ['Blade','Wolf','Fox','Viper','Phoenix','Dragon','Knight','Raven','Cobra','Ninja'];
      u = adjs[Math.floor(Math.random()*10)] + nouns[Math.floor(Math.random()*10)] + Math.floor(Math.random()*999);
      localStorage.setItem('gv_username', u);
    }
    return u;
  })();

  var CHAT_KEY = 'gv_chat_v6';
  function getMsgs() { try { return JSON.parse(localStorage.getItem(CHAT_KEY) || '[]'); } catch { return []; } }
  function saveMsgs(m) { localStorage.setItem(CHAT_KEY, JSON.stringify(m.slice(-200))); }
  function fmtT(ts) { var d = new Date(ts); return String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0'); }
  function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function render() {
    if (!msgsEl) return;
    var msgs = getMsgs();
    if (msgs.length === 0) {
      msgsEl.innerHTML = '<div style="text-align:center;color:var(--muted);font-size:12px;padding:20px">No messages yet. Say something!</div>';
    } else {
      msgsEl.innerHTML = msgs.map(function(m) {
        return '<div class="msg ' + (m.user === ME ? 'mine' : 'theirs') + '">'
          + '<div class="msg-user">' + esc(m.user === ME ? 'You' : m.user) + '</div>'
          + '<div class="msg-bubble">' + esc(m.text) + '</div>'
          + '<div class="msg-time">' + fmtT(m.time) + '</div>'
          + '</div>';
      }).join('');
    }
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function send() {
    if (!input) return;
    var text = input.value.trim(); if (!text) return;
    var msgs = getMsgs();
    msgs.push({user: ME, text: text, time: Date.now()});
    saveMsgs(msgs); input.value = ''; render();
  }

  function toggle() {
    open = !open; panel.classList.toggle('open', open);
    if (open) {
      if (badge) { badge.style.display = 'none'; badge.textContent = '0'; }
      render();
      setTimeout(function(){ if (input) input.focus(); }, 300);
    }
  }

  fab.addEventListener('click', toggle);
  if (navChat) navChat.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', function(){ open = false; panel.classList.remove('open'); });
  if (sendBtn) sendBtn.addEventListener('click', send);
  if (input) input.addEventListener('keydown', function(e){ if (e.key === 'Enter') send(); });

  var lastCount = getMsgs().length;
  setInterval(function() {
    var msgs = getMsgs();
    if (msgs.length > lastCount) {
      if (open) render();
      else if (badge) { badge.style.display = 'flex'; badge.textContent = Math.min(9, msgs.length - lastCount); }
      lastCount = msgs.length;
    }
    if (open) render();
  }, 2000);
}

// ── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.toggle('scanlines', S.scan);
  applyCloak();
  renderGrids();
  initCatFilter();
  initSettings();
  initSearch();
  initFavorites();
  initChat();
});
