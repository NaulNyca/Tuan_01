import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChungloaiComponent } from './chungloai.component';

describe('ChungloaiComponent', () => {
  let component: ChungloaiComponent;
  let fixture: ComponentFixture<ChungloaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChungloaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChungloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
