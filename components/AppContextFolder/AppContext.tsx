import { createContext, Dispatch, MutableRefObject, SetStateAction, useContext } from "react";

export type WindowSizeTracker = (() => void) | null;
export type MousePositionTracker = ((event: MouseEvent) => void) | null;
export type TypingKeyboardEvent = ((event: KeyboardEvent) => void) | null;
export type TypingResizeEvent = (() => void) | null;

export type SharedState = {
  userdata: {
    timerCookieRef: MutableRefObject<ReturnType<typeof setInterval> | null>;
    windowSizeTracker: MutableRefObject<WindowSizeTracker>;
    mousePositionTracker: MutableRefObject<MousePositionTracker>;
  };
  typing: {
    keyboardEvent: TypingKeyboardEvent;
    eventInputLostFocus: TypingResizeEvent;
  };
};

export type AppContextValue = {
  sharedState: SharedState;
  setSharedState: Dispatch<SetStateAction<SharedState>>;
};

const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppContext.Provider");
  }

  return context;
}

export default AppContext;
