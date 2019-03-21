<style lang="scss">
.cmp-copyright {
    font-size: 12px;
    line-height: 1.5;
    text-align: right;
}
</style>


<template>
    <div class="cmp-copyright">
        <span>Create by <a target="_blank" href="https://sanbaofengs.com"><i-title>San Baofeng</i-title></a></span><br>
        <span>Inspired by 
            <a target="_blank" href="http://www.ruanyifeng.com/blog/2019/03/coloring-scheme.html"><i-title>Ruan Yifeng</i-title></a> & 
            <a target="_blank" href="http://metrocolor.live/index.html"><i-title>Cris</i-title></a> & 
            <a href="https://flatuicolors.com/"><i-title>Flat UI Colors</i-title></a>
        </span>
    </div>
</template>

<script>
import iTitle from '../components/Title';

export default {
    components: {iTitle}
}
</script>
