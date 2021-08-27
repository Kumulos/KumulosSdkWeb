// https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil
interface Event {
    waitUntil(p: Promise<unknown>): void;
}
