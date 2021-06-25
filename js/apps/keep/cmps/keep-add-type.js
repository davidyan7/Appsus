export default {
    template: `
    <section class=keep-add-type>
        <span class="addTxt" @click="typechange">text</span>
        <span class="addImg" @click="typechange">image</span>
        <span class="addVideo" @click="typechange">video</span>
        <span class="addTodo" @click="typechange">todo</span>
    </section>
    `,
    methods: {
        typechange(e) {
            var value = e.target.className
            console.log(value);
            // console.log(e);
            this.$emit('typechange', value)
        }
    }
}