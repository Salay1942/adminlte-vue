<template>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-md-6">
        <!-- AREA CHART -->
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Area Chart</h3>

            <div class="box-tools pull-right">
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="collapse"
              >
                <i class="fa fa-minus"></i>
              </button>
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="remove"
              >
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="box-body">
            <div class="chart">
              <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>

            </div>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->

        <!-- DONUT CHART -->
        <div class="box box-danger">
          <div class="box-header with-border">
            <h3 class="box-title">Donut Chart</h3>

            <div class="box-tools pull-right">
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="collapse"
              >
                <i class="fa fa-minus"></i>
              </button>
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="remove"
              >
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="box-body">
            <canvas id="pieChart" style="height: 250px"></canvas>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col (LEFT) -->
      <div class="col-md-6">
        <!-- LINE CHART -->
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">Line Chart</h3>

            <div class="box-tools pull-right">
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="collapse"
              >
                <i class="fa fa-minus"></i>
              </button>
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="remove"
              >
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="box-body">
            <div class="chart">
              <canvas id="lineChart" style="height: 250px"></canvas>
            </div>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->

        <!-- BAR CHART -->
        <div class="box box-success">
          <div class="box-header with-border">
            <h3 class="box-title">Bar Chart</h3>

            <div class="box-tools pull-right">
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="collapse"
              >
                <i class="fa fa-minus"></i>
              </button>
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="remove"
              >
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="box-body">
            <div class="chart">
              <canvas id="barChart" style="height: 230px"></canvas>
            </div>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col (RIGHT) -->
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<script>

//import VueApexCharts from 'vue-apexcharts'


export default {

  data() {
    return {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },

        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          position: "top",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
        title: {
          text: "Monthly Inflation in Argentina, 2002",
          floating: true,
          offsetY: 330,
          align: "center",
          style: {
            color: "#444",
          },
        },
      },
    };
  },
};
</script>
