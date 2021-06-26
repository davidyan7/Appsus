import appHeader from '../cmps/app-header.js'

export default {
    template: `
   <section class="home-page">
       <img class=home-img src="./img/bc.jpg" alt="">
       
       <nav  class="main-nav-bar">
               <h1>Welcome To Appsus</h1>
            <router-link to="/mail" ><img class="main-nav-img" src="img/gmail.png"></router-link> 
            <router-link to="/keep" ><img class="main-nav-img" src="img/keep.png" alt=""></router-link> 
</nav>
   </section>
    `,

    computed: {



    },
    components: {
        appHeader
    }
};