import PubSub from "pubsub-js";

export function publishLib(event, data) {
  PubSub.publish(event, data);
}

export function subscribeLib(event, callback) {
  return PubSub.subscribe(event, callback);
}
