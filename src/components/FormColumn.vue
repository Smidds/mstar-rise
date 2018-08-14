<template>
  <div class="mstar-form-column">
    <slot />
  </div>
</template>

<script>
export default {
  name: "form-column"
};
</script>

<style lang="scss" scoped>
.mstar-form-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
