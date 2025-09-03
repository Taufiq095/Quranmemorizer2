import { useNavigate, useLocation } from 'react-router-dom';

export function useBackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Can go back if we're not on the home page
  const canGoBack = location.pathname !== '/';
  
  const goBack = () => {
    navigate('/');
  };
  
  return { canGoBack, goBack };
}