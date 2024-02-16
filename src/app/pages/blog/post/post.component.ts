import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { VerticalLineComponent } from '../../../components/vertical-line/vertical-line.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PageHeaderComponent, VerticalLineComponent, HeaderComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  ngOnInit() {

  }



}
