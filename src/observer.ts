import { Events } from "./types";

export type T = keyof Events;

export type Listener<EventType extends T> = (e: Events[EventType]) => void;

export interface IObserver<EventType extends T> {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: Events[EventType]) => void;
}

export class Observer<EventType extends T> implements IObserver<EventType> {
  private listeners: Listener<EventType>[] = [];

  subscribe(listener: Listener<EventType>): () => void {
    this.listeners = [...this.listeners, listener];

    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  publish(event: Events[EventType]): void {
    this.listeners.forEach((listener) => listener(event));
  }
}

export default Observer;
