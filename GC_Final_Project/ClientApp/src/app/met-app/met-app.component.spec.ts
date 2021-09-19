import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetAppComponent } from './met-app.component';

describe('MetAppComponent', () => {
  let component: MetAppComponent;
  let fixture: ComponentFixture<MetAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
