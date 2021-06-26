export default {
    props: ['color'],
    template: `
    <section class="add-video">
            <input class="color-effect" type="text" v-model="urlToEdit" @input="editUrl" placeholder="Enter video url" :style="bgcColor">
            <input class="color-effect" type="text" v-model="note.info.title" @input="logNote" placeholder="Enter description" :style="bgcColor">
    </section>
`,
    watch: {
        color: function (val) {
            this.note.style.backgroundColor = this.color = val
            this.logNote()
        }
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
            urlToEdit: null
        }
    },
    methods: {
        logNote() {
            this.$emit('logNote', this.note)
        },
        editUrl() {
            const embeded = this.urlToEdit.split('=')
            const fixedUrl = `https://www.youtube.com/embed/${embeded[1]}`
            this.note.info.url = fixedUrl
            console.log(fixedUrl);
            this.logNote()
        }
    },
    computed: {
        bgcColor() {
            return `background-color: ${this.note.style.backgroundColor};`
        },
    }
}