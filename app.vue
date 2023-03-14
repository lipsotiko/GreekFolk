<template>
  <i-container>
    <i-layout-header>
      <i-navbar fluid color="dark" size="sm" class="_padding-top:0 _padding-bottom:0">
        <i-navbar-brand to="/">
          <span class="society-name">Philhellenes</span>
        </i-navbar-brand>
        <i-navbar-collapsible class="_justify-content:flex-end">
          <i-nav color="dark">
            <i-nav-item to="/">Home</i-nav-item>
            <i-nav-item disabled>Calendar</i-nav-item>
          </i-nav>
        </i-navbar-collapsible>
      </i-navbar>
    </i-layout-header>
    <i-layout vertical>
      <i-layout-content class="_margin-bottom:6">
        <i-container>
          <i-row>
            <i-column lg="9" xl="8" xxl="7">
              <h1 class="title">Devoted to the practice of traditional <span class="_text:primary">Greek culture</span> in
                all its forms.</h1>
              <h2 class="lead description _margin-bottom:2"><strong>Philhellene:</strong> admiring Greece or the Greeks
              </h2>
            </i-column>
          </i-row>
          <i-row>
            <i-column>
              <div class="actions">
                <i-button size="lg" color="primary" class="join _margin:1" :href="mailingListSignUpURL"
                  target="_blank">Join</i-button>
                <i-button size="lg" color="dark" class="donate _margin:1">Donate</i-button>
              </div>
            </i-column>
          </i-row>
        </i-container>
      </i-layout-content>
    </i-layout>
    <i-layout-footer class="_text-align:center">
      <p>
        <small>
          <span>Hellenic Folklore Society of Baltimore, Maryland</span><br />
          <span>3349 Beech Ave, Baltimore, MD 21211</span><br />
          <span>(443) 301 -9719 &middot; <a href="mailto:info@greekfolk.org">info@greekfolk.org</a></span><br />
          <span class="muted">Est. 2023</span>
        </small>
      </p>
    </i-layout-footer>
  </i-container>
</template>
<script>
export default {
  data() {
    const config = useRuntimeConfig()
    return {
      mailingListSignUpURL: config.mailingListSignUpURL
    }
  }
}
</script>
<style scss>
.society-name {
  font-family: "Greek Font";
  font-size: 22pt;
}

.actions .button {
  width: 100px
}

.muted {
  color: var(--text-muted)!important
}

@font-face {
  font-family: "Greek Font";
  src: url('/DIOGENES.ttf')
}

@media screen and (max-width: 992px) {
  .title {
    text-align: center;
    font-size: 5vw;
  }

  .description {
    text-align: center;
  }

  .actions {
    text-align: center;
  }
}

@media screen and (max-width: 412px) {
  .actions .button {
    width: 80%
  }
}
</style>
