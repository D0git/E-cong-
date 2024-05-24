import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoursFerComponent } from './jours-fer.component';

describe('JoursFerComponent', () => {
  let component: JoursFerComponent;
  let fixture: ComponentFixture<JoursFerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoursFerComponent]
    });
    fixture = TestBed.createComponent(JoursFerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
