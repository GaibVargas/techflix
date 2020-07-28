import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
`;

function PageDefault({children}) {
  return(
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;