<template>
  <PageShell>
		<template>
			<div class="basic-info">
				<div class="basic-info__header">
          {{ headerText }}
        </div>
        <div class="basic-info-section">
          <form class="mds-form basic-info__form mds-form--large-layout">
            <slot />
          </form>
        </div>
        <router-link tag="button" class="mds-button mds-button--large mds-button--primary mstar-rise-form__continue-button" type="button" :to="to">
          <span class="mds-button__text"> {{ buttonText }} </span>
          <CaretRight class="mds-icon mds-button__icon mds-button__icon--right" aria-hidden="true"/>
        </router-link>
			</div>
		</template>
	</PageShell>
</template>

<script>
import CaretRight from "morningstar-design-system/icons/caret-right.svg";
import PageShell from "../components/PageShell";

export default {
  name: "basic-info",
  components: {
    CaretRight,
    PageShell
  },
  props: {
    headerText: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: "Continue"
    },
    to: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~morningstar-design-system/styles/visual-language/typography";
@import "~morningstar-design-system/constants/constants";

.basic-info__header {
  @include mds-level-1-heading();
  margin-top: 20px;
  margin-bottom: 20px;
}

.basic-info-section {
  border-top: $mds-border-header-secondary-on-white;
  margin-top: 10px;
}

.basic-info__form {
  margin-top: 15px;
  padding-left: 5%;
  padding-right: 5%;
}

.mstar-rise-form__continue-button {
  float: right;
}
</style>
