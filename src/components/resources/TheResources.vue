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
      resources: [
        {
          id: 1,
          title: "laborum nesciunt quibusdam?",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo atque quis itaque repellat odio perferendis veniam iusto alias voluptatibus, id exercitationem totam reiciendis quo reprehenderit aperiam recusandae laborum nesciunt quibusdam?",
          link: "https://google.es",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    setActiveButton(button) {
      return this.selectedTab === button ? "btn-secundary" : "btn-primary";
    },
    addResource(id, title, desc, link) {
      this.resources.unshift({
        id: id,
        title: title,
        desc: desc,
        link: link,
      });
      this.selectedTab = 'stored-resources'
    },
  },
};
</script>
