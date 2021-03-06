import * as React from 'react';
import { useTextInut } from 'src/hooks/useTextInput';

import { proxyFilterText } from '../../store/proxies';
import shared from '../shared.module.css';

export function TextFilter() {
  const [onChange, text] = useTextInut(proxyFilterText);
  return (
    <input
      className={shared.input}
      type="text"
      value={text}
      onChange={onChange}
    />
  );
}
