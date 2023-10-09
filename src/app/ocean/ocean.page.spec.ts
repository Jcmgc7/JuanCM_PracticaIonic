import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OceanPage } from './ocean.page';

describe('OceanPage', () => {
  let component: OceanPage;
  let fixture: ComponentFixture<OceanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OceanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
