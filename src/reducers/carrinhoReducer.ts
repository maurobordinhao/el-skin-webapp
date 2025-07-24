// src/reducers/carrinhoReducer.ts
import { CartItem } from '../types/CartItem';
import { IProduct } from '../service/productService';

export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";

interface Action {
  type: string;
  payload: any;
}

export const carrinhoReducer = (state: CartItem[], action: Action): CartItem[] => {
  switch (action.type) {
    case ADD_PRODUTO: {
      const novoProduto: IProduct = action.payload;
      const index = state.findIndex((item) => item.id === novoProduto.id);
      if (index === -1) {
        return [...state, { ...novoProduto, quantidade: 1 }];
      } else {
        return state.map((item, i) =>
          i === index ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
    }

    case REMOVE_PRODUTO:
      return state.filter((item) => item.id !== action.payload);

    case UPDATE_QUANTIDADE: {
      const { produtoId, quantidade } = action.payload;
      return state
        .map((item) =>
          item.id === produtoId ? { ...item, quantidade } : item
        )
        .filter((item) => item.quantidade > 0);
    }

    default:
      return state;
  }
};
