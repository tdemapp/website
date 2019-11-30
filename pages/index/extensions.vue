<template>
  <Section id="extensions">
    <template slot="content">
      <v-flex xs12 sm12 md4>
        <v-card class="elevation-0 transparent" data-aos="fade-right">
          <v-card-text primary-title class="text-center">
            <IconExtensions width="64px" height="64px" />
            <div
              class="primary--text display-3 text-center font-weight-black text-uppercase"
            >Extensions</div>
            <div
              class="primary--text caption text-spaced text-center text-uppercase font-weight-thin"
            >Section subheading text goes here</div>
          </v-card-text>
          <v-card-text class="primary--text">
            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
            ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus
            bibendum tincidunt. Suspendisse potenti.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md8>
        <v-card class="ma-3 transparent elevation-0" data-aos="fade-left" data-aos-delay="200">
          <v-responsive height="40vh" class="grey lighten-3" />
        </v-card>
      </v-flex>
    </template>
  </Section>
</template>

<script>
import IconExtensions from '~/static/icons/extensions.svg'
import Section from '~/components/Section'

export default {
  components: {
    IconExtensions,
    Section
  }
}
</script>
