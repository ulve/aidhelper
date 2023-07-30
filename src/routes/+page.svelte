<script lang="ts">
	import ArtifactsOfPower from '$lib/ArtifactsOfPower.svelte';
	import BattleTactics from '$lib/BattleTactics.svelte';
	import CommandTraits from '$lib/CommandTraits.svelte';
	import GrandStrategies from '$lib/GrandStrategies.svelte';
	import HeroicActions from '$lib/HeroicActions.svelte';
	import MonstrousRapages from '$lib/MonstrousRapages.svelte';
	let includePacks: boolean = true;
</script>

<div class="noPrint">
	<h2>Settings:</h2>
	<p>
		<label><input type="checkbox" bind:checked={includePacks} />Show where rule came from</label>
	</p>
</div>

<div class="avoidBreak">
	<MonstrousRapages {includePacks} />
</div>
<div class="avoidBreak">
	<HeroicActions {includePacks} />
</div>
<div class="avoidBreak">
	<GrandStrategies {includePacks} />
</div>
<div class="avoidBreak">
	<BattleTactics {includePacks} />
</div>
<div class="avoidBreak">
	<CommandTraits {includePacks} />
</div>
<div class="avoidBreak">
	<ArtifactsOfPower {includePacks} />
</div>
