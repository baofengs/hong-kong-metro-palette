<style lang="scss">
@import '../assets/scss/keyframes';

.cmp-select {
    position: relative;
    &-selection {
        background: #000;
        border-radius: 4px;
        width: 300px;
        height: 36px;
        line-height: 34px;
        text-align: left;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        padding-left: 20px;
        transition: all .2s;
        letter-spacing: 1px;
        box-sizing: border-box;
    }
    &-icon {
        display: inline-block;
        vertical-align: middle;
        fill: #fff;
        width: 10px;
        height: 14px;
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -7px;
        transition: all .3s ease-in-out;
        &_opened {
            transform: rotate(180deg);
        }
    }
    &-options {
        position: absolute;
        top: calc(100% + 20px);
        left: 0;
        width: 100%;
        z-index: 1;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(50,50,93,.31), 0 1px 13px 10px rgba(0,0,0,.02);
        animation: select-show 1s ease-out;
        &-item {
            &:first-of-type {
                border-radius: 5px 5px 0 0;
            }
            &:last-of-type {
                border: 0;
                border-radius: 0 0 5px 5px;
            }
            &_selected,
            &:hover {
                color: #fff;
                cursor: pointer;
                background: #000;
                border-color: #000;
            }
            text-align: center;
            background-color: #fff;
            font-size: 15px;
            font-weight: 600;
            line-height: 40px;
            color: #000;
            border-bottom: 1px solid #ecf0f1;
            margin: 0;
        }
    }
}
</style>


<template>
    <div class="cmp-select">
        <div @click.stop="toggleShowOptions" class="cmp-select-selection">
            <span>Copy Format: {{current}}</span>
            <icon-down class="cmp-select-icon" :class="{'cmp-select-icon_opened': showOptions}"></icon-down>
        </div>
        <div v-if="showOptions" class="cmp-select-options">
            <p @click.stop="onSelect(option)" class="cmp-select-options-item" :class="{'cmp-select-options-item_selected': option.id === currentId}" v-for="option in options" :key="option.id">{{option.value}}</p>
        </div>
    </div>
</template>

<script>
import IconDown from '../assets/svgs/down.svg';

export default {
    inject: ['app'],
    components: {IconDown},
    computed: {
        current () {
            return this.options.find(option => option.id === this.currentId).value;
        }
    },
    data () {
        const options = [
            {
                id: 'hex',
                value: 'HEX (#BADA55)'
            },
            {
                id: 'hexa',
                value: 'HEX (BADA55)'
            },
            {
                id: 'rgb',
                value: 'RGB - (1,2,3)'
            },
            {
                id: 'rgba',
                value: 'RGBA - (1,2,3,.1)'
            }
        ];
        return {
            options,
            showOptions: false,
            currentId: 'hex'
        }
    },
    mounted () {
        this.currentId = this.app.currentStates.type || 'hex';
    },
    methods: {
        hide () {
            this.showOptions = false;
        },
        toggleShowOptions () {
            this.showOptions = !this.showOptions;
        },
        onSelect (option) {
            const id = option.id;
            this.currentId = id;
            this.app.type = id;
            this.app.setState({ type: id });
            this.showOptions = false;
        }
    },
}
</script>
