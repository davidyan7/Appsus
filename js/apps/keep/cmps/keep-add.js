import colorPicker from "./color-picker.js";


export default {
    props: ['colors'],
    components: {
        colorPicker
    },
    template: `
        <!-- <section class="keep-add">
            <button class="pin-textarea">📌</button>
            <textarea id="textArea" name="text-area" v-model="noteTxt.info.txt" placeholder="Take a note" @blur="logNote" :style="'background:' + bgcColor">    
            </textarea>
            <color-picker :colors=colors @colorChange="changeTextareaBgc" ></color-picker>
        </section> -->
        <section class="keep-add">
            <div class="add-note-container" tabindex="0" @click="onClickField":style="'background:' + bgcColor">
                <!-- <button class="pin-textarea">📌</button>
                <p class="title" contentEditable placeholder="enter text" @input="onInput"  @click="onClickField" :class="isTitlePlaceholder"></p>
                <div class="content" contentEditable="true" data-placeholder="hi" @input="onInput" @click="onClickField" :class="isContentPlaceholder"></div> -->
                <color-picker :colors=colors @colorChange="changeTextareaBgc" ></color-picker>
            </div>
        </section>
    `,
    created() {

    },
    data() {
        return {
            noteTxt: {
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
            isTitleClicked: false,
            isContentClicked: false,
        }
    },
    methods: {
        logNote() {
            console.log('working');
            this.$emit('logNote', this.noteTxt);
        },
        changeTextareaBgc(color) {
            console.log('change color');
            this.noteTxt.style.backgroundColor = color
        },
        onInput(ev) {
            // console.log(ev.target.className);
            if (ev.target.className.includes('title')) {
                this.noteTxt.info.title = ev.target.innerText;
            }
            if (ev.target.className.includes('content')) {
                this.noteTxt.info.txt = ev.target.innerText;
            }
            this.logNote()
        },
        onClickField(ev) {
            // console.log(ev);
            if (ev.target.className.includes('title')) this.isTitleClicked = true
            if (ev.target.className.includes('content')) this.isContentClicked = true
            this.$emit('openScreen')
        }

    },
    computed: {
        bgcColor() {
            return this.noteTxt.style.backgroundColor
        },
        isTitlePlaceholder() {
            var isClicked = this.isTitleClicked
            return { clear: isClicked}
        },
        isContentPlaceholder() {
            var isClicked = this.isContentClicked
            return { clear: isClicked }
        }
    }

}