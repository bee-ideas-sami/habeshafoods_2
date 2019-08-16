import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellenBerzorgenComponent } from './bestellen-berzorgen.component';

describe('BestellenBerzorgenComponent', () => {
  let component: BestellenBerzorgenComponent;
  let fixture: ComponentFixture<BestellenBerzorgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestellenBerzorgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellenBerzorgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
