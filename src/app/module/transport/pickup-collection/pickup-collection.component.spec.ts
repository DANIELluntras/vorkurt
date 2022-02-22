import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupCollectionComponent } from './pickup-collection.component';

describe('PickupCollectionComponent', () => {
  let component: PickupCollectionComponent;
  let fixture: ComponentFixture<PickupCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupCollectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
