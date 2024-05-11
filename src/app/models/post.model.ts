import { Injectable } from "@angular/core";
import { Adapter } from "./adapter.model";
import { Author } from "./author.model";
import { Media } from "./media.model";

export class Post{

    constructor(
    public id: number,
    public title: string,
    public content: string,
    public picture: string,
    public publicated_at: Date,
    public updated_at: Date | null,
    public is_draft: true | false,
    public quantity_comments: number | null,
    public quantity_likes: number | null,
    public author : Author,
    public media: Media,
    public isOntheWishlist?: true | false
    ) {}

}
    


// export class IGalerie {
//     constructor(
//         public titre: string,
//         public img: string
//     ){}
// }

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
            item.publication_date,
            item.updated_date,
            item.isDraft,
            item.quantity_comments,
            item.quantity_likes,
            item.author,
            item.media,
            item.isOntheWishlist,
        )
    }
}