import { useState, useEffect } from "react";

const useHash = () => {
  const [hash, setHash] = useState("#about");

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || "#about";
      setHash(newHash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
};

export default useHash;
