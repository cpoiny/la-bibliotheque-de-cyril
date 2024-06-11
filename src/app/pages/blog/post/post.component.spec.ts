import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../../services/PostService/post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let service: PostService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent, RouterTestingModule, HttpClientTestingModule],
      providers: [PostService]
    })
    .compileComponents();
    
    service = TestBed.inject(PostService)
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
