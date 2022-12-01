<template>
  <b-table-simple hover small striped caption-top borderless responsive>
      <b-thead>
          <b-tr>
              <b-th>placa</b-th>
              <b-th>motorista</b-th>
              <b-th>estado</b-th>
          </b-tr>
      </b-thead>
      <b-tbody>
          <b-tr v-for="caminhao in caminhoes">
              <b-td>{{caminhao.placa}}</b-td>
              <b-td>{{caminhao.motorista}}</b-td>
              <b-td>{{caminhao.estado}}</b-td>
          </b-tr>
      </b-tbody>
  </b-table-simple>
</template>

<script>

  import API from "../api";

  export default {
      data() {
          return {
              caminhoes: null
          }
      },
      created() {
          API.listarCaminhoes().then(response => (this.caminha = response.data))
          console.log(this.caminhoes)
      }
  }

</script>