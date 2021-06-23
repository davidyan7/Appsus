export default {
    template: `
    <section class="book-search">
        <label>Search:</label>
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