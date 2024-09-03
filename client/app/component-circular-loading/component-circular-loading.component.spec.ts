import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ComponentCircularLoadingComponent } from "./component-circular-loading.component";

describe("ComponentCircularLoadingComponent", () => {
  let component: ComponentCircularLoadingComponent;
  let fixture: ComponentFixture<ComponentCircularLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentCircularLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCircularLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
