import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
    cartItems: cartItems,
    totalAmount: 0,
    totalPrice: 0,
}



const cartSlice = createSlice ({
    name: "playlist",   //slice 이름 
    initialState,
    reducers: {
        increase: (state, action) => {
            const cartItem = state. cartItems.find((item) => item.id === action.payload);
            cartItem.amount += 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount -= 1;
            if (cartItem.amount < 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
                // 1보다 적으면 아이템 없어짐 
            }
        },
        // 특정항목 제거 ... 필요한가? 
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item => item.id !== action.payload))
        },
        //장바구니 비우는 
        ClearCart: (state) => {
            state.cartItems = []; // 장바구니를 빈 배열로 설정 
        },
        //총 수량과 가격을 계산 
        calculateTotal: (state) => {
            let totalAmount = 0;
            let totalPrice = 0;
            state.cartItems.forEach((item) => {
                totalAmount += item.amount;
                totalPrice += item.amount * item.price;
            });
            state.totalAmount = totalAmount;
            state.totalPrice = totalPrice;
        }
    }
    
});

export const { increase, decrease, removeItem, ClearCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;