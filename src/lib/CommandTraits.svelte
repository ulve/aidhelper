<script lang="ts">
	export let includePacks: boolean = true;
	import { commandTraits } from '$lib/data';

	const distinctPacks = commandTraits
		.filter((trait, i, arr) => arr.findIndex((t) => t.pack === trait.pack) === i)
		.map((t) => t.pack);

	let selectedPacks = distinctPacks;

	function GetSubfactionsForPack(pack: string): string[] {
		if (!selectedPacks.includes(pack)) return [];
		return commandTraits
			.filter((trait) => trait.pack === pack)
			.filter(
				(subfaction, i, arr) => arr.findIndex((s) => s.subfaction === subfaction.subfaction) === i
			)
			.filter((subfaction) => subfaction.faction !== 'All')
			.filter((s) => s.subfaction !== 'All')
			.filter((subfaction) => selectedPacks.includes(subfaction.pack))
			.map((t) => t.subfaction);
	}

	function handleSubfaction(ev: any) {
		const { checked, value } = ev.target;
		if (checked) {
			selectedSubfactions = [...selectedSubfactions, value];
		} else {
			selectedSubfactions = selectedSubfactions.filter((v) => v !== value);
		}
		console.log(selectedSubfactions);
	}

	function handlePack(ev: any) {
		const { checked, value } = ev.target;
		if (checked) {
			selectedPacks = [...selectedPacks, value];
		} else {
			selectedPacks = selectedPacks.filter((v) => v !== value);
		}
		console.log(selectedPacks);
	}

	let selectedSubfactions: string[] = [];
</script>

<div class:noPrint={selectedPacks.length === 0}>
	<div class="fourColumnHeaderWrapper">
		<div class="fullWidth">
			<h1>Command Traits</h1>
		</div>
		<div class="fullWidth noPrint">
			<h2>Packs</h2>
		</div>

		{#each distinctPacks as pack}
			<div class="noPrint">
				<label>
					<input
						type="checkbox"
						checked={selectedPacks.includes(pack)}
						value={pack}
						on:change={handlePack}
					/>{pack}
				</label>
			</div>
		{/each}
		<div class="fullWidth noPrint">
			<h2>Subfactions</h2>
		</div>
		{#each selectedPacks as pack}
			{#each GetSubfactionsForPack(pack) as subfaction}
				<div class="noPrint">
					<label>
						<input
							type="checkbox"
							checked={selectedSubfactions.includes(subfaction)}
							value={subfaction}
							on:change={handleSubfaction}
						/>{subfaction}
					</label>
				</div>
			{/each}
		{/each}
	</div>
	<div class="twoColumnContentWrapper">
		{#each commandTraits as trait}
			{#if selectedPacks.includes(trait.pack) && (selectedSubfactions.includes(trait.subfaction) || trait.subfaction === 'All')}
				<div class="item">
					<div>
						<b>{trait.name}:</b>{trait.text}
					</div>

					{#if includePacks}
						<div class="pack">
							<i>{trait.pack}</i>
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	</div>
</div>
