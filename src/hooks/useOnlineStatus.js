import { useState } from "react";

export default function useOnlineStatus() {
  const [isOnline, setIsonline] = useState(true);
  function handleOnline(value) {
    setIsonline(value);
  }
  window.addEventListener("online", () => {
    handleOnline(true);
  });
  window.addEventListener("offline", () => {
    handleOnline(false);
  });
  return isOnline;
}
