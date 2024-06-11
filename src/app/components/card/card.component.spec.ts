import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../../services/PostService/post.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, HttpClientModule, RouterTestingModule],
      providers: [PostService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
