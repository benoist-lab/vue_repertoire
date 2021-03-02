<template>
<div class="Adresses">
	<div>
		<table>
			<tr v-for="item in value" :key="item.id">
				<td id="adresseList">
					<!-- <adresse v-bind:value="item" ref="adresseList"  v-on:valider="validerAdresse ($event,item.id)" /> -->
					<adresse :value="item" ref="adresseList"  @valider="validerAdresse ($event,item.id)" />
				</td>
				<td class="caseBoutonAdresses">
					<!-- <button v-on:click="modifierClick (item.id)" >Modifier</button> -->
					<img v-on:click="modifierClick (item.id)" src="../image/boutonModifier.jpg" class="boutonAdresses" />
				</td>
			</tr>
			<tr>

				ajouter

			</tr>
		</table>
	</div>
</div>
</template>

<script>
import Adresse from './Adresse.vue'

export default {
	name: 'Adresses',
	data() {
		return {
			adresseList: []
		}
	},
	props: {
		value: Array
	},
	components: {
		Adresse
	},
	//computed: {
	methods: {
		//modifier (id) {
		modifierClick: function (id) {
			this.searchAdresse(id).modifiable=!this.searchAdresse(id).modifiable;
		},
		searchAdresse: function (id) {
			for (var i=0;i<this.$refs.adresseList.length;i++)
			{
				if ( this.$refs.adresseList[i].value.id===id){
					return this.$refs.adresseList[i];
				}
			}
			return null;
		},
		validerAdresse: function (event,id) {

			if (event.message=="enregistrer"){

				//var elt=this.searchAdresse(id);

				alert(event.message+": "+id)

			}else if (event.message=="enregistrer"){

				alert(event.message+": "+id)

			}else{
				//rien
			}
		}
	}
}
</script>

<style>
	.caseBoutonAdresses {
		width: 60px;
	}
	.boutonAdresses {
		width: 50px;
		height: 50px;
	}
</style>