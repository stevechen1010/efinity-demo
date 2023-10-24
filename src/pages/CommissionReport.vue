<template>
  <div class="income">
    <q-page>
      <div class="row justify-start">
        <q-input class="input" standout="bg-teal text-white" v-model="searchData.agent_code" label="代理代碼" />
        <q-input class="input" standout="bg-teal text-white" v-model="searchData.agent_name" label="代理名稱" />
        <q-select class="input" standout="bg-teal text-white" v-model="searchData.currency" :options="options" label="幣種" />
      </div>
      <div class="q-pa-md table">
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">代理帳號</th>
              <th class="text-right">代理名稱</th>
              <th class="text-right">幣種</th>
              <th class="text-right">時間</th>
              <th class="text-right">投注金額</th>
              <th class="text-right">有效投注金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">Frozen Yogurt</td>
              <td class="text-right">159</td>
              <td class="text-right">6</td>
              <td class="text-right">24</td>
              <td class="text-right">4</td>
              <td class="text-right">87</td>
            </tr>
            <tr>
              <td class="text-left">Ice cream sandwich</td>
              <td class="text-right">237</td>
              <td class="text-right">9</td>
              <td class="text-right">37</td>
              <td class="text-right">4.3</td>
              <td class="text-right">129</td>
            </tr>
            <tr>
              <td class="text-left">Eclair</td>
              <td class="text-right">262</td>
              <td class="text-right">16</td>
              <td class="text-right">23</td>
              <td class="text-right">6</td>
              <td class="text-right">337</td>
            </tr>
            <tr>
              <td class="text-left">Cupcake</td>
              <td class="text-right">305</td>
              <td class="text-right">3.7</td>
              <td class="text-right">67</td>
              <td class="text-right">4.3</td>
              <td class="text-right">413</td>
            </tr>
            <tr>
              <td class="text-left">Gingerbread</td>
              <td class="text-right">356</td>
              <td class="text-right">16</td>
              <td class="text-right">49</td>
              <td class="text-right">3.9</td>
              <td class="text-right">327</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </q-page>
  </div>
</template>
  
<script lang="ts">
  import { Todo, Meta } from 'components/models';
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'IndexPage',
    setup () {
      const searchData = ref({
        agent_name: '',
        agent_code: '',
        currency: ''
      })

      const options = [
        'IDR', 'MYR', 'USD', 'USDT'
      ]
      const todos = ref<Todo[]>([
        {
          id: 1,
          content: 'IDR'
        },
        {
          id: 2,
          content: 'MYR'
        },
        {
          id: 3,
          content: 'USD'
        },
        {
          id: 4,
          content: 'USDT'
        },
      ]);
      const meta = ref<Meta>({
        totalCount: 1200
      });
      return { 
        options,
        searchData,
        todos,
        meta
      };
    }
  });
</script>
<style lang="sass">
.income
  .input
    min-width: 200px
    margin: 20px 10px
  .table
    max-width: 1200px
</style>
  