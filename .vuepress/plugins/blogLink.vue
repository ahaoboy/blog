<template>
  <div>
    <div v-for="v,k in items">{{ k }} ---> {{ v }}</div>
    <div v-if="Object.keys(items).length === 0">no link</div>
  </div>
</template>

<script>
export default {
  data() {
    return { items: {} };
  },
  mounted() {
    this.items = this.$frontmatter._publish_blog_ || {};
    console.log("mounted", this.items);
    console.log("mounted", Object.keys(this.items));
  },
};
</script>

<style></style>
