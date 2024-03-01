
export class Post{

    constructor(
    public id: number,
    public title: string,
    public content: string,
    public picture: string,
    public media_id : number,
    public author_id: number,
    public publication_date: Date,
    public updated_date: Date | null,
    public isDraft: true | false,
    public isOntheWishlist: true | false,
    public category : "book" | "movie" | "quote",
    public galerie?: IGalerie[],
    ) {}

}

export class IGalerie {
    constructor(
        public titre: string,
        public img: string
    ){}
}