
export const formatTime = (timestamp: string | number | Date) => {
  try {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      return new Date().toLocaleTimeString('ko-KR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    }
    return date.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  } catch (error) {
    return new Date().toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
};