export default {
    template: `
    <section class="book-filter">
        <select v-model="filterBy" @change="filter">
            <option value="">All</option>
            <option value="true">Read</option>
            <option value="false">Unread </option>
        </select>
    </section>
    `,
    data() {
        return {
            filterBy: '',
        };
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy);
        }
    }
};