import styled from "styled-components";

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .react-datepicker-wrapper {
    height: 35px;
  }

  .f__datepicker {
    cursor: pointer;
    width: 100%;
    padding: 11.5px 48px 8.5px 12px;
    color: #333333;
    border-radius: 3px;
    border: solid 1px #e2e5ed;
    line-height: 100%;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    font: {
      family: "NanumSquareRound", sans-serif;
      size: 12px;
      weight: 400;
    }

    &:not(:disabled):not([readonly]):hover,
    &:not(:disabled):not([readonly]):focus {
      border-color: var(--outline);
      box-shadow: 0 0 0 2px rgb(112 205 216 / 20%);
    }

    &:not(:disabled):not([readonly]):focus {
      -webkit-box-shadow: 0 0 0 2px rgb(112 205 216 / 20%);
      box-shadow: 0 0 0 2px rgb(112 205 216 / 20%);
    }

    &[readonly] {
      border-color: #d7d7d7;
      background-color: #fafafa;
      color: #999;
      cursor: default;
    }
  }

  .react-datepicker__input-container:after {
    content: "";
    position: absolute;
    width: 48px;
    height: calc(100% - 2px);
    border-left: 1px solid #ececec;
    box-sizing: border-box;
    top: 1px;
    bottom: 0;
    right: 0;
    background-color: transparent;
    color: transparent;
    background-image: url("./styles/svg/calendar.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 13px;
  }

  //드랍다운 캘린더 위치 수정
  .react-datepicker-popper[data-placement^="bottom"] {
    padding-top: 3px;
  }

  //드랍다운 캘린더 스타일
  .react-datepicker {
    border-color: #e8ebf1;
    color: #333;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    width: 250px;
    height: 250px;

    font: {
      family: "NanumSquareRound", sans-serif;
      size: 12px;
      weight: 400;
    }
  }

  //툴팁 삼각형 제거
  .react-datepicker__triangle {
    display: none;
  }

  //헤더 배경 색, 보더 색 변경
  .react-datepicker__header {
    padding: 0;
    background: 0 0 0 2px rgb(112 205 216 / 20%);
    border-bottom: none;
  }

  //좌우 화살표 버튼 위치 수정
  .react-datepicker__navigation {
    top: 14px;
  }

  //좌우 화살표 스타일 변경
  .react-datepicker__navigation-icon::before,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-color: #838aeb;
    border-width: 1px 1px 0 0;
    height: 7px;
    top: 7px;
    width: 7px;
  }
  .react-datepicker__month-container {
    width: 250px;
    height: 230px;
  }

  //요일 색상 변경
  .react-datepicker__day-name {
    color: var(--date);
  }
  .react-datepicker__month {
    height: 150px;
    padding: 8px 0px;
  }
  .react-datepicker__week {
    display: flex;
    justify-content: space-around;
  }

  //요일 구분 보더 추가
  .react-datepicker__day-names {
    height: 34px;
    background: #fff;
    border-top: 1px solid #e8ebf1;
    border-bottom: 1px solid #e8ebf1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
  }

  //헤더 선택한 날짜 글자 표시 제거
  .react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown.react-datepicker__current-month--hasMonthDropdown {
    display: none;
  }

  //헤더 높이 변경
  .react-datepicker__header__dropdown.react-datepicker__header__dropdown--select {
    height: 50px;
    padding: 10px 0;
  }

  //헤더 월, 연도 션택 공통 수정
  .react-datepicker__month-select,
  .react-datepicker__year-select {
    padding: 0 7px;
    height: 30px;
    border: 1px solid #e8ebf1;
    color: #333;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;

    font: {
      family: "NanumSquareRound", sans-serif;
      size: 12px;
      weight: 400;
    }
  }

  //헤더 월별 션택 넓이 변경
  .react-datepicker__month-select {
    width: 70px;
  }

  //헤더 연도 션택 넓이 변경
  .react-datepicker__year-select {
    width: 80px;
  }

  .react-datepicker__week .react-datepicker__day-name,
  .react-datepicker__week .react-datepicker__day,
  .react-datepicker__week .react-datepicker__time-name {
    font-size: 12px;
    color: #333;
    padding: 3px;
  }

  //캘린더 선택된 날짜 색상 변경
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    color: #fff !important;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background: var(--outline);
  }

  //캘린더 선택된 날짜 hover 했을 때 색상 변경
  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover,
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    color: #fff !important;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background: var(--date);
    padding: 3px;
  }

  //disable 날짜 색상 고정
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    color: #ccc !important;
  }
  .react-datepicker__day--selected {
  }
`;
