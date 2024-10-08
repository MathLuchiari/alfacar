import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopListComponent } from './workshop-list.component';

describe('WorkshopListComponent', () => {
  let component: WorkshopListComponent;
  let fixture: ComponentFixture<WorkshopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
