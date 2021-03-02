<template>
	<div class="Ppersonne">

		<h1>Page Personne</h1>

		<h3>Permière personne</h3>
		<personne :value="premierePersonne" />

		<h3>Liste des Personnes</h3>
		<personnes :value="personnes" />

	</div>
</template>

<script>
import Personne from "../components/Personne.vue"
import Personnes from "../components/Personnes.vue"

export default {
	name: 'Ppersonne',
	components: {
		Personne,
		Personnes
	},
	computed: {
		premierePersonne (){
			return this.$store.state.personnes[0];
		},
		personnes (){
			return this.$store.state.personnes;
		}
	}


}
</script>