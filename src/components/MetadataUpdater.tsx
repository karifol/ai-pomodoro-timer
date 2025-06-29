import { useEffect } from "react";

interface MetadataUpdaterProps {
    minutes: number;
    seconds: number;
    mode: 'work' | 'break'
}

export default function MetadataUpdater({ minutes, seconds, mode }: MetadataUpdaterProps) {

useEffect(() => {
    document.title = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} - ${mode === 'work' ? '作業中' : '休憩中'}`;

  }, [minutes, seconds, mode]);
  return null;
}