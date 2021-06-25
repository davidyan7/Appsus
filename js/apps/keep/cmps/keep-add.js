import colorPicker from "./color-picker.js";
import addTxt from "./add-txt.js";
import addImg from "./add-img.js";
import addVideo from "./add-video.js";
import addTodo from "./add-todo.js";
import addAudio from "./add-audio.js";
import keepAddType from "./keep-add-type.js";

export default {
    props: ['colors'],
    components: {
        colorPicker,
        keepAddType,
        addTxt,
        addImg,
        addVideo,
        addTodo,
        addAudio
    },
    template: `
        <!-- <section class="keep-add">
            <button class="pin-textarea">📌</button>
            <textarea id="textArea" name="text-area" v-model="noteTxt.info.txt" placeholder="Take a note" @blur="logNote" :style="'background:' + bgcColor">    
            </textarea>
            <color-picker :colors=colors @colorChange="changeTextareaBgc" ></color-picker>
        </section> -->
        <section class="keep-add">
            <!-- <div class="add-note-container" tabindex="0" @click="onClickField":style="'background:' + bgcColor"> -->
            <div class="add-note-container" tabindex="0" @click="onClickField" :style="bgcColor">
                <!-- <button class="pin-textarea">📌</button>
                <p class="title" contentEditable placeholder="enter text" @input="onInput"  @click="onClickField" :class="isTitlePlaceholder"></p>
                <div class="content" contentEditable="true" data-placeholder="hi" @input="onInput" @click="onClickField" :class="isContentPlaceholder"></div> -->
                <component :is="cmpType" @logNote="logNote" :color="currColor"></component>
                <color-picker :colors=colors @colorChange="changeColor" ></color-picker>
                <keep-add-type class="keep-add-type" @typechange="changeType"></keep-add-type>
            </div>
        </section>
    `,
    created() {

    },
    data() {
        return {
            // noteTxt: {
            //     type: "noteTxt",
            //     isPinned: false,
            //     info: {
            //         title: null,
            //         txt: null
            //     },
            //     style: {
            //         backgroundColor: null
            //     }
            // },
            note: null,
            isTitleClicked: false,
            isContentClicked: false,
            cmpType: 'addTxt',
            currColor: '#fff'
        }
    },
    methods: {
        // original
        // logNote() {
        //     console.log('working');
        //     this.$emit('logNote', this.noteTxt);
        // },
        logNote(note) {
            console.log('working');
            this.$emit('logNote', note);
        },
        changeColor(color) {
            console.log('change color');
            this.currColor = color
                // this.noteTxt.style.backgroundColor = color
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
            // if (ev.target.className.includes('title')) this.isTitleClicked = true
            // if (ev.target.className.includes('content')) this.isContentClicked = true
            this.$emit('openScreen')
        },
        saveNoteToData(note) {
            this.note = note
        },
        changeType(type) {
            this.cmpType = type
        }

    },
    computed: {

        bgcColor() {
            return `background-color: ${this.currColor};`
                // return this.noteTxt.style.backgroundColor
        },
        // isTitlePlaceholder() {
        //     var isClicked = this.isTitleClicked
        //     return { clear: isClicked}
        // },
        // isContentPlaceholder() {
        //     var isClicked = this.isContentClicked
        //     return { clear: isClicked }
        // }
    }

}