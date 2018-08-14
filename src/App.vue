<template>
  <div id="app">
    <header class="mds-masthead">
      <div class="mds-masthead__inner">
          <div class="mds-masthead__left"> </div>
          <div class="mds-masthead__logo-wrap"> 
            <router-link :to="{ name:'welcome' }">
              <MorningstarRiseLogo class="mds-masthead__logo--wide" alt="Morningstar Rise" />
            </router-link>
          </div>
          <div class="mds-masthead__right">
            <button class="mds-button mds-button--flat mds-button--flat-icon-m mds-masthead--show-wide" type="button">
                <PersonPadlessIcon class="mds-icon mds-button__icon mds-button__icon--left" aria-hidden="true"/>
                <span class="mds-button__text"> Sign In </span>
            </button>
          </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar";
import PersonPadlessIcon from "morningstar-design-system/icons/person-padless.svg";
import MorningstarRiseLogo from "./assets/images/mastheads/logos/logo.svg";
import "morningstar-design-system/dist/mds.css";

export default {
  name: "app",
  components: {
    MorningstarRiseLogo,
    PersonPadlessIcon,
    TitleBar
  }
};
</script>

<style lang="scss" scoped>
@import "~morningstar-design-system/constants/constants";
@import "~morningstar-design-system/styles/visual-language/typography";
@import "~morningstar-design-system/styles/visual-language/color";

#app {
  @include mds-body-text-m();
}

h1 {
  @include mds-level-1-heading();
}

.title {
  text-decoration: none;
  color: #5e5e5e;
}

.mds-masthead__logo--wide {
  @extend .mds-masthead__logo--wide;
  height: 45px;
}

.mds-masthead__logo--wide svg {
  @extend .mds-masthead__logo--wide;
  height: 45px;
}

header {
  margin-bottom: 15px;
}
</style>
