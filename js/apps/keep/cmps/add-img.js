export default {
    props: ['color'],
    components: {},
    template: `
    <section class="add-img">
            <input class="color-effect" type="text" v-model="note.info.url" @input="logNote" placeholder="Enter image url" :style="bgcColor">
            <input class="color-effect" type="text" v-model="note.info.title" @input="logNote" placeholder="Enter description" :style="bgcColor">
    </section>
`,
    watch: {
        color: function(val) {
            console.log(val);
            this.note.style.backgroundColor = this.color = val
            this.logNote()
        }
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
                    backgroundColor: "#fff"
                }
            },
        }
    },
    methods: {
        logNote() {
            // console.log(this.note.info.title);
            // console.log(this.note.info.txt);
            this.$emit('logNote', this.note)
        }
    },
    computed: {
        bgcColor() {
            return `background-color: ${this.note.style.backgroundColor};`
        },
    }
}