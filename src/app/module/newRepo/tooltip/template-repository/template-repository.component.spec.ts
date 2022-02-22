import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRepositoryComponent } from './template-repository.component';

describe('TemplateRepositoryComponent', () => {
  let component: TemplateRepositoryComponent;
  let fixture: ComponentFixture<TemplateRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateRepositoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
