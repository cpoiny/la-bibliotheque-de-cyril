export class Media {

    constructor(
        public id: number,
        public title: string,
        public author_id: number,
        public theme: string,
        public created_at: Date,
        public updated_date: Date | null,
        public category : "book" | "movie" | "quote",
        public edition?: string,
    ){}
}
