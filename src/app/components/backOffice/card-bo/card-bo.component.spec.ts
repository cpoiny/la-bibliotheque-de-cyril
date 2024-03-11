import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardBoComponent } from './card-bo.component';



describe('CardBoComponent', () => {
  let component: CardBoComponent;
  let fixture: ComponentFixture<CardBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
