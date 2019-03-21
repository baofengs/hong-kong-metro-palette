<style lang="scss">
@import './assets/scss/index.scss';
.pg {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    user-select: none;
    &-header {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        box-shadow: inset 0 -3px 10px -5px rgba(0, 0, 0, .25);
        &-logo {
            width: 24px;
            height: 22px;
            margin-right: 10px;
        }
        &-title {
            font-size: 20px;
        }
        &-select {
            position: absolute;
            margin: auto;
            left: 50%;
            margin-left: -150px;
        }
        &-sound {
            position: absolute;
            right: 0;
        }
    }
    &-main {
        height: calc(100vh - 100px);
        overflow-y: scroll;
        width: 100vw;
    }
    &-footer {
        height: 50px;
        padding-right: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        box-shadow: inset 0 3px 10px -5px rgba(0, 0, 0, .25);
    }
}
</style>

<template>
    <div id="app" class="pg" @click="onClick">
        <header class="pg-header">
            <hongkong-metro class="pg-header-logo"></hongkong-metro>
            <div class="pg-header-title"><i-title>HongKong Metro Colors</i-title></div>
            <div class="pg-header-select">
                <i-select ref="select"></i-select>
            </div>
            <div class="pg-header-sound">
                <i-sound ref="sound"></i-sound>
            </div>
        </header>
        <main class="pg-main">
            <i-panel></i-panel>
        </main>
        <footer class="pg-footer">
            <copyright></copyright>
        </footer>
    </div>
</template>

<script>
import { getColors } from "./model/getColors";
import iSelect from './components/Select';
import iPanel from './components/Panel';
import iSound from './components/Sound';
import iTitle from './components/Title';
import Copyright from './components/Copyright';
import HongkongMetro from './assets/svgs/hongkong-metro.svg';

export default {
    name: "App",
    provide () {
        return {
            app: this
        }
    },
    components: {
        iPanel,
        iSound,
        iSelect,
        iTitle,
        Copyright,
        HongkongMetro
    },
    computed: {
        soundRef () {
            return this.$refs.sound;
        },
        selectRef () {
            return this.$refs.select;
        }
    },
    data () {
        return {
            colors: getColors(),
            type: 'hex'
        }
    },
    methods: {
        onClick () {
            this.selectRef && this.selectRef.hide();
        },
        playSound () {
            this.soundRef && this.soundRef.play();
        }
    }
};
</script>
