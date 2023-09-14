<template>
  <section class="content">
    <div class="box-body table-responsive">
      <table class="table table-bordered w-auto small" id="datatable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(data, index) in this.mDataArray.articles" :key="data.id">
            <td>{{ index + 1 }}</td>
            <td>{{ data.author }}</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import api from "@/services/api";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
export default {
  async mounted() {
    this.loadProducts();
  },
  data() {
    return {
      mDataArray: [],
      val: "",
    };
  },
  methods: {
    async loadProducts() {
      let result = await api.getProducts();
      this.mDataArray = result.data;
      $("#datatable").DataTable({
        bDestroy: true,
        language: {
          processing: "Procesando...",
          search: "ຄົ້ນຫາ:",
          lengthMenu: "ສະແດງ _MENU_ ລາຍການ",
          info: "ສະແດງ _START_ ເຖີງ _END_ ຂອງ _TOTAL_ ລາຍການ",
          infoEmpty: "Mostrando ningún elemento.",
          infoFiltered: "(filtrado _MAX_ elementos total)",
          infoPostFix: "",
          loadingRecords: "Cargando registros...",
          zeroRecords: "No se dghdghdfg",
          emptyTable: "No hay datos disponibles en la tabla",
          paginate: {
            first: "ເລີ່ມຕົ້ນ",
            previous: "ກ່ອນຫນ້າ",
            next: "ຖັດໄປ",
            last: "ສຸດທ້າຍ",
          },
          aria: {
            sortAscending:
              ": Activar para ordenar la tabla en orden ascendente",
            sortDescending:
              ": Activar para ordenar la tabla en orden descendente",
          },
        },
        dom: "Bfrtip",
        buttons: ["colvis", "excel", "print", "csv"],
        data: result.data.articles,
        pageLength: 25,
        columns: [{ data: "author" }, { data: "title" }],
      });
    },
  },
};
</script>