import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoRPage } from './lo-r.page';

describe('LoRPage', () => {
  let component: LoRPage;
  let fixture: ComponentFixture<LoRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
