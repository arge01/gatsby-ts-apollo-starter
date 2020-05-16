/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { Init } from 'components/init';
import { initCartSelected } from 'stores/cart/selected/actions';
import { IChildren } from 'utils/interface';

const InitComposeMemo: React.FC<IChildren> = ({ children }) => {
  const dispatch = useDispatch();

  const handleMount = () => {
    dispatch(initCartSelected());
  };
    
  return (
    <Init
      handleMount={handleMount}
    >
      {children}
    </Init>
  );
};

export const InitCompose = React.memo(InitComposeMemo);