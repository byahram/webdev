<template>
  <div>
    <h1>All Users({{ count }})</h1>
    <h1>Seoul Users: {{ seouls }}({{ percent }}%)</h1>
    <v-list two-line v-if="allUsers">
      <v-list-tile v-for="(user, index) in allUsers" :key="index" avatar>
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          <v-list-tile-sub-title>
            id:#{{ index }} / {{ user.address }} 거주
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <div v-else>No users available.</div>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["allUsers"]),
    // ...mapGetters(["allUsersCount", "countOfSeoul", "percentOfSeoul"]),
    ...mapGetters({
      count: "allUsersCount",
      seouls: "countOfSeoul",
      percent: "percentOfSeoul",
    }),
  },
  mounted() {
    EventBus.$on("signUp", (users) => {
      this.$store.state.allUsers.push(users);
    });
  },
};
</script>
