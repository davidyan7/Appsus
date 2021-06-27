export default {
    template: `
    <section class=keep-add-type>
        <button class="addTxt-btn"><span class="addTxt" @click="typechange"></span></button> 
        <button class="addImg" @click="typechange"></button>
        <button class="addVideo" @click="typechange"></button>
        <button class="addTodo" @click="typechange"></button>
        <button class="addAudio" @click="typechange"></button>
        <button class="addMap" @click="typechange"></button>
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