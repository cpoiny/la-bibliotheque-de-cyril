import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormComponent,HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
