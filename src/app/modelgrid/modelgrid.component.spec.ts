import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelgridComponent } from './modelgrid.component';

describe('ModelgridComponent', () => {
  let component: ModelgridComponent;
  let fixture: ComponentFixture<ModelgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
