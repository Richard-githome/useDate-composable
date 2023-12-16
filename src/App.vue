<template>
  <section>
    <h1>{{ title }}</h1>

    <div class="pseudo-display-section">
      <h2>Today's date is : {{ date }}</h2>
      <h2>Current day of the week (Sun=0 -> Sat=6) : {{ day }}</h2>
      <h2>Current day date of the month (1 -> 30th) : {{ dateCurrent }}</h2>
      <h2>Current month of the year (Jan=1 -> Dec=12) : {{ month }}</h2>
      <h2>Current Year : {{ year }}</h2>
      <h2>Change in months : {{ monthChangeValue }}</h2>
      <h2>Change in years : {{ yearChangeValue }}</h2>
    </div>
    <div class="pseudo-form-section">
      <input v-model="dateNumber" type="number" placeholder="type in a number...">
      <div class="pseudo-form-btn-container">
        <button @click="handleAddDay(dateNumber)" >Add Number of Days in a Month</button>
        <button @click="handleAddMonth(dateNumber)" >Add Number of Months in a Year</button>
      </div>
    </div>

  </section>
</template>

<script setup>
import dateManager from "./composables/use-date";

let dateNumber;
const title = "Use Date Composable"

const { date, day,dateCurrent, month,year, monthChangeValue, yearChangeValue, getDay, getMonth, format, addDay, addMonth } =
  dateManager();

  function handleAddDay(Number){
    addDay(dateNumber);
    dateNumber = null
  }
  function handleAddMonth(Number){
    addMonth(dateNumber);
    dateNumber = null
  }
</script>

<style scoped>
section {
  width: 100%;
  max-width: 1000px;
  height: max-content;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
}
.pseudo-display-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}
.pseudo-form-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 2rem;
}
.pseudo-form-section input {
  width: 100%;
  padding: .5rem;
  height: max-content;
  font-size: 1.5rem;
  border-radius: .5rem;
}
.pseudo-form-section input:focus {
  outline: 1px solid blue;
  background-color: grey;
  border: none;
  transition: all 200ms ease-in;
}

.pseudo-form-btn-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}
.pseudo-form-btn-container button {
  width: 50%;
  padding: .5rem 2rem;
  height: max-content;
  font-size: 1.5rem;
  border-radius: .5rem;
  margin-top: 1rem;
}
.pseudo-form-btn-container button:focus {
  background-color: purple;
  color: aliceblue;
  transition: all 200ms ease-in;
}
</style>
