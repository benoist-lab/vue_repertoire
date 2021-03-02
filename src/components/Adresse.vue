<template>
<div class="Adresse">
	<table>
		<tr>
			<td class="caseSelected" v-if="selectionnable">
				<input type="checkbox" @change="onChange (value.id)" :checked="selectionner" ref="checkboxSelection" />
			</td>
			
			<td class="caseIndexAdresse">{{ value.id }}</td>

			<td class="caseValueAdresse" v-if="modifiable">
				rue:<input v-model="newAdresse.rue" /><br/>
				cp: <input v-model="newAdresse.codePostal" /> ville: <input v-model="newAdresse.ville" />
			</td>
			<td class="caseValueAdresse" v-else>
				{{ value.rue }}<br/>
				{{ value.codePostal }} {{ value.ville}}
			</td>

			<td class="caseBoutonAdresse" v-if="modifiable">
				<img v-on:click="valider ('enregistrer')" src="../image/boutonEnregistrer.jpg" class="boutonAdresse" />
				<img v-on:click="valider ('annuler')" src="../image/boutonAnnuler.jpg" class="boutonAdresse" />
			</td>

		</tr>


	</table>
</div>
</template>

<script>
export default {
	name: 'Adresse',
	data: function () {
		return {
			modifiable:false,
			newAdresse: {
				id: 0,
				rue: "",
				codePostal: "",
				ville: ""
			}
		}
	},
	props: {
			selectionnable: {
				type: Boolean,
				value: false
			},
			selectionner: {
				type: Boolean,
				value: false,
				default: false
			},
			value: Object
	},
	created: function () {
		this.copierAdresse (this.newAdresse,this.value);
	},
	methods: {
		valider: function (action){
			if (action==="enregistrer"){
				this.$store.commit ('saveAdresse',this.newAdresse)
			}else if (action==="annuler"){
				this.copierAdresse (this.newAdresse,this.value)
			}else{
//				alert ("ERREUR ");
			}

			this.modifiable=false
			this.$emit ("valider", {message: action})
		},
		copierAdresse (adr1,adr2)
		{
			adr1.id=adr2.id
			adr1.rue=adr2.rue
			adr1.codePostal=adr2.codePostal
			adr1.ville=adr2.ville
		},
		onChange (id)
		{
			this.$emit ('selected',id);
		},
		isSelected (){
			return this.$refs.checkboxSelection.checked;
		}
	}
}
</script>

<style>
	.Adresse {
		border: 1px solid black;
		border-radius: 5px;
	}
	.caseSelected {
		text-align: center;
		vertical-align: center
	}
	.caseIndexAdresse {
		width: 50px;
		/* background-color: gray; */
	}
	.caseValueAdresse {
		/* background-color: LightGray; */
		text-align: left;
		vertical-align: top;
	}
	.caseBoutonAdresse {
		width: 110px;
		/* background-color: LightGray; */
	}	
	.boutonAdresse {
		width: 50px;
		height: 50px;
	}
</style>