export default {
    template: `
        <section class="keep-add">
            <button class="pin-textarea">📌</button>
            <textarea id="textArea" name="text-area" v-model="noteTxt.info.txt" rows="2" cols="50" placeholder="Take a note" @blur="logNote">  
                
            </textarea>
        </section>
    `,
    created() {

    },
    data() {
        return {
            noteTxt:    {
                type: "NoteTxt",
                isPinned: false,
                info: {
                    title: null,
                    txt: null
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

        }
    }
    
}