<template>
    <div>
        <div id='lefttab'>
            <router-link to="/" class="routes">Home</router-link>
        </div>
        <div id='midtab'>
            <router-link to="/orders" class="routes">Orders</router-link>
        </div>
        <div id='righttab'>
            <router-link to="/dashboard" class="routes">Dashboard</router-link>
        </div>
        <br><br><br>
        <ul id='ul'>
            <li id='li' v-bind:key='order' v-for='order in orders'>
                <div id="delmodi">
                    <button type="button" v-bind:id='order[0]' v-on:click='deleteItem($event)'>Delete</button>
                    <button type="button" v-bind:id='order[0]' v-on:click='route($event)'>Modify</button>
                </div>
                <ul style='list-style-type:none'>
                    <li v-bind:key='o' v-for='o in order[1].order'>
                        {{o}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import database from "../firebase.js"
export default {
    name:'Orders',
    data() {
        return {
            orders:[],
        }
    },
    methods: {
        route: function(event) {
            let doc_id = event.target.getAttribute("id");
            this.$router.push({name: 'Modify', params: { id: doc_id }});
        },
        deleteItem: function(event) {
            let doc_id = event.target.getAttribute("id");
            database.collection('orders').doc(doc_id).delete().then(()=>{
                location.reload()
            })
        },
        fetchItems: function() {
            database.collection('orders').get().then((querySnapShot)=>{
                let order={}
                querySnapShot.forEach(doc=>{
                    order=doc.data()
                    this.orders.push([doc.id,order])
                })
            })
        }
    },
    created() {
        this.fetchItems();
    }
}
</script>

<style scoped>
    #delmodi{
        color:red;
        float:right;
        margin:5px;
    }
    #lefttab {
        border-color:black;
        border-style:solid;
        text-align:center;
        width: 493px;
        float:left;
        height:30px;
        vertical-align: middle;
        line-height: 30px;
        border-width:1px;
        margin:5px;
    }
    #midtab {
        float:left;
        border-color:black;   
        border-style:solid;
        text-align:center;
        width: 493px;
        height:30px;
        vertical-align: middle;
        line-height: 30px;
        border-width:1px;
        margin:5px;
    }
    #righttab {
        border-color:black;   
        border-style:solid;
        text-align:center;
        width: 493px;
        float:left;
        height:30px;
        vertical-align: middle;
        line-height: 30px;
        border-width:1px;
        margin:5px;
    }
    #ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    #li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 10px;
        border: 1px solid #222;
        margin: 10px;
    }
    button {
        width: 65px;
        height: 30px;
        background-color: #f7cac9;
        border-radius: 10px;
        border-width: 1px;
    }
</style>