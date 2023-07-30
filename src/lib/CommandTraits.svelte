<script lang="ts">
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
	<div class="headerWrapper">
		<div class="fullWidth">
			<h1>Command Traits</h1>
		</div>
		<div class="noPrint">
			{#each distinctPacks as pack}
				<div>
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
			{#each selectedPacks as pack}
				{#each GetSubfactionsForPack(pack) as subfaction}
					<label>
						<input
							type="checkbox"
							checked={selectedSubfactions.includes(subfaction)}
							value={subfaction}
							on:change={handleSubfaction}
						/>{subfaction}
					</label>
				{/each}
			{/each}
		</div>
	</div>
	<div class="contentWrapper">
		{#each commandTraits as trait}
			<div
				class:invisible={!(
					selectedPacks.includes(trait.pack) &&
					(selectedSubfactions.includes(trait.subfaction) || trait.subfaction === 'All')
				)}
			>
				<b>{trait.name}:</b>{trait.text}
			</div>
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Sigmar+One&display=swap');
	h1 {
		font-family: 'Sigmar One', cursive;
		margin: 2px;
	}

	@media print {
		.noPrint {
			display: none;
		}
		h1 {
			font-size: small;
		}

		.contentWrapper {
			font-size: 8pt;
		}
	}

	.headerWrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding: 5px;
		background-color: darkslategrey;
		color: ivory;
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}

	.contentWrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 20px;
		/* grid-auto-rows: 1fr; */
		gap: 10px;
	}

	.fullWidth {
		justify-self: center;
		grid-column: 1 / -1;
	}

	.invisible {
		display: none;
	}
</style>
