type CursorStyle = 'not-allowed' | 'wait' | 'progress' | 'default';

interface PointerOptions {
  /**
   * The cursor style to show during disabled state
   * @default 'not-allowed'
   */
  cursor?: CursorStyle;
  /**
   * Timeout in milliseconds after which to automatically re-enable pointer events
   * Set to null for manual control
   * @default null
   */
  timeout?: number | null;
  /**
   * Whether to show a loading cursor
   * @default false
   */
  loading?: boolean;
  /**
   * Callback to execute when pointer events are re-enabled
   */
  onEnable?: () => void;
  /**
   * Callback to execute when pointer events are disabled
   */
  onDisable?: () => void;
}

/**
 * Utility class for managing pointer events and cursor styles
 */
export class PointerUtils {
  private static timeoutId: NodeJS.Timeout | null = null;
  private static isDisabled = false;

  /**
   * Disable pointer events on the page
   */
  static disable(options: PointerOptions = {}) {
    const {
      cursor = 'not-allowed',
      timeout = null,
      loading = false,
      onDisable,
      onEnable,
    } = options;

    // Clear any existing timeout
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    // Set cursor style based on loading state
    document.documentElement.style.cursor = loading ? 'wait' : cursor;
    document.body.style.pointerEvents = 'none';
    this.isDisabled = true;

    // Call onDisable callback
    onDisable?.();

    // Set up auto-enable timeout if specified
    if (timeout !== null && timeout > 0) {
      this.timeoutId = setTimeout(() => {
        this.enable({ onEnable });
      }, timeout);
    }
  }

  /**
   * Enable pointer events on the page
   */
  static enable(options: Pick<PointerOptions, 'onEnable'> = {}) {
    const { onEnable } = options;

    // Clear any existing timeout
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    // Reset styles
    document.documentElement.style.cursor = 'default';
    document.body.style.pointerEvents = 'auto';
    this.isDisabled = false;

    // Call onEnable callback
    onEnable?.();
  }

  /**
   * Check if pointer events are currently disabled
   */
  static isPointerDisabled(): boolean {
    return this.isDisabled;
  }

  /**
   * Temporarily disable pointer events for a specified duration
   */
  static async disableFor(duration: number, options: Omit<PointerOptions, 'timeout'> = {}) {
    return new Promise<void>((resolve) => {
      this.disable({
        ...options,
        timeout: duration,
        onEnable: () => {
          options.onEnable?.();
          resolve();
        },
      });
    });
  }
}

export type { PointerOptions, CursorStyle };
