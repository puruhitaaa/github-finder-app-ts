import create from 'zustand';

interface Alert {
  msg: string;
  type: string;
  setAlert: (msg: string, type: string) => void;
}

export const useAlert = create<Alert>((set) => ({
  msg: '',
  type: '',
  setAlert: (msg: string, type: string) => {
    set({ msg, type });

    setTimeout(() => set({ msg: '', type: '' }), 3000);
  },
}));
