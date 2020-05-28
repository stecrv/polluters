import React from "react";
import styled from "styled-components";
import { appStyles as size } from "../constants";

const StyledLayout = styled.div`
  
`;

export const LayoutContainer = ({ children }) => {
               const width =
                 size.width < window.innerWidth
                   ? size.width
                   : window.innerWidth;
               const height =
                 size.height < window.innerHeight
                   ? size.height
                   : window.innerHeight;
               return <StyledLayout>{children( { width, height })}</StyledLayout>;
             };
