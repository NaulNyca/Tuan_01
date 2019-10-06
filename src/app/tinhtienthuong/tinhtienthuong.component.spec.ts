import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhtienthuongComponent } from './tinhtienthuong.component';

describe('TinhtienthuongComponent', () => {
  let component: TinhtienthuongComponent;
  let fixture: ComponentFixture<TinhtienthuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhtienthuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhtienthuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
