<template>
    <div class="navbar-container is-shadow-2 is-fixed is-full">
        <div class="container">
            <div class="is-navbar-container navbar">
                <div class="is-brand">
                    <b class="is-logo">
                        <router-link class="text-decoration-none" :to="{name: 'about'}">Mehedi</router-link>
                    </b>
                </div>
                <div class="is-navbar">
                    <nav>
                        <ul>
                            <router-link tag="li" :to="{name: 'about'}" exact>
                                <a>About</a>
                            </router-link>
                            <router-link tag="li" :to="{name: 'blog'}">
                                <a>Blog</a>
                            </router-link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #app{
        margin-top: 110px;
    }
    .navbar-container{
        background-color: #fff;
        .is-logo{
            text-transform: uppercase;
            font-size: 2em;
        }
        .navbar{
            padding: 1.5em;
            .is-navbar .is-active a {
                color: #000;
                text-decoration: none;
                border-bottom: 2px solid red;
                margin-bottom: -2px;
            }
        }
    }
</style>