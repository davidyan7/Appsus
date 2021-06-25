export default {
    template: `
    <section class="mail-filter">
       <button class="basic-btn" @click="filter">{{ReadUnread}}</button>
       <button class="basic-btn" @click="dateSort">Date</button>
       <button class="basic-btn" @click="titleSort">Title</button>
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
            if (this.isRead) return 'READ/unread'
            else return 'read/UNREAD'
        }
    },
    methods: {
        filter() {
            if (this.isRead) this.filterBy = 'read'
            else this.filterBy = null

            this.$emit('filter', this.filterBy);
            this.isRead = !this.isRead
        },
        dateSort() {
            this.$emit('dateSort');
        },
        titleSort() {
            this.$emit('titleSort');
        }
    }
};