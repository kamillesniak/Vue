<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        {{item.title}}- ${{item.price}}
        <button
          @click="$emit('remove-from-cart',item)"
          class="btn badge badge-danger float-right"
        >Remove from cart</button>
      </li>
    </ul>
    <div class="card p-3 my-5">
        <div class="row">
      <h3> Sum: ${{total}}</h3>
      <button @click="$emit('delete-all')"  class="btn btn-danger btn-sm float-right ml-auto">Delete All</button>
      </div>
    </div>
    <button :disabled="items.length === 0" @click="$emit('pay')" class="btn btn-info form-control">Pay Now</button>
  </div>
</template>

<script>
export default {
  props: ["items"],
  computed: {
    total() {
      return this.items.reduce((acc, item) => acc + Number(item.price), 0);
    }
  }
};
</script>


