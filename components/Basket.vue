<template>
    <div>
        <p>Menu</p>
        <ul>
            <li v-for='food in itemsSelected' v-bind:key='food.id'>
                {{food[0]+" x "+food[1]}}
            </li>
        </ul>
        <button id='red' type="button" v-on:click="findTotal();sendOrder()">Add Order</button>
        <br>
        <div v-show="this.showTotal==true">
            <br>    
            {{substring}}
            <br><br>
            {{grandstring}}
        </div>        
    </div>
</template>

<script>
import database from "../firebase.js"
export default {
    name: 'Basket',
    data () {
        return {
            substring:'',
            grandstring:'',
            showTotal:false,
            orders:[]
        }
    },
    props: {
        itemsSelected: {
            type:Array
        }
    },
    methods: {
        findTotal: function() {
            var sub=0;
            for (let i = 0; i < this.itemsSelected.length; i++) {
                const curr_item = this.itemsSelected[i];
                sub+=curr_item[1]*curr_item[2];
            }
            const grand=(sub*1.07).toFixed(2);
            this.substring="Subtotal: $"+sub;
            this.grandstring="Grand total: $"+grand;
            this.showTotal=true;
        },
        stringify: function() {
            this.orders=[]
            for (let i = 0;i < this.itemsSelected.length;i++) {
                const curr_item=this.itemsSelected[i];
                this.orders.push(curr_item[0]+": "+curr_item[1])
            }
        },
        sendOrder: function() {
            this.stringify();
            database.collection('orders').add({
                    order: this.orders
            }).then(()=>{
                location.reload()
            });
        }
    },
}
</script>

<style scoped>
    #red {
        background-color:rgb(248, 177, 177);
        border-radius:4px;
        padding:2px 10px;
    }
</style>