export default {
    template: `
    <section class="mail-search">
        <input v-model="searchBy" type="text" @input="search" placeholder="Search...">
    </section>
    `,
    data() {
        return {
            searchBy: ''
        };
    },
    methods: {
        search() {
            this.$emit('search', this.searchBy);
        }
    }
};