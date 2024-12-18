import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSDKComponent } from './web-sdk.component';

describe('WebSDKComponent', () => {
  let component: WebSDKComponent;
  let fixture: ComponentFixture<WebSDKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSDKComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebSDKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
