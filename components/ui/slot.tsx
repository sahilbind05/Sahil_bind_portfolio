import * as React from "react";

/**
 * Minimal `Slot` implementation (subset of @radix-ui/react-slot).
 * Merges the given props/ref onto its single React element child so that
 * primitives like <Button asChild> can render as an <a> or <Link>.
 */
type AnyProps = Record<string, unknown>;

function mergeProps(slotProps: AnyProps, childProps: AnyProps): AnyProps {
  const merged: AnyProps = { ...childProps };

  for (const key in slotProps) {
    const slotValue = slotProps[key];
    const childValue = childProps[key];

    // Compose event handlers (onClick, onMouseEnter, ...).
    if (/^on[A-Z]/.test(key) && typeof slotValue === "function") {
      merged[key] = (...args: unknown[]) => {
        (childValue as ((...a: unknown[]) => void) | undefined)?.(...args);
        (slotValue as (...a: unknown[]) => void)(...args);
      };
    } else if (key === "className") {
      merged[key] = [slotValue, childValue].filter(Boolean).join(" ");
    } else if (key === "style") {
      merged[key] = { ...(slotValue as object), ...(childValue as object) };
    } else {
      merged[key] = slotValue;
    }
  }

  return merged;
}

export const Slot = React.forwardRef<HTMLElement, { children?: React.ReactNode } & AnyProps>(
  ({ children, ...slotProps }, forwardedRef) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    const child = children as React.ReactElement & {
      ref?: React.Ref<unknown>;
    };

    return React.cloneElement(child, {
      ...mergeProps(slotProps, child.props),
      ref: forwardedRef
        ? composeRefs(forwardedRef, child.ref)
        : child.ref,
    });
  }
);
Slot.displayName = "Slot";

function composeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    }
  };
}
