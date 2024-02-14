export interface IMedia {
    id: number,
    title: string,
    author_id: number,
    theme: string,
    created_at: Date,
    updated_date: Date | null,
    edition?: string,
    category : "book" | "movie" | "quote"
}


export const MEDIAS: IMedia[] = [
    {
        id: 1,
        title: "Le café suspendu",
        author_id: 1,
        theme: "Classique",
        created_at: new Date("2022-06-18"),
        updated_date: null,
        edition: "Editions Grasset",
        category : "book"
    },
    {
        id: 2,
        title: "Le dernier été en ville",
        author_id: 2,
        theme: "Classique",
        created_at: new Date("2022-05-01"),
        updated_date: null,
        edition: " Editions Gallimard",
        category : "book"
    },
    {
        id: 3,
        title: "Vivre libre",
        author_id: 3,
        theme: "Aventure",
        created_at: new Date("2021-07-27"),
        updated_date: null,
        edition: "Editions Points",
        category : "book"
    },
    {
        id: 4,
        title: "L'ecume des jours",
        author_id: 4,
        theme: "Classique",
        created_at: new Date("2020-09-30"),
        updated_date: null,
        edition: "Editions 1018",
        category : "book"
    },
    {
        id: 5,
        title: "Tendre est la nuit",
        author_id: 5,
        theme: "Classique",
        created_at:new Date("2020-09-17"),
        updated_date: null,
        edition: "Livre de poche",
        category : "book"
    },
    {
        id: 6,
        title: "La vie devant soi",
        author_id: 6,
        theme: "Classique",
        created_at: new Date("2020-12-13"),
        updated_date: null,
        edition: "Editions Folio",
        category : "book"
    },
    {
        id: 7,
        title: "Sur la route",
        author_id: 7,
        theme: "Classique",
        created_at: new Date("2021-01-09"),
        updated_date: null,
        edition: "Eidtions Folio",
        category : "book"
    },
    {
        id: 8,
        title: "Fight club",
        author_id: 8,
        theme: "Classique",
        created_at: new Date("2021-02-08"),
        updated_date: null,
        edition: "Editions Folio",
        category : "book"
    },
    {
        id: 9,
        title: "Les yeux noirs existent",
        author_id: 9,
        theme: "Classique",
        created_at: new Date("2022-12-29"),
        updated_date: null,
        edition: "",
        category : "book"
    },
    {
        id: 10,
        title: "La constellation",
        author_id: 10,
        theme: "Poesie",
        created_at: new Date("2023-05-01"),
        updated_date: null,
        edition: "Editions Grasset",
        category : "book"
    },
    {
        id: 11,
        title: "L'amant",
        author_id: 11,
        theme: "Classique",
        created_at: new Date("2022-11-28"),
        updated_date: null,
        edition: "Editions de minuit",
        category : "book"
    },
    {
        id: 12,
        title: "Test",
        author_id: 11,
        theme: "movie",
        created_at: new Date("2022-11-28"),
        updated_date: null,
        edition: "movie film",
        category : "movie"
    },
]