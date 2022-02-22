import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixJumbotronComponent } from './elix-jumbotron.component';

describe('JumbotronComponent', () => {
  let component: ElixJumbotronComponent;
  let fixture: ComponentFixture<ElixJumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElixJumbotronComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElixJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
