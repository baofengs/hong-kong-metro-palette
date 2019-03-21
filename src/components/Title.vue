<style lang="scss">
.cmp-title {
    display: inline;
    font-weight: 600;
    letter-spacing: 1px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear,0% 50%,25% 100%,from(#ff2c2c),to(#7a5e91));
}

</style>


<template>
    <div class="cmp-title">
        <slot></slot>
    </div>
</template>
