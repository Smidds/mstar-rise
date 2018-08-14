<template>
  <Form headerText="Personal Information" :to="to">
    <div class="mds-form__field-group">
      <label class="mds-form__label mds-form__label--large" for="first-name">First Name</label>
      <input class="mds-form__input mds-form__input--large" id="first-name"> 
    </div>
    <div class="mds-form__field-group">
      <label class="mds-form__label mds-form__label--large" for="last-name">Last Name</label>
      <input class="mds-form__input mds-form__input--large" id="last-name"> 
    </div>
    <div class="mds-form__field-group">
      <label class="mds-form__label mds-form__label--large" for="email">Email</label>
      <input class="mds-form__input mds-form__input--large" id="email"> 
    </div>
    <div class="mds-form__field-group">
      <label class="mds-form__label mds-form__label--large" for="phone-number">Phone Number</label>
      <input class="mds-form__input mds-form__input--large" id="phone-number"> 
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
  name: "basic-info",
  components: {
    Form
  },
  data() {
    return {
      to: {
        name: "business"
      }
    };
  }
};
</script>
