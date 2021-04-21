import React, { useState } from "react";
import styled from 'styled-components';
import { colors, scrollbarStyles } from '../../constants';
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
  svg{
    margin-left: 19px;
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
  &:last-child{
    margin-bottom:0;
  }
`

const Select = ({values,defaultValue}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(defaultValue ? defaultValue : values[0]);

  const selectUnits = values.map((val) => <SelectUnit 
    onClick={() => {
      setTitle(val);
      setIsOpen(false)
    }}>
      {val}
    </SelectUnit>)
  return(
    <StyledSelect>
      <SelectHeader onClick={()=> setIsOpen(!isOpen)}>
        <span>{title}, 2021</span>
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