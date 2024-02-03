export interface IMedia {
    id: number,
    title: string,
    author_id: number,
    category: string,
    created_at: string,
    updated_date: string,
    edition?: string,
    theme : "Book" | "Movie" | "Quote"
}


export const MEDIAS: IMedia[] = [
    {
        id: 1,
        title: "Le café suspendu",
        author_id: 1,
        category: "Classique",
        created_at: "18 juin 2022",
        updated_date: "",
        edition: "Editions Grasset",
        theme : "Book"
    },
    {
        id: 2,
        title: "Le dernier été en ville",
        author_id: 2,
        category: "Classique",
        created_at: "1 mai 2022",
        updated_date: "",
        edition: " Editions Gallimard",
        theme : "Book"
    },
    {
        id: 3,
        title: "Vivre libre",
        author_id: 3,
        category: "Aventure",
        created_at: "27 juillet 2021",
        updated_date: "",
        edition: "Editions Points",
        theme : "Book"
    },
    {
        id: 4,
        title: "L'ecume des jours",
        author_id: 4,
        category: "Classique",
        created_at: "30 septembre 2020",
        updated_date: "",
        edition: "Editions 1018",
        theme : "Book"
    },
    {
        id: 5,
        title: "Tendre est la nuit",
        author_id: 5,
        category: "Classique",
        created_at: "17 septembre 2020",
        updated_date: "",
        edition: "Livre de poche",
        theme : "Book"
    },
    {
        id: 6,
        title: "La vie devant soi",
        author_id: 6,
        category: "Classique",
        created_at: "13 decembre 2020",
        updated_date: "",
        edition: "Editions Folio",
        theme : "Book"
    },
    {
        id: 7,
        title: "Sur la route",
        author_id: 7,
        category: "Classique",
        created_at: "9 janvier 2021",
        updated_date: "",
        edition: "Eidtions Folio",
        theme : "Book"
    },
    {
        id: 8,
        title: "Fight club",
        author_id: 8,
        category: "Classique",
        created_at: "8 fevrier 2021",
        updated_date: "",
        edition: "Editions Folio",
        theme : "Book"
    },
    {
        id: 9,
        title: "Les yeux noirs existent",
        author_id: 9,
        category: "Classique",
        created_at: "29 décembre 2022",
        updated_date: "",
        edition: "",
        theme : "Book"
    },
    {
        id: 10,
        title: "La constellation",
        author_id: 10,
        category: "Poesie",
        created_at: "1 mai 2023",
        updated_date: "",
        edition: "Editions Grasset",
        theme : "Book"
    },
    {
        id: 11,
        title: "L'amant",
        author_id: 11,
        category: "Classique",
        created_at: "28 novembre 2022",
        updated_date: "",
        edition: "Editions de minuit",
        theme : "Book"
    },
]