import toast from "react-hot-toast";
import { create } from "zustand";

const storedCartItems = localStorage.getItem("VENBAcartItems");
const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
const currency=localStorage.getItem("select")&&localStorage.getItem("select")!="undefined"?JSON.parse(localStorage.getItem("select")):{"code":"India","symbol":"₹ - INR","country":"IN"};

const useCart = create((set) => ({
    cartItems: initialCartItems,
    count:(initialCartItems.length<=0 ? 0 : initialCartItems.length),
    curr:currency,
    currencyValue:1,
    CurrencyValueFilter:1,

    setCurrencyValue:(data)=>set((state)=>{
        return{currencyValue:data}
    }),

    setCurrencyValueFilter:(data)=>set((state)=>{
        return{CurrencyValueFilter:data}
    }),

    changeCurr:(data)=>set((state)=>{
        return {curr:data}
    }),

    cartcount:()=>set((state)=>{
        var cnt=state.cartItems.length
        return {count:cnt}
    }),

    addToCart: (item) => {
        set((state) => {
            const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem._id === item._id);
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex].Quantity += 1;
                // updatedCartItems[existingItemIndex].Subtotal = item.Subtotal;
                updatedCartItems[existingItemIndex].Sale_Price = item.Sale_Price;
                localStorage.setItem("VENBAcartItems", JSON.stringify(updatedCartItems));
                toast.success("Product Qty Increased");
                return { cartItems: updatedCartItems };
            }
            else{
                const updatedCartItems = [...state.cartItems, { ...item, Quantity: 1 }];
                localStorage.setItem("VENBAcartItems", JSON.stringify(updatedCartItems));
                toast.success("Product added");
                return { cartItems: updatedCartItems };
            }
        });
    },

    increaseQuantity: (index) => {
        set((state) => {
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[index].Quantity += 1;
            localStorage.setItem("VENBAcartItems", JSON.stringify(updatedCartItems));
            return { cartItems: updatedCartItems };
        });
    },

    decreaseQuantity: (index) => {
        set((state) => {
            const updatedCartItems = [...state.cartItems];
            if (updatedCartItems[index].Quantity > 0) {
                updatedCartItems[index].Quantity -= 1;
                localStorage.setItem("VENBAcartItems", JSON.stringify(updatedCartItems));
            }
            return { cartItems: updatedCartItems };
        });
    },

    removeSelectedItem: (productId) => {
        set((state) => {
            const updatedCartItems = state.cartItems.filter((product) => product._id !== productId);
            localStorage.setItem("VENBAcartItems", JSON.stringify(updatedCartItems));
            return { cartItems: updatedCartItems };
        });
    },

    deleteAllItems: () => {
        set({ cartItems: [] });
        localStorage.removeItem("VENBAcartItems");
    }
    
}));

export default useCart;
