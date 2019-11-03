import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietguitarComponent } from './chitietguitar.component';

describe('ChitietguitarComponent', () => {
  let component: ChitietguitarComponent;
  let fixture: ComponentFixture<ChitietguitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietguitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietguitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
