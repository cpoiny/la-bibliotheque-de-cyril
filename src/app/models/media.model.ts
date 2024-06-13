export class Media {

    constructor(
        public id: number,
        public title: string,
        public category : "litterature" | "cinema" | "citations",
        public theme: string,
        public author_id: number,
        public edition?: string
    ){}
}
