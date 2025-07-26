import { create } from "zustand";
const useChatStore =create((set) => ({
    messages: [],
    loading:false,
    inputValue: (value) =>set({inputValue: value }),
    addMessage: (message) =>
        set((state) => ({ messages: [...state.messages,message]})),
    setLOading:(val) =>set({loading: val}),
    reset: () => set({messages: [],inputValue:" "}),

}));
export default useChatStore;