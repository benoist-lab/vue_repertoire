<template>
<div class="Padresse">
	<h1>Page Adresse</h1>

	<h3>Direct</h3>
	Adresse de test: {{ adresseTest.rue }}<br/>
	{{ adresseTest.codePostal }} {{ adresseTest.ville }}

	<h3>Component</h3>
	Adresse de test: <adresse :value="adresseTest" />
	<br/>
	Adresse de test 2: <adresse :value="adresseTest2" />

	<h3>Getter du Store</h3>
	<adresse :value="$store.getters.firstAdresse" />
	<adresse :value="$store.getters.findAdresse (2)" :selectionnable="adrFind2Selectionnable" :selectionner="adrFind2Selectionner" @selected="adrFind2Selected ($event,2)" ref="adrFind2" />
	adresse 2 selectionner={{ adrFind2Selectionner }}

	<h3>liste des adresses du Store</h3>
	<adresses :value="adresses" />

</div>
</template>

<script>
import Adresse from '../components/Adresse.vue'
import Adresses from '../components/Adresses.vue'


export default {
	name: 'Padresse',
	components: {
		Adresse,
		Adresses
	},
	data: function () {
		return {
			adrFind2Selectionnable: true,
			adrFind2Selectionner: true
		}
	},
	methods: {
		adrFind2Selected: function (event,id){
			this.adrFind2Selectionner=this.$refs.adrFind2.isSelected ();

			console.log("selection adr "+id+" change: "+this.adrFind2Selectionner);
		}
	},
	computed:{
		adresseTest (){
			return this.$store.state.adresseTest;
		},
		adresseTest2 (){
			return this.$store.state.adresseTest2;
		},
		adresses (){
			return this.$store.state.adresses;
		}

	}
}
</script>