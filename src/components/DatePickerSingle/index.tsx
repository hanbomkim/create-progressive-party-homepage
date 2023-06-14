import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateWrapper } from "./DatepickerStyle";
type DateProps = {
  setInitDate: Date;
  setPickedDate: (value: Date) => void;
  // isFeature?: string;
};

const DatePickerSingle = (props: DateProps) => {
  const [date, setDate] = useState<Date | null>();
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const { setInitDate, setPickedDate } = props;
  useEffect(() => {
    setDate(setInitDate);
    /* eslint-disable */
  }, []);

  useEffect(() => {
    setPickedDate(date);
    setIsSelect(!isSelect);
    /* eslint-disable */
  }, [date]);

  return (
    <DateWrapper isSelect={isSelect}>
      <DatePicker
        maxDate={new Date()}
        dateFormat={"yyyy.MM.dd"}
        showMonthDropdown={true}
        showYearDropdown={true}
        selected={date}
        onChange={(date: Date) =>
          setDate((oldDate) => {
            return date;
          })
        }
        // useShortMonthInDropdown
        dropdownMode="select"
        className="f__datepicker"
        locale={ko}
      />
    </DateWrapper>
  );
};

export default DatePickerSingle;
