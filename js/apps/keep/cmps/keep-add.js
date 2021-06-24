import colorPicker from "./color-picker.js";


export default {
    props:['colors'],
    components: {
        colorPicker
    },
    template: `
        <section class="keep-add">
            <button class="pin-textarea">📌</button>
            <textarea id="textArea" name="text-area" v-model="noteTxt.info.txt" placeholder="Take a note" @blur="logNote" :style="'background:' + bgcColor">    
            </textarea>
            <color-picker :colors=colors @colorChange="changeTextareaBgc" ></color-picker>
        </section>
    `,
    created() {

    },
    data() {
        return {
            noteTxt: {
                type: "NoteTxt",
                isPinned: false,
                info: {
                    title: null,
                    txt: null
                },
                style: {
                    backgroundColor: null
                }
            },
        }
    },
    methods: {
        logNote() {
            if (!this.noteTxt.info.txt) return
            this.$emit('logNote', this.noteTxt);
            this.noteTxt = {
                type: "NoteTxt",
                isPinned: false,
                info: {
                    title: null,
                    txt: null
                }
            }

        },
        changeTextareaBgc(color) {
            console.log('change color');
            this.noteTxt.style.backgroundColor = color
        }

    },
    computed: {
        bgcColor() {
            return this.noteTxt.style.backgroundColor
        }
    }

}