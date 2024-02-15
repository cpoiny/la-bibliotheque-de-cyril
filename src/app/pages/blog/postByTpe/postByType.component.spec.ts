import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByTypeComponent } from './postByType.component';

describe('PostByTypeComponent', () => {
  let component: PostByTypeComponent;
  let fixture: ComponentFixture<PostByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostByTypeComponent]
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
