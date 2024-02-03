export interface IPost {
    id: number,
    title: string,
    content: string,
    picture : string,
    galerie? : IGalerie[],
    publication_date: string,
    isDraft: true | false,
    isOntheWishlist: true | false
}

export interface IGalerie {
    titre : string,
    img : string
}

export const POSTS : IPost[] = [
    {
        id: 1,
        title: "Le temps suspendu",
        content: "Le café comme vecteur de partage et de solidarité dans toute sa complexité, avec amertume et force.\nAmanda Sthers rend hommage à cette tradition napolitaine qui est celle du 'café sospeso' (payer deux cafés, un pour vous et un autre pour un client démuni qui en fera la demande).\n Elle nous présente Jacques Madelin, français ayant emménagé en Italie par amour pour une femme, et y étant resté par amour pour la ville de Naples et ses habitants si hauts en couleurs.\nCe dernier nous raconte son histoire ayant pour cadre principal le café Nube qu'il fréquente assidûment et au dessus duquel il vit.\n Il y passe le plus clair de son temps libre et y observe ces gens, ceux qui consomment les cafés, ceux qui jouent le jeu du café sospeso, et ceux qui en bénéficient. C'est leurs histoires qu'il nous raconte, sept histoires plus précisément, sous forme de nouvelles qu'il extirpe de ses carnets pleins de notes prises au fil du temps.\n Pour connaître Naples moi même, je trouve qu'Amanda Sthers retranscrit avec brio cette ambiance si particulière qui y règne. \n Une atmosphère électrique, propre à ces villes qui semblent être au bord de l'explosion, mêlée à cette énergie si typiquement méditerranéenne qui inquiète le touriste autant qu'elle le dépayse, et qui rassure l'habitant qui lui, sait l'apprivoiser, sait en tirer la substantifique moelle.\n Une lecture comparable à une tasse café, consommé seul ou partagé. Des histoires dans une histoire. C'est plein d'humanité, de générosité et de poésie et ça donne une très belle vision de cette sublime ville qu'est Naples 🇮🇹. \n À lire! ",
        picture : "assets/img/le_cafe_suspendu.png",
        // galerie : [{
        //     titre : "Albanie",
        //     img :"assets/img/Albanie.png"
        // },
        // {
        //     titre : "Albanie",
        //     img :"assets/img/Albanie.png"
        // },
        // {
        //     titre : "Albanie",
        //     img :"assets/img/Albanie.png"
        // } ],
        publication_date : "18 juin 2022",
        isDraft: false,
        isOntheWishlist: false  
    },
    {
        id: 2,
        title: "Le dernier été en ville",
        content: "Je me suis d'abord arrêté sur ce livre pour la couverture qui me rappelait les films de Fellini. Puis, la 4eme de couverture m'a rappelé Martin Eden, moi il ne m'en faut pas plus. \n🇮🇹\n Rome, ville d'été, ville ouverte à l'amour, à l'errance et à la mélancolie. Roman paru pour la 1ere fois en Italie en 1973 qui s'offre aujourd'hui une deuxième vie avec 17 traductions dont celle en français. \n Ce roman est un drôle de récit initiatique sans grandes épreuves, sans apprentissage brutal. C'est l'histoire de la vie simple de la solitude, de la vie tout simplement et plus particulièrement celle de Léo, héros sans panache milanais débarqué à Rome.\n Alors pourquoi ce livre a t il traversé les générations sous le manteau avant de s'offrir une deuxième vie? \n Tout simplement parce qu'il est réel, concret. Tout ce qui est écrit ici respire une réalité vécue. L 'auteur le dit lui même 'Je ne sais écrire que ce que j'ai vécu.' Et ça se sent.\n Calligarich nous offre un roman générationnel, celui de ceux qui ont eu 20 ans dans la Rome des années 60, mais aussi un roman sincère et honnête, très actuel finalement, propre à l'identification de plusieurs générations après lui qui se retrouvent dans son style et dans son histoire.\n Léo déambule dans la ville, tombe follement amoureux d'Ariana, mais aussi de Rome. À la manière de Marcello dans la Dolce Vita, Léo, héros très cinématographique, est happé par cette ville qui le prend et ne le laisse plus partir. \n Troisième personnage principal du livre (ou 1er selon les points de vue), Rome est sublimée à la manière d'un film de Fellini. 'Ville idéale pour qui vit entre fiction et imaginaire' disait ce dernier, Calligarich continue dans ce ton et lui donne les couleurs d'une ville maternelle, qui prend soin de ses enfants tout en faisant preuve de cette indifférence cruelle à leur égard, mais propre à leur accomplissement. \n Hommage vibrant à Rome et aux années 60, hommage à la vie simple et à l'initiation par le quotidien, Galligarich nous offre ici un roman d'un style sublime et d'une très grande beauté qui intègre le panthéon de mes classiques. ",
        picture : "assets/img/dernier_ete_en_ville.png",
        publication_date : "1 mai 2022",
        isDraft: false,
        isOntheWishlist: false  
    },
    {
        id: 3,
        title: "Vivre libre",
        content: "Pour ceux qui ne connaissent pas cet homme extraordinaire, Henry de Monfreid est un commerçant, aventurier et écrivain français.\n Tantôt marchand de café ou de perles, tantôt passeur de hachich en Égypte ou marchand d'armes à Harar, de Monfreid a vécu sa vie en préférant fuir et s'affranchir de la monotonie d'un système trop établi pour lui, choisissant l'évasion et la liberté au prix d'une vie faîte d'adversité qu'il disait aimer aussi fort que les moments de bonheur. \n Une existence des plus romanesques 'dans un sillage très rimbaldien' comme le précise @arnauddelagrange dans sa très belle préface des éditions Points. \n De Monfreid décrit dans son œuvre sa vie aventureuse sur fond de mer Rouge et d'Éthiopie (globalement vers la corne de l'Afrique), du début du siècle XX jusqu'à la seconde guerre mondiale. \n Au cours cette existence très riche en expériences, il rencontre l'immense Joseph Kessel avec qui il se lie d'amitié, et qui le pousse à publier ses notes précieusement consignées dans ses carnets intimes. \n 'Vivre libre' est l'un de ces trésors dans lequel on découvre à travers le questionnaire de 'Proust', des interviews ou encore des lettres ou des notes, la personnalité de cet homme hors du commun et des fragments plus ou moins intimes de sa vie. \n Une lecture qui insuffle liberté et poésie, qui dépayse, qui nous rappelle que le confort et la sécurité sont les meilleurs moyens de se plier à la contrainte et d'étouffer nos élans. Un souffle d'héroïsme et d'aventure à mettre entre toutes les mains. \n \"J'aime la vie parce que je sais trouver des joies dans une infinité de choses que jusqu'ici je n'avais pas su voir ; mais pour les voir il faut être un peu loin de cette agitation qui assourdit, de ce clinquant qui aveugle, de cette gadoue qui suffoque.\"",
        picture : "assets/img/vivre_libre.png",
        publication_date : "27 juillet 2021",
        isDraft: false,
        isOntheWishlist: false  
    },
    {
        id: 4,
        title: "L'ecume des jours",
        content: "\"L'écume des jours\" de Boris Vian est un roman surréaliste et existentialiste réputé pour son langage poétique et créatif. \n Le monde de \"L'écume des jours\" est une sorte de monde imaginaire dans lequel les couleurs vont bon train, le piano distribue des cocktails, les souris de cuisine dansent au son des rayons du soleil et l'air est composé de jazz. \n Dans ce monde surréaliste, où les animaux et les objets inanimés reflètent les émotions des humains, nous suivons l'histoire de Colin, jeune aristocrate hédoniste, dont la vie et l'enthousiasme s'assombrissent progressivement lorsque sa femme attrape une maladie qui ne peut être guérie qu'avec des fleurs.\n À partir ce moment-là, sa vie et celle de son entourage basculeront. \n L'écume des jours c'est la poésie, le jazz et l'amour réunis. Avec ce style d'écriture onirique qui lui ai propre, Vian vous conduit dans un rêve éveillé. \n Oubliez un peu d'être sceptiques, acceptez d'entrer dans cet univers fantastique hors série que vous propose l'auteur, dans lequel règnent l'absurde et la fantaisie, et vous serez enchantés. \n Un roman véritablement poignant, qui ne laisse pas indemne. \n Terminons sur cette magnifique citation tirée de l'avant propos: \n \"Dans la vie, l'essentiel est de porter sur tout un jugement a priori. Il apparaît, en effet, que les masses ont tort, et les individus toujours raison.\" \n 🎺",
        picture : "assets/img/ecume_des_jours.png",
        publication_date : "30 septembre 2020",
        isDraft: false,
        isOntheWishlist: false  
    },

]