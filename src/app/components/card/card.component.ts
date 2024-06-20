import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostComponent } from '../../pages/blog/post/post.component';
import { Media } from '../../models/media.model';
import { PostService } from '../../services/PostService/post.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UpperCasePipe, RouterLink, PostComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

@Input() picture!: string;  
@Input() title!: string;
@Input() theme!: string;
@Input() id! :string;
@Input() category!: string;
book!: Media;
url: string[] = [];

constructor(
  private postService: PostService
)
{}


ngOnInit(){
this.postService.getPostById(this.id).subscribe((data) => {
  this.book = data.medias[0];
});

this.url = ["/la_bibliotheque_de_cyril/publications/", this.category, this.id];
}

}


