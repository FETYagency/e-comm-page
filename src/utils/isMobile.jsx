import { useSyncExternalStore } from "react";
function subscribe(callback) {
  window.matchMedia("(min-width: 1000px)").addEventListener("change", callback);
  return () => {
    window
      .matchMedia("(min-width: 1000px)")
      .removeEventListener("change", callback);
  };
}
function getSnapshot() {
  return window.matchMedia("(max-width: 1000px)").matches;
}
export default function useIsMobile() {
  let isMobile = useSyncExternalStore(subscribe, getSnapshot);
  return isMobile;
}
