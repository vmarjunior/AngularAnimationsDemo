import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
  animation,
  useAnimation
} from "@angular/animations";

export let bounceOutLeftAnimation = animation(
  animate(
    "0.5s ease-out",
    keyframes([
      style({ offset: 0.2, opacity: 1, transform: "translateX(20px)" }),
      style({ offset: 1, opacity: 0, transform: "translateX(-100%)" })
    ])
  )
);

export let fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('0.5s ease-out')
]);

export let fadeOutAnimation = animation([
  animate(500),
  style({ opacity: 0 })
]);


export let fade = trigger("fade", [

  transition(":enter", [
    useAnimation(fadeInAnimation)
  ]),

  transition(":leave", [
    useAnimation(fadeOutAnimation)
  ])

]);

export let slide = trigger("slide", [
  transition(":enter", [
    style({ transform: "translateX(-20px)" }),
    animate(500)
  ]),

  transition(":leave", [useAnimation(bounceOutLeftAnimation)])
]);
