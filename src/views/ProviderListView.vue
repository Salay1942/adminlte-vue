<template>
  <section class="content">
    <div class="box box-default">
      <div class="box-header with-border">
        <i class="fa fa-bolt" aria-hidden="true"></i>
        <h3 class="box-title" style="">ຂໍ້ມູນການເຊື່ອມຕໍ່ກັບໄຟຟ້າ</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove">
            <i class="fa fa-remove"></i>
          </button>
        </div>
      </div>
      <div class="box-body">
        <div class="row">
          <form>
            <div class="col-xs-3">
              <button
                style="margin-right: 6px"
                type="button"
                class="btn btn-default btn-flat"
              >
                <i class="fa fa-plus-circle"></i> ເພີ່ມຂໍ້ມູນ
              </button>
              <button type="button" class="btn btn-default btn-flat">
                <i class="fa fa-refresh"></i> ໂຫລດຂໍ້ມູນ
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">ລາຍລະອຽດ</h3>
            </div>
            <div class="box-body table-responsive">
              <!-- <table
                id="excel-table"
                class="table table-bordered table-hover text-align: center"
                style="font-family: Times Roman; font-size: 15px">
                <thead>
                  <tr>
                    <th>EDL Branch</th>
                    <th>Source Database</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Destination Database</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th class="text-center">Account No</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Modify</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table> -->

              <vue-good-table
                styleClass="vgt-table bordered"
                :columns="columns"
                :rows="this.mDataArray"
                :sort-options="{
                  enabled: true,
                  initialSortBy: { field: 'provider', type: 'asc' },
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


                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      size="mini"
                      circle
                      @click="editRow(props.row.provider)"
                    ></el-button>

                    <el-button
                      type="danger"
                      icon="el-icon-delete"
                      size="mini"
                      circle
                      @click="deleteRow(props.row.provider)"
                    ></el-button>

                  </span>
                  <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                  </span>
                </template>
              </vue-good-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/services/api";
export default {
  data() {
    return {
      mDataArray: [],
      columns: [
        {
          label: "EDL Branch",
          field: "provider",
          filterOptions: {
            enabled: true,
          },
          sortable: true,
        },
        {
          label: "Source Database",
          field: "src_url",
          filterOptions: {
            enabled: true,
          },
          sortable: true,
        },
        {
          label: "Username",
          field: "src_user",
          filterOptions: {
            enabled: true,
          },
          sortable: true,
        },
        {
          label: "Password",
          field: "src_pwd",
          filterOptions: {
            enabled: true,
          },
          sortable: true,
        },
        {
          label: "Destination Database",
          field: "des_url",
          filterOptions: {
            enabled: true,
          },
          sortable: true,
        },
        {
          label: "Username",
          field: "des_user",
          filterOptions: {
            enabled: true,
          },
          sortable: true,
        },
        {
          label: "Password",
          field: "des_pwd",
          filterOptions: {
            enabled: true,
          },
          sortable: true,
        },
        {
          label: "Edit",
          field: "edit",
          filterOptions: {
            enabled: true,
          },
        },
      ],
    };
  },
  async mounted() {
    this.loadProvider();
  },
  methods: {
    async loadProvider() {
      let result = await api.getProducts();
      this.mDataArray = result.data;
      alert(JSON.stringify(this.mDataArray));
    },
    editRow(provider) {
        this.$router.push(`/editProviderView/${provider}`)
    },
  },
};
</script>

