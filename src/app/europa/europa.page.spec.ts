import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EuropaPage } from './europa.page';

describe('EuropaPage', () => {
  let component: EuropaPage;
  let fixture: ComponentFixture<EuropaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EuropaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
