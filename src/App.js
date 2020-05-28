import React from 'react';
import 'typeface-roboto';
import styled from 'styled-components';

import { Header } from "./components/Header";
import { PollutersDataContainer } from './containers/PolluterDataContainer';
import { PollutersListVisual } from './components/PollutersList/PollutersListVisual';
import { PollutersGraphVisual } from './components/PolluterGraph/PolluterGraphVisual';
import { LayoutContainer } from './containers/LayoutContainer';

const StyledWrapper = styled.div`
  margin: 20px
`;

function App() {
  return (
    <StyledWrapper>
      <Header />
      <main>
        <LayoutContainer>
          {({ width, height }) => (
            <PollutersDataContainer>
              {({ data }) => (
                <>
                  <PollutersGraphVisual data={data} width={width} height={height} />
                  <PollutersListVisual data={data} />
                </>
              )}
            </PollutersDataContainer>
          )}
        </LayoutContainer>
      </main>
    </StyledWrapper>
  );
}

export default App;
