export const colors = {
  background: '#E8EAF0',
  textPrimary: '#0C1427',
  textSecondary: '#8697A8',
  accent:'#058373',
  border: '#DEDFE2',
  scrollbarBg:'#E8EAF0'
};

export const scrollbarStyles = (props) => `
  &::-webkit-scrollbar {
    width:5px;
    border-radius:2.5px;
    background-color:${colors.scrollbarBg}
  }
  &::-webkit-scrollbar-thumb{
    border-radius:2.5px;
    background-color:${colors.textSecondary}
  }

`;