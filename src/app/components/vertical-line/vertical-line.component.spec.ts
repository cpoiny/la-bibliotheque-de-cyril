import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLineComponent } from './vertical-line.component';

describe('VerticalLineComponent', () => {
  let component: VerticalLineComponent;
  let fixture: ComponentFixture<VerticalLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
