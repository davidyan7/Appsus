export default {
    // props: ['note'],
    components: {},
    template: `
        <section class="add-img">
                <input type="text" v-model="note.info.title" @input="logNote" placeholder="Title">
                <textarea type="text" v-model="note.info.txt" @input="logNote" placeholder="Enter image"></textarea>
            </div>
        </section>
    `,
    created() {

    },
    data() {
        return {
            note: {

                type: "noteImg",
                info: {
                    url: null,
                    title: null
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
        }
    },
    methods: {
        logNote() {
            this.$emit('logNote', this.note)
        }
    }
}