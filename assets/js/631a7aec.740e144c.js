"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),b=o,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||s;return a?r.createElement(m,n(n({ref:t},u),{},{components:a})):r.createElement(m,n({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,n=new Array(s);n[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,n[1]=i;for(var c=2;c<s;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),o=a(35742);function s(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},14254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=a(87462),o=(a(67294),a(3905)),s=a(88828);const n={title:"fp",description:"This content provides a comprehensive guide on utilizing the 'fp' command in retrieving the floor price of a specific NFT collection. Examples of collections include Bored Ape Yacht Club, CryptoPunks, and Cool Cats.",keywords:["NFT","floor price","collection","SLUG","fp","bored-ape-yacht-club","cryptopunks","meebits","veefriends","cool-cats","bored-ape-kennel-club","mekaverse","cryptoblots-art-blocks-curated","loot","uninterested-unicorns","doodles"]},i=void 0,l={unversionedId:"terminal/reference/crypto/nft/fp",id:"terminal/reference/crypto/nft/fp",title:"fp",description:"This content provides a comprehensive guide on utilizing the 'fp' command in retrieving the floor price of a specific NFT collection. Examples of collections include Bored Ape Yacht Club, CryptoPunks, and Cool Cats.",source:"@site/content/terminal/reference/crypto/nft/fp.md",sourceDirName:"terminal/reference/crypto/nft",slug:"/terminal/reference/crypto/nft/fp",permalink:"/terminal/reference/crypto/nft/fp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/nft/fp.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1711990771,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{title:"fp",description:"This content provides a comprehensive guide on utilizing the 'fp' command in retrieving the floor price of a specific NFT collection. Examples of collections include Bored Ape Yacht Club, CryptoPunks, and Cool Cats.",keywords:["NFT","floor price","collection","SLUG","fp","bored-ape-yacht-club","cryptopunks","meebits","veefriends","cool-cats","bored-ape-kennel-club","mekaverse","cryptoblots-art-blocks-curated","loot","uninterested-unicorns","doodles"]},sidebar:"tutorialSidebar",previous:{title:"collections",permalink:"/terminal/reference/crypto/nft/collections"},next:{title:"stats",permalink:"/terminal/reference/crypto/nft/stats"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},d="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{title:"crypto/nft/fp - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"Display floor price of a certain NFT collection. ","[Source: https://nftpricefloor.com/]"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"fp -s SLUG\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"slug"),(0,o.kt)("td",{parentName:"tr",align:null},"NFT floor price collection slug (e.g., bored-ape-yacht-club)"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"avastars, wicked-craniums, hyperhash-art-blocks-curated, official-moar-by-joan-cornella, ecumenopolis-art-blocks-playground, supducks, neo-tokyo-identities, ether-orcs, mooncats, cryptopunks, foustlings, mfers, meebits, tom-sachs-rockets, akuma-origins, plasma-bears, rtfkt-mnlth, akutars, eightbitme, shinsei-galverse, gh0stly-gh0sts, ragnarok-meta, mcgoblinwtf, foxfam, the-potatoz, autoglyphs, milady, the-blocks-of-art-art-blocks-curated, scribbled-boundaries-art-blocks-curated, dooplicator, 27-bit-digital-art-blocks-curated, 720-minutes-art-blocks-curated, aerial-view-art-blocks-curated, grifters-by-xcopy, algobots-art-blocks-curated, apparitions-art-blocks-curated, bubble-blobby-art-blocks-curated, geometry-runners-art-blocks-curated, squiggly, singularity-art-blocks-curated, unigrids-art-blocks-curated, metahero-universe-generative, archetype-art-blocks-curated, trossets-art-blocks-curated, collectvox, veefriends, forgotten-runes-wizards-cult, cool-cats, the-vogu-collective, joyworld-joys, algorhythms-art-blocks-curated, renga, metasaurs, bored-ape-kennel-club, the-cryptodads, gener8tive-k-compositions, the-shiboshis, gen-art-membership, deadfellaz, gevols, neo-tokyo-part-3-item-caches, blitmap, bears-deluxe, jungle-freaks-by-trosley, 888-inner-circle, wolf-game, voxies, neo-tokyo-part-4-land-deeds, nimbuds-art-blocks-curated, subscapes-art-blocks-curated, chill-frogs, creepz-genesis, poap, sappy-seals, pulsquares, chimera-art-blocks-curated, Decentraland, pudgy-penguins, genesis-braindrops, asm-aifa-genesis, jrny-nft-club, party-ape-billionaire-club, incognito, cyberbrokers, chain-runners, dotdotdots, wicked-ape-bone-club, etheria, proof-collective, bapetaverse-official, dynamic-slices-art-blocks-curated, shinsekaicorp, murakami-flowers, the-yakuza-cats-society, space-punks-club, veefriends-series-2, v1-cryptopunks-wrapped, supernormalbyzipcy, frammenti-art-blocks-curated, lostsamurise, peaceful-groupies, adidas-virtual-gear-genesis, gambling-apes, 0xMons, desperate-ape-wives, adidas-for-prada, framergence, the-littles-nft, kleee02, renga-black-box, purrnelopes-country-club, haki-nft, tiny-dinos, quantum-key, arcade-land, impostors-genesis-aliens, los-muertos-world, everai-heroes-duo, factura-by-mathias-isaksen, dreams-art-blocks-curated, construction-token-art-blocks-curated, byopills, crypto-bull-society, cupcats-official, galaxy-eggs, gutter-dogs, spooky-boys-country-club, the-art-of-seasons, beeple-everydays, elevated-deconstructions-art-blocks-curated, sorare, we-are-all-going-to-die, loot, uninterested-unicorns, mekaverse, premint-collector-pass, cryptoblots-art-blocks-curated, the-association-nft, chimpers-nft, cosmic-reef-art-blocks-curated, meridian-art-blocks-playground, phototaxis-art-blocks-playground, paper-armada-art-blocks-playground, treeverse, time-pieces-build-a-better-future, doodles, genesis-art-blocks-curated, beeple-genesis-collection, jadu-jetpack, galacticapes, digidaigaku, winter-bears, cryptoskulls, decentraland_names, raidparty-fighters, ens-domains, adidas-originals-capsule-collection, 10ktf, asm-brains, galaxy-fight-club, curio-cards, fluf-world, dodgers-mlb-crypto, vaynersports-pass-vsp, elementals-art-blocks-curated, screens-art-blocks-curated, memories-of-qilin-art-blocks-curated, colorspace-art-blocks-curated, flux-art-blocks-curated, anticyclone-art-blocks-curated, the-humanoids, ignition-art-blocks-curated, inspirals-art-blocks-curated, lonely-alien-space-club, spectron-art-blocks-curated, synapses-art-blocks-curated, watercolor-dreams-art-blocks-curated, glitch-crystal-monsters-art-blocks-curated, pigments-art-blocks-curated, endless-nameless-art-blocks-curated, sneaky-vampire-syndicate, bastard-gan-punks-v2, damien-hirst-the-currency, coolmans-universe, creepz-reptile-armoury, rhythm-art-blocks-playground, smilesssvrs, the-alien-secret-society, space-doodles, wavelength, furballs, killergf, nina-s-super-cool-world, monaco-planet-yacht, crypto-cannabis-club, thorguards, punks-comic, invisible-friends, karafuru, cryptocoven, wizards-dragons-game, the-doge-pound, creature-world, phase-art-blocks-curated, cryptoadz, monkey-bet-dao, divine-anarchy, fang-gang, moonbirds-oddities, onchainmonkey, superlative-secret-society, alien-insects-art-blocks-playground, cryptoon-goonz, isekai-meta, rektguy, io-imaginary-ones, animetas, ape-gang, habbo-avatars, al-cabones, fidenza-art-blocks-curated, cryptodickbutts, playboy-rabbitars-official, first-first-nfts, ether-cards-founder, goop-troop, fvck-crystal, headdao, 8liens, gutter-rats, stoner-cats, bubblegum-kids, the-official-surreals, fusion-by-hideki-tsukamoto, where-my-vans-go, kiwami-genesis, the-alien-boy, tubby-cats, lives-of-asuna, 1111-by-kevin-abosch, cryptobatz-by-ozzy-osbourne, dourdarcels, defy-genesis-masks, polygonpunks, peculiar-gang, the-n-project, otherdeed, fluf-world-thingies, gutter-pigeons, world-of-women, realms-for-adventurers, generativemasks, crypto-pills-by-micha-klein, heaven-computer, cryptomories, the-wanderers, the-blitnauts, capsule-house, timeless-characters, apostles-genesis, waifusion, swampverse, bored-mummy-waking-up, fragments-of-an-infinite-field-art-blocks-curated, aww-friends, ancient-courses-of-fictional-rivers-art-blocks-curated, shitbeast, mutant-garden-seeder, cyberkongz-genesis, collectvoxmirandus, azuki, salt-v4, satoshibles, uwucrew, neo-tokyo-outer-identities, 3landers, goblintownwtf, mutant-ape-yacht-club, lightspeed-lads, genuine-ardvark, dino-pals-art-blocks-factory, 0n1-force, cyberkongz-vx, adidas-originals-into-the-metaverse-phase-1-and-2, portal-art-blocks-playground, the-saudis-nft, goatz, podgans-braindrops, animonkeys, anonymice-breeding, song-a-day, corruption-s, boki-nft, solos, deafbeef, anonymice, gazers, sipherian-surge, phantabear, prime-ape-planet-pap, creepz-shapeshifterz, muri-haus, cryptocubes, fast-food-punks, ack-unique-editions, fomoverse, hapeprime, alienfrensnft, derace-horses, mr-crypto-by-racksmafia, the-senses, rojom, color-study-art-blocks-playground, drip-squad, avatar-rock-out, the-minds-eye, proof-moonbirds, ape-kids-club, world-of-women-galaxy, og-crystals, nouns, angry-ape-army, cryptotrunks, solvency, bored-ape-yacht-club, lazy-lions, rumble-kong-league, wonderpals, apes-in-space, yolo-holiday, the_sandbox, adidas-wagmi-united, crypto-unicorns, spooky-season-poieeeyee, mlb-champions, the-sevens, eulerbeats-genesis-original, wearing-your-emotion, natsukashii, treasure-of-ophiel, imaginatation-station, cute-snacks, conall-in-space, bald-tuesdays, alien-clock-art-blocks-playground, party-degenerates, rug-radio-genesis-nft, loomlocknft, skulptuur-art-blocks-curated, letswalk, entretiempos-art-blocks-curated, obits, koin-games-dev-squad, metahero-universe-core-identities, para-bellum-art-blocks-curated, ainightbirds, decentraland_wearables, revenants-by-alethea-ai, dapper-dinos-nft, chumbi-valley, tfoust10, celestial-assembly, 5-boro-bodega, gettin-groovy, meme-team, creatures-of-the-nighties, enlightenment, earth-to-planet, edifice, mutant-cats, vortex, bored_ape_chemistry_club, bulls-on-the-block, ghostsproject, avidlines, rareapepeyachtclub, royal-society-of-players, smallbros, adam-bomb-squad, fomo-dog-club, ikb-cachet-de-garantie, zombieclub-token, koala-intelligence-agency, cute-cool-and-creepy, the-singularity, hausphases, robotos, deadheads, gutter-cat-gang, ringers-art-blocks-curated, beeple-spring-summer-collection, nftrees, merge, slotie-nft, crypto-stamp, deez-nuts, stepn-shoeboxes, beanz-official, i-quit-my-job-to-be-an-artist, doodle-collection, autology, the-fatty-bagz, bent, rituals, old-school-cool, magic-of-the-woods, stutter-void, tandizojere, bodegacatceo, the-eternal-pump, boss-beauties, impact-theory-founders-key, nifty-league-degens, clonex, pegz, fewocious-x-rtfkt, meta-legends, lil-heroes-by-edgar-plans, worldwide-webb-land, the-butterfly-garden, sys32template, aylia, neo-tokyo-part-2-vault-cards, chromie-squiggle-art-blocks-curated, nft-worlds, chainfaces, lobsterdao, cryptoarte, backed-goods-&-evils, growl-gang, creatures-without-pants, exosama-expect-chaos, parallel-alpha, qql-mint-pass, cryptovoxels, oana193, substantial-law-910, baby-doge-army, genuine-undead-nft, protectors-of-the-forest, drag-queens-of-big-gay-baby, hoppy-doodle, alicia-freeman-designs, boonji-project, automatism-art-blocks-factory, dystopunks, laura-dumitriu, puzzled-panther, looki, century-art-blocks-curated, mind-the-gap-by-mountvitruvius, hedz-by-matt-furie, beeple-5000-days-collection, max-pain-and-frens-by-xcopy, worst-twitch-ever, canetoonist, joy-girls-club, plasticity-by-p4stoboy, sidus-nft-heroes, avire-nft, tirli, bites-of-brazil, rtfkt-x-rimowa, fewoworld-paint-nft, raunchy-rancor, fmarxy, doge-pound-puppies, inft-personality-pod-by-alethea-ai, dubbl3bee, mask-world-nft, eando9745, catharsis-by-dario-lanza, rinascita, art-gobblers, koripo-by-rich-poole, nike-rtfkt-cryptokicks-dunk-genesis, colorglyphs, nike-monolith, metroverse-genesis, ledger-market-pass-genesis-edition, psychedelics-anonymous-genesis, nike-ar-hoodie-rtfkt, cool-pets-nft, kaiju-kingz, crypto-chicks, valhalla, jiometory-no-compute-art-blocks-curated, broadside, fancy-bears, mimic-shhans, cool-cats-football-club, metabillionaire, akumu-dragonz, sail-o-bots-art-blocks-factory, hashmasks, blvckgenesis, 3d-invisible-friends, asemica, kpr")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43375532/186253073-e50643be-391f-4aa4-949b-946b2d000f38.png",alt:"fp command"})),(0,o.kt)("hr",null))}b.isMDXComponent=!0}}]);