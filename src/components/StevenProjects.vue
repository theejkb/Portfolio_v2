<template>
<div class="projects">
    <div class="projects-section">
        <div class="container d-flex justify-content-around flex-wrap">
            <div class="card" v-for="project in projects" :key="project.title">
                <img class="card-img-top" v-if="project.image" :src="getImgUrl(project.image)" alt="Card image cap" />
                <img class="card-img-top" v-else src="../assets/img/vuejs.png" alt="no image for this project" />
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <br />
                    <div class="img-pin-display" v-for="(stack, idx) in project.stack" :key="idx">
                        <a v-if="isEven(idx)" class="tooltips" :data="stack">
                            <img class="card-img-pin grow-rotate" :src="getImgUrlIcon(stack)" />
                        </a>
                        <a v-else class="tooltips" :data="stack">
                            <img class="card-img-pin grow-rotate2" :src="getImgUrlIcon(stack)" />
                        </a>
                    </div>
                    <br />
                    <br />
                    <v-btn v-if="project.link" primary color="black"><a :href="project.link" target="_blank" class="visit">
                            Visiter</a></v-btn>
                    <br />
                    <br />
                </div>
                <!-- <v-btn
            class="ma-2 seemorebtn"
            @click="showModal = true"
            outlined
            color="indigo"
          >Découvrir ce projet</v-btn>-->
                <modal v-if="showModal">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper">
                                <div class="modal-container">
                                    <div class="modal-header">
                                        <p>{{ project.title }}</p>
                                    </div>

                                    <div class="modal-body">
                                        <slot name="body">{{ project.description }}</slot>
                                    </div>

                                    <div class="modal-footer">
                                        <slot name="footer">
                                            default footer
                                            <button class="modal-default-button" @click="showModal = false">
                                                OK
                                            </button>
                                        </slot>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </modal>
            </div>
            <!-- use the modal component, pass in the prop -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "StevenProjects",
    props: {},
    data: () => ({
        showModal: false,
        projects: [{
                title: "Kosmood",
                image: "kosmood_bg.png",
                apercu: "",
                description: "Création d'un site web générateur de moodboard pour les personnes en manque d'inspiration graphique. Projet YDAYS de B3 en équipe de 5 développeur et 3 graphistes.",
                link: "https://www.kosmood.com/",
                stack: ["vuejs", "symfony", "css", "html"],
            },
            {
                title: "YWYMobilier",
                image: "ywymobilier.png",
                description: "Création d'un site et d'une application qui met en relation les propriétaires d'appartement à Lyon et les etudiants en recherche d'appartement sur Lyon. Projet à deux en B3",
                stack: ["flutter", "symfony", "css", "html", "bootstrap"],
            },
            {
                title: "RadioCalade",
                image: "radiocalade.png",
                description: "Stage de deuxième année de BTS - Projet de refonte intégrale du site web de la radio local de Villefranche-sur-Saône",
                link: "https://www.radio-calade.fr/",
                stack: ["wordpress"],
            },
            {
                title: "Portfolio",
                image: "portfolio_project.png",
                description: "Création d'un site web personnel car, pour moi, c'est primordial en tant que développeur d'avoir son site internet portfolio.",
                link: "https://stevencopy.netlify.app/#/",
                stack: ["vuejs", "html", "css", "vuetify", "bootstrap"],
            },
            {
                title: "Music Player",
                image: "player_app.png",
                description: "Création d'une application PWA de musique avec playlists, songs, player...",
                link: "https://playlistsong-4e36f.web.app/#/songs",
                stack: ["vuejs", "html", "css", "vuetify"],
            },
        ],
    }),
    methods: {
        getImgUrl(image) {
            return require("../assets/img/" + image);
        },
        getImgUrlIcon(image) {
            if (image == "vuejs") {
                return require("../assets/img/" + image + ".png");
            } else {
                return require("../assets/img/icon_" + image + ".png");
            }
        },
        isEven(idx) {
            if (idx % 2 == 0) return true;
            else return false;
        },
    },
};
</script>

<style scoped>
a.visit {
    text-decoration: none;
}

.projects {
    background: url(../assets/img/projects_bg.jpg) no-repeat;
    background-size: cover;
    background-position: center !important;
    width: 100%;
    height: 100% !important;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
}

.projects-section {
    float: right;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.2);
    width: 67%;
    margin-top: 3%;
    margin-right: 3%;
    margin-bottom: 10%;
    box-shadow: 0px 0px 49px -14px rgba(0, 0, 0, 0.75);
}

.card {
    padding: 5px;
    border-radius: 10px;
    width: 21rem;
    margin-bottom: 25px;
    margin-top: 20px;
    transition: 0.3s ease-out;
}

.card:hover {
    padding: 5px;
    border-radius: 10px;
    width: 26rem;
    margin-bottom: 25px;
    box-shadow: 0px 0px 49px -14px rgba(0, 0, 0, 0.75);
    transition: 0.3s ease-out;
}

.card-title {
    color: black;
}

.card-text {
    color: black;
    text-align: left;
}

.card-img-top {
    border-radius: 25px;
    padding: 15px;
}

.card-img-pin {
    max-width: 40px;
    margin: 2px;
}

.img-pin-display {
    display: inline;
}

.seemorebtn {
    margin: 15px;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 70%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

@media (min-width: 1024px) and (max-width: 1200px) {
    .card {
        padding: 5px;
        border-radius: 10px;
        width: 18rem;
        margin-bottom: 25px;
        margin-top: 20px;
        transition: 0.3s ease-out;
    }

    .card:hover {
        padding: 5px;
        border-radius: 10px;
        width: 23rem;
        margin-bottom: 25px;
        box-shadow: 0px 0px 49px -14px rgba(0, 0, 0, 0.75);
        transition: 0.3s ease-out;
    }
}

@media (max-width: 763px) and (min-width: 470px) {
    .projects-section {
        margin: auto;
        float: none;
        overflow: hidden;
        width: 70%;
        margin-top: 80px;
        margin-bottom: 40px;
    }

    .card {
        padding: 5px;
        border-radius: 10px;
        width: 100%;
        margin-bottom: 25px;
        margin-top: 20px;
        transition: 0.3s ease-out;
    }

    .card:hover {
        padding: 5px;
        border-radius: 10px;
        width: 100%;
        margin-bottom: 25px;
        box-shadow: 0px 0px 49px -14px rgba(0, 0, 0, 0.75);
        transition: 0.3s ease-out;
    }
}

@media (max-width: 470px) and (min-width: 10px) {
    .card-text {
        font-size: 12px;
    }

    .projects-section {
        margin: auto;
        float: none;
        overflow: hidden;
        width: 70%;
        margin-top: 80px;
        margin-bottom: 40px;
    }

    .card {
        padding: 5px;
        border-radius: 10px;
        width: 100%;
        margin-bottom: 25px;
        transition: 0.3s ease-out;
    }

    .card:hover {
        box-shadow: 0px 0px 49px -14px rgba(0, 0, 0, 0.75);
        transition: 0.3s ease-out;
    }

    .card-img-pin {
        max-width: 30px;
    }
}
</style>
