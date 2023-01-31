import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSidenavChatsComponent } from './user-sidenav-chats.component';

describe('UserSidenavChatsComponent', () => {
  let component: UserSidenavChatsComponent;
  let fixture: ComponentFixture<UserSidenavChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSidenavChatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSidenavChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
