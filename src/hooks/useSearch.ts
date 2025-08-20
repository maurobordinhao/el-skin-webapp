'use client';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { setTerm, clearTerm } from '@/store/slices/searchSlice';

export function useSearch() {
  const dispatch = useDispatch();
  const term = useSelector((s: RootState) => s.search.term);

  return {
    term,
    setTerm: (v: string) => dispatch(setTerm(v)),
    clearTerm: () => dispatch(clearTerm()),
  };
}
