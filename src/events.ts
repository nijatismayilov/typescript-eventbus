import { Menu } from "./menu";
import { EventType, IBaseEvent, IMenusLoad, IThemeChange } from "./types";
import generateKey from "./generateKey";

class BaseEvent implements IBaseEvent {
  public id: string;
  public timestamp: Date;

  constructor(public type: EventType) {
    this.id = generateKey();
    this.timestamp = new Date();
  }
}

export class MenusLoadEvent extends BaseEvent implements IMenusLoad {
  constructor(public menu: Menu) {
    super("menus-load");
  }
}

export class ThemeChangeEvent extends BaseEvent implements IThemeChange {
  constructor(public theme: "light" | "dark") {
    super("theme-change");
  }
}
