<template>
	<div class="ms-rise-title-bar">
		<div class="ms-rise-title-bar--left">
			<slot name="left"></slot>
		</div>
		<div class="ms-rise-title-bar--center">
			<slot name="center"></slot>
		</div>
		<div class="ms-rise-title-bar--right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: "title-bar"
};
</script>

<style lang="scss" scoped>
.ms-rise-title-bar {
  display: flex;
  justify-content: space-between;
}
</style>
