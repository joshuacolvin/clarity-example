import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  constructor(private ngZone: NgZone) {}

  @ViewChild("email") set email(element: ElementRef) {
    if (element) {
      this.focusElement(element);
    }
  }

  @ViewChild("phone") set phone(element: ElementRef) {
    if (element) {
      this.focusElement(element);
    }
  }

  @ViewChild("firstName") set firstName(element: ElementRef) {
    if (element) {
      this.focusElement(element);
    }
  }

  focusElement(element: ElementRef): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => element.nativeElement.focus());
    });
  }
}
