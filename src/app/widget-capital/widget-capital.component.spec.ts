import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCapitalComponent } from './widget-capital.component';

describe('WidgetCapitalComponent', () => {
  let component: WidgetCapitalComponent;
  let fixture: ComponentFixture<WidgetCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
