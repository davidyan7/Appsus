import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['color'],
    components: {},
    template: `
    <section class="add-audio">
            <input class="color-effect" type="text" v-model="note.info.url" @input="logNote" placeholder="Enter audio url" :style="bgcColor">
            <input class="color-effect" type="text" v-model="note.info.title" @input="logNote" placeholder="Enter description" :style="bgcColor">
    </section>
`,
    created() {
        eventBus.$on('noteAdded', this.clearFields)
    },
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
                type: "noteAudio",
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
        },
        clearFields() {
            this.note.info.url = ''
            this.note.info.title = ''
        }
    },
    computed: {
        bgcColor() {
            return `background-color: ${this.note.style.backgroundColor};`
        },
    }
}