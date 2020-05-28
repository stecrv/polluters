import React from "react";
import {Header} from "./components/Header";
import 'typeface-roboto';
import styled from 'styled-components';
import {PollutersDataContainer} from "./containers/PolluterDataContainer";
import {PollutersListVisual} from "./components/PollutersList/PollutersListVisual";
import {PollutersGraphVisual} from "./components/PolluterGraph/PolluterGraphVisual";
import {LayoutContainer} from "./containers/LayoutContainer";

const StyledWrapper = styled.div`
  margin: 20px
`

function App() {
    return (
        <StyledWrapper>
            <Header/>
            <main>
                <LayoutContainer>
                    {({width, height}) => {
                        return (<PollutersDataContainer>
                            {({data}) => {
                                return (<>
                                    <PollutersGraphVisual data={data} width={width} height={height}/>
                                    <PollutersListVisual data={data}/>
                                </>)
                            }
                            }
                        </PollutersDataContainer>)
                    }}
                </LayoutContainer>
            </main>
        </StyledWrapper>
    );
}

export default App;
