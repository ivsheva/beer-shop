import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    const pageTitle = title + " - Beer Shop" || "Beer Shop";
    document.title = pageTitle;

    // will reset title when component unMounts
    return () => {
      document.title = "Beer Shop";
    };
  }, [title]);
}

export default useTitle;
