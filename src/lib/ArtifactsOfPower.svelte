<script lang="ts">
	import { artifactsOfPower } from '$lib/data';

	const distinctPacks = artifactsOfPower
		.filter((artifact, i, arr) => arr.findIndex((t) => t.pack === artifact.pack) === i)
		.map((t) => t.pack);

	let selectedPacks = distinctPacks;

	function GetSubfactionsForPack(pack: string): string[] {
		if (!selectedPacks.includes(pack)) return [];
		return artifactsOfPower
			.filter((artifact) => artifact.pack === pack)
			.filter(
				(subfaction, i, arr) => arr.findIndex((s) => s.subfaction === subfaction.subfaction) === i
			)
			.filter((subfaction) => subfaction.faction !== 'All')
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
			<h1>Artifacts of Power</h1>
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
	<div class="contentWrapper">
		{#each artifactsOfPower as artifact}
			<div
				class:invisible={!(
					selectedPacks.includes(artifact.pack) &&
					(selectedSubfactions.includes(artifact.subfaction) || artifact.subfaction === 'All')
				)}
			>
				<b>{artifact.name}:</b>{artifact.text}
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

	h2 {
		font-family: 'Sigmar One', cursive;
		size: smaller;
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
