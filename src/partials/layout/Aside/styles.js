import styled from "styled-components";
import { palette } from "../../../helpers";

export const AsideWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  border-right: 1px solid ${palette("colors.primary", 4)};
`;

export const AsideCollapseWrapper = styled.div`
  width: 200px;
  padding: 20px 10px;
  border-right: 1px solid ${palette("colors.primary", 4)};
  box-shadow: 28px 0px 28px rgba(0, 0, 0, 0.04),
    10px 0px 10px rgba(0, 0, 0, 0.04);
`;

export const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
