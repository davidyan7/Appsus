export default {
    template: `
    <header class="app-header">
        <nav class="nav-bar">
            <router-link to="/" active-class="active-link" exact>Home</router-link> |
            <router-link to="/mail" >Mail</router-link> |
            <router-link to="/keep" >Keep</router-link> 
        </nav>
    </header>
    `,
};