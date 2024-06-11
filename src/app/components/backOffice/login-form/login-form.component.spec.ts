import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form.component';
import { UserService } from '../../../services/UserService/user.service';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, LoginFormComponent],
    }).compileComponents();
    
    userService = TestBed.inject(UserService)
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call checkLoginAndPassword method on form submission', () => {
    spyOn(component, 'checkLoginAndPassword');
    component.onSubmit();
    expect(component.checkLoginAndPassword).toHaveBeenCalled();
  });

  it('should call userService.login method with correct email and password', () => {
    const email = 'test@example.com';
    const password = 'password123';
 
    spyOn(userService, 'login').and.callThrough();
    component.loginForm.setValue({ email, password });
    component.onSubmit();
    expect(userService.login).toHaveBeenCalledWith(email, password);
  });

 });