import { useState, useEffect } from 'react';

const STORAGE_KEY = 'portfolio_visitor_count';
const SESSION_KEY = 'portfolio_session_id';
const BASE_COUNT = 847;

export const useVisitorCount = () => {
  const [totalVisitors, setTotalVisitors] = useState<number>(BASE_COUNT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const sessionId = sessionStorage.getItem(SESSION_KEY);
        let url = 'https://api.counterapi.dev/v1/veerendra_portfolio_v2/visits';
        
        if (!sessionId) {
          url = 'https://api.counterapi.dev/v1/veerendra_portfolio_v2/visits/up';
          sessionStorage.setItem(SESSION_KEY, crypto.randomUUID?.() || String(Date.now()));
        }

        const response = await fetch(url);
        const data = await response.json();
        
        if (data && typeof data.count === 'number') {
          setTotalVisitors(BASE_COUNT + data.count);
        }
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
        // Fallback to BASE_COUNT
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return { totalVisitors, isLoading };
};
