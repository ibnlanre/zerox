import { ErrorBoundaryContextType } from "./ErrorBoundaryContext";

export function assertErrorBoundaryContext(
  value: any
): value is ErrorBoundaryContextType {
  if (
    value == null ||
    typeof value.didCatch !== "boolean" ||
    typeof value.resetErrorBoundary !== "function"
  ) {
    throw new Error("ErrorBoundaryContext not found");
  }

  return true;
}
