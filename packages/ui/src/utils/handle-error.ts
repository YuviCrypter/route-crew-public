import { showToast } from "./toast";

interface AuthError {
  message?: string;
}

interface AuthResponse<T> {
  data: T | null;
  error: AuthError | null;
}

/**
 * Handles errors from Better Auth client responses.
 * Boards-casts the error message via toast if present.
 *
 * @param response - The response object from better-auth
 * @param fallbackMessage - Message to show if no specific error message is found
 * @returns boolean - true if no error, false if error handled
 */
export const handleAuthError = <T>(
  response: AuthResponse<T> | any,
  fallbackMessage = "An unexpected error occurred"
): boolean => {
  // Handle better-auth response format
  if (response?.error) {
    const message = response.error.message || fallbackMessage;
    showToast(message)("error");
    return false;
  }

  // Handle caught exceptions that might have an error property
  if (
    response instanceof Error ||
    (typeof response === "object" && response !== null && "error" in response)
  ) {
    const message = response?.error?.message || response?.message || fallbackMessage;
    showToast(message)("error");
    return false;
  }

  return true;
};

/**
 * Safely calls an auth function, handling errors and showing toasts automatically.
 *
 * @param promise - The promise from an auth client call
 * @param fallbackMessage - Message to show if the call fails
 * @returns The data from the response on success, or null on failure
 */
export const safeAuth = async <T>(
  promise: Promise<AuthResponse<T>>,
  fallbackMessage?: string
): Promise<T | null> => {
  try {
    const response = await promise;
    if (handleAuthError(response, fallbackMessage)) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleAuthError(error, fallbackMessage);
    return null;
  }
};
