import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiohangguitarComponent } from './giohangguitar.component';

describe('GiohangguitarComponent', () => {
  let component: GiohangguitarComponent;
  let fixture: ComponentFixture<GiohangguitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiohangguitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiohangguitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
