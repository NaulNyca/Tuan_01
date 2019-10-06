import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanhuuluanComponent } from './phanhuuluan.component';

describe('PhanhuuluanComponent', () => {
  let component: PhanhuuluanComponent;
  let fixture: ComponentFixture<PhanhuuluanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhanhuuluanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanhuuluanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
