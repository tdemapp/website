<template>
  <section id="download">
    <v-container class="grey lighten-5">
      <v-row align="center" justify="center" class="ma-4" data-aos="fade-down" data-aos-easing="ease-in-out-back">
        <h1 class="primary--text display-3 text-spaced header text-center font-weight-black text-uppercase">
          Download
        </h1>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="3" lg="2" class="ma-4" data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-delay="100">
          <CardDownload color="blue" title="Chrome" href="/chrome">
            <IconChrome class="white--text ma-2" width="64px" height="64px" />
          </CardDownload>
        </v-col>
        <v-col cols="12" sm="8" md="3" lg="2" class="ma-4" data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-delay="200">
          <CardDownload color="deep-orange" title="Firefox" href="/firefox">
            <IconFirefox class="white--text ma-2" width="64px" height="64px" />
          </CardDownload>
        </v-col>
        <v-col cols="12" sm="8" md="3" lg="2" class="ma-4" data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-delay="300">
          <CardDownload color="red" title="Opera" href="/opera">
            <IconOpera class="white--text ma-2" width="64px" height="64px" />
          </CardDownload>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import CardDownload from '~/components/CardDownload'
import IconChrome from '~/static/icons/chrome.svg'
import IconFirefox from '~/static/icons/firefox.svg'
import IconOpera from '~/static/icons/opera.svg'

export default {
  components: {
    CardDownload,
	  IconChrome,
    IconFirefox,
    IconOpera,
  }
}
</script>
