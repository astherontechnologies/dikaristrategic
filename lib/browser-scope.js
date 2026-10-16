// Own browser resources so React Strict Mode and Fast Refresh can safely remount.
export function createBrowserScope() {
  const controller = new AbortController();
  const frames = new Set();
  const timeouts = new Set();
  const intervals = new Set();
  const observers = new Set();
  let disposed = false;

  return {
    get disposed() {
      return disposed;
    },
    listen(target, event, handler, options = {}) {
      target.addEventListener(event, handler, {
        ...options,
        signal: controller.signal,
      });
    },
    requestAnimationFrame(callback) {
      if (disposed) return 0;
      const id = window.requestAnimationFrame((time) => {
        frames.delete(id);
        if (!disposed) callback(time);
      });
      frames.add(id);
      return id;
    },
    cancelAnimationFrame(id) {
      window.cancelAnimationFrame(id);
      frames.delete(id);
    },
    setTimeout(callback, delay) {
      if (disposed) return 0;
      const id = window.setTimeout(() => {
        timeouts.delete(id);
        if (!disposed) callback();
      }, delay);
      timeouts.add(id);
      return id;
    },
    clearTimeout(id) {
      window.clearTimeout(id);
      timeouts.delete(id);
    },
    setInterval(callback, delay) {
      if (disposed) return 0;
      const id = window.setInterval(() => {
        if (!disposed) callback();
      }, delay);
      intervals.add(id);
      return id;
    },
    observe(callback, target) {
      const observer = new window.IntersectionObserver((entries) => {
        if (!disposed) callback(entries);
      });
      observers.add(observer);
      observer.observe(target);
      return observer;
    },
    dispose() {
      disposed = true;
      controller.abort();
      frames.forEach((id) => window.cancelAnimationFrame(id));
      timeouts.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
      observers.forEach((observer) => observer.disconnect());
      frames.clear();
      timeouts.clear();
      intervals.clear();
      observers.clear();
    },
  };
}
