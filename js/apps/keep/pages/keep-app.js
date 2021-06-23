import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";

export default {
    components: {
        keepList,
        keepAdd
    },
    template: `
    <header class="keep-app">
        <h1>Keep-App</h1>
        <keep-add></keep-add>
        <keep-list></keep-list>
        <nav class="nav-bar">
            <!-- <router-link to="/" active-class="active-link" exact>Home</router-link> |
            <router-link to="/mail" >Mail</router-link> |
            <router-link to="/keep" >Keep</router-link>  -->
        </nav>
    </header>
    `,
};