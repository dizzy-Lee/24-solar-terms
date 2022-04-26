/**
 * @description: 24节气日期转换
 * @param {number} 数字1-24
 * @return {object}{ month: number, day: number, solarTerm: string }
 */
const getSolarTerm =  (term) => {
  if (term >= 1 && term <=24) {
    const C = [
      { name: "立春", num: 3.87, month: 2 },
      { name: "雨水", num: 18.73, month: 2 },
      { name: "惊蛰", num: 5.63, month: 3 },
      { name: "春风", num: 20.646, month: 3 },
      { name: "清明", num: 4.81, month: 4 },
      { name: "谷雨", num: 20.1, month: 4 },
      { name: "立夏", num: 5.52, month: 5 },
      { name: "小满", num: 21.04, month: 5 },
      { name: "芒种", num: 5.678, month: 6 },
      { name: "夏至", num: 21.37, month: 6 },
      { name: "小暑", num: 7.108, month: 7 },
      { name: "大暑", num: 22.83, month: 7 },
      { name: "立秋", num: 7.5, month: 8 },
      { name: "处暑", num: 23.13, month: 8 },
      { name: "白露", num: 7.646, month: 9 },
      { name: "秋分", num: 23.042, month: 9 },
      { name: "寒露", num: 8.318, month: 10 },
      { name: "霜降", num: 23.438, month: 10 },
      { name: "立冬", num: 7.438, month: 11 },
      { name: "小雪", num: 22.36, month: 11 },
      { name: "大雪", num: 7.18, month: 12 },
      { name: "冬至", num: 21.94, month: 12 },
      { name: "小寒", num: 5.4055, month: 1 },
      { name: "大寒", num: 20.12, month: 1 },
    ];
    const date = new Date();
    const year = date.getFullYear();
    const Y = year % 100;
    const D = 0.2422;
  
    //小寒、大寒、立春、雨水的L为(Y - 1) / 4
    const L =
      term === 24 || term === 23 || term === 1 || term === 2
        ? Y === 0
          ? Y / 4
          : (Y - 1) / 4
        : Y / 4;
  
    let thatDay = parseInt(Y * D + C[term - 1].num) - parseInt(L);
  
    //判断各年份特殊情况
    if (term === 2 && year === 2026) {
      thatDay--
    }
    if (term === 4 && year === 2084) {
      thatDay++
    }
    if (term === 8 && year === 2008) {
      thatDay++
    }
    if (term === 11 && year === 2016) {
      thatDay++
    }
    if (term === 13 && year === 2002) {
      thatDay++
    }
    if (term === 18 && year === 2089) {
      thatDay++
    }
    if (term === 19 && year === 2089) {
      thatDay++
    }
    if (term === 22 && year === 2021) {
      thatDay--
    }
    if (term === 23 && year === 2019) {
      thatDay--
    }
    if (term === 24 && year === 2082) {
      thatDay++
    }
  
    return {
      month: C[term - 1].month,
      day: thatDay,
      solarTerm: C[term - 1].name
    };
  } else {
    throw Error('term must be between 1 and 24')
  }
};

export default getSolarTerm