import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import Title from './Title';

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      CHART
    </React.Fragment>
  );
}
