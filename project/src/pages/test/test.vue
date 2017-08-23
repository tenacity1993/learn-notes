<template>
    <div>
        <div>hello ctd</div>
        <div @click="showSomething">{{ text }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: 'hello world!'
        }
    },
    methods: {
        showSomething(){
            alert('123')
        }
    }
}
</script>
