// src/hooks/useSearch.ts
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { setSearch, clearSearch } from '../store/slices/searchSlice';

export function useSearch() {
  const dispatch = useDispatch<AppDispatch>();
  const term = useSelector((state: RootState) => state.search.term);

  const set = useCallback((value: string) => {
    dispatch(setSearch(value));
  }, [dispatch]);

  const clear = useCallback(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  return { term, setSearch: set, clearSearch: clear };
}