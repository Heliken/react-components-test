import { colors, months } from '../constants';

const getMonthData = (month) => {
  return {
    'Date': {
      val: `${month} 06, 2020`,
      icon:{
        color: colors.textPrimary,
        name: 'user-check',
        size: 20
      },
    },
    'Shift type': {
      val: 'Afternoon',
      icon: false,
    },
    'Period': {
      val: '15:00 - 23:00',
      icon: {
        color: `${colors.textPrimary}80`,
        name: 'clock',
        size:  18
      },
    },
    'Hours': {
      val: '8h',
      icon: false
    },
    'Salary (gross)': {
      val: '$1,630',
      icon: false
    },
    'Bonus (gross)': {
      val: '30',
      icon: false
    }
  }
}

//const tableDataGenerated = new Array(15).fill(tableDataSample);
let dummyData = {};

months.forEach((month) => {
  dummyData[month] = new Array(15).fill(getMonthData(month));
})

export default dummyData;
