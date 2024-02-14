export interface IPost {
    id: number,
    title: string,
    content: string,
    picture: string,
    media_id : number,
    galerie?: IGalerie[],
    publication_date: Date,
    updated_date: Date | null,
    isDraft: true | false,
    isOntheWishlist: true | false
}

export interface IGalerie {
    titre: string,
    img: string
}

export const POSTS: IPost[] = [
    {
        id: 1,
        title: "Le café suspendu",
        content: "Le café comme vecteur de partage et de solidarité dans toute sa complexité, avec amertume et force.\nAmanda Sthers rend hommage à cette tradition napolitaine qui est celle du 'café sospeso' (payer deux cafés, un pour vous et un autre pour un client démuni qui en fera la demande).\n Elle nous présente Jacques Madelin, français ayant emménagé en Italie par amour pour une femme, et y étant resté par amour pour la ville de Naples et ses habitants si hauts en couleurs.\nCe dernier nous raconte son histoire ayant pour cadre principal le café Nube qu'il fréquente assidûment et au dessus duquel il vit.\n Il y passe le plus clair de son temps libre et y observe ces gens, ceux qui consomment les cafés, ceux qui jouent le jeu du café sospeso, et ceux qui en bénéficient. C'est leurs histoires qu'il nous raconte, sept histoires plus précisément, sous forme de nouvelles qu'il extirpe de ses carnets pleins de notes prises au fil du temps.\n Pour connaître Naples moi même, je trouve qu'Amanda Sthers retranscrit avec brio cette ambiance si particulière qui y règne. \n Une atmosphère électrique, propre à ces villes qui semblent être au bord de l'explosion, mêlée à cette énergie si typiquement méditerranéenne qui inquiète le touriste autant qu'elle le dépayse, et qui rassure l'habitant qui lui, sait l'apprivoiser, sait en tirer la substantifique moelle.\n Une lecture comparable à une tasse café, consommé seul ou partagé. Des histoires dans une histoire. C'est plein d'humanité, de générosité et de poésie et ça donne une très belle vision de cette sublime ville qu'est Naples 🇮🇹. \n À lire! ",
        picture: "assets/img/le_cafe_suspendu.png",
        media_id: 1,
        publication_date: new Date("2022-06-18"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 2,
        title: "Le dernier été en ville",
        content: "Je me suis d'abord arrêté sur ce livre pour la couverture qui me rappelait les films de Fellini. Puis, la 4eme de couverture m'a rappelé Martin Eden, moi il ne m'en faut pas plus. \n🇮🇹\n Rome, ville d'été, ville ouverte à l'amour, à l'errance et à la mélancolie. Roman paru pour la 1ere fois en Italie en 1973 qui s'offre aujourd'hui une deuxième vie avec 17 traductions dont celle en français. \n Ce roman est un drôle de récit initiatique sans grandes épreuves, sans apprentissage brutal. C'est l'histoire de la vie simple de la solitude, de la vie tout simplement et plus particulièrement celle de Léo, héros sans panache milanais débarqué à Rome.\n Alors pourquoi ce livre a t il traversé les générations sous le manteau avant de s'offrir une deuxième vie? \n Tout simplement parce qu'il est réel, concret. Tout ce qui est écrit ici respire une réalité vécue. L 'auteur le dit lui même 'Je ne sais écrire que ce que j'ai vécu.' Et ça se sent.\n Calligarich nous offre un roman générationnel, celui de ceux qui ont eu 20 ans dans la Rome des années 60, mais aussi un roman sincère et honnête, très actuel finalement, propre à l'identification de plusieurs générations après lui qui se retrouvent dans son style et dans son histoire.\n Léo déambule dans la ville, tombe follement amoureux d'Ariana, mais aussi de Rome. À la manière de Marcello dans la Dolce Vita, Léo, héros très cinématographique, est happé par cette ville qui le prend et ne le laisse plus partir. \n Troisième personnage principal du livre (ou 1er selon les points de vue), Rome est sublimée à la manière d'un film de Fellini. 'Ville idéale pour qui vit entre fiction et imaginaire' disait ce dernier, Calligarich continue dans ce ton et lui donne les couleurs d'une ville maternelle, qui prend soin de ses enfants tout en faisant preuve de cette indifférence cruelle à leur égard, mais propre à leur accomplissement. \n Hommage vibrant à Rome et aux années 60, hommage à la vie simple et à l'initiation par le quotidien, Galligarich nous offre ici un roman d'un style sublime et d'une très grande beauté qui intègre le panthéon de mes classiques. ",
        picture: "assets/img/dernier_ete_en_ville.png",
        media_id: 2,
        publication_date: new Date("2022-05-01"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 3,
        title: "Vivre libre",
        content: "Pour ceux qui ne connaissent pas cet homme extraordinaire, Henry de Monfreid est un commerçant, aventurier et écrivain français.\n Tantôt marchand de café ou de perles, tantôt passeur de hachich en Égypte ou marchand d'armes à Harar, de Monfreid a vécu sa vie en préférant fuir et s'affranchir de la monotonie d'un système trop établi pour lui, choisissant l'évasion et la liberté au prix d'une vie faîte d'adversité qu'il disait aimer aussi fort que les moments de bonheur. \n Une existence des plus romanesques 'dans un sillage très rimbaldien' comme le précise @arnauddelagrange dans sa très belle préface des éditions Points. \n De Monfreid décrit dans son œuvre sa vie aventureuse sur fond de mer Rouge et d'Éthiopie (globalement vers la corne de l'Afrique), du début du siècle XX jusqu'à la seconde guerre mondiale. \n Au cours cette existence très riche en expériences, il rencontre l'immense Joseph Kessel avec qui il se lie d'amitié, et qui le pousse à publier ses notes précieusement consignées dans ses carnets intimes. \n 'Vivre libre' est l'un de ces trésors dans lequel on découvre à travers le questionnaire de 'Proust', des interviews ou encore des lettres ou des notes, la personnalité de cet homme hors du commun et des fragments plus ou moins intimes de sa vie. \n Une lecture qui insuffle liberté et poésie, qui dépayse, qui nous rappelle que le confort et la sécurité sont les meilleurs moyens de se plier à la contrainte et d'étouffer nos élans. Un souffle d'héroïsme et d'aventure à mettre entre toutes les mains. \n \"J'aime la vie parce que je sais trouver des joies dans une infinité de choses que jusqu'ici je n'avais pas su voir ; mais pour les voir il faut être un peu loin de cette agitation qui assourdit, de ce clinquant qui aveugle, de cette gadoue qui suffoque.\"",
        picture: "assets/img/vivre_libre.png",
        media_id: 3,
        publication_date: new Date("2021-07-27"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 4,
        title: "L'ecume des jours",
        content: "\"L'écume des jours\" de Boris Vian est un roman surréaliste et existentialiste réputé pour son langage poétique et créatif. \n Le monde de \"L'écume des jours\" est une sorte de monde imaginaire dans lequel les couleurs vont bon train, le piano distribue des cocktails, les souris de cuisine dansent au son des rayons du soleil et l'air est composé de jazz. \n Dans ce monde surréaliste, où les animaux et les objets inanimés reflètent les émotions des humains, nous suivons l'histoire de Colin, jeune aristocrate hédoniste, dont la vie et l'enthousiasme s'assombrissent progressivement lorsque sa femme attrape une maladie qui ne peut être guérie qu'avec des fleurs.\n À partir ce moment-là, sa vie et celle de son entourage basculeront. \n L'écume des jours c'est la poésie, le jazz et l'amour réunis. Avec ce style d'écriture onirique qui lui ai propre, Vian vous conduit dans un rêve éveillé. \n Oubliez un peu d'être sceptiques, acceptez d'entrer dans cet univers fantastique hors série que vous propose l'auteur, dans lequel règnent l'absurde et la fantaisie, et vous serez enchantés. \n Un roman véritablement poignant, qui ne laisse pas indemne. \n Terminons sur cette magnifique citation tirée de l'avant propos: \n \"Dans la vie, l'essentiel est de porter sur tout un jugement a priori. Il apparaît, en effet, que les masses ont tort, et les individus toujours raison.\" \n 🎺",
        picture: "assets/img/ecume_des_jours.png",
        media_id: 4,
        publication_date: new Date("2020-09-30"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 5,
        title: "Tendre est la nuit",
        content: "La Côte d'Azur du milieu des années 1920 est le nouveau terrain de jeu des riches américains, parmi lesquels l'élégante héritière Nicole Warren et son mari, l'ambitieux psychiatre Dick Diver. Leur hospitalité attire les célébrités et les mondains dans leur villa.\n Tout va pour le mieux, jusqu'au jour où une starlette du nom de Rosemary Hoyt, emblème de la \"génération perdue\", débarque dans le décor. \n Naïve et inexpérimentée, Rosemary tombe follement amoureuse de Dick (c'est réciproque au passage) et déclenche le déclin d'une relation déjà déstabilisée par un sombre secret et minée par des illusions destructrices. \n Sa présence fait remonter à la surface les secrets passés du mariage. \n Dick était en réalité le psychiatre de Nicole, et leur union d'amour passée fait aujourd'hui place à une union de contrainte. \n Tendre est la nuit est l'histoire d'une liaison illicite mais c'est aussi et surtout l'histoire de l'auteur lui-même. \n Dans ce bouquin, Fitzgerald a versé toutes les inspirations qu'il a pu trouver pour concocter ce qui sera l'œuvre de sa vie. Elle est la plus autobiographique de ses œuvres et reflète plusieurs aspects de sa vie personnelle, en particulier sa relation orageuse et destructice avec sa femme, Zelda. \n L’un des aspects les plus subtils et les plus interessants du livre est la vision que Fitzgerald porte sur la moralité. \n Il y dépeint avec une grande désinvolture le côté peu glamour de la haute société, articulée autour des affaires conjugales. \n Il y met également en évidence des problématiques inhérentes à la relation patient-médecin, l'hypocrisie, la toxicomanie, et en particulier l'alcoolisme. \n En ce qui concerne le style, Fitzgerald brille, bien que difficile à lire par moment. Son écriture correspond à son époque mais son intemporalité rend ses œuvres immortelles. \nAu passage, je trouve le titre absolument magnifique. À lire",
        picture: "assets/img/tendre_est_la_nuit.png",
        media_id: 5,
        publication_date: new Date("2020-09-17"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 6,
        title: "La vie devant soi",
        content: "Lecture commune avec @valsemelancolie\n Pour ceux qui n'ont pas encore lu ce petit bijou, en voici un résumé :\n Le roman raconte l'histoire d'un jeune garçon musulman, Mohamed dit \"Momo\", grandissant dans un quartier d'immigrants à Paris Belleville. Il vit sous la tutelle de madame Rosa, vieille femme juive mourante, ancienne prostituée et survivante de l'Holocauste dans « une pension sans famille pour les gosses qui sont nés de travers ». \n Momo raconte ici son quotidien vu aux travers du regard de l'enfance. Évoluant au milieu des prostituées et des proxénètes, son ordinaire étant teinté de peur de la mort et de la vieillesse confronté à la pureté de l'enfance, Momo nous décrit ce monde terrifiant de manière complètement décontractée. \n La vie devant soi est un roman grave et décalé, drôle et très sérieux à la fois, mais c'est surtout un roman qui permet de voir jaillir l'espoir au milieu du désespoir grâce à l'amour que porte un jeune homme à celle qu'il considère comme sa mère, et qu'il accompagnera jusqu'à la fin. \n Il nous rappelle que chacun d'entre nous, peu importe son origine, son statut, son âge, est capable de transcender son quotidien grâce à l'amour et à l'espérance. \n C'est un roman magnifique, bouleversant et déstabilisant qui m'a vraiment beaucoup touché. \n Gary, enfin, Ajar, situe son roman à Paris, mais pas dans le Paris des films romantiques. Il montre ici le côté obscur de Paris, un endroit déprimant et sordide duquel jaillira pourtant une magnifique histoire d'amour. \n Original et profond, La vie devant soi offre à Romain Gary son deuxième Goncourt en 1975. Tour de force incroyable, quand on sait que le Goncourt ne peut être attribué qu'une seule fois... \n Bref, un bouquin absolument magnifique que je conseille à tout le monde.",
        picture: "assets/img/la_vie_devant_soi.png",
        media_id: 6,
        publication_date: new Date("2020-12-13"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 7,
        title: "Sur la route",
        content: "Aujourd'hui je voulais redonner de la visibilité à l'une de mes toutes premières chroniques sur cette page, celle de \"Sur la route\".\n Ce bouquin fait partie de ceux qui me suivent partout tout le temps, et son auteur est une source d'inspiration inconditionnelle, ce genre de source d'inspiration qui nous aide à conduire une vie. \n Sur la route c'est le livre de la vie libre, la seule qui vaille le coup. Livre clef de la Beat Génération, c'est le récit des errances de l'auteur, barroudeur passionné de jazz et de bebop, sillonnant les routes américaines. \n Voyageant en stop, logeant chez qui l'accepte, partageant femmes et alcool avec des amis d'un jour, Kerouac alias Sal Paradise, s'abandonne à la loi du hasard, à la recherche d'une fraternité réelle. Ici rien d'autre n'est plus important que le présent immédiat qui, grâce à l'insouciance, nous procure des jouissances infinies. \n Ce livre est le compte rendu de cette quête, avec ses moments d'euphorie, mais aussi ses passages à vide et ses échecs. Un manuel imparfait qui nous guide dans notre manière de grandir. \n Je conseille à tout le monde de le lire, plusieurs fois, en entier, par passage. Je suis persuadé que chacun d'entre nous peut y trouver des réponses.\n Le bonheur est dans le mouvement, le voyage c'est la liberté et la liberté c'est la vie 🌍",
        picture: "assets/img/sur_la_route.png",
        media_id: 7,
        publication_date: new Date("2021-01-09"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 8,
        title: "Fight club",
        content: "Autant que ce soit dit tout de suite, dans ce roman anti conformiste publié en 1996, l'auteur ne cherche pas à faire quelque chose de beau. Il est à la recherche d'une vérité. \n Comme le dit Tyler Durden: \" Attirer l'attention de Dieu en étant mauvais vaut mieux que de ne pas attirer son attention du tout. Sa haine est préférable à son indifférence.\" Le ton est donné !\n Fight Club c'est l'histoire d'un type sans nom, banal, cadre moyen, américain moyen, qui se plonge dans la violence dans le but d'évacuer sa haine de la société, ainsi que sa frustration profonde (il a un petit côté Taxi Driver oui). L'examen non critique de la violence et de ses répercussions devient lui-même une célébration, une esthétique et une idéologie. \n La rencontre du personnage principal avecTyler Durden, aux antipodes de sa personnalité, va lui permettre de révéler ce qu'il cache au plus profond de lui. \n Métaphore lucide et jubilatoire d'un monde au bord du chaos, perdu faute de révolution, ce roman est un OVNI littéraire qui ne laisse personne indifférent. \n Si le style ultra minimaliste peut dérouter, l'intrigue cumule néanmoins tous les ingrédients nécessaires pour créer une histoire explosive. \n Indéniablement une œuvre de son temps, cette critique sociale demande cependant une certaine attention si l'on ne veut rien en rater. \n Si je peux me permettre d'ajouter un petit bémol le voici: l'histoire nous guide complètement en nous imposant des opinions \"libératrices\" et ne nous laisse aucune marge de perspicacité. De plus, si à première vue ce roman est un pamphlet anti consumériste, il semble tout de même que Palahnuik ne soit pas dupe. En effet, les américains moyens censés trouver la liberté dans l'autodestruction se rassemblent finalement autour d'un guide, Tyler, auquel ils finissent par obéir aveuglément, au mépris de leurs propres libertés individuelles. \n Au final, le bouquin et le film sont comme les combats qu'ils decrivent. Après les avoir lus et vus, rien ne sera règlé, rien n'ira mieux, mais plus rien n'aura d'importance 🥊",
        picture: "assets/img/fight_club.png",
        media_id: 8,
        publication_date: new Date("2021-02-08"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 9,
        title: "Les yeux noirs existent",
        content: "Wahou. \n Quand j’avais lu Saccharose, son premier roman, je m’étais déjà dit que @confiseur.sama était un auteur à suivre. Mais alors là… \n « Le rapport entre le grand et le petit est égal au rapport entre le grand et le tout ». Voilà son fil rouge. \n Dans ce livre, Samir nous raconte l’histoire d’un auteur en passe de recevoir un prix littéraire. Mais au moment de déballer les remerciements traditionnels au parterre d’officiels présents dans la salle, il décide de leur lire une lettre qui dévoile une partie de son histoire. Tout commence là. Tout finit là. \n A grand coup d’analepse, le lecteur n’a plus qu’à se laisser guider par les mots de l’auteur qui l’emmèneront cheminer entre rêves et réalité lors d’une ballade aux parfums orientaux passant par la tragédie grecque, par les textes sacrés, les légendes aztèques ou encore Citizen Kane. \n En serpentant dans ce jardin d’Eden, le lecteur y rencontrera le diable dans ses plus belles et terrifiantes manifestations. \n On ne sait d’ailleurs plus bien qui nous guide: le narrateur, Samir, ou simplement la musique de ses mots? \n Peu importe, c’est délicieux. \n Et pour avoir lu et relu son premier livre, je peux vous garantir qu’ici vous retrouverez son style si singulier, cette façon de se concentrer sur les sensations physiques de ses personnages qui permet au lecteur de se sentir totalement immergé à l’intérieur de l’histoire. \n Samir est un dynamiteur fou. Il met l’accent sur les mots et fait sauter les phrases et leur syntaxe. Et c’est ça qu’on aime chez lui, cette liberté, cette insolence poétique et toute maîtrisée. \n L’écriture est dépourvue de tout superflu, de tout ce qui ralentit le rythme. Le ton est sec, innovant et précis. Tout est pesé et ça se sent. \n Et comme dans sa première réalisation, ses personnages développent des digressions philosophiques, mystiques, des théories étranges et complexes mais toujours pertinentes et poétiques, avec pour poncif la beauté, le sexe, l’amour, la morale et le Sacré.\n Bref, je crois que vous avez compris, ce livre est une bombe. \n Samir ne t’arrête surtout pas d’écrire frérot 👁‍🗨",
        picture: "assets/img/les_yeux_noirs_existent.png",
        media_id: 9,
        publication_date: new Date("2022-12-29"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 10,
        title: "La constellation",
        content: "En 2021, à l’occasion des 130 ans de la mort du poète, les éditions Grasset publiaient « La constellation Rimbaud » par Jean Rouaud. \n Le bouquin est une sorte d’enquête, ayant pour but de percer les mystères entourant celui qui est, paradoxalement, l’un des poètes français les plus connus, mais aussi l’un des plus secrets et mystérieux. \n Jean Rouad y dissèque la vie du poète en menant ses investigations dans des lieux qu’il a fréquentés, ainsi qu’en s’intéressant à des personnes que ce dernier a croisées. \n De Verlaine à Fantin Latour,de Paris à Londres en passant par Charleville, Harar ou encore les Indes, Rouaud analyse chaque miette de ce qui reste de sa mémoire et décortique les vestiges des traces laissées par le génie turbulent. \n L’occasion de rappeler que Rimbaud, enfant précoce et furtif, a créé son oeuvre entre ses 16 ans et ses 20 ans, âge auquel il quitte l’Europe à la recherche d’une reconnexion avec ce qu’il appelle lui même « la rugueuse réalité » de laquelle la poésie et l’absynhte l’avaient éloigné. \n Si la vie artistique de l’auteur est plutôt bien documentée et connue, Rouaud lève ici le voile sur une partie plus obsucre de sa personnalité. En consacrant un chapitre à son père par exemple, il nous éclaire sur l’amour d’Arthur pour l’Orient et pour la mer, lui qui n’avait jamais quitté l’Europe occidentale avant ses 20 ans. \n Si vous aussi êtes fascinés par le mythe Rimbaud et que vous êtes en quête de réponses, foncez en librairie (indépendante) et procurez vous ce petit trésor qui vous éclairera sans nul doute sur les parties les plus confidentielles de la vie du poète. \n Je termine par cette phrase prononcée par l’un de ses anciens professeurs: \n « Intelligent tant que vous voudrez, mais il a des yeux et un sourire qui ne me plaisent pas. Il finira mal. En tout cas rien de banal ne germera dans cette tête: ce sera le génie du bien ou du mal. » \n Bonne lecture !",
        picture: "assets/img/la_constellation.png",
        media_id: 10,
        publication_date: new Date("2023-05-01"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },
    {
        id: 11,
        title: "L'amant",
        content: "Comment appelle-t-on l’inverse d’une désillusion littéraire ? Un coup de foudre ? Alors j’ai eu un coup de foudre.\n La Duras comme on l’appelle elle donne tout quand elle écrit. Elle se positionne « en dehors d’elle même ». \n Dans mes souvenirs de lycéen planait sur ce livre une ombre de feel good, de romance fleur bleue. Grand bien m’a pris de l’ouvrir à nouveau presque 20 ans plus tard. \n L’Amant, tout le monde le sait, raconte de manière autobiographique une histoire d’amour entre une jeune française et un jeune homme chinois de 12 ans de plus qu’elle. Et ça finalement c’est la partie la moins intéressante du livre. C’est le vecteur. Le vecteur que Duras utilise pour s’explorer, explorer celle qu’elle a été, ressasser des souvenirs, entre fantasmes et réalités. \n Elle décortique le rapport filial qu’elle eut avec sa mère, le rapport avec ses frères, avec l’Indochine française d’après guerre, le Mékong, Cholen et ceux qu’elle a pu y croiser. Au fil de la lecture se dessine de manière prématurée le profil de cette femme clivante, écorchée vive et engagée qu’elle deviendra plus tard. \n L’amant c’est un tableau sur lequel on peut y voir des paysages et des sentiments. \n C’est parfois violent, ça interroge, ça secoue, et c’est sublime. Goncourt 84 quand même. \n Bref, gros coup de foudre pour cette femme qui s’introspecte et se livre sans faille. \n En route pour le Barrage maintenant 🇻🇳",
        picture: "assets/img/l-amany.png",
        media_id: 11,
        publication_date: new Date("2022-11-28"),
        updated_date: null,
        isDraft: false,
        isOntheWishlist: false
    },



]