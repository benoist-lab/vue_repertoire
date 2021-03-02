<template>
	<div class="Personnes">

		liste Personne<br/>
		<table>
			<tr v-for="item in value" :key="item.id">
				<td>
					<personne :value="item" ref="personneList" />
				</td>

				<td class="caseBoutonPersonnes">
					<img v-on:click="modifierClick (item.id)" src="../image/boutonModifier.jpg" class="boutonPersonnes" />
				</td>

			</tr>
		</table>

	</div>
</template>

<script>
import Personne from "./Personne.vue"

export default {
	name: 'Personnes',
	data() {
		return {
			personneList: []
		}
	},
	props: {
		value: Array
	},
	components: {
		Personne
	},
	methods: {
		modifierClick: function (id) {
			this.searchPersonne(id).modifiable=!this.searchPersonne(id).modifiable;
		},
		searchPersonne: function (id) {
			for (var i=0;i<this.$refs.personneList.length;i++)
			{
				if ( this.$refs.personneList[i].value.id===id){
					return this.$refs.personneList[i];
				}
			}
			return null;
		}
	}

}
</script>


<style>
	.caseBoutonPersonnes {
		width: 60px;
	}
	.boutonPersonnes {
		width: 50px;
		height: 50px;
	}
</style>