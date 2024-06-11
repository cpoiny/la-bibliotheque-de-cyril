import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByTypeComponent } from './postByType.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostByTypeComponent', () => {
  let component: PostByTypeComponent;
  let fixture: ComponentFixture<PostByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostByTypeComponent, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
