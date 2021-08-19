import { Menu } from "./menu";

export type EventType = "menus-load" | "theme-change";

/* Base Event */
export interface IBaseEvent {
  id: string;
  type: EventType;
  timestamp: Date;
}

/* Event Interfaces */
export interface IMenusLoad extends IBaseEvent {
  menu: Menu;
}

export interface IThemeChange extends IBaseEvent {
  theme: "light" | "dark";
}

/* Global Events Interface */
export interface Events {
  "menus-load": IMenusLoad;
  "theme-change": IThemeChange;
}
