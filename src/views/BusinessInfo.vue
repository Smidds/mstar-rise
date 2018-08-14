<template>
  <Form headerText="Business Information" :to="to">
    <div class="mds-form__field-group">
      <label class="mds-form__label mds-form__label--large" for="first-name">Name of Business</label>
      <input class="mds-form__input mds-form__input--large" id="first-name"> 
    </div>
    <div class="mds-form__field-group">
      <label class="mds-form__label mds-form__label--large" for="last-name">Number of Employees</label>
      <input class="mds-form__input mds-form__input--large" id="last-name"> 
    </div>
    <div class="mds-form__field-group">
      <label class="mds-form__label mds-form__label--large" for="email">Business Field</label>
      <input class="mds-form__input mds-form__input--large" id="email"> 
    </div>
    <fieldset class="mds-form__fieldset">
      <legend class="mds-form__legend">Home Address</legend>
      <div class="mds-form__field-group">
        <label class="mds-form__label mds-form__label--large" for="address">Address</label>
        <input class="mds-form__input mds-form__input--large" id="address"> 
      </div>
      <div class="mds-form__field-group">
        <label class="mds-form__label mds-form__label--large" for="city">City</label>
        <input class="mds-form__input mds-form__input--large" id="city"> 
      </div>
      <div class="mds-form__field-group">
        <label class="mds-form__label mds-form__label--large" for="state">State</label>
        <input class="mds-form__input mds-form__input--large" id="state"> 
      </div>
      <div class="mds-form__field-group">
        <label class="mds-form__label mds-form__label--large" for="zip-code">Zip Code</label>
        <input class="mds-form__input mds-form__input--large" id="zip-code"> 
      </div>
    </fieldset>
  </Form>
</template>

<script>
import Form from "../components/Form";

export default {
  name: "business-info",
  components: {
    Form
  },
  data() {
    return {
      to: {
        name: "glide"
      }
    };
  }
};
</script>
