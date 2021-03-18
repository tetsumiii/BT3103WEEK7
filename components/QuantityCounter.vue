<template>
    <div>
        <div id="but">
            <button id='red' v-on:click="decrement()" type = "button">-</button>
        </div>
        <div id="but">
            {{counter}}
        </div>
        <div id="but">
            <button id='red' v-on:click="increment()" type = "button">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuantityCounter',
    data() {
        return {
            counter:0
        }
    },
    methods: {
        increment: function() {
            if (this.counter>=10) {
                alert("You cannot buy more than 10 items.");
                this.$emit('counter', this.item, this.counter);
            } else {
                this.counter++;
                this.$emit('counter', this.item, this.counter);
            }
        },
        decrement: function() {
            if (this.counter > 0) {
                this.counter--;
                this.$emit('counter', this.item, this.counter);
            }
        }
    },
    props: {
        item:Object
    }
}
</script>

<style scoped>
    #but {
        width: 20px;
        padding: 5px;
        display: inline-block;
        vertical-align: middle;
    }
    #red {
        background-color:rgb(248, 177, 177);
        border-radius:4px;
        font-size:20px;
    }
</style>