import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTextinputComponent } from './user-textinput.component';

describe('UserTextinputComponent', () => {
  let component: UserTextinputComponent;
  let fixture: ComponentFixture<UserTextinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTextinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTextinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
