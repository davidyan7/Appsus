export default {
    // props: ['note'],
    components: {
    },
    template: `
        <!-- <section class="keep-add">
            <button class="pin-textarea">📌</button>
            <textarea id="textArea" name="text-area" v-model="noteTxt.info.txt" placeholder="Take a note" @blur="logNote" :style="'background:' + bgcColor">    
            </textarea>
            <color-picker :colors=colors @colorChange="changeTextareaBgc" ></color-picker>
        </section> -->
        <section class="add-txt">
            <!-- <div class="add-note-container" tabindex="0" :style="'background:' + bgcColor"> -->
            
                <!-- <button class="pin-textarea">📌</button> -->
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
                type: "noteTxt",
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
            console.log(this.note.info.title);
            console.log(this.note.info.txt);
            this.$emit('logNote', this.note)
        }
    }
}