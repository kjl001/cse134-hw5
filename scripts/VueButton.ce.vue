<button type="button" onclick="count++">Times Clicked: {{count}}</button>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script lang="ts">
	export default defineComponent({
		name: 'VueButton',
		setup: () => {
			const count = ref(0);
			return { count };
		}
	});
</script>