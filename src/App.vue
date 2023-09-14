<template>
  <div class="wrapper">
    <Header />
    <Sidebar />
    <Content />
    <Footer />
  </div>
</template>


<script>
import Vue from "vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";


export default Vue.extend({
  name: "App",
  components: {
    Header,
    Sidebar,
    Footer,
    Content,
  },
});
</script>
