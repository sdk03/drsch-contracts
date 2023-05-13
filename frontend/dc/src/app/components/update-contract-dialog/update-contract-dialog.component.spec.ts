import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContractDialogComponent } from './update-contract-dialog.component';

describe('UpdateContractDialogComponent', () => {
  let component: UpdateContractDialogComponent;
  let fixture: ComponentFixture<UpdateContractDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContractDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateContractDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
