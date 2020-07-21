import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandAddFileComponent } from './command-add-file.component';

describe('CommandAddFileComponent', () => {
  let component: CommandAddFileComponent;
  let fixture: ComponentFixture<CommandAddFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandAddFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandAddFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
