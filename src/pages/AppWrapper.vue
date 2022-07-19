<template>
  <div>
    <HeaderCustom />
    <router-view />
    <FooterCustom />
  </div>
</template>

<script>
import HeaderCustom from "@/components/HeaderCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import { mapState } from "vuex";

export default {
  name: "appWrapper",
  components: {
    HeaderCustom,
    FooterCustom,
  },
  computed: { ...mapState(["url_api", "Institucion", "MenuConv", "MenuCur"]) },
  methods: {
    async getMenuConv() {
      try {
        let res = await this.axios.get("/api/Tipoconvocatorias");
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
        let res = await this.axios.get("/api/TipoCurso");
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
    async getInstitucion() {
      try {
        let res = await this.axios.get(
          "/api/InstitucionUPEA/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.$store.state.Institucion = res.data.Descripcion;
        let img =
          this.url_api +
          "/InstitucionUpea/Portada/" +
          res.data.Descripcion.portada[0].portada_imagen;
        document
          .querySelector(".banner-img")
          .setAttribute("style", 'background-image: url("' + img + '");');
        // console.log(res.data);
      } catch (error) {
        console.log("error getnstitucion");
        console.log(error);
      }
    },
    async getColors() {
      try {
        let res = await this.axios.get(
          "/api/ColorInstitucionAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.$store.state.Colors = res.data[0];

        document.documentElement.style.setProperty(
          "--main-color",
          res.data[0].color_primario
        );
        document.documentElement.style.setProperty(
          "--main-color-2",
          res.data[0].color_secundario
        );
        document.documentElement.style.setProperty(
          "--main-color-3",
          res.data[0].color_terciario
        );
      } catch (error) {
        console.log("error getColors");
        console.log(error);
      }
    },
    createdComponent() {
      this.getMenuConv();
      this.getMenuCur();
      this.getInstitucion();
      this.getColors();
    },
  },
  created() {
    if (this.$store.state.status) {
      this.createdComponent();
      this.$store.state.status = false;
    }
  },
  mounted() {
    console.log("mounted AppWrapper");
  },
};
</script>