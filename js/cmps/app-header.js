export default {
    template: `
    <header class="app-header">
    <div @click="setMenuOpen" class="menu-icon">☰</div>
        <!-- <img   src="../../img/menu-icon.png" alt=""> -->
        <nav v-if="isOpen" @click="setMenuOpen" class="nav-bar-header">
            <router-link to="/" active-class="active-link" exact>Home</router-link> |
            <router-link to="/mail" >Mail</router-link> |
            <router-link to="/keep" >Keep</router-link> 
        </nav>
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