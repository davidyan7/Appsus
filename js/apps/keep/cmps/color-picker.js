export default {
    props:['colors'],
    template: `
        <section class="color-picker">
            <div class="color" v-for="(color, idx) in colors" :style="'background:' + color" @click="logColor(color)">
            </div>
        </section>
    `,
    created() {

    },
    data() {
        return {
        }
    },
    methods: {
        logColor(color) {
            console.log(color);
            this.$emit('colorChange', color)
        }
    }
}