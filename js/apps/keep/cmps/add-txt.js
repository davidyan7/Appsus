import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['color'],
    components: {
    },
    template: `
        <section class="add-txt">
                <input class="color-effect" type="title" v-model="note.info.title" @input="logNote" placeholder="Title" :style="bgcColor">
                <textarea class="color-effect" type="text" v-model="note.info.txt" @input="logNote" placeholder="Take a note" :style="bgcColor"></textarea>
            </div>
        </section>
    `,
    created() {
        console.log(this.color);
        this.note.backgroundColor = this.color
        eventBus.$on('noteAdded', this.clearFields)
    },
    watch: {
            color: function (val) {
                console.log(val);
                this.note.style.backgroundColor = this.color = val
                this.logNote()
            }
        },
        data() {
            return {
                note: {
                    type: "noteTxt",
                    isPinned: false,
                    info: {
                        title: null,
                        txt: null
                    },
                    style: {
                        backgroundColor: '#fff'
                    }
                },
            }
        },
        methods: {
            logNote() {
                console.log(this.note.info.title);
                console.log(this.note.info.txt);
                this.$emit('logNote', this.note)
            },
            clearFields() {
                this.note.info.title = ''
                this.note.info.txt = ''
            }
        },
        computed: {
            bgcColor() {
                return `background-color: ${this.note.style.backgroundColor};`
            },
        }
    }