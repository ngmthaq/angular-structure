import { Component, OnInit } from "@angular/core";
import { DotLottie } from "@lottiefiles/dotlottie-web";

@Component({
  selector: "app-component-circular-loading",
  templateUrl: "./component-circular-loading.component.html",
  styleUrl: "./component-circular-loading.component.scss",
})
export class ComponentCircularLoadingComponent implements OnInit {
  dotLottie?: DotLottie;

  ngOnInit(): void {
    this.dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.querySelector("#component-circular-loading") as HTMLCanvasElement,
      src: "/assets/lotties/loading.json",
    });
  }
}
