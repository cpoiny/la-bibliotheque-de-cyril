export class Media {

    constructor(
        public id: number,
        public title: string,
        public category : "litterature" | "cinema" | "citation",
        public theme: string,
        public author_id: number,
        public edition?: string
    ){}
}
