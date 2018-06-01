import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UpdateUserFormComponent } from './update-user-form.component';
import { UsersService } from '../users.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateUserFormComponent', () => {
  let component: UpdateUserFormComponent;
  let fixture: ComponentFixture<UpdateUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserFormComponent ],
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
    fixture = TestBed.createComponent(UpdateUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should spy on update user button', () => {
    spyOn(component, 'updateTheUser');

    let button = fixture.debugElement.nativeElement.querySelector('#update-user-submit');
    button.click();

    fixture.whenStable().then( () => {
      expect(component.updateTheUser).toHaveBeenCalled();
    })
  });

  it('should spy on delete user button', () => {
    spyOn(component, 'deleteTheUser');

    let button = fixture.debugElement.nativeElement.querySelector('#delete-user-button');
    button.click();

    fixture.whenStable().then( () => {
      expect(component.deleteTheUser).toHaveBeenCalled();
    })
  });

  it('should render Update User in an h2 tag', async(() => {
    const fixture = TestBed.createComponent(UpdateUserFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Update User');
  }));

});
