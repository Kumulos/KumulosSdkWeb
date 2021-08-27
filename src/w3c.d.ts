// The expirationTime field is missing from TS defs, but documented on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/expirationTime
interface PushSubscription {
    expirationTime: DOMHighResTimeStamp;
}
