<script lang="ts">
	export let includePacks: boolean = true;
	import { battleTactics } from '$lib/data';

	const distinctPacks = battleTactics
		.filter((thing, i, arr) => arr.findIndex((t) => t.pack === thing.pack) === i)
		.map((t) => t.pack);

	let selectedPacks = distinctPacks;
</script>

<div class:noPrint={selectedPacks.length === 0}>
	<div class="fourColumnHeaderWrapper">
		<div class="fullWidth">
			<h1>Battle Tactics</h1>
		</div>
		<div class="fullWidth noPrint">
			<h2>Packs</h2>
		</div>
		{#each distinctPacks as pack}
			<div class="noPrint">
				<label><input type="checkbox" bind:group={selectedPacks} value={pack} />{pack} </label>
			</div>
		{/each}
	</div>
	<div class="fourColumnContentWrapper">
		{#each battleTactics as strategy}
			{#if selectedPacks.includes(strategy.pack)}
				<div><div class="box" /></div>
				<div class="item">
					<div>
						<b>{strategy.name}:</b>{strategy.text}
					</div>
					{#if includePacks}
						<div class="pack">
							<i>{strategy.pack}</i>
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	</div>
</div>
