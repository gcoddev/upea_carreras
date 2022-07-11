<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    async getMenuConv() {
      try {
        let res = await this.axios.get(
          process.env.VUE_APP_ROOT_API + "/api/Tipoconvocatorias"
        );
        let filterConv = [];
        res.data.forEach((element) => {
          if (element.tipo_conv_comun_estado == "1") {
            filterConv.push(element);
          }
        });
        this.$store.state.MenuConv = filterConv;
      } catch (error) {
        console.log("error getMenuConv");
        console.log(error);
      }
    },
    async getMenuCur() {
      try {
        let res = await this.axios.get(
          process.env.VUE_APP_ROOT_API + "/api/TipoCurso"
        );
        let filterCur = [];
        res.data.forEach((element) => {
          if (element.tipo_conv_curso_estado == "1") {
            filterCur.push(element);
          }
        });
        this.$store.state.MenuCur = filterCur;
      } catch (error) {
        console.log("error getMenuConv");
        console.log(error);
      }
    },
  },
  created() {
    this.getMenuConv();
    this.getMenuCur();
  },
};
</script>
