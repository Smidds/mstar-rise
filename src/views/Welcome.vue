<template>
	<PageShell>
		<template>
			<div class="welcome-text">
				<span class="welcome-text__header">Welcome to Morningstar Rise!</span>
        <br />
        <router-link tag="button" class="mds-button mds-button--large mds-button--primary" type="button" :to="{ name: 'basic' }">
          <span class="mds-button__text"> Get a Quality Retirement Plan </span>
          <CaretRight class="mds-icon mds-button__icon mds-button__icon--right" aria-hidden="true"/>
        </router-link>
			</div>
		</template>
	</PageShell>
</template>

<script>
import PageShell from "../components/PageShell";
import CaretRight from "morningstar-design-system/icons/caret-right.svg";

export default {
  name: "welcome",
  components: {
    CaretRight,
    PageShell
  }
};
</script>

<style lang="scss" scoped>
@import "~morningstar-design-system/styles/visual-language/typography";
@import "~morningstar-design-system/constants/constants";

.welcome-text {
  @include mds-level-1-heading();
  text-align: center;
  margin-top: 50px;
}
</style>
