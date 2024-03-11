import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-bo',
  standalone: true,
  imports: [],
  templateUrl: './card-bo.component.html',
  styleUrl: './card-bo.component.css'
})
export class CardBoComponent {

@Input() picture!: string;  
@Input() title!: string;

ngOnInit(){
}

}
