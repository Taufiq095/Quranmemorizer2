// src/hooks/useProgress.ts
export const useProgress = (collectionId: string) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (user) getProgress(collectionId).then(setProgress);
  }, [user, collectionId]);
  
  return progress;
}