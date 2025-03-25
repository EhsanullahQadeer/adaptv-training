const circuitBreakerState = new Map<string, { failures: number; lastFailure: number }>();
const FAILURE_THRESHOLD = 3;
const TIMEOUT = 30000; // 30 seconds

export const isCircuitOpen = (key: string): boolean => {
  const state = circuitBreakerState.get(key);
  if (!state) return false;
  if (state.failures >= FAILURE_THRESHOLD && Date.now() - state.lastFailure < TIMEOUT) {
    return true;
  }
  return false;
};

export const recordFailure = (key: string): void => {
  const state = circuitBreakerState.get(key) || { failures: 0, lastFailure: 0 };
  state.failures += 1;
  state.lastFailure = Date.now();
  circuitBreakerState.set(key, state);
};

export const resetCircuit = (key: string): void => {
  circuitBreakerState.delete(key);
};
