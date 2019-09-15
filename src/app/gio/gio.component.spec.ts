import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GioComponent } from './gio.component';

describe('GioComponent', () => {
  let component: GioComponent;
  let fixture: ComponentFixture<GioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
