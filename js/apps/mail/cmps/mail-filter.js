export default {
    template: `
    <section class="book-filter">
        <select v-model="filterBy" @change="log">
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
        log() {
            console.log(this.filterBy);
        }
    }
};