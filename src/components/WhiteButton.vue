<template>
    <button class="w-full flex justify-center items-center" :style="{height: height}" @click="onClick">
        <span><slot></slot></span>
        <span class="font-bold pl-1">{{ buttonText }}</span>
    </button>
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
        height: {
            type: String,
            required: false,
            default: '56px'
        }
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
  