# debounce-throttle-promises-bundle

Provides utility functions for debouncing and throttling promises. Useful for rate-limiting promise executions, like API requests or handling rapid user input in a performance-friendly manner.

## Installation

Install using npm:

```bash
npm install debounce-throttle-promises-bundle
```

## Usage

### Debounce Promise

Use `debouncePromise` to delay executing a promise until after a certain amount of time has passed since the last time it was invoked.

```javascript
const { debouncePromise } = require('debounce-throttle-promises-bundle');

const fetchUserDataDebounced = debouncePromise(fetchUserData, 200);

// Use fetchUserDataDebounced where you need to debounce the calls
```

### Throttle Promise

Use `throttlePromise` to ensure a promise is not executed more than once in a specified period.

```javascript
const { throttlePromise } = require('debounce-throttle-promises-bundle');

const saveUserDataThrottled = throttlePromise(saveUserData, 1000);

// Use saveUserDataThrottled where you need to throttle the calls
```
