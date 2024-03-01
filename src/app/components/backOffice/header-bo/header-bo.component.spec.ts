import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBoComponent } from './header-bo.component';

describe('HeaderBoComponent', () => {
  let component: HeaderBoComponent;
  let fixture: ComponentFixture<HeaderBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
