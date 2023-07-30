<script lang="ts">
	import { monstrousRampages } from '$lib/data';

	const distinctPacks = monstrousRampages
		.filter((rampage, i, arr) => arr.findIndex((t) => t.pack === rampage.pack) === i)
		.map((t) => t.pack);

	let selectedPacks = distinctPacks;
</script>

<div class:noPrint={selectedPacks.length === 0}>
	<div class="fourColumnHeaderWrapper">
		<div class="fullWidth">
			<h1>Monstrous Rampages</h1>
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
		{#each monstrousRampages as rampage}
			<div class:invisible={!selectedPacks.includes(rampage.pack)}>
				<b>{rampage.name}:</b>{rampage.text}
			</div>
		{/each}
	</div>
</div>
