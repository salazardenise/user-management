import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NewUserFormComponent } from './new-user-form.component';
import { UsersService } from '../users.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewUserFormComponent', () => {
  let component: NewUserFormComponent;
  let fixture: ComponentFixture<NewUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserFormComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should spy on submit button', () => {
    spyOn(component, 'createUser');

    let button = fixture.debugElement.nativeElement.querySelector('#new-user-submit');
    button.click();

    fixture.whenStable().then( () => {
      expect(component.createUser).toHaveBeenCalled();
    })
  });

  it('should render Create New User in an h2 tag', async(() => {
    const fixture = TestBed.createComponent(NewUserFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Create New User');
  }));
});
