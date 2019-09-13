import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface XyzProps {}

const StyledXyz = styled.div`
  color: pink;
`;

export const Xyz = (props: XyzProps) => {
  return (
    <StyledXyz>
      <h1>Welcome to xyz component!</h1>
    </StyledXyz>
  );
};

export default Xyz;
