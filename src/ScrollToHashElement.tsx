import { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  const hashElement = useMemo(() => {
    const hash = location.hash;
    const removeHashCharacter = (str: string) => str.slice(1);

    if (hash) {
      return document.getElementById(removeHashCharacter(hash));
    }
    return null;
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;