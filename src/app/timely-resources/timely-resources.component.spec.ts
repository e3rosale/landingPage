import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelyResourcesComponent } from './timely-resources.component';

describe('TimelyResourcesComponent', () => {
  let component: TimelyResourcesComponent;
  let fixture: ComponentFixture<TimelyResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelyResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelyResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
