import { ref, reactive } from "@vue/reactivity";
import { onBeforeMount, onMounted, watch, watchEffect } from "vue";

const dateManager = () => {

    let newDate;
    let date = ref(null);
    let dateCurrent = ref(null);
    let day = ref(null);
    let month = ref(null);
    let year = ref(null);
    let monthChangeValue = ref("")
    let yearChangeValue = ref("")

    newDate = new Date();

  const getDateToday = () => date.value = newDate.toUTCString().slice(0, 17) + " (WAT)";
  const getCurrentDayInAWeek = () => day.value = newDate.getDay();
  const getCurrentDayInMonth = () => dateCurrent.value = newDate.getDate();
  const getCurrentMonthInAYear = () => month.value = newDate.getMonth() + 1;
  const getCurrentYear = () => year.value = newDate.getFullYear();

  const format = () => newDate.toString();

  const addDay = (numberOfDays) => {
    //N.B if day after adding is greater than number of days for that month, date returned should be a new month date
    let dayChangingState = newDate;
    dayChangingState.setDate(dayChangingState.getDate() + numberOfDays);
    monthChangeValue.value = dayChangingState.toUTCString().slice(4, 16);
    dayChangingState = null
  };

  const addMonth = (numberOfMonths) => {
    //N.B if month after adding is greater than 11, date returned should be a new year
    let monthChangingState = newDate;
    monthChangingState.setMonth(monthChangingState.getMonth() + numberOfMonths);
    yearChangeValue.value = monthChangingState.toUTCString().slice(4, 16);
    monthChangingState = null
  };

    onMounted(()=>{
        getDateToday();
        getCurrentDayInMonth();
        getCurrentDayInAWeek();
        getCurrentMonthInAYear();
        getCurrentYear();
    })

  return { date, day,dateCurrent, month, year, monthChangeValue, yearChangeValue,getDateToday, getCurrentDayInMonth,getCurrentDayInAWeek,getCurrentMonthInAYear,getCurrentYear, format, addDay, addMonth };
};

export default dateManager;
