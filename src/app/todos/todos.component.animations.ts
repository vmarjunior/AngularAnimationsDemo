import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
  query,
  animateChild,
  group,
  stagger
} from "@angular/animations";

import { bounceOutLeftAnimation } from "./../animations";

export const todosAnimation = trigger("todosAnimation", [
  transition(":enter", [
    group([
      query("h1", [
        style({ transform: "translateY(-20px)", opacity: 0 }),
        animate("1s ease-in")
      ]),
      query("@todoAnimation", [stagger("200ms", animateChild())])
    ])
  ])
]);

export const todoAnimation = trigger("todoAnimation", [
  transition(":enter", [
    style({ opacity: 0, transform: "translateX(-20px)" }),
    animate(1000)
  ]),

  transition(":leave", [
    style({ backgroundColor: "red" }),
    animate(500),
    useAnimation(bounceOutLeftAnimation)
  ])
]);
