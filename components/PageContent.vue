<template>
    <div>
        <br>
        <div id='lefttab'>
            <router-link to="/" class="routes">Home</router-link>
        </div>
        <div id='midtab'>
            <router-link to="/orders" class="routes">Orders</router-link>
        </div>
        <div id='righttab'>
            <router-link to="/dashboard" class="routes">Dashboard</router-link>
        </div>
        <br style='clear:left'>
        <br><br><br>
        <div id='itemsList'>
            <ul>
                <li v-bind:key="item" v-for="item in items">
                    <h1 id='itemName'>{{item.name}}</h1>
                    <img :src="item.imageURL"/>
                    <br>
                    <div id='price'>{{"$"+item.price}}</div>  
                    <br>
                    <qc v-bind:item="item" v-on:counter="onCounter"></qc>  
                </li>
            </ul>
        </div>
        <div id='menusidebar'>
            <bas id='shoppingBasket' v-bind:itemsSelected="itemsSelected"></bas>
        </div>
    </div>
</template>

<script>
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'
import database from "../firebase.js"
    export default {
        name: 'PageContent',
        data() {
            return {
                itemsSelected: [],
                items: [],
            }
        },
        components: {
            qc: QuantityCounter,
            bas: Basket,
        },
        methods: {
            onCounter: function (item, count) {
                if (this.itemsSelected.length === 0 && count > 0) {
                    this.itemsSelected.push([item.name, count, item.price]);
                } else {
                    for (let i = 0; i < this.itemsSelected.length; i++) {
                        var inside = false;
                        const curr_item = this.itemsSelected[i];
                        const item_name = curr_item[0];
                        if (item_name == item.name && count > 0) {
                            this.itemsSelected.splice(i, 1, [item_name,count,curr_item[2]]);
                            inside = true;
                            break;
                        } else if (item_name==item.name && count == 0) {
                            this.itemsSelected.splice(i, 1);
                            inside = true;
                        }
                    }
                    if (inside==false) {
                        this.itemsSelected.push([item.name, count, item.price]);
                    }
                }
            },
            fetchItems: function() {
                database.collection('menu').get().then((querySnapShot)=>{
                    let item={}
                    querySnapShot.forEach(doc=>{
                        item=doc.data()
                        item.show=false
                        this.items.push(item)
                    })
                })
            }
        },
        created() {
            this.fetchItems()
        }
    }
</script>

<style scoped>
    #menusidebar{
        float:right;
        font-size:25px;
        max-width: 30%;
    }
    #lefttab {
        border-color:black;
        border-style:solid;
        text-align:center;
        width: 350px;
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
        width: 350px;
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
        width: 350px;
        float:left;
        height:30px;
        vertical-align: middle;
        line-height: 30px;
        border-width:1px;
        margin:5px;
    }
    #itemsList {
        width: 100%;
        max-width: 70%;
        margin: 0px;
        padding: 0 5px;
        box-sizing: border-box;
        text-align:center;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 10px;
        border: 1px solid #222;
        margin: 10px;
    }
    img {
        width: 135px;
        height: 135px;
    }
    #price {
        font-size: 30px;
    }
    #itemName {
        font-size: 30px;
    }
    #shoppingBasket {
    position: absolute;
    top: 23%;
    left: 78%;
    }
</style>