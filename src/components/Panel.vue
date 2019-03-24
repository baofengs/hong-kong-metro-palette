<style lang="scss">
@import '../assets/scss/keyframes';

.cmp-panel {
    &-items {
        display: flex;
        flex-wrap: wrap;
    }
    &-copied {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
        opacity: 1;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: opacity .25s ease;
        &_show {
            opacity: 1;
            z-index: 1;
        }
        &-content {
            width: 100%;
            text-align: center;
            margin: 0;
            background-color: rgba(255, 255, 255, .3);
            span {
                display: inline-block;
                font-size: 120px;
                line-height: 1.5;
                font-weight: bold;
                color: #fff;
                text-shadow: 2px 2px #444;
            }
        }
        .animate-in {
            animation: copy-animate-in .35s ease-out;
        }
        .animate-out {
            animation: copy-animate-out .35s ease-out;
        }
        &-color {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 32px;
            line-height: 40px;
            color: #fff;
            font-weight: bold;
            text-shadow: 1px 1px #444;
            margin-top: 50px;
        }
    }
    .copy-enter-active, .copy-leave-active {
        transition: all .35s;
    }
    .copy-enter {
        opacity: 0;
        .cmp-panel-copied-content {
            animation: copy-animate-in .35s ease-out;
        }
    }
    .copy-leave-to {
        opacity: 0;
        .cmp-panel-copied-content span, .cmp-panel-copied-color {
            animation: copy-animate-out .35s ease-out;
        }
    }
}
</style>

<template>
    <div class="cmp-panel">
        <div class="cmp-panel-items">
            <panel-item v-for="color in colors" :key="color.id" :color="color" @select="onSelect"></panel-item>
        </div>
        <transition name="copy">
            <div v-if="copied" class="cmp-panel-copied" :style="{'background-color': currentBgColor}">
                <p class="cmp-panel-copied-content">
                    <span :class="{'animate-in': copied}">{{message}}</span>
                </p>
                <p class="cmp-panel-copied-color" :class="{'animate-in': copied}">
                    <span class="cmp-panel-copied-color_hex" v-if="current.value">{{current.name}}</span>
                    <span class="cmp-panel-copied-color_name" v-if="current.value">{{currentValue}}</span>
                </p>
            </div>
        </transition>
    </div>
</template>

<script>
import PanelItem from './PanelItem';

export default {
    inject: ['app'],
    components: {
        PanelItem
    },
    computed: {
        currentValue () {
            const {current, type} = this;
            return current.value ? current.value[type] : '';
        },
        currentBgColor () {
            const current = this.current;
            return current.value ? current.value.hex : '';
        },
        colors () {
            return this.app.colors;
        },
        type () {
            return this.app.type;
        }
    },
    data () {
        return {
            current: {},
            copied: false,
            message: "COPIED!"
        }
    },  
    methods: {
        onSelect (color) {
            this.current = color;
            this.message = ["IT'LL ROCK!", "COPIED!", "PASTE ME!", "WILL DO!", "RIGHT ONE!", "GOT IT!"][Math.floor(Math.random() * 5)];
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 1000);
        }
    }
}
</script>
