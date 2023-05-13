import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRemarkDialogComponent } from './delete-remark-dialog.component';

describe('DeleteRemarkDialogComponent', () => {
  let component: DeleteRemarkDialogComponent;
  let fixture: ComponentFixture<DeleteRemarkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRemarkDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRemarkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
