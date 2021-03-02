<template>
	<div class='personne'>

		<table>
			<tr>
				<td class="caseIndexPersonne">
					{{ value.id }}
				</td>
				<td class="caseValuePersonne" v-if="modifiable">
					nom: <input v-model="newPersonne.nom" /><br/>
					prénom: <input v-model="newPersonne.prenom" /><br/>
					sexe: <select v-model="newPersonne.sexe">
						<option value="M">Masculin</option>
						<option value="F">Féminin</option>
					</select>

					<br/> voir les adresses<br/>
					<adresses :value="$store.getters.findPersonneAdresse(value)" />

				</td>
				<td class="caseValuePersonne" v-else>
					<span v-if="value.sexe==='M'">Mr</span><span v-else>Me</span> {{ value.nom }} {{ value.prenom }}<br/>
					<adresses :value="$store.getters.findPersonneAdresse(value)" />
				</td>
				<td class="caseBoutonPersonne" v-if="modifiable">
					<img v-on:click="valider ('enregistrer')" src="../image/boutonEnregistrer.jpg" class="boutonPersonne" />
					<img v-on:click="valider ('annuler')" src="../image/boutonAnnuler.jpg" class="boutonPersonne" />
				</td>
			</tr>
		</table>



	</div>
</template>

<script>
import Adresses from "./Adresses.vue"

export default {
	data: function (){
		return {
			modifiable: false,
			newPersonne: {
				id: 0,
				nom: "",
				prenom: "",
				sexe: "",
				adresses: []
			}
		}
	},
	props: {
		value: Object
	},
	components:{
		Adresses
	},
	created: function () {
		this.copierPersonne (this.newPersonne,this.value);
	},
	methods: {
		valider: function (action){
			if (action==="enregistrer"){
				this.$store.commit ('savePersonne',this.newPersonne)
			}else if (action==="annuler"){
				this.copierPersonne (this.newPersonne,this.value)
			}else{
//				alert ("ERREUR ");
			}

			this.modifiable=false
			this.$emit ("valider", {message: action})
		},
		copierPersonne: function (per1,per2){
			per1.id=per2.id;
			per1.nom=per2.nom;
			per1.prenom=per2.prenom;
			per1.sexe=per2.sexe;
			for (var i=0;per1.adresses.length;i++){
				per2.push (per1.adresses[i]);
			}
		}
	}
}
</script>


<style>
	.personne {
		border: 1px solid black;
		border-radius: 5px;
	}
	.caseIndexPersonne {
		width: 50px;
		/* background-color: gray; */
	}
	.caseValuePersonne {
		/* background-color: LightGray; */
		text-align: left;
		vertical-align: top;
	}
	.caseBoutonPersonne {
		width: 110px;
		/* background-color: LightGray; */
	}	
	.boutonPersonne {
		width: 50px;
		height: 50px;
	}
</style>