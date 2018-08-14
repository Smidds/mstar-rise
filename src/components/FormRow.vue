<template>
  <div class="mds-form__field-group mds-form__field-group--horizontal">
    <slot />
  </div>
</template>

<script>
export default {
  name: "form-row"
};
</script>

<style lang="scss" scoped>
.mstar-rise-form-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
