<template>
  <section class="content">
    <div class="box-body table-responsive">
      <span>ດ້ວຍເຫດວ່າ ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ</span>
      <!-- <table class="table table-bordered w-auto small" id="datatable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table> -->

      <!-- <vue-good-table
        :columns="columns"
        :rows="this.mDataArray.articles"
        :search-options="{
          enabled: true,
        }"
      >
      </vue-good-table> -->

      <!-- <vue-good-table
        :columns="columns"
        :rows="this.mDataArray.articles"
        :pagination-options="{
            enabled: true,
            perPage: 10,
            position: 'top',
            perPageDropdown: [3, 7, 9],
            dropdownAllowAll: false,
            setCurrentPage: 2,
            jumpFirstOrLast : true,
            firstLabel : 'ໜ້າທໍາອິດ',
            lastLabel : 'Last Page',
            nextLabel: 'next',
            prevLabel: 'prev',
            rowsPerPageLabel: 'Rows per page',
            ofLabel: 'of',
            pageLabel: 'page', // for 'pages' mode
            allLabel: 'All',
            infoFn: (params) => `my own page ${params.firstRecordOnPage}`, 
        }"

      :search-options="{
          enabled: true,
          multipleColumns: false,
        }"
      >
      </vue-good-table> -->

      <!-- <Bar id="my-chart-id" :options="chartOptions" :data="chartData" /> -->

      <vue-good-table
        id="example1"
        styleClass="vgt-table bordered"
        :columns="columns"
        :rows="this.mDataArray.articles"
        :sort-options="{
          enabled: true,
          initialSortBy: { field: 'title', type: 'asc' },
        }"
        :search-options="{
          enabled: true,
          multipleColumns: false,
        }"
        :pagination-options="{
          enabled: true,
          perPage: 25,
          position: 'bottom',
          rowsPerPageLabel: 'Rows per page',
          ofLabel: 'of',
          allLabel: 'All',
          dropdownAllowAll: false,
          setCurrentPage: 2,
          firstLabel: 'ໜ້າທໍາອິດ',
          lastLabel: 'Last Page',
          nextLabel: 'next',
          prevLabel: 'prev',
          rowsPerPageLabel: '',
          ofLabel: 'of',
          pageLabel: 'page', // for 'pages' mode
          allLabel: 'All',
        }"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'edit'">
            <el-button icon="el-icon-search" circle></el-button>

            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="editRow(props.row.author)"
            ></el-button>

            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteRow(props.row.author)"
            ></el-button>

          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </vue-good-table>
    </div>
  </section>
</template>

<script>
import api from "@/services/api";
// import { Bar } from "vue-chartjs";

// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
// } from "chart.js";

// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale
// );
// import "jquery/dist/jquery.min.js";
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";

export default {
  isLoading: { default: null, type: Boolean },
  maxHeight: { default: null, type: String },
  fixedHeader: Boolean,
  theme: { default: "" },
  mode: { default: "local" }, // could be remote
  totalRows: {}, // required if mode = 'remote'
  styleClass: { default: "vgt-table bordered" },
  columns: {},
  rows: {},
  lineNumbers: Boolean,
  responsive: { default: true, type: Boolean },
  rtl: Boolean,
  rowStyleClass: { default: null, type: [Function, String] },
  compactMode: Boolean,
  groupOptions: {
    default() {
      return {
        enabled: false,
        collapsable: false,
        rowKey: null,
      };
    },
  },
  selectOptions: {
    default() {
      return {
        enabled: false,
        selectionInfoClass: "",
        selectionText: "rows selected",
        clearSelectionText: "clear",
        disableSelectInfo: false,
        selectAllByGroup: false,
      };
    },
  },
  // sort
  sortOptions: {
    default() {
      return {
        enabled: true,
        multipleColumns: true,
        initialSortBy: {},
      };
    },
  },
  searchOptions: {
    default() {
      return {
        enabled: true,
        trigger: null,
        externalQuery: null,
        searchFn: null,
        placeholder: "Search Table",
      };
    },
  },

  async mounted() {
    this.loadProducts();
  },
  // components: { Bar },
  data() {
    return {
      // chartData: {
      //   labels: ["January", "February", "March"],
      //   datasets: [
      //     { label:"Products",  data: [40, 20, 12], backgroundColor: ['#0dcaf0', '#6610f2', '#fd7e14'] }
      //   ],
      // },
      // chartOptions: {
      //   responsive: true,
      // },
      // pagination
      paginationOptions: {
        default() {
          return {
            enabled: true,
            perPage: 2,
            perPageDropdown: null,
            perPageDropdownEnabled: true,
            position: "bottom",
            dropdownAllowAll: true,
            mode: "records", // or pages
            infoFn: null,
            jumpFirstOrLast: false,
          };
        },
      },
      mDataArray: [],
      val: "",
      columns: [
        {
          label: "ຜູ້ຂຽນ",
          field: "author",
          filterOptions: {
            enabled: true,
          },
          sortable: true,
        },
        {
          label: "ຫົວຂໍ້",
          field: "title",
          filterOptions: {
            enabled: true,
            label: "sdfgsdfg",
          },
          sortable: true,
        },

        {
          label: "ເເກ້ໄຂ ຂໍ້ມູນ",
          field: "edit",
        },

        // ...
      ],
      rows: [
        // ...
      ],
    };
  },
  methods: {
    editRow(id) {
      console.log("EDIT" + id);
    },
    deleteRow(id) {
      console.log("DELETE" + id);

    },
    async loadProducts() {
      let result = await api.getProducts();
      this.mDataArray = result.data;
      // $("#datatable").DataTable({
      //   bDestroy: true,
      //   language: {
      //     processing: "Procesando...",
      //     search: "ຄົ້ນຫາ:",
      //     lengthMenu: "ສະແດງ _MENU_ ລາຍການ",
      //     info: "ສະແດງ _START_ ເຖີງ _END_ ຂອງ _TOTAL_ ລາຍການ",
      //     infoEmpty: "Mostrando ningún elemento.",
      //     infoFiltered: "(filtrado _MAX_ elementos total)",
      //     infoPostFix: "",
      //     loadingRecords: "Cargando registros...",
      //     zeroRecords: "No se dghdghdfg",
      //     emptyTable: "No hay datos disponibles en la tabla",
      //     paginate: {
      //       first: "ເລີ່ມຕົ້ນ",
      //       previous: "ກ່ອນຫນ້າ",
      //       next: "ຖັດໄປ",
      //       last: "ສຸດທ້າຍ",
      //     },
      //     aria: {
      //       sortAscending:
      //         ": Activar para ordenar la tabla en orden ascendente",
      //       sortDescending:
      //         ": Activar para ordenar la tabla en orden descendente",
      //     },
      //   },
      //   dom: "Bfrtip",
      //   buttons: ["colvis", "excel", "print", "csv"],
      //   data: result.data.articles,
      //   pageLength: 25,
      //   columns: [{ data: "author" }, { data: "title" }],
      // });
    },
  },
};
</script>