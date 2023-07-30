<script lang="ts">
	import { heroicActions } from '$lib/data';

	const distinctPacks = heroicActions
		.filter((action, i, arr) => arr.findIndex((t) => t.pack === action.pack) === i)
		.map((t) => t.pack);

	let selectedPacks = distinctPacks;
</script>

<div class:noPrint={selectedPacks.length === 0}>
	<div class="fourColumnHeaderWrapper">
		<div class="fullWidth">
			<h1>Heroic Actions</h1>
		</div>
		<div class="fullWidth noPrint">
			<h2>Packs</h2>
		</div>
		<div class="noPrint">
			{#each distinctPacks as pack}
				<label><input type="checkbox" bind:group={selectedPacks} value={pack} />{pack} </label>
			{/each}
		</div>
	</div>
	<div class="twoColumnContentWrapper">
		{#each heroicActions as action}
			<div class:invisible={!selectedPacks.includes(action.pack)}>
				<b>{action.name}:</b>{action.text}
			</div>
		{/each}
	</div>
</div>
