<script lang="ts">
	import { battleTactics } from '$lib/data';

	const distinctPacks = battleTactics
		.filter((thing, i, arr) => arr.findIndex((t) => t.pack === thing.pack) === i)
		.map((t) => t.pack);

	let selectedPacks = distinctPacks;
</script>

<div class:noPrint={selectedPacks.length === 0}>
	<div class="headerWrapper">
		<div class="fullWidth">
			<h1>Battle Tactics</h1>
		</div>
		<div class="noPrint">
			{#each distinctPacks as pack}
				<label><input type="checkbox" bind:group={selectedPacks} value={pack} />{pack} </label>
			{/each}
		</div>
	</div>
	<div class="contentWrapper">
		{#each battleTactics as strategy}
			<div class:invisible={!selectedPacks.includes(strategy.pack)}><div class="box" /></div>
			<div class:invisible={!selectedPacks.includes(strategy.pack)}>
				<b>{strategy.name}:</b>{strategy.text}
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

	.box {
		border: 2px solid black;
		width: 15px;
		height: 15px;
		margin: 5px;
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
		grid-template-columns: auto 1fr auto 1fr;
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
