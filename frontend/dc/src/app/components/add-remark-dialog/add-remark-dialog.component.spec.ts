import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemarkDialogComponent } from './add-remark-dialog.component';

describe('AddRemarkDialogComponent', () => {
  let component: AddRemarkDialogComponent;
  let fixture: ComponentFixture<AddRemarkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemarkDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemarkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
