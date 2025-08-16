// src/store/slices/productsSlice.ts
import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { productService, IProduct } from '../../service/productService';
import type { RootState } from '../';

export interface ProductsState {
  byId: Record<string, IProduct>;
  allIds: string[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  byId: {},
  allIds: [],
  loading: false,
  error: null,
};

// thunks
export const fetchProducts = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: string }
>('products/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const data = await productService.getProducts();
    return data;
  } catch (err: any) {
    return rejectWithValue(err?.message ?? 'Falha ao carregar produtos');
  }
});

export const fetchProductById = createAsyncThunk<
  IProduct,
  string,
  { rejectValue: string }
>('products/fetchById', async (id, { rejectWithValue }) => {
  try {
    const data = await productService.getProductById(id);
    return data;
  } catch (err: any) {
    return rejectWithValue(err?.message ?? 'Falha ao carregar o produto');
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    upsertProduct(state, action: PayloadAction<IProduct>) {
      const p = action.payload;
      state.byId[p.id] = p;
      if (!state.allIds.includes(p.id)) state.allIds.push(p.id);
    },
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.byId = {};
      state.allIds = [];
      for (const p of action.payload) {
        state.byId[p.id] = p;
        state.allIds.push(p.id);
      }
    },
    clearError(state) {
      state.error = null;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.byId = {};
        state.allIds = [];
        for (const p of action.payload) {
          state.byId[p.id] = p;
          state.allIds.push(p.id);
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Falha ao carregar produtos';
      })
      // fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        const p = action.payload;
        state.byId[p.id] = p;
        if (!state.allIds.includes(p.id)) state.allIds.push(p.id);
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Falha ao carregar o produto';
      });
  },
});

export const { upsertProduct, setProducts, clearError, reset } = productsSlice.actions;
export default productsSlice.reducer;

// ========== selectors ==========
export const INITIAL_PRODUCTS_STATE = initialState;

// Base resiliente (evita crash em testes que não montem o slice)
export const selectProductsState = (state: RootState | any) =>
  state?.products ?? INITIAL_PRODUCTS_STATE;

// Memoizado e tipado (sem implicit any)
export const selectAllProducts = createSelector(
  [
    (state: RootState) => selectProductsState(state).allIds,
    (state: RootState) => selectProductsState(state).byId,
  ],
  (allIds: string[], byId: Record<string, IProduct>) =>
    allIds.map((id: string) => byId[id])
);

export const selectProductById = (state: RootState, id: string) =>
  selectProductsState(state).byId[id];

export const selectProductsLoading = (state: RootState) =>
  selectProductsState(state).loading;

export const selectProductsError = (state: RootState) =>
  selectProductsState(state).error;
