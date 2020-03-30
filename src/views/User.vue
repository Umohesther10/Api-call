<template>
  <div class="user">
    <b-container>
      <div class="header">
        <h1 style="text-align: center">List of Names</h1>
        <div style="text-align: center">
          <input type="text" v-model="name" class="input" />

          <button @click="update()" class="button">Add</button>
        </div>
      </div>
      <div style="margin-top: 10px">
        <b-list-group>
          <b-list-group-item v-for="user in allUsers" :key="user.id">
            {{user.name}}
            <span>
              <div style="float: right">
                <b-button @click="deleteUser(user)">Delete</b-button>
              </div>
            </span>
          </b-list-group-item>
        </b-list-group>
      </div>

      <!-- <ul>
        <li v-for="user in allUsers" :key="user.id">
          {{user.name}}
          <button @click="deleteUser(user)">Delete</button>
        </li>
      </ul>-->
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
      name: ""
    };
  },
  async created() {
    let fetchUsers = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    //  this.$store.commit("addUsers", user);
    this.$store.commit("setUsers", fetchUsers.data);
    console.log(this.$store.state.users);
  },
  computed: {
    allUsers() {
      return this.$store.state.users;
    }
  },
  methods: {
    update() {
      let user = {
        name: this.name
      };
      if (this.name == null) {
        alert("Enter a valid name!!!");
      }
      this.name = "";
      this.$store.commit("addUsers", user);
    },

    deleteUser(user) {
      let users = this.$store.state.users.filter(item => {
        return item.name != user.name;
      });
      this.$store.commit("delUsers", users);
    }
  }
};
</script>
<style>
.header {
  margin: 0 auto;
  background-color: grey;
  height: 130px;
}
.input {
  padding: 10px;
  /* margin-left: 30px; */
  width: 80%;
}
.button {
  padding: 10px;
  background-color: grey;
  width: 15%;
}
</style>