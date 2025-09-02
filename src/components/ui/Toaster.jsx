import { useState, useEffect } from "react";

let toastId = 0;
const toasts = [];
const listeners = [];

const addToast = (toast) => {
  const id = toastId++;
  const newToast = { id, ...toast };
  toasts.push(newToast);
  listeners.forEach(listener => listener([...toasts]));
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    removeToast(id);
  }, 5000);
  
  return id;
};

const removeToast = (id) => {
  const index = toasts.findIndex(toast => toast.id === id);
  if (index > -1) {
    toasts.splice(index, 1);
    listeners.forEach(listener => listener([...toasts]));
  }
};

const subscribe = (listener) => {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
};

// Hook for using toast
export const useToast = () => {
  return {
    toast: (toast) => addToast(toast)
  };
};

const Toaster = () => {
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribe(setToastList);
    return unsubscribe;
  }, []);

  if (toastList.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toastList.map((toast) => (
        <div
          key={toast.id}
          className={`
            bg-background border border-border rounded-lg shadow-lg p-4 min-w-[300px] max-w-[420px]
            ${toast.variant === 'destructive' ? 'border-destructive/50 text-destructive' : ''}
          `}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {toast.title && (
                <div className="text-sm font-semibold">{toast.title}</div>
              )}
              {toast.description && (
                <div className="text-sm text-muted-foreground mt-1">{toast.description}</div>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-4 text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toaster;