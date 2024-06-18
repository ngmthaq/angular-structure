type Callback<T> = (_: T) => void;

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
    console.log(`EventBus: ${message}`, params);
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        console.log(
          `EventBus: detected listener "${callback.name || "no-name"}" for "${eventName}" event`,
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
