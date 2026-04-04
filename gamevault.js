// ═══════════════════════════════════════════════════════
// GAMEVAULT — gamevault.js
// ═══════════════════════════════════════════════════════

const GAMES = [
  {id:'polytrack',         name:'Polytrack',              cat:'racing',     emoji:'🏎️', hot:true,  isNew:true, path:'games/polytrack/',                tip:'WASD/Arrows · R restart · Custom cars & tracks!'},
  {id:'slope',             name:'Slope',                  cat:'racing',     emoji:'🔵', hot:true,             path:'games/slope/',                   tip:'← → steer · avoid the red blocks'},
  {id:'retro-bowl',        name:'Retro Bowl',             cat:'sports',     emoji:'🏈', hot:true,             path:'games/retro-bowl/',              tip:'Swipe to pass · tap to run & juke'},
  {id:'ovo',               name:'OvO',                    cat:'platformer', emoji:'🤸', hot:true,             path:'games/ovo/',                     tip:'← → Move · Space jump · ↓ slide · Shift dash'},
  {id:'1v1-lol',           name:'1v1.LOL',                cat:'action',     emoji:'🏗️', hot:true,             path:'games/1v1-lol/',                 tip:'WASD move · mouse aim · Z/X to build'},
  {id:'geometry-dash',     name:'Geometry Dash',          cat:'platformer', emoji:'🔷', hot:true,             path:'games/geometry-dash-remastered/',tip:'Tap/Space to jump · match the beat'},
  {id:'cookie-clicker',    name:'Cookie Clicker',         cat:'clicker',    emoji:'🍪', hot:true,             path:'games/cookie-clicker/',          tip:'Click the big cookie!'},
  {id:'basket-random',     name:'Basket Random',          cat:'sports',     emoji:'🏀', hot:true,             path:'games/basket-random/',           tip:'W = P1 · ↑ = P2 · score baskets!'},
  {id:'basketball-stars',  name:'Basketball Stars',       cat:'sports',     emoji:'⛹️', hot:true,             path:'games/basketball-stars/',        tip:'WASD move · Space to shoot / steal'},
  {id:'run-3',             name:'Run 3',                  cat:'retro',      emoji:'👟', hot:true,             path:'games/run-3/',                   tip:'← → steer · Space jump · avoid holes'},
  {id:'flappy-bird',       name:'Flappy Bird',            cat:'retro',      emoji:'🐤', hot:true,             path:'games/flappy-bird/',             tip:'Tap/Space to flap · don\'t hit the pipes'},
  {id:'stickman-hook',     name:'Stickman Hook',          cat:'platformer', emoji:'🕷️', hot:true,             path:'games/stickman-hook/',           tip:'Tap and hold to swing!'},
  {id:'getaway-shootout',  name:'Getaway Shootout',       cat:'action',     emoji:'🔫', hot:true,             path:'games/getaway-shootout/',        tip:'Q/E = P1 hop · ←/→ = P2 hop'},
  {id:'time-shooter',      name:'Time Shooter',           cat:'action',     emoji:'⏱️', hot:true,             path:'games/time-shooter/',            tip:'Move to slow time · shoot enemies'},
  {id:'time-shooter-3',    name:'Time Shooter 3',         cat:'action',     emoji:'🔫', hot:true,  isNew:true, path:'games/time-shooter-3/',          tip:'Move to slow time · shoot all enemies'},
  {id:'monkey-mart',       name:'Monkey Mart',            cat:'sim',        emoji:'🐒', hot:true,             path:'games/monkey-mart/',             tip:'WASD or tap to move your monkey'},
  {id:'tiny-fishing',      name:'Tiny Fishing',           cat:'clicker',    emoji:'🎣', hot:true,  isNew:true, path:'games/tiny-fishing/',            tip:'Cast and reel · upgrade your gear'},
  {id:'subway-surfers',    name:'Subway Surfers',         cat:'action',     emoji:'🏃', hot:true,  isNew:true, path:'games/subway-surfers/',          tip:'Swipe to dodge trains · collect coins'},
  {id:'five-nights',       name:'Five Nights at Epstein\'s',cat:'action',  emoji:'😨', hot:true,             path:'games/five-nights-at-epsteins/', tip:'Survive the night · manage power'},
  {id:'duck-life-4',       name:'Duck Life 4',            cat:'sports',     emoji:'🦆', hot:true,             path:'games/duck-life-4/',             tip:'Train your duck · win races!'},
  {id:'drift-boss',        name:'Drift Boss',             cat:'racing',     emoji:'💨', hot:false,            path:'games/drift-boss/',              tip:'Click/tap to drift right'},
  {id:'drive-mad',         name:'Drive Mad',              cat:'racing',     emoji:'🚗', hot:false,            path:'games/drive-mad/',               tip:'← → to drive · don\'t flip!'},
  {id:'drive-mad-s',       name:'Drive Mad S',            cat:'racing',     emoji:'🛻', hot:false,            path:'games/drive-mad-s/',             tip:'Trickier tracks · don\'t flip!'},
  {id:'motox3m',           name:'Moto X3M',               cat:'racing',     emoji:'🏍️', hot:false,            path:'games/motox3m/',                 tip:'↑ Gas · ↓ Brake · ←→ Balance'},
  {id:'tunnel-rush',       name:'Tunnel Rush',            cat:'racing',     emoji:'🌀', hot:false,            path:'games/tunnel-rush/',             tip:'← → dodge obstacles · survive!'},
  {id:'tanuki-sunset',     name:'Tanuki Sunset',          cat:'racing',     emoji:'🦝', hot:false,            path:'games/tanuki-sunset/',           tip:'A/D to lean · cruise on a longboard'},
  {id:'two-ball-3d',       name:'Two Ball 3D',            cat:'racing',     emoji:'🔴', hot:false,            path:'games/two-ball-3d/',             tip:'← → steer two balls at once'},
  {id:'soccer-random',     name:'Soccer Random',          cat:'sports',     emoji:'⚽', hot:false,            path:'games/soccer-random/',           tip:'W / ↑ to jump · score goals!'},
  {id:'boxing-random',     name:'Boxing Random',          cat:'sports',     emoji:'🥊', hot:false,            path:'games/boxing-random/',           tip:'W / ↑ to punch · KO your opponent!'},
  {id:'volley-random',     name:'Volley Random',          cat:'sports',     emoji:'🏐', hot:false,            path:'games/volley-random/',           tip:'W / ↑ to jump · spike the ball!'},
  {id:'rooftop-snipers',   name:'Rooftop Snipers',        cat:'sports',     emoji:'🎯', hot:false,            path:'games/rooftop-snipers/',         tip:'W = P1 jump & shoot · ↑ = P2'},
  {id:'rocket-league-2d',  name:'Rocket League 2D',       cat:'sports',     emoji:'🚀', hot:false,            path:'games/rocket-league-2d/',        tip:'Drive the ball into the goal!'},
  {id:'vex-3',             name:'Vex 3',                  cat:'platformer', emoji:'🏃', hot:false,            path:'games/vex-3/',                   tip:'WASD · avoid spikes · reach the end'},
  {id:'vex-4',             name:'Vex 4',                  cat:'platformer', emoji:'🏃', hot:false,            path:'games/vex-4/',                   tip:'WASD · new mechanics'},
  {id:'vex-5',             name:'Vex 5',                  cat:'platformer', emoji:'🏃', hot:false,            path:'games/vex-5/',                   tip:'WASD · harder and faster'},
  {id:'vex-6',             name:'Vex 6',                  cat:'platformer', emoji:'🏃', hot:false,            path:'games/vex-6/',                   tip:'WASD · precision platforming'},
  {id:'vex-7',             name:'Vex 7',                  cat:'platformer', emoji:'🏃', hot:false, isNew:true, path:'games/vex-7/',                   tip:'Latest Vex · WASD to survive'},
  {id:'fireboy-1',         name:'Fireboy & Watergirl 1',  cat:'platformer', emoji:'🔥', hot:false,            path:'games/fireboy-and-watergirl/',   tip:'P1: WASD · P2: Arrows · teamwork!'},
  {id:'fireboy-2',         name:'Fireboy & Watergirl 2',  cat:'platformer', emoji:'💡', hot:false,            path:'games/fireboy-and-watergirl-2/', tip:'Light Temple · two-player teamwork!'},
  {id:'fireboy-3',         name:'Fireboy & Watergirl 3',  cat:'platformer', emoji:'❄️', hot:false,            path:'games/fireboy-and-watergirl-3/', tip:'Ice Temple · slippery floors!'},
  {id:'fireboy-4',         name:'Fireboy & Watergirl 4',  cat:'platformer', emoji:'💎', hot:false,            path:'games/fireboy-and-watergirl-4/', tip:'Crystal Temple · new puzzles!'},
  {id:'doodle-jump',       name:'Doodle Jump',            cat:'platformer', emoji:'👾', hot:false,            path:'games/doodle-jump/',             tip:'Tilt / ← → to aim · jump up forever'},
  {id:'mario-game',        name:'Super Mario',            cat:'platformer', emoji:'🍄', hot:false,            path:'games/mario-game/',              tip:'Arrow keys · Space jump · stomp goombas!'},
  {id:'geometry-vibes',    name:'Geometry Vibes',         cat:'platformer', emoji:'🔷', hot:false,            path:'games/geometry-vibes/',          tip:'Tap to jump · sync with the beat'},
  {id:'geometry-vibes-m',  name:'Geometry Vibes Monster', cat:'platformer', emoji:'👾', hot:false,            path:'games/geometry-vibes-monster/', tip:'Tap to dodge · avoid the monster'},
  {id:'10-minutes-dawn',   name:'10 Minutes Till Dawn',   cat:'action',     emoji:'🌙', hot:false,            path:'games/10-minutes-till-dawn/',    tip:'WASD move · mouse aim · survive 10 mins!'},
  {id:'evowars',           name:'EvoWars.io',             cat:'action',     emoji:'⚔️', hot:false,            path:'games/evowars/',                 tip:'Move to attack · eat XP · evolve bigger'},
  {id:'shadow-fight',      name:'Shadow Fight',           cat:'action',     emoji:'👤', hot:false,            path:'games/shadow-fight/',            tip:'WASD or arrows · combo attacks'},
  {id:'temple-run-2',      name:'Temple Run 2',           cat:'action',     emoji:'🏛️', hot:false,            path:'games/temple-run-2/',            tip:'Swipe to turn · slide · jump · tilt!'},
  {id:'friday-night-funkin',name:'Friday Night Funkin\'', cat:'action',     emoji:'🎤', hot:false,            path:'games/friday-night-funkin/',     tip:'Arrow keys · hit the beats'},
  {id:'gunspin',           name:'Gun Spin',               cat:'action',     emoji:'🔫', hot:false,            path:'games/gunspin/',                 tip:'Click/tap to spin · travel far!'},
  {id:'sabercut',          name:'Sabercut',               cat:'action',     emoji:'🗡️', hot:false,            path:'games/sabercut/',                tip:'Mouse to aim · cut everything!'},
  {id:'slice-master',      name:'Slice Master',           cat:'action',     emoji:'🔪', hot:false,            path:'games/slice-master/',            tip:'Hold/tap to fall · slice all objects!'},
  {id:'x-trench-run',      name:'X Trench Run',           cat:'action',     emoji:'✈️', hot:false,            path:'games/x-trench-run/',            tip:'Mouse to steer · Space to shoot'},
  {id:'yohoho',            name:'YoHoHo.io',              cat:'action',     emoji:'🏴‍☠️',hot:false,            path:'games/yohoho/',                  tip:'Move to attack · last pirate standing!'},
  {id:'gons-io',           name:'Gons.io',                cat:'action',     emoji:'🔵', hot:false,            path:'games/gons-io/',                 tip:'Move to grow · eat smaller dots'},
  {id:'rookie-bowman',     name:'Rookie Bowman',          cat:'action',     emoji:'🏹', hot:false,            path:'games/rookie-bowman/',           tip:'Mouse to aim · hold then release!'},
  {id:'brawl-stars-laser', name:'Brawl Stars Laser',      cat:'action',     emoji:'⭐', hot:false,            path:'games/brawl-stars-project-laser/',tip:'Move · auto-aim · defeat enemies'},
  {id:'pull-of-war',       name:'Pull Of War',            cat:'action',     emoji:'💪', hot:false,            path:'games/pull-of-war/',             tip:'Spam click faster than your opponent!'},
  {id:'dune',              name:'Dune!',                  cat:'action',     emoji:'🏜️', hot:false,            path:'games/dune/',                    tip:'Click/tap to jump · ride the dunes'},
  {id:'n-gon',             name:'N-Gon',                  cat:'action',     emoji:'🔷', hot:false,            path:'games/n-gon/',                   tip:'Survive waves · dodge and shoot'},
  {id:'2048',              name:'2048',                   cat:'puzzle',     emoji:'🔢', hot:false,            path:'games/2048/',                    tip:'Swipe/arrows to slide tiles · reach 2048!'},
  {id:'idle-breakout',     name:'Idle Breakout',          cat:'puzzle',     emoji:'🧱', hot:false,            path:'games/idle-breakout/',           tip:'Click to drop balls · break all blocks'},
  {id:'hextris',           name:'Hextris',                cat:'puzzle',     emoji:'⬡',  hot:false,            path:'games/hextris/',                 tip:'← → rotate · match 3 colors'},
  {id:'cut-the-rope',      name:'Cut The Rope',           cat:'puzzle',     emoji:'🍬', hot:false,            path:'games/cut-the-rope/',            tip:'Drag to cut rope · feed the monster!'},
  {id:'there-is-no-game',  name:'There Is No Game',       cat:'puzzle',     emoji:'🤫', hot:false,            path:'games/there-is-no-game/',        tip:'Click everything · there\'s definitely a game'},
  {id:'breaklock',         name:'Breaklock',              cat:'puzzle',     emoji:'🔓', hot:false,            path:'games/breaklock/',               tip:'Crack the pattern lock'},
  {id:'sandspiel',         name:'Sandspiel',              cat:'puzzle',     emoji:'🌊', hot:false,            path:'games/sandspiel/',               tip:'Draw sand, water, fire · watch it interact'},
  {id:'conways-life',      name:'Conway\'s Game of Life', cat:'puzzle',     emoji:'🔬', hot:false,            path:'games/conways-game-of-life/',    tip:'Click cells · watch life evolve'},
  {id:'core-ball',         name:'Core Ball',              cat:'puzzle',     emoji:'⚪', hot:false,            path:'games/core-ball/',               tip:'Click to shoot · destroy the core'},
  {id:'smart-ball',        name:'Smart Ball',             cat:'puzzle',     emoji:'🔵', hot:false,            path:'games/smart-ball/',              tip:'Guide the ball · physics puzzles'},
  {id:'rift-shift',        name:'Rift Shift',             cat:'puzzle',     emoji:'🌀', hot:false,            path:'games/rift-shift/',              tip:'Shift between dimensions · solve puzzles'},
  {id:'where-water',       name:'Where Is the Water?',    cat:'puzzle',     emoji:'💧', hot:false,            path:'games/where-is-the-water/',      tip:'Dig channels · guide water to the croc'},
  {id:'maptroid',          name:'Maptroid',               cat:'puzzle',     emoji:'🗺️', hot:false,            path:'games/maptroid/',                tip:'Metroid-style exploration'},
  {id:'family-feud',       name:'Family Feud',            cat:'puzzle',     emoji:'📺', hot:false,            path:'games/family-feud/',             tip:'Type your answer · survey says!'},
  {id:'clicker-heroes',    name:'Clicker Heroes',         cat:'clicker',    emoji:'⚔️', hot:false,            path:'games/clicker-heroes/',          tip:'Click monsters · hire heroes · prestige!'},
  {id:'doge-miner',        name:'Doge Miner',             cat:'clicker',    emoji:'🐕', hot:false,            path:'games/doge-miner/',              tip:'Click to mine · much doge · very coin'},
  {id:'particle-clicker',  name:'Particle Clicker',       cat:'clicker',    emoji:'⚛️', hot:false,            path:'games/particle-clicker/',        tip:'Click to collide particles'},
  {id:'incremancer',       name:'Incremancer',            cat:'clicker',    emoji:'💀', hot:false,            path:'games/incremancer/',             tip:'Click to summon undead'},
  {id:'progress-knight',   name:'Progress Knight',        cat:'sim',        emoji:'⚔️', hot:false,            path:'games/progress-knight-quest/',   tip:'Idle RPG · level up jobs'},
  {id:'progress-knight-r', name:'Progress Knight Reborn', cat:'sim',        emoji:'🛡️', hot:false,            path:'games/progress-knight-reborn/', tip:'Reborn edition · more content'},
  {id:'bit-life',          name:'BitLife',                cat:'sim',        emoji:'🧬', hot:false,            path:'games/bit-life/',                tip:'Tap choices · live your whole life!'},
  {id:'planet-life',       name:'Planet Life',            cat:'sim',        emoji:'🌍', hot:false,            path:'games/planet-life/',             tip:'Build a planet ecosystem'},
  {id:'the-final-earth',   name:'The Final Earth 2',      cat:'sim',        emoji:'🏙️', hot:false,            path:'games/the-final-earth/',         tip:'Build a floating city'},
  {id:'a-dark-room',       name:'A Dark Room',            cat:'sim',        emoji:'🕯️', hot:false,            path:'games/a-dark-room/',             tip:'Text-based survival · start a fire'},
  {id:'aground',           name:'Aground',                cat:'sim',        emoji:'⛏️', hot:false,            path:'games/aground/',                 tip:'Mine, craft, build · island survival'},
  {id:'crossy-road',       name:'Crossy Road',            cat:'sim',        emoji:'🐔', hot:false,            path:'games/crossy-road/',             tip:'Tap/swipe to hop · don\'t get squashed!'},
  {id:'chrome-dino',       name:'Chrome Dino',            cat:'retro',      emoji:'🦕', hot:false,            path:'games/chrome-dino/',             tip:'Space/tap to jump · alt to duck'},
  {id:'web-osu',           name:'Web OSU',                cat:'retro',      emoji:'🎵', hot:false,            path:'games/web-osu/',                 tip:'Click circles to the beat'},
  {id:'pcraft',            name:'P.craft',                cat:'retro',      emoji:'⛏️', hot:false,            path:'games/pcraft/',                  tip:'Minecraft-style building in browser'},
  {id:'reach-the-core',    name:'Reach The Core',         cat:'adventure',  emoji:'⛏️', hot:false,            path:'games/reach-the-core/',          tip:'Drill down · upgrade · reach the core'},
  {id:'amidst-sky',        name:'Amidst The Sky',         cat:'adventure',  emoji:'☁️', hot:false,            path:'games/amidst-the-sky/',          tip:'Fly through beautiful skies'},
  {id:'another-gentleman', name:'Another Gentleman\'s Adv.',cat:'adventure',emoji:'🎩', hot:false,            path:'games/another-gentlemans-adventure/',tip:'Puzzle platformer'},
  {id:'scuba-bear',        name:'Scuba Bear',             cat:'adventure',  emoji:'🐻', hot:false,            path:'games/scuba-bear/',              tip:'Underwater exploration'},
  {id:'eggy-car',          name:'Eggy Car',               cat:'adventure',  emoji:'🥚', hot:false,            path:'games/eggy-car/',                tip:'Don\'t drop the egg! Drive carefully'},
  {id:'ages-of-conflict',  name:'Ages of Conflict',       cat:'strategy',   emoji:'⚔️', hot:false,            path:'games/ages-of-conflict/',        tip:'Command troops · conquer territories'},
  {id:'awesome-tanks',     name:'Awesome Tanks',          cat:'strategy',   emoji:'🪖', hot:false,            path:'games/awesome-tanks/',           tip:'WASD move · mouse aim · blast enemies'},
  {id:'awesome-tanks-2',   name:'Awesome Tanks 2',        cat:'strategy',   emoji:'🔴', hot:false,            path:'games/awesome-tanks-2/',         tip:'More upgrades · bigger levels'},

  // ── NEW GAMES (external via unblockedwtf) ────────────
  {id:'dune-dash',         name:'Dune Dash',            cat:'racing',     emoji:'🏄', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/dune-dash',          tip:'Ride the dunes · tap to jump · go fast!', ext:true},
  {id:'moto-x3m-2',        name:'Moto X3M 2',           cat:'racing',     emoji:'🏍️', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/moto-x3m-2',         tip:'↑ Gas · ↓ Brake · ←→ Balance · more levels', ext:true},
  {id:'moto-x3m-winter',   name:'Moto X3M Winter',      cat:'racing',     emoji:'❄️', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/moto-x3m-winter',    tip:'↑ Gas · ↓ Brake · ←→ Balance · icy tracks', ext:true},
  {id:'moto-x3m-pool',     name:'Moto X3M Pool Party',  cat:'racing',     emoji:'🌊', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/moto-x3m-pool-party', tip:'↑ Gas · ↓ Brake · ←→ Balance · water levels', ext:true},
  {id:'moto-x3m-spooky',   name:'Moto X3M Spooky Land', cat:'racing',     emoji:'👻', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/moto-x3m-spooky-land',tip:'↑ Gas · ↓ Brake · ←→ Balance · halloween', ext:true},
  {id:'baseball-bros',     name:'Baseball Bros',         cat:'sports',     emoji:'⚾', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/baseball-bros',       tip:'Click to swing · time your hits!', ext:true},
  {id:'football-bros',     name:'Football Bros',         cat:'sports',     emoji:'🏈', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/football-bros',       tip:'Run, pass, tackle · score touchdowns!', ext:true},
  {id:'basket-bros',       name:'Basket Bros',           cat:'sports',     emoji:'🏀', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/basket-bros',         tip:'Dunk on your opponent!', ext:true},
  {id:'basketball-legends',name:'Basketball Legends',    cat:'sports',     emoji:'🏀', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/basketball-legends',   tip:'A/D move · W jump · S special · 2-player', ext:true},
  {id:'helix-jump',        name:'Helix Jump',            cat:'puzzle',     emoji:'🌀', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/helix-jump',          tip:'Drag to spin the tower · fall through the gaps!', ext:true},
  {id:'paper-io-2',        name:'Paper.io 2',            cat:'action',     emoji:'📄', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/paper-io-2',          tip:'Draw territory · don't let others cut your trail', ext:true},
  {id:'survival-race',     name:'Survival Race',         cat:'racing',     emoji:'💀', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/survival-race',       tip:'Race to survive · eliminate the competition', ext:true},
  {id:'bottle-flip',       name:'Bottle Flip',           cat:'fun',        emoji:'🧃', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/bottle-flip',         tip:'Time your tap · land the bottle perfectly!', ext:true},
  {id:'stickman-duel',     name:'Stickman Duel',         cat:'action',     emoji:'⚔️', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/stickman-duel',       tip:'Mouse to aim · click to fire your weapon', ext:true},
  {id:'slope-2',           name:'Slope 2',               cat:'racing',     emoji:'🔵', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/slope-2',             tip:'← → steer · faster and harder than slope 1', ext:true},
  {id:'slope-tunnel',      name:'Slope Tunnel',          cat:'racing',     emoji:'🌀', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/slope-tunnel',        tip:'← → steer inside the neon tunnel', ext:true},
  {id:'slope-2p',          name:'Slope 2 Players',       cat:'racing',     emoji:'🔵', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/slope-2-players',     tip:'Race a friend on the same keyboard', ext:true},
  {id:'cluster-rush',      name:'Cluster Rush',          cat:'platformer', emoji:'🚛', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/cluster-rush',        tip:'Jump between trucks · don't fall off!', ext:true},
  {id:'snow-rider',        name:'Snow Rider 3D',          cat:'racing',     emoji:'🎿', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/snow-rider',           tip:'← → steer · dodge trees · collect gifts', ext:true},
  {id:'drift-hunters',     name:'Drift Hunters',          cat:'racing',     emoji:'🚗', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/drift-hunters',        tip:'Drift for points · upgrade your car', ext:true},
  {id:'slow-roads',        name:'Slow Roads',             cat:'racing',     emoji:'🛣️', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/slow-roads',           tip:'Relaxing endless drive · zen mode', ext:true},
  {id:'house-of-hazards',  name:'House of Hazards',       cat:'action',     emoji:'🏠', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/house-of-hazards',     tip:'Survive household hazards · multiplayer chaos!', ext:true},
  {id:'hole-io',           name:'Hole.io',                cat:'action',     emoji:'🕳️', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/hole-io',              tip:'Swallow everything · grow your hole', ext:true},
  {id:'happy-wheels',      name:'Happy Wheels',           cat:'fun',        emoji:'😈', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/happy-wheels',         tip:'Drive · crash · ragdoll physics chaos', ext:true},
  {id:'plants-vs-zombies', name:'Plants vs Zombies',      cat:'strategy',   emoji:'🌻', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/plants-vs-zombies',    tip:'Plant sunflowers · defend from zombies', ext:true},
  {id:'pokemon-fire-red',  name:'Pokemon Fire Red',       cat:'retro',      emoji:'🔴', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/pokemon-fire-red',     tip:'Classic GBA Pokemon · catch 'em all!', ext:true},
  {id:'pokemon-emerald',   name:'Pokemon Emerald',        cat:'retro',      emoji:'💚', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/pokemon-emerald',      tip:'Classic GBA Pokemon · Hoenn region', ext:true},
  {id:'super-smash-flash2',name:'Super Smash Flash 2',    cat:'action',     emoji:'👊', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/super-smash-flash-2',  tip:'WASD move · J attack · K special · L shield', ext:true},
  {id:'getting-over-it',   name:'Getting Over It',        cat:'fun',        emoji:'⛏️', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/getting-over-it',      tip:'Mouse to swing hammer · climb the mountain · rage game', ext:true},
  {id:'qwop',              name:'QWOP',                   cat:'fun',        emoji:'🏃', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/qwop',                 tip:'Q/W = thighs · O/P = calves · try to walk', ext:true},
  {id:'fnaf-2',            name:'FNAF 2',                 cat:'action',     emoji:'🐻', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/fnaf-2',               tip:'Manage cameras · wind music box · survive the night', ext:true},
  {id:'learn-to-fly-3',    name:'Learn to Fly 3',         cat:'fun',        emoji:'🐧', hot:false, isNew:true, path:'https://sites.google.com/site/unblockedwtf/learn-to-fly-3',       tip:'Launch the penguin · upgrade · fly to space', ext:true},
  {id:'smash-karts-wtf',   name:'Smash Karts',            cat:'racing',     emoji:'💥', hot:true,  isNew:true, path:'https://sites.google.com/site/unblockedwtf/smash-karts',          tip:'WASD drive · collect weapons · smash everyone!', ext:true},
];

const _seen = new Set();
const GAMES_FINAL = GAMES.filter(g => !_seen.has(g.id) && _seen.add(g.id));

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
  // Custom thumbnails saved by user: { gameId: imageUrl }
  get thumbs()      {try{return JSON.parse(localStorage.getItem('gv_thumbs')||'{}');}catch{return {};}},
  set thumbs(v)     {localStorage.setItem('gv_thumbs',JSON.stringify(v));},
};

// ── TAB CLOAK ─────────────────────────────────────────
function applyCloak() {
  if (!S.cloak) return;
  document.title = S.cloakTitle;
  let lnk = document.querySelector("link[rel*='icon']");
  if (!lnk) { lnk=document.createElement('link'); lnk.rel='shortcut icon'; document.head.appendChild(lnk); }
  lnk.href = S.cloakIcon;
}

// ── OPEN GAME ─────────────────────────────────────────
function openGame(path, id) {
  const game = GAMES_FINAL.find(g => g.id === id);
  if (game && game.ext) { window.open(path, '_blank'); return; }
  if (S.blank) openBlank(path, id);
  else window.open(path, '_blank');
}

function openBlank(path, id) {
  const w = window.open('about:blank','_blank');
  if (!w) { alert('Please allow popups to use Blank Tab mode.'); return; }
  const title   = S.cloak ? S.cloakTitle : 'New Tab';
  const favicon = S.cloak ? S.cloakIcon  : '';
  const fav     = favicon ? `<link rel="icon" href="${favicon}">` : '';
  const base    = window.location.href.replace(/\/[^/]*$/, '/');
  w.document.write(`<!DOCTYPE html><html><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>${title}</title>${fav}
<style>*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:hidden;background:#000}
.b{position:fixed;top:0;left:0;right:0;height:36px;background:rgba(0,0,0,.93);display:flex;align-items:center;padding:0 8px;gap:5px;z-index:99;border-bottom:1px solid #1a1a1a;font-family:-apple-system,sans-serif}
button{background:#1a1a1a;border:1px solid #2a2a2a;color:#aaa;border-radius:4px;padding:3px 8px;cursor:pointer;font-size:11px}button:hover{background:#2a2a2a;color:#fff}
.w{position:fixed;top:36px;bottom:0;left:0;right:0}iframe{width:100%;height:100%;border:none}</style></head><body>
<div class="b">
<button onclick="window.close()">✕ Close</button>
<button onclick="document.getElementById('f').src=document.getElementById('f').src">↺ Reload</button>
<button onclick="this.closest('.b').style.display='none'">Hide Bar</button>
<button onclick="var e=document.querySelector('.w');(e.requestFullscreen||e.webkitRequestFullscreen||function(){}).call(e)">⛶ Full</button>
</div>
<div class="w"><iframe id="f" src="${base}${path}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;pointer-lock;gamepad" allowfullscreen></iframe></div>
</body></html>`);
  w.document.close();
}

// ── BUILT-IN THUMBNAILS ───────────────────────────────
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
  'bit-life':          'img/bitlife.svg',
};

function thumbFor(g) {
  // User-uploaded custom thumbnail takes priority
  const custom = S.thumbs[g.id];
  if (custom) return custom;
  return BUILT_IN_THUMBS[g.id] || null;
}

// ── CARD HTML ─────────────────────────────────────────
function cardHTML(g) {
  const isFav  = S.favs.includes(g.id);
  const thumb  = thumbFor(g);
  const thumbEl= thumb
    ? `<img src="${thumb}" alt="${g.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="thumb-fallback" style="display:none">${g.emoji}</div>`
    : `<div class="thumb-fallback">${g.emoji}</div>`;
  return `<div class="game-card${g.hot?' hot':''}${g.isNew?' isnew':''}" data-id="${g.id}" data-cat="${g.cat}" data-path="${g.path}" data-name="${g.name.toLowerCase()}" data-tip="${(g.tip||'').toLowerCase()}">
  <div class="game-thumb">${thumbEl}
    <span class="fav-star${isFav?' active':''}" data-fav="${g.id}">${isFav?'★':'☆'}</span>
    <div class="thumb-overlay"><div class="play-circle">▶</div></div>
  </div>
  <div class="game-info">
    <div class="game-name">${g.name}</div>
    <div class="game-meta"><span class="game-cat">${g.cat}</span><span>📱</span></div>
  </div>
  <div class="open-choice">
    <div class="open-btn play-now" data-path="${g.path}" data-id="${g.id}">▶ Play</div>
    <div class="open-divider"></div>
    <div class="open-btn blank-btn" data-path="${g.path}" data-id="${g.id}">⬜ Blank</div>
  </div>
</div>`;
}

function renderGrids() {
  const hg=document.getElementById('hotGrid'), ag=document.getElementById('allGrid');
  if (hg) hg.innerHTML=GAMES_FINAL.filter(g=>g.hot).map(cardHTML).join('');
  if (ag) ag.innerHTML=GAMES_FINAL.filter(g=>!g.hot).map(cardHTML).join('');
}

// ── CLICKS ────────────────────────────────────────────
document.addEventListener('click', e => {
  const star=e.target.closest('.fav-star');
  if (star) {
    e.stopPropagation();
    const id=star.dataset.fav; let favs=S.favs;
    if (favs.includes(id)){favs=favs.filter(f=>f!==id);star.textContent='☆';star.classList.remove('active');}
    else{favs.push(id);star.textContent='★';star.classList.add('active');star.style.transform='scale(1.5)';setTimeout(()=>star.style.transform='',220);}
    S.favs=favs;
    const fc=document.getElementById('favCount'); if(fc)fc.textContent=S.favs.length;
    return;
  }
  const pn=e.target.closest('.play-now');
  if (pn){e.stopPropagation();openGame(pn.dataset.path,pn.dataset.id);return;}
  const bb=e.target.closest('.blank-btn');
  if (bb){e.stopPropagation();const _g=GAMES_FINAL.find(g=>g.id===bb.dataset.id);if(_g&&_g.ext){window.open(bb.dataset.path,'_blank');return;}openBlank(bb.dataset.path,bb.dataset.id);return;}
  const card=e.target.closest('.game-card');
  if (card&&!e.target.closest('.open-choice')&&!e.target.closest('.fav-star'))
    openGame(card.dataset.path,card.dataset.id);
});

// ── CAT FILTER ────────────────────────────────────────
function initCatFilter() {
  const cf=document.getElementById('catFilter'); if(!cf)return;
  cf.innerHTML=CATS.map(c=>`<div class="cat-pill${c.id==='all'?' active':''}" data-cat="${c.id}">${c.label}</div>`).join('');
  cf.addEventListener('click',e=>{
    const p=e.target.closest('.cat-pill'); if(!p)return;
    cf.querySelectorAll('.cat-pill').forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
    const cat=p.dataset.cat; let vis=0;
    document.querySelectorAll('.game-card').forEach(c=>{
      const show=cat==='all'||c.dataset.cat===cat;
      c.classList.toggle('hidden',!show); if(show)vis++;
    });
    const hh=document.getElementById('hotHeader'); if(hh)hh.style.display=cat==='all'?'':'none';
    const nr=document.getElementById('noResults'); if(nr)nr.style.display=vis===0?'block':'none';
  });
}

// ── SETTINGS ──────────────────────────────────────────
function openSettings(){document.getElementById('settingsOverlay')?.classList.add('open');}
function closeSettings(){document.getElementById('settingsOverlay')?.classList.remove('open');}

function initSettings() {
  document.getElementById('settingsBtn')?.addEventListener('click',openSettings);
  document.getElementById('navSettings')?.addEventListener('click',openSettings);
  const ov=document.getElementById('settingsOverlay');
  if(ov)ov.addEventListener('click',e=>{if(e.target===ov)closeSettings();});

  function mkToggle(id,get,set,cb){
    const el=document.getElementById(id); if(!el)return;
    el.classList.toggle('on',!!get());
    el.addEventListener('click',()=>{el.classList.toggle('on');const v=el.classList.contains('on');set(v);if(cb)cb(v);});
  }
  mkToggle('tgCloak',()=>S.cloak,v=>{S.cloak=v;if(v)applyCloak();else document.title='GameVault';});
  mkToggle('tgBlank',()=>S.blank,v=>{S.blank=v;});
  mkToggle('tgScan', ()=>S.scan, v=>{S.scan=v;document.body.classList.toggle('scanlines',v);});
  mkToggle('tgAnim', ()=>S.anim, v=>{S.anim=v;document.querySelectorAll('.game-card').forEach(c=>c.style.transition=v?'':'none');});
  document.body.classList.toggle('scanlines',S.scan);

  document.querySelectorAll('.cloak-preset').forEach(p=>{
    p.addEventListener('click',()=>{
      S.cloakTitle=p.dataset.title; S.cloakIcon=p.dataset.icon||'';
      const i=document.getElementById('cloakInput'); if(i)i.value=p.dataset.title;
      const pv=document.getElementById('cloakPreview'); if(pv)pv.textContent=p.dataset.title;
      if(S.cloak)applyCloak();
    });
  });
  const inp=document.getElementById('cloakInput');
  if(inp){
    inp.value=S.cloakTitle;
    inp.addEventListener('input',()=>{S.cloakTitle=inp.value;const pv=document.getElementById('cloakPreview');if(pv)pv.textContent=inp.value;if(S.cloak)applyCloak();});
  }
  const pv=document.getElementById('cloakPreview'); if(pv)pv.textContent=S.cloakTitle;

  // Thumbnail manager
  initThumbManager();
}

// ── THUMBNAIL MANAGER ─────────────────────────────────
function initThumbManager() {
  const btn = document.getElementById('thumbManagerBtn');
  const overlay = document.getElementById('thumbManagerOverlay');
  const closeBtn = document.getElementById('thumbManagerClose');
  const list = document.getElementById('thumbManagerList');
  const saveBtn = document.getElementById('thumbManagerSave');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    // Build the list of all games with input fields
    list.innerHTML = GAMES_FINAL.map(g => {
      const current = S.thumbs[g.id] || BUILT_IN_THUMBS[g.id] || '';
      return `<div class="thumb-row">
        <div class="thumb-row-info">
          <span class="thumb-row-emoji">${g.emoji}</span>
          <span class="thumb-row-name">${g.name}</span>
        </div>
        <input class="thumb-row-input" data-id="${g.id}" type="text" placeholder="Paste image URL..." value="${current}" autocomplete="off">
      </div>`;
    }).join('');
    overlay.classList.add('open');
    closeSettings();
  });

  closeBtn?.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if(e.target===overlay) overlay.classList.remove('open'); });

  saveBtn?.addEventListener('click', () => {
    const custom = {};
    overlay.querySelectorAll('.thumb-row-input').forEach(inp => {
      const val = inp.value.trim();
      if (val && val !== (BUILT_IN_THUMBS[inp.dataset.id]||'')) {
        custom[inp.dataset.id] = val;
      }
    });
    S.thumbs = custom;
    overlay.classList.remove('open');
    // Re-render cards with new thumbs
    renderGrids();
    initCatFilter();
    alert('Thumbnails saved!');
  });
}

// ── SEARCH ────────────────────────────────────────────
function initSearch(){
  const input=document.getElementById('searchInput'); if(!input)return;
  const grid=document.getElementById('searchGrid'),ph=document.getElementById('searchPlaceholder'),
        nr=document.getElementById('noResults'),ri=document.getElementById('resultsInfo'),
        fr=document.getElementById('filterRow');
  if(grid)grid.innerHTML=GAMES_FINAL.map(cardHTML).join('');
  let activeCat='all';
  function doSearch(){
    const q=input.value.toLowerCase().trim();
    if(!q&&activeCat==='all'){if(grid)grid.style.display='none';if(ph)ph.style.display='block';if(nr)nr.style.display='none';if(ri)ri.style.display='none';return;}
    if(grid)grid.style.display='grid';if(ph)ph.style.display='none';
    let vis=0;
    grid?.querySelectorAll('.game-card').forEach(c=>{
      const ok=(activeCat==='all'||c.dataset.cat===activeCat)&&(!q||c.dataset.name.includes(q)||c.dataset.cat.includes(q)||(c.dataset.tip||'').includes(q));
      c.classList.toggle('hidden',!ok);if(ok)vis++;
    });
    if(nr)nr.style.display=vis===0?'block':'none';
    if(ri){ri.style.display=vis>0?'block':'none';ri.innerHTML=`<span>${vis}</span> game${vis!==1?'s':''} found`;}
  }
  input.addEventListener('input',doSearch);
  if(fr){
    fr.innerHTML=CATS.map(c=>`<div class="fpill${c.id==='all'?' active':''}" data-cat="${c.id}">${c.label}</div>`).join('');
    fr.addEventListener('click',e=>{const p=e.target.closest('.fpill');if(!p)return;fr.querySelectorAll('.fpill').forEach(x=>x.classList.remove('active'));p.classList.add('active');activeCat=p.dataset.cat;doSearch();});
  }
  const q=new URLSearchParams(location.search).get('q'); if(q){input.value=q;doSearch();}else input.focus();
}

// ── FAVORITES ─────────────────────────────────────────
function initFavorites(){
  const grid=document.getElementById('favGrid'),empty=document.getElementById('emptyState'),count=document.getElementById('favCount');
  if(!grid)return;
  function render(){
    const favGames=S.favs.map(id=>GAMES_FINAL.find(g=>g.id===id)).filter(Boolean);
    if(count)count.textContent=favGames.length;
    if(favGames.length===0){if(empty)empty.style.display='block';grid.innerHTML='';}
    else{if(empty)empty.style.display='none';grid.innerHTML=favGames.map(cardHTML).join('');}
  }
  render();
  document.addEventListener('click',e=>{if(e.target.closest('.fav-star'))setTimeout(render,60);});
}

// ── REAL CHAT (no bots, no fake count) ────────────────
function initChat(){
  const fab=document.getElementById('chatFab'),panel=document.getElementById('chatPanel'),
        msgsEl=document.getElementById('chatMsgs'),input=document.getElementById('chatInput'),
        sendBtn=document.getElementById('chatSend'),closeBtn=document.getElementById('chatClose'),
        badge=document.getElementById('unreadBadge'),
        navChat=document.getElementById('navChat');
  if(!fab||!panel)return;

  let open=false;

  // Generate a persistent username for this browser
  const ME=(()=>{
    let u=localStorage.getItem('gv_username');
    if(!u){
      const adjs=['Dark','Hyper','Shadow','Neon','Ghost','Turbo','Prime','Omega','Ultra','Cyber'];
      const nouns=['Blade','Wolf','Fox','Viper','Phoenix','Dragon','Knight','Raven','Cobra','Ninja'];
      u=adjs[Math.random()*10|0]+nouns[Math.random()*10|0]+(Math.random()*999|0);
      localStorage.setItem('gv_username',u);
    }
    return u;
  })();

  // Chat uses localStorage — shared across all tabs on same origin
  // On GitHub Pages all visitors share the same origin so this IS real shared chat
  const CHAT_KEY='gv_chat_v6';
  const getMsgs=()=>{try{return JSON.parse(localStorage.getItem(CHAT_KEY)||'[]');}catch{return [];}};
  const saveMsgs=m=>localStorage.setItem(CHAT_KEY,JSON.stringify(m.slice(-200)));
  const fmtT=ts=>{const d=new Date(ts);return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;};
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const render=()=>{
    if(!msgsEl)return;
    const msgs=getMsgs();
    if(msgs.length===0){
      msgsEl.innerHTML='<div style="text-align:center;color:var(--muted);font-size:12px;padding:20px">No messages yet. Say something! 👋</div>';
    } else {
      msgsEl.innerHTML=msgs.map(m=>`<div class="msg ${m.user===ME?'mine':'theirs'}">
        <div class="msg-user">${esc(m.user===ME?'You':m.user)}</div>
        <div class="msg-bubble">${esc(m.text)}</div>
        <div class="msg-time">${fmtT(m.time)}</div>
      </div>`).join('');
    }
    msgsEl.scrollTop=msgsEl.scrollHeight;
  };

  const send=()=>{
    if(!input)return;
    const text=input.value.trim(); if(!text)return;
    const msgs=getMsgs();
    msgs.push({user:ME,text,time:Date.now()});
    saveMsgs(msgs); input.value=''; render();
  };

  const toggle=()=>{
    open=!open; panel.classList.toggle('open',open);
    if(open){if(badge){badge.style.display='none';badge.textContent='0';}render();setTimeout(()=>input?.focus(),300);}
  };

  fab.addEventListener('click',toggle);
  navChat?.addEventListener('click',toggle);
  closeBtn?.addEventListener('click',()=>{open=false;panel.classList.remove('open');});
  sendBtn?.addEventListener('click',send);
  input?.addEventListener('keydown',e=>{if(e.key==='Enter')send();});

  // Poll for new messages from other real users on same origin
  let lastCount = getMsgs().length;
  setInterval(()=>{
    const msgs=getMsgs();
    if(msgs.length>lastCount){
      lastCount=msgs.length;
      if(open) render();
      else if(badge){badge.style.display='flex';badge.textContent=Math.min(9,msgs.length-lastCount+1);}
    }
    if(open) render();
  },2000);
}

// ── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  document.body.classList.toggle('scanlines',S.scan);
  applyCloak();
  renderGrids();
  initCatFilter();
  initSettings();
  initSearch();
  initFavorites();
  initChat();
});
// NOTE: patch — add new games from unblockedwtf at bottom of GAMES array before the dedupe
// These are external iframe games (unblockedwtf hosts them)
// Insert these into the GAMES array in gamevault.js after the last entry, before the closing ];
