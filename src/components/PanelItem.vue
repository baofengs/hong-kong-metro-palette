<style lang="scss">
.cmp-panelitem {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 155px;
    width: calc(100% / 5);
    position: relative;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        .cmp-panelitem-copy {
            opacity: 1;
        }
        .cmp-panelitem-name-wrap {
            transform: translateY(0);
            opacity: 1;
        }
    }
    &-copy {
        width: 100px;
        text-align: center;
        opacity: 0;
        padding: 5px 10px;
        border: 2px solid rgba(255, 255, 255, .3);
        border-radius: 5px;
        font-size: 18px;
        line-height: 1.5;
        color: #fff;
        text-shadow: 1px 1px rgba(0, 0, 0, .15);
        box-shadow: 0 0 40px -10px rgba(0, 0, 0, .15);
        transition: all .25s ease-out;
        box-sizing: border-box;
    }
    &-name {
        position: absolute;
        right: 8px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: #fff;
        text-shadow: 1px 1px rgba(0, 0, 0, .15);
    }
}
</style>

<template>
    <div :id="color.id" class="cmp-panelitem" :style="{'background-color': color.value.hex}" :value="value" :data-clipboard-text="value">
        <p class="cmp-panelitem-copy">COPY</p>
        <p class="cmp-panelitem-name">{{color.name}}</p>
    </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
    name: 'panel-item',
    inject: ['app'],
    props: {
        color: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        value () {
            return this.color.value[this.app.type];
        }
    },
    mounted () {
        const cp = new Clipboard(`#${this.color.id}`);
        cp.on('success', () => {
            this.app.playSound();
            this.$emit('select', this.color);
        });
        cp.on('error', () => {
            // alert('error');
        });
    }
}
</script>
