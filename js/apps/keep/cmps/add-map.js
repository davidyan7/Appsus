export default {
    props: ['color'],
    components: {},
    template: `
    <section class="add-map">
            <input class="color-effect" type="text" v-model="urlToEdit" @input="editUrl" placeholder="Enter image url" :style="bgcColor">
            <input class="color-effect" type="text" v-model="note.info.title" @input="logNote" placeholder="Enter description" :style="bgcColor">
    </section>
`,
    watch: {
        color: function(val) {
            console.log(val);
            this.note.style.backgroundColor = this.color = val
        }
    },
    data() {
        return {
            note: {
                type: "noteMap",
                info: {
                    url: null,
                    title: null
                },
                style: {
                    backgroundColor: "#fff"
                }
            },
            urlToEdit: null
        }
    },
    methods: {
        logNote() {
            // console.log(this.note.info.title);
            // console.log(this.note.info.txt);
            this.$emit('logNote', this.note)
        },
        editUrl() {
            const embeded = this.urlToEdit.split('@')

            console.log(embeded);
            // this.logNote()
        }
    },
    computed: {
        bgcColor() {
            return `background-color: ${this.note.style.backgroundColor};`
        },
    }
}