import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBoComponent } from './header-bo.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderBoComponent', () => {
  let component: HeaderBoComponent;
  let fixture: ComponentFixture<HeaderBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBoComponent, RouterTestingModule]
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
