import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopFormComponent } from './workshop-form.component';

describe('WorkshopFormComponent', () => {
  let component: WorkshopFormComponent;
  let fixture: ComponentFixture<WorkshopFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
