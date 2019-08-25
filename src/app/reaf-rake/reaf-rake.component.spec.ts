import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReafRakeComponent } from './reaf-rake.component';

describe('ReafRakeComponent', () => {
  let component: ReafRakeComponent;
  let fixture: ComponentFixture<ReafRakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReafRakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReafRakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
