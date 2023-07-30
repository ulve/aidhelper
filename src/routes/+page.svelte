<script lang="ts">
	import ArtifactsOfPower from '$lib/ArtifactsOfPower.svelte';
	import BattleTactics from '$lib/BattleTactics.svelte';
	import CommandTraits from '$lib/CommandTraits.svelte';
	import GrandStrategies from '$lib/GrandStrategies.svelte';
</script>

<div class="avoidBreak">
	<GrandStrategies />
</div>
<div class="avoidBreak">
	<BattleTactics />
</div>
<div class="avoidBreak">
	<CommandTraits />
</div>
<div class="avoidBreak">
	<ArtifactsOfPower />
</div>

<style>
	.avoidBreak {
		page-break-inside: avoid;
	}
</style>
