import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostComponent } from '../../pages/blog/post/post.component';
import { MediaService } from '../../services/MediaService/media.service';
import { Media } from '../../models/media.model';

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
@Input() id! :number;
book!: Media;


constructor(
  private mediaService: MediaService
)
{}


ngOnInit(){
this.mediaService.getMediaById(this.book.id).subscribe((data) => {
  this.book = data;
});
//console.log("this book", this.book);
}

}


