'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './SearchBar.module.css';
import { useSearch } from '@/hooks/useSearch';

export default function SearchBar() {
  const { term, setTerm, clearTerm } = useSearch();
  const [value, setValue] = useState(term);

  // debounce 300ms
  const debounced = useMemo(() => {
    let t: any;
    return (next: string) => {
      clearTimeout(t);
      t = setTimeout(() => setTerm(next), 300);
    };
  }, [setTerm]);

  useEffect(() => {
    setValue(term); 
  }, [term]);

  return (
    <div className={styles.wrap}>
      <input
        className={styles.input}
        type="search"
        placeholder="Buscar produtos…"
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          debounced(v);
        }}
        aria-label="Buscar produtos"
      />
      {value && (
        <button
          className={styles.clear}
          onClick={() => {
            setValue('');
            clearTerm();
          }}
          aria-label="Limpar busca"
        >
          ×
        </button>
      )}
    </div>
  );
}
