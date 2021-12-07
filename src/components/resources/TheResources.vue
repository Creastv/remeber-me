<template>
  <cart-base>
    <the-button
      :mode="setActiveButton('stored-resources')"
      @click="setSelectedTab('stored-resources')"
    >
      Resources
    </the-button>
    <the-button
      :mode="setActiveButton('add-resorces')"
      @click="setSelectedTab('add-resorces')"
    >
      Add resource
    </the-button>
  </cart-base>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResorces from "./AddResources.vue";
export default {
  components: {
    StoredResources,
    AddResorces,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      re: [],
    };
  },
  provide() {
    return {
      resources: this.re,
    };
  },

  methods: {
    getResources() {
      fetch(
        "https://rememberme-892e7-default-rtdb.europe-west1.firebasedatabase.app/resources.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const res = [];
          for (const id in data) {
            this.re.unshift({
              id: id,
              title: data[id].title,
              desc: data[id].desc,
              link: data[id].link,
            });
          }
          this.re = res;
        });
    },
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    setActiveButton(button) {
      return this.selectedTab === button ? "btn-secundary" : "btn-primary";
    },
  },
  mounted() {
    this.getResources();
  },
};
</script>
