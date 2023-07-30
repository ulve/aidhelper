<script lang="ts">
	export let includePacks: boolean = true;
	import { commandAbilities } from '$lib/data';

	const distinctPacks = commandAbilities
		.filter((ability, i, arr) => arr.findIndex((t) => t.pack === ability.pack) === i)
		.map((t) => t.pack);

	let selectedPacks = distinctPacks;
</script>

<div class:noPrint={selectedPacks.length === 0}>
	<div class="fourColumnHeaderWrapper">
		<div class="fullWidth">
			<h1>Command Abilities</h1>
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
	<div class="twoColumnContentWrapper">
		{#each commandAbilities as ability}
			{#if selectedPacks.includes(ability.pack)}
				<div class="item">
					<div>
						<b>{ability.name}</b>
						<i>({ability.phase})</i>:
						{ability.text}
					</div>
					{#if includePacks}
						<div class="pack">
							<i>{ability.pack}</i>
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	</div>
</div>
