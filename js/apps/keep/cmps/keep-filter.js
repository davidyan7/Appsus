export default {
    template: `
    <section class="book-filter">
        <form @submit.prevent="filter">
        <label>Search:</label>
        <input v-model="filterBy.title" type="text"  placeholder="Search...">
        <!-- <label>From price: </label>
        <input v-model.number="filterBy.fromPrice" type="number" min="0" placeholder="From price"> -->
        <!-- <label>To price: </label>
        <input v-model.number="filterBy.toPrice" type="number"  min="0" placeholder="To price"> -->
        <button>Search</button>
    </form>
    <select v-model="filterBy.type" @change="setOption" >
        <option value="all">All</option>
        <option value="noteTxt">Text</option>
        <option value="noteImg">Img</option>
        <option value="noteVideo">Video</option>
        <option value="noteTodo">Todo</option>
        <option value="noteAudio">Audio</option>
       </select>
</section>
    `,
    created() {

    },
    data() {
        return {
            filterBy: {
                title: '',
                type: ''
            }
        }
    },
    methods: {
        filter() {
            // make a copy or deep cooy for the obj
            this.$emit('filter', {...this.filterBy });
            // this.$emit('filter', this.filterBy);
        },
        setOption() {
            this.$emit('setOption', {...this.filterBy });
        }
    },
    computed: {

    }
}