import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'portfolio_download_count';
const BASE_COUNT = 234;

export const useDownloadCounter = () => {
  const [downloadCount, setDownloadCount] = useState<number>(BASE_COUNT);

  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        const response = await fetch('https://api.counterapi.dev/v1/veerendra_portfolio_v2/downloads');
        const data = await response.json();
        if (data && typeof data.count === 'number') {
          setDownloadCount(BASE_COUNT + data.count);
        }
      } catch (error) {
        console.error('Failed to fetch download count:', error);
      }
    };
    fetchDownloadCount();
  }, []);

  const trackDownload = useCallback(async () => {
    try {
      // Optimistic update
      setDownloadCount((prev) => prev + 1);
      
      const response = await fetch('https://api.counterapi.dev/v1/veerendra_portfolio_v2/downloads/up');
      const data = await response.json();
      if (data && typeof data.count === 'number') {
        setDownloadCount(BASE_COUNT + data.count);
      }
    } catch (error) {
      console.error('Failed to track download:', error);
    }
  }, []);

  return { downloadCount, trackDownload };
};
