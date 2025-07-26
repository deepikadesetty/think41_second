import { create } from "zustand";
const useChatStore =create((set) => ({
    messages: [],
    loading:false,
    inputValue: (value) =>set({inputValue: value }),
    addMessage: (message) =>
        set((state) => ({ messages: [...state.messages,message]})),
    setLOading:(val) =>set({loading: val}),
    reset: () => set({messages: [],inputValue:" "}),
    conversations: [],
    addConversation:(conv) =>
        set((state) =>({convesations: [..state.conveesation,conv]})),
selectConversation: (convId) =>
{
    const conv=get().conversations.find(c =>c.id === convId);
    if(conv) set({messages : conv.messages});

},

}));
export default useChatStore;