export default {
    props: ['colors'],
    template: `
        <section class="color-picker">

        <div v-if="isShown" class="colors-container" tabindex="0" @blur="showColors">
        <!-- <transition name="fade"> -->
            <span class="color" v-for="(color, idx) in colors" :style="'background:' + color" @click="logColor(color)" :key="idx">
            </span>
        <!-- </transition> -->
        </div>
                <button class=colors-icon @click="showColors"></button>
        </section>
    `,
    created() {

    },
    data() {
        return {
            isColorsShown: false
        }
    },
    methods: {
        logColor(color) {
            console.log(color);
            this.$emit('colorChange', color)
        },
        showColors() {
            this.isColorsShown = !this.isColorsShown
        }
        
    },
    computed: {
        isShown() {
            return this.isColorsShown
        },
        focusInput() {   
        },
    },
}