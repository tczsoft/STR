import { create } from "zustand";
const storedWishItems = localStorage.getItem("VENBAwishItems");

const initialWishItems = storedWishItems ? JSON.parse(storedWishItems) : [];

const useWish = create((set) => ({
    wishItems: initialWishItems,
    count1:(initialWishItems.length<=0 ? 0 : initialWishItems.length),
    cartcount:()=>set((state)=>{
        var cnt=state.wishItems.length
        return {count1:cnt}}),
    addToWish: (item) => {
        set((state) => {
            const updatedWishItems = [...state.wishItems,item];
            localStorage.setItem("VENBAwishItems", JSON.stringify(updatedWishItems));
            return { wishItems: updatedWishItems };
        // }
        });
    },

    selectSize: (itemId,size,cSize={}) => {
        set((state) => {
            const existingItemIndex = state.wishItems.findIndex((wishItem) => wishItem._id === itemId);
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...state.wishItems];
                updatedCartItems[existingItemIndex].Selectedsize = size;
                updatedCartItems[existingItemIndex].customSize = cSize;
                localStorage.setItem("VENBAwishItems", JSON.stringify(updatedCartItems));
                return { cartItems: updatedCartItems };
            }
        });
    },

    removeSelectedItem: (productId) => {
        set((state) => {
            const updatedWishItems = state.wishItems.filter((product) => product._id !== productId);
            localStorage.setItem("VENBAwishItems", JSON.stringify(updatedWishItems));
            return { wishItems: updatedWishItems };
        });
    },

    deleteAllItems: () => {
        set({ wishItems: [] });
        localStorage.removeItem("VENBAwishItems");
    }
    
}));

export default useWish;
