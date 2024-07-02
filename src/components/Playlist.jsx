import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ClearCart, removeItem, increase, decrease, calculateTotal } from '../redux/cartSlice';
import { CartIcon, ChevronDown, ChevronUp } from '../constants/icons';
import styled from 'styled-components';

function Playlist() {
    const { cartItems, totalAmount, totalPrice } = useSelector(state => state.playlist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems, dispatch]);

    
    return (
        <>
            <Header> 
                <h2>UMC Playlist</h2>
                <Cart>
                    <CarticonContainer>
                        <CartIcon />
                        <TotalCount>{totalAmount}</TotalCount>
                    </CarticonContainer>
                </Cart>
            </Header>  
            <Body>
                <h1>당신이 선택한 음반</h1>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <CartItem key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <div>
                                <h4>{item.title}</h4>
                                <h5>{item.singer}</h5>
                                <span>₩ {item.price} </span>
                            </div>
                            <Amount>
                                <button onClick={() => dispatch(increase(item.id))}><ChevronUp /></button>
                                <p>{item.amount}</p>
                                <button onClick={() => dispatch(decrease(item.id))}><ChevronDown /></button>                            
                            </Amount>
                        </CartItem>
                    ))
                ) : (
                    <p>고객님이 좋아하는 음반을 담아보세요~!</p>
                )}
                <hr /> {/* 수평선 추가  */}
                <h4>총 가격: ₩ {totalPrice}</h4> 
                <ClearButton onClick={() => dispatch(ClearCart())}>장바구니 초기화</ClearButton>

            </Body>         
        </>

    );
}

export default Playlist;

// Styled-components

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 7px;
    background-color: skyblue;
    h2 {
        justify-content: right;
        color: white;
    }
`;

const Cart = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const CarticonContainer = styled.div`
    position: relative;
    margin-right: 20px;
`;

const TotalCount = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    background: #fff;
    color: #6a1b9a;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 12px;
`;


const Body = styled.div`
//  padding: 20px; 
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    background: #f9f9f9;  
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
`;

const CartItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    img {
        width: 100px;
        margin-right: 40px;
    }
    
    div {
        flex: 1;
    }
`;

const Amount = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 30px;
        height: 30px;
        background: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        margin: 0 10px;
    }
`;

const ClearButton = styled.button`
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px; 
    // &:hover {}   
`;