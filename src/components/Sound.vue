<style lang="scss">
.cmp-sound {
    &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 50px;
        padding: 0 20px;
        position: relative;
        &:hover {
            cursor: pointer;
        }
        &:active {
            transform: translateY(2px);
        }
        &-title {
            padding-right: 25px;
        }
        &-status {
            position: absolute;
            top: 0;
            left: 70px;
        }
        &-icon {
            width: 30px;
            height: 40px;
            fill: #ef342a;
            &_off {
                fill: #c5c4c9;
                position: relative;
                &:after {
                    content: '';
                    display: block;
                    height: 20px;
                    position: absolute;
                    top: 10px;
                    left: 15px;
                    border-left: 1px solid #c41832;
                    transform: rotateZ(-45deg);
                }
            }
        }
    }
    .fade-active, .fade-leave-to {
        transition: all 1s;
    }
    .fade-enter {
        transform: translateY(20px);
        opacity: 0;
    }
    .fade-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }
}
</style>

<template>
    <div class="cmp-sound">
        <div class="cmp-sound-header" @click="toggleSoundStatus">
            <span class="cmp-sound-header-title">Sound 
                <transition name="fade" mode="in-out">
                    <span class="cmp-sound-header-status" v-if="status" key="on">on</span>
                    <span class="cmp-sound-header-status" v-else key="off">off</span>
                </transition>
            </span>
            <span :class="['cmp-sound-header-icon', {'cmp-sound-header-icon_off': !status}]"><icon-music></icon-music></span>
        </div>
        <div class="cmp-sound-body">
            <audio :ref="sound.name" :id="sound.name" v-for="sound in sounds" :key="sound.name" :src="sound.src">{{sound.name}}</audio>
        </div>
    </div>
</template>

<script>
import IconMusic from '../assets/svgs/music.svg';
import {sounds} from '../model/getSounds';

export default {
    inject: ['app'],
    components: {IconMusic},
    computed: {
        statusStr () {
            return this.status ? 'on' : 'off';
        }
    },
    data () {
        const soundNames = sounds.map(sound => sound.name);
        return {
            sounds,
            soundNames,
            status: true
        }
    },
    mounted () {
        this.status = this.app.currentStates.sound === 'on' ? true : false;
    },
    methods: {
        getRandomSoundName () {
            return this.soundNames[Math.floor(Math.random() * this.soundNames.length)];
        },
        toggleSoundStatus () {
            this.status = !this.status;
            const sound = this.status ? 'openhat' : '';
            this.play(sound);
            this.app.setState({ sound: this.status ? 'on' : 'off' });
        },
        play (sound) {
            if (!this.status) return;
            sound = sound || this.getRandomSoundName();
            const soundDom = this.$refs[sound];
            if (soundDom) {
                soundDom[0].currentTime = 0;
                soundDom[0].play();
            }
        }
    }
}
</script>
