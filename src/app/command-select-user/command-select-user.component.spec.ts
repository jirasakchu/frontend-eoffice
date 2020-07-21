import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSelectUserComponent } from './command-select-user.component';

describe('CommandSelectUserComponent', () => {
  let component: CommandSelectUserComponent;
  let fixture: ComponentFixture<CommandSelectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandSelectUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandSelectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
