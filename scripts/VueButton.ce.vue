<button type="button" onclick="count++">Times Clicked: {{count}}</button>

<script>
	import { ref, defineComponent } from 'vue';
	export default defineComponent({
		name: 'VueButton',
		setup: () => {
			const count = ref(0);
			return { count };
		}
	});
</script>