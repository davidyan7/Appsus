export default {
    template: `
    <section class=keep-add-type>
        <span class="addTxt" @click="typechange"></span>
        <span class="addImg" @click="typechange"></span>
        <span class="addVideo" @click="typechange"></span>
        <span class="addTodo" @click="typechange"></span>
        <span class="addAudio" @click="typechange"></span>
        <span class="addMap" @click="typechange"></span>
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