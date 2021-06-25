export default {
    // props: ['note'],
    components: {},
    template: `
        <section class="add-todo">
                <input type="text" v-model="note.info.title" @input="logNote" placeholder="Title">
                <textarea type="text" v-model="note.info.txt" @input="logNote" placeholder="Take a note"></textarea>
            </div>
        </section>
    `,
    created() {

    },
    data() {
        return {
            note: {
                type: "noteVideo",
                info: {
                    url: null,
                    title: null
                },
                style: {
                    backgroundColor: "#fff"
                }
            },
        }
    },
    methods: {
        logNote() {
            console.log(this.note.info.title);
            console.log(this.note.info.txt);
            this.$emit('logNote', this.note)
        }
    }
}