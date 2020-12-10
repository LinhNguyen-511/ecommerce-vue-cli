<template>
    <span v-if="count > 0" class="badge">
        {{count}}
    </span>
</template>

<script>
export default {
    name: 'counter-badge',
    // props: data passed from parent component
    // can be resuable for other purposes
    // computed would also have the same outcome
    props: ['count']
}
</script>

<style lang="css" scoped>
.badge {
    width: 10px;
    height: 10px;
    padding: 5px;
    border-radius: 50%;
    background-color: #42b983;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
}
</style>