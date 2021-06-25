export default {
    template: `
    <section class="mail-filter">
        <select v-model="filterBy" @change="setOption" >
            <option selected value="all">All</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
        </select>
       <!-- <button class="basic-btn" @click="filter">{{ReadUnread}}</button>
       <button class="basic-btn" @click="dateSort">Date</button>
       <button class="basic-btn" @click="titleSort">Title</button> -->
    </section>
    `,
    data() {
        return {
            filterBy: null,
            isRead: true
        };
    },
    created() {
        this.filterBy = 'All'
    },
    computed: {
        ReadUnread() {
            if (this.isRead) return 'READ/unread'
            else return 'read/UNREAD'
        }
    },
    methods: {
        setOption() {
            if (this.filterBy === 'all') this.notFilter()
            if (this.filterBy === 'read') this.filter()
            if (this.filterBy === 'unread') this.filter()
            if (this.filterBy === 'date') this.dateSort()
            if (this.filterBy === 'title') this.titleSort()

        },
        filter() {
            // if (this.isRead) this.filterBy = 'read'
            // else this.filterBy = 'unread'

            this.$emit('filter', this.filterBy);
            // this.isRead = !this.isRead
        },
        notFilter() {
            this.$emit('notFilter');
        },
        dateSort() {
            this.$emit('dateSort');
        },
        titleSort() {
            this.$emit('titleSort');
        }
    }
};