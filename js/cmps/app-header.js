export default {
    template: `
    <header class="app-header">
        <img @click="setMenuOpen" calss="menu-icon" src="../../img/menu-icon.png" alt="">
        <nav v-if="isOpen" class="nav-bar-header">
            <router-link to="/" active-class="active-link" exact>Home</router-link> |
            <router-link to="/mail" >Mail</router-link> |
            <router-link to="/keep" >Keep</router-link> 
        </nav>
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
        }
    }
};