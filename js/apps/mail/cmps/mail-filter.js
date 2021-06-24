export default {
    template: `
    <section class="mail-filter">
       <button class="basic-btn" @click="filter">{{ReadUnread}}</button>
    </section>
    `,
    data() {
        return {
            filterBy: '',
            isRead: true
        };
    },
    computed: {
        ReadUnread() {
            if (this.isRead) return 'Read/unread'
            else return 'read/Unread'
        }
    },
    methods: {
        filter() {
            if (this.isRead) this.filterBy = 'read'
            else this.filterBy = null

            this.$emit('filter', this.filterBy);
            this.isRead = !this.isRead
        }
    }
};