import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerListDocumentComponent } from './owner-list-document.component';

describe('OwnerListDocumentComponent', () => {
  let component: OwnerListDocumentComponent;
  let fixture: ComponentFixture<OwnerListDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerListDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerListDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
