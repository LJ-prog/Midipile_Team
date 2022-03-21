<template>
  <q-page padding>
    <div class="column justify-center items-center">
      <h3>{{ people.name }}</h3>
      <q-card class="my-card">
        <img :src="people.img" alt="" @click="alert = true" />
        <q-card-section>
          <div class="text-h6">{{ people.name }}</div>
          <div class="text-subtitle2">{{ people.nickname }}</div>
        </q-card-section>
        <q-card-section>
          <q-chip
            clickable
            @click="onClick"
            color="teal"
            :key="occupation"
            text-color="white"
            icon="bookmark"
          >
            {{ people.occupation }}
          </q-chip>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Birthday Info</div>
        </q-card-section>
        <q-card-section>{{ people.birthday }}</q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { QSpinnerCube } from "quasar";
export default {
  async created() {
    this.$q.loading.show({
      message: "Loading",
      spinnerColor: "primary",
      spinner: QSpinnerCube,
    });
    let url = `http://localhost:8888/people/`;
    const people = await this.$axios.get(url); // relier const au fichier json.
    //this.$q.loading.hide();
    setTimeout(() => {
      this.$q.loading.hide();
    }, 400);
    if (this.$route.params.id == 1) {
      this.people = people.data[0];
    }
    if (this.$route.params.id == 2) {
      this.people = people.data[1];
    }
    // if (this.$route.params.id == 4) {
    //   this.people = people.data[2];
    // }
    if (this.$route.params.id == 4) {
    }
    console.log(people.data);
    // console.log(character.data);
    // this.character = character.data[0];
  },
  data() {
    return {
      people: "",
      alert: false,

      //character: "",
    };
  },
  // name: 'PageName',
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 20%;
}
</style>
