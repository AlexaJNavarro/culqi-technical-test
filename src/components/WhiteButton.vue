<template>
    <button class="w-full" @click="onClick"><span class="font-bold">{{ buttonText }}</span></button>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonComponentWhite',
    props: {
        buttonText: {
            type: String,
            required: true,
        },
    },
    methods: {
        onClick() {
            this.$emit('clicked');
        },
    },
});
</script>
  
<style lang="scss" scoped>
button{
    background: var(--vt-c-white-val);
    height: 56px;
    border-radius: 10px;
    color: var(--vt-c-blue-val);
    border: solid 1px var(--vt-c-blue-val);
    span{
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.30000001192092896px;
    }
}
</style>
  