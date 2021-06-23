export default {
    template: `
    <section class="book-filter">
        <select v-model="filterBy" @change="filter">
            <option value="">All</option>
            <option value="read">Read</option>
            <option value="unread">Unread </option>
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