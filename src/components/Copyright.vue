<style lang="scss">
.cmp-copyright {
    &-info {
        float: right;
        font-size: 12px;
        line-height: 1.5;
        text-align: right;
    }
    &-github {
        float: right;
        margin-left: 20px;
        img {
            line-height: 50px;
            vertical-align: middle;
            width: 32px;
            height: 32px;
            transition: all .3s cubic-bezier(.72, -0.61, .25, 1.51);
            &:hover {
                transform: scale(1.1);
            }
        }
    }
}
</style>


<template>
    <div class="cmp-copyright">
        <div class="cmp-copyright-github">
            <a href="https://github.com/x-bao/hong-kong-metro-palette"><img src="../assets/logo/GitHub-Mark-64px.png" alt="hongkong metro palette github"></a>
        </div>
        <div class="cmp-copyright-info">
            <span>Create by <a target="_blank" href="https://sanbaofengs.com"><i-title>San Baofeng</i-title></a></span><br>
            <span>Inspired by 
                <a target="_blank" href="http://www.ruanyifeng.com/blog/2019/03/coloring-scheme.html"><i-title>Ruan Yifeng</i-title></a> & 
                <a target="_blank" href="http://metrocolor.live/index.html"><i-title>Cris</i-title></a> & 
                <a href="https://flatuicolors.com/"><i-title>Flat UI Colors</i-title></a>
            </span>
        </div>
    </div>
</template>

<script>
import iTitle from '../components/Title';

export default {
    components: {iTitle}
}
</script>
