<template>
  <div>
    <h3>Hello from Lucas !!</h3>
    <q-banner rounded class="bg-primary text-white">
      We can't find your saved recipes until you sign in.

      <template v-slot:action>
        <q-btn flat color="white" label="Continue as a Guest" />
        <q-btn flat color="white" label="Sign in" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md q-gutter-md">
    <div>
      <q-chip icon="event">Add to calendar</q-chip>
      <q-chip icon="bookmark">Bookmark</q-chip>
      <q-chip icon="alarm" label="Set alarm" />
      <q-chip class="glossy" icon="directions">Get directions</q-chip>
    </div>
    <div>
      <q-chip color="primary" text-color="white" icon="event">
        Add to calendar
      </q-chip>
      <q-chip color="teal" text-color="white" icon="bookmark">
        Bookmark
      </q-chip>
      <q-chip
        class="glossy"
        color="orange"
        text-color="white"
        icon-right="star"
      >
        Star
      </q-chip>
      <q-chip color="red" text-color="white" icon="alarm" label="Set alarm" />
      <q-chip color="deep-orange" text-color="white" icon="directions">
        Get directions
      </q-chip>
      <q-chip>
        <q-avatar icon="bookmark" color="red" text-color="white" />
        Bookmark
      </q-chip>
      <q-chip>
        <q-avatar color="red" text-color="white">50</q-avatar>
        Emails
      </q-chip>
      <q-chip>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
        </q-avatar>
        John
      </q-chip>
    </div>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="mail" label="On Left" />
    <q-btn color="secondary" icon-right="mail" label="On Right" />
    <q-btn
      color="red"
      icon="mail"
      icon-right="send"
      label="On Left and Right"
    />
    <br />
    <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
