import { useNavigate } from 'react-router-dom';

function useNavigateTo(): (url: string) => void {
  const navigate = useNavigate();

  const navigateToUrl = (url: string) => navigate(url);

  return navigateToUrl;
}

export default useNavigateTo;
