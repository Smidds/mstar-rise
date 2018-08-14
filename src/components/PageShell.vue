<template>
	<div class="ms-rise-page">
		<div class="ms-rise-page--inner">
			<slot></slot>
		</div>
		<footer class="ms-rise-page--footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
export default {
  name: "page-shell"
};
</script>

<style lang="scss" scoped>
.ms-rise-page--inner {
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 15%;
}
</style>
