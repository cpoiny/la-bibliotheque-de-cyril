import { Injectable } from "@angular/core";
import { Adapter } from "./adapter.model";

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
    public category : "litterature" | "cinema" | "citation",
    public theme: string,
    public galerie?: IGalerie[],
    ) {}

}

export class IGalerie {
    constructor(
        public titre: string,
        public img: string
    ){}
}

@Injectable({
    providedIn: 'root'
})
export class PostAdapter implements Adapter<Post>{
    adapt(item: any): Post {
        return new Post(
            item.id,
            item.title,
            item.content,
            item.picture,
            item.media_id,
            item.author_id,
            item.publication_date,
            item.updated_date,
            item.isDraft,
            item.isOntheWishlist,
            item.category,
            item.galerie,
        )
    }
}