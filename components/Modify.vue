<template>
    <div>
        <ul>
            <li style='list-style-type:none' v-for="(data,index) in datapacket" v-bind:key="data">
                {{data}} <br><br>
                <input v-model='msg[index]' placeholder=0 id='index' type ="number" min = "0">
                <br><br>
            </li>
        </ul>
        <button type='button' style='background-color:#f7cac9' v-on:click='updateOrder();'>Update Order</button>
    </div>
</template>

<script>
import database from "../firebase.js"
export default {
    name:'Modify',
    data() {
        return {
            datapacket:[],
            id: this.$route.params.id.toString(),
            c: [],
            dish:[],
            msg:[]
        }
    },
    methods: {
        updateOrder: function(){   
            this.fillupdq(); 
            var i;
            for (i=0;i<this.dish.length;i++) {
                var phrase=this.dish[i]+" "+(this.msg[i].toString())
                this.c.push(phrase)
            }
            database.collection('orders').doc(this.id).update({order: this.c}).then(()=>{
                this.$router.push({name: 'Orders'});
            });
        },       
        fetchItems: function() {
            console.log(this.id);
            database.collection('orders').doc(this.id).get().then(snapshot =>{
                this.datapacket = snapshot.data().order;
                console.log(this.datapacket);
            })
        },
        fillupdq: function() {
            var i;
            for (i = 0; i < this.datapacket.length; i++) {
                var data=this.datapacket[i];
                this.dish.push(data.substring(0,data.length-2))
            }
        }
    },
    created() {
        this.fetchItems();
    }
}
</script>

<style scoped>
</style>