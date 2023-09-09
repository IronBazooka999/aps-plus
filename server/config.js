module.exports = {
    // Server

    // Game server domain.
    // If 'localhost:NUMBER', the port must equal the port setting.
    host: "localhost:3000",

    // Which port to run the web server on.
    port: 3000,

    // Ticks per second. 1 is 30 tps, 2 is 60, etc.
    // Has physics side effecs.
    gameSpeed: 1,

    // How often to update the list of the entities players can see.
    // Has effects of when entities are activated.
    visibleListInterval: 250,

    // How long (in ms) a socket can be disconnected without their player dying.
    maxHeartbeatInterval: 300000,

    // Flatten entity definition, which gets rid of PARENT attributes and applies the parents' attributes to the entity definition, if they're not set in the entity already.
    flattenDefintions: false,



    // Room
    
    // Room width in grid units
    WIDTH: 6500,
    
    // Room height in grid units
    HEIGHT: 6500,
    
    // Shape of the arena.
    // Can be "rect" or "circle".
    ARENA_TYPE: "rect",

    // The tiles that the room consist of.
    ROOM_SETUP: [
        [ "norm", "norm", "norm", "norm", "norm", "norm", "roid", "roid", "roid", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm" ],
        [ "roid", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "roid" ],
        [ "roid", "roid", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "roid", "roid" ],
        [ "roid", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "roid" ],
        [ "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "roid", "roid", "roid", "norm", "norm", "norm", "norm", "norm", "norm" ]
    ],

    // Tile count in a row
    X_GRID: 15,

    // Tile count in a column
    Y_GRID: 15,



    // Physics

    // General multiplier for acceleration and max speeds.
    runSpeed: 1.5,

    // General damage multiplier everytime damage is dealt.
    DAMAGE_CONSTANT: 0.5,

    // General knockback multiplier everytime knockback is applied.
    KNOCKBACK_CONSTANT: 1.5,

    // TODO: Figure out how the math behind this works.
    GLASS_HEALTH_FACTOR: 2,

    // How strong the force is that confines entities to the map and portals apply to entities.
    ROOM_BOUND_FORCE: 0.01,

    // What does this do?
    SKILL_BOOST: 5,

    // TODO: Find out what the intention behind the implementation of this configuration is.
    SOFT_MAX_SKILL: 0.59,



    // Gameplay

    // When an entity reaches a level, this function is called and returns how many points that entity gets for reaching that level.
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        return 0;
    },

    // Default skill caps.
    MAX_SKILL: 9,

    // Amount of tank tiers.
    MAX_UPGRADE_TIER: 9,

    // Level difference between each tier.
    TIER_MULTIPLIER: 15,

    // Max normally achievable level.
    LEVEL_CAP: 45,

    // TODO: Figure out what this does.
    LEVEL_SOFT_CAP: 0,

    // Max level you get by level-up key and auto-level-up.
    LEVEL_CHEAT_CAP: 45,

    // Amount of player-bots to spawn.
    BOTS: 24,



    // Natural Spawns

    // Something about the likeliness of shinies, idk.
    SHINY_SCALE: 0,

    // How much food to spawn. Not an exact amount.
    FOOD_AMOUNT: 100,

    // How much nest food to spawn.
    // Dependant on the food limit calculated with FOOD_AMOUNT.
    // Not exact multiplier either.
    FOOD_AMOUNT_NEST: 1.5,

    // Number of crashers per nest tile.
    CRASHER_RATIO: 2,



    // Gamemode related.
    // Please change gamemode in 'server\modules\setup\config.js' instead.
    SPECIAL_BOSS_SPAWNS: false,
    MOTHERSHIP_LOOP: false,
    DOMINATOR_LOOP: false,
    RANDOM_COLORS: false,
    SPACE_PHYSICS: false,
    SPACE_MODE: false,
    GROUPS: false,
    TRAIN: false,
    MAZE: false,
    HUNT: false,
    TAG: false,
    TEAMS: 4,
    MODE: "ffa",



    // Miscellaneous
    
    // So you dont see a message across the entire map
    CHAT_MESSAGE_CHARACTER_LIMIT: 32,

    // How long a entity chat message lasts in milliseconds.
    // Includes the fade-out period.
    CHAT_MESSAGE_DURATION: 30_000,

    // You want swearing in your server? then turn this to false
    CHAT_MESSAGE_BAD_WORD_DETECTION: true,

    // Simple Bad Word detection system
    // Will turn into regex when we make or find a good filter because
    // you can do bAdWOrD and it wouldnt get detected so we need a /[]/i filter
    // To edit these look at the bottom of the file
    badWords: ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bltch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fvck", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"],
    niceMessages: ['You are a nice good and wonderful person that is good in this game, I totally do not hate you', 'You are very skilled, Impressive!', "You're such a good guy.", 'How wonderful!'],

    // If someone tries to get a file that does not exist, send them this instead.
    DEFAULT_FILE: 'index.html',

    // Window name of the server terminal.
    WINDOW_NAME: 'APS++ Game Server Instance',

    // Welcome message once a player spawns.
    WELCOME_MESSAGE: "You have spawned! Welcome to the game.\n"
                    +"You will be invulnerable until you move or shoot.\n"
                    +"This is a beta release of APS++. Please join the official discord server to report any bugs you encounter!"
}

// Edit the bad words here!
// Add a new bad word
// module.exports.badWords.push('myBadWord')

// ..or change the list entirely
// module.exports.badWords = ['myBadWord1', 'myBadWord2']

// Edit the nice messages here!
// Add a nice message
// module.exports.niceMessages.push('I do not hate you at all')

// ..or change the list entirely
// module.exports.badWords = ["You're such a good guy", 'Nice skills!']

let badWordsInitialLength = module.exports.badWords.length
for (let i = 0; i<badWordsInitialLength; i++) {
    module.exports.badWords.push(module.exports.badWords[i].toUpperCase())
}
