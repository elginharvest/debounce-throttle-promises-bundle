// Debounce a promise function
function debouncePromise(func, wait) {
  let timeout;
  return function(...args) {
    return new Promise((resolve, reject) => {
      const later = () => {
        timeout = null;
        func(...args).then(resolve).catch(reject);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    });
  };
}

// Throttle a promise function
function throttlePromise(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      inThrottle = true;
      func(...args).then(result => {
        inThrottle = false;
        return result;
      }).catch(error => {
        inThrottle = false;
        throw error;
      });
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

module.exports = { debouncePromise, throttlePromise };
