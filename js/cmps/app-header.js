export default {
    template: `
    <header class="app-header">
    <div @click="setMenuOpen" class="menu-icon">☰</div>
        <!-- <img   src="../../img/menu-icon.png" alt=""> -->
        <transition name="fade">
        <nav v-if="isOpen" @click="setMenuOpen" class="nav-bar-header">
            <router-link class="home-btn" to="/" active-class="active-link" exact> <img src="img/home.png"></router-link> 
            <router-link to="/mail" ><img src="img/gmail.png"></router-link> 
            <router-link to="/keep" ><img src="img/keep.png" alt=""></router-link> 
        </nav>
        </transition>
        <div class="open-screen-header" :class="isScrOpen" @click="closeMenu"></div>
    </header>
    `,
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        setMenuOpen() {
            this.isOpen = !this.isOpen
        },
        closeMenu() {
            this.isOpen = false
        },

    },
    computed: {
        isScrOpen() {
            var isScreenOpen = this.isOpen
            return { open: isScreenOpen }
        }
    }
};