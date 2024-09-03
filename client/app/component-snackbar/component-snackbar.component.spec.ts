import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ComponentSnackbarComponent } from "./component-snackbar.component";

describe("ComponentSnackbarComponent", () => {
  let component: ComponentSnackbarComponent;
  let fixture: ComponentFixture<ComponentSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentSnackbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
