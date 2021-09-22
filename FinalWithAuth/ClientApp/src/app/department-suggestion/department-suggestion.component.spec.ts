import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSuggestionComponent } from './department-suggestion.component';

describe('DepartmentSuggestionComponent', () => {
  let component: DepartmentSuggestionComponent;
  let fixture: ComponentFixture<DepartmentSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});