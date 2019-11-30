<template>
  <v-card dark :href="href" :class="`elevation-0 ${color} darken-2 defaultHover`">
    <v-img :class="color">
      <v-card-title class="py-3">
        <v-spacer />
          <slot></slot>
        <v-spacer />
      </v-card-title>
    </v-img>
    <v-card-title primary-title class="pa-3 text-center">
      <v-spacer />
          <h5 class="text-spaced font-weight-black text-uppercase">
              {{ title }}
          </h5>
      <v-spacer />
    </v-card-title>
  </v-card>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'primary',
            required: true,
        },
        href: {
            type: String,
            default: '/',
            required: true,
        },
        title: {
            type: String,
            default: 'Text',
            required: true,
        }
    }
}
</script>
