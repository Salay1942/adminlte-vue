<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel" align="center">
        <img src="dist/img/company.png" class="img-circle" alt="User Image" />
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active treeview">
          <a href="#">
            <i class="fa fa-home"></i> <span>ຫນ້າຫລັກ</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-user"></i>
            <span>ຈັດການຜູ້ໃຊ້ງານ</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/charts/chartjs.html"
                ><i class="fa fa-circle-o"></i> ຜູ້ໃຊ້ງານ</a
              >
            </li>
            <li>
              <a href="pages/charts/morris.html"
                ><i class="fa fa-circle-o"></i> ເພີ່ມລີພອດ</a
              >
            </li>
            <li>
              <a href="pages/charts/flot.html"
                ><i class="fa fa-circle-o"></i> ເພີ່ມບໍລິສັດ</a
              >
            </li>
            <li>
              <a href="pages/charts/inline.html"
                ><i class="fa fa-circle-o"></i> ເພີ່ມສາຂາ</a
              >
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-building-o"></i>
            <span>ຈັດການບໍລິສັດ</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/UI/general.html"
                ><i class="fa fa-circle-o"></i> ບໍລິສັດທັງໝົດ</a
              >
            </li>
            <li>
              <a href="pages/UI/icons.html"
                ><i class="fa fa-circle-o"></i> ຕັ້ງຄ່າບໍລິສັດ</a
              >
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-edit"></i> <span>ລົງທະບຽນ</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/forms/general.html"
                ><i class="fa fa-circle-o"></i> ລາຍການລໍຖ້າແອັກທິບ</a
              >
            </li>
            <li>
              <a href="pages/forms/advanced.html"
                ><i class="fa fa-circle-o"></i> ລາຍການລໍຖ້າແອັກທິບສໍາເລັດ</a
              >
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-bar-chart"></i> <span>ກວດຂໍ້ມູນໂອໂຕ້ເດບິດ</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/tables/simple.html"
                ><i class="fa fa-circle-o"></i> Simple tables</a
              >
            </li>
            <li>
              <a href="pages/tables/data.html"
                ><i class="fa fa-circle-o"></i> Data tables</a
              >
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-file-text-o"></i> <span>ກວດຂໍ້ມູນບິວ</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/examples/invoice.html"
                ><i class="fa fa-circle-o"></i> Invoice</a
              >
            </li>
            <li>
              <a href="pages/examples/profile.html"
                ><i class="fa fa-circle-o"></i> Profile</a
              >
            </li>
            <li>
              <a href="pages/examples/login.html"
                ><i class="fa fa-circle-o"></i> Login</a
              >
            </li>
            <li>
              <a href="pages/examples/register.html"
                ><i class="fa fa-circle-o"></i> Register</a
              >
            </li>
            <li>
              <a href="pages/examples/lockscreen.html"
                ><i class="fa fa-circle-o"></i> Lockscreen</a
              >
            </li>
            <li>
              <a href="pages/examples/404.html"
                ><i class="fa fa-circle-o"></i> 404 Error</a
              >
            </li>
            <li>
              <a href="pages/examples/500.html"
                ><i class="fa fa-circle-o"></i> 500 Error</a
              >
            </li>
            <li>
              <a href="pages/examples/blank.html"
                ><i class="fa fa-circle-o"></i> Blank Page</a
              >
            </li>
            <li>
              <a href="pages/examples/pace.html"
                ><i class="fa fa-circle-o"></i> Pace Page</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>