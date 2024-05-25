type Callback<T> = (params: T) => void;

class EventBusConfig {
  private events: Record<string, Callback<any>[]> = {};

  public on<T>(eventName: string, callback: Callback<T>) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  public off<T>(eventName: string, callback: Callback<T>) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    } else {
      this.events[eventName] = [];
    }
  }

  public emit<T>(eventName: string, params?: T) {
    const message = `event "${eventName}" emitted with params:`;
    console.log(`%c >>> EventBus: ${message}`, "color: #fff; background: blue", params);
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        console.log(
          `%c >>> EventBus: detected listener "${callback.name || "no-name"}" for "${eventName}" event`,
          "color: #fff; background: blue",
        );
        callback(params);
      });
    }
  }

  public once<T>(eventName: string, callback: Callback<T>) {
    const handler = (params: T) => {
      callback(params);
      this.off(eventName, callback);
    };

    if (this.events[eventName]) {
      this.events[eventName].push(handler);
    } else {
      this.events[eventName] = [handler];
    }
  }
}

const EventBus = new EventBusConfig();

export { EventBus };
