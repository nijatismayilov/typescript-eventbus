import EventBus, { ThemeChangeEvent } from "./eventbus";

let i = 0;

setInterval(() => {
  EventBus.publish("theme-change", new ThemeChangeEvent(i % 2 === 0 ? "dark" : "light"));
  
  i++;
}, 2500);

EventBus.subscribe("theme-change", (event) => console.log(event));
