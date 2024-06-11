import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficePostsComponent } from './back-office-posts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BackOfficePostsComponent', () => {
  let component: BackOfficePostsComponent;
  let fixture: ComponentFixture<BackOfficePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackOfficePostsComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackOfficePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
