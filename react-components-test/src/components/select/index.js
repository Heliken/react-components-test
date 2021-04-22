import React, { useState } from "react";
import styled from 'styled-components';
import { colors, breakpoints } from '../../constants';
import { scrollbarStyles } from '../../helpers/style-helpers';
import Icon from '../icon';

const StyledSelect = styled.div`
  position:relative;
`
const SelectHeader = styled.div`
  display:flex;
  justify-content:flex-end;
  border-radius:6px;
  border:1px solid ${colors.border};
  padding:11px 16px;
  cursor:pointer;
  white-space: nowrap;
  transition:border-color .3s ease-in-out;
  &:hover{
    border-color:${colors.accent};
  }
  @media (max-width:${breakpoints.mobile}px){
    font-size:12px;
    padding:11px 9px 11px 16px;
  }
  svg{
    margin-left: 19px;
    transition:transform .3s ease-in-out;
    transform:rotate(${props => props.isOpen ? '180':'0'}deg);
    @media (max-width:${breakpoints.mobile}px){
      margin-left:10px;
    }
  }
  
`
const SelectBody = styled.div`
  min-width:194px;
  position:absolute;
  top:calc(100% + 5px);
  right:0;
  background-color:#fff;
  z-index:1;
  box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
  border-radius: 8px;
  padding: 17px 4px 17px 17px;
  border:1px solid ${colors.textPrimary}0D;
  opacity:${props => props.show ? '1':'0'};
  visibility:${props => props.show ? 'visible':'hidden'};
  transition:opacity .3s ease-in-out, visibility .3s ease-in-out;
  @media (max-width:${breakpoints.tablet}px){
    right:inherit;
    left:0;
  }
`
/* ↓ added to position scrollbar according to design */
const SelectBodyInner = styled.div`
  ${scrollbarStyles}
  overflow: auto;
  max-height:257px;
`

const SelectUnit = styled.div`
  margin-bottom: 23px;
  cursor: pointer;
  transition:color .3s ease-in-out;
  &:hover{
    color:${colors.accent};
  }
  &:last-child{
    margin-bottom:0;
  }
`

const Select = ({values, currentValue, setValue}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectUnits = values.map((val) => <SelectUnit
    key={val} 
    onClick={() => {
      setValue(val);
      setIsOpen(false);
    }}>
      {val}
    </SelectUnit>)
  return(
    <StyledSelect>
      <SelectHeader isOpen={isOpen} onClick={()=> setIsOpen(!isOpen)}>
        <span>{currentValue}, 2021</span>
        <Icon name='arrow-dropdown'/>
      </SelectHeader>
      <SelectBody show={isOpen}>
        <SelectBodyInner>
          {selectUnits}
        </SelectBodyInner>
      </SelectBody>
    </StyledSelect>
  )
};

export default Select;