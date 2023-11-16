<template>
  <section class="content">
    <div class="box box-default">
      <div class="box-header with-border">
        <!-- <h3 class="box-title">{{isMessage}}</h3> -->
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove">
            <i class="fa fa-remove"></i>
          </button>
        </div>
      </div>
      <form @submit.prevent="submit" ref="form">
        <div class="box-body" style="font-family: Times Roman; font-size: 16px">
          <i class="fa fa-university"></i>
          <span style="font-size: 18px; font-weight: bold"> EDL Branch</span>
          <hr class="new4" />
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label> Branch</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="ສາຂາ"
                  v-model="providerInfo.provider"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label> Account No</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="ເລກບັນຊີ"
                  v-model="providerInfo.account_no"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
          </div>
          <i class="fa fa-database"></i>
          <span style="font-size: 18px; font-weight: bold">
            Source Database Information</span
          >
          <hr class="new4" />
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label> Driver</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Driver"
                  v-model="providerInfo.src_driver"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label> Database Source</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Url"
                  v-model="providerInfo.src_url"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label> Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Username"
                  v-model="providerInfo.src_user"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label> Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Password"
                  v-model="providerInfo.src_pwd"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
          </div>
          <i class="fa fa-database"></i>
          <span style="font-size: 18px; font-weight: bold">
            Destinate Database Information</span
          >
          <hr class="new4" />
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label> Driver</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Driver"
                  v-model="providerInfo.des_driver"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label> Database Source</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Url"
                  v-model="providerInfo.des_url"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label> Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Username"
                  v-model="providerInfo.des_user"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label> Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Password"
                  v-model="providerInfo.des_pwd"
                  :disabled="isEnableTxt"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="box-footer">
          <div class="pull-right">
            <button
              style="margin-right: 4px"
              class="btn btn-default"
              v-if="isHiddenBtn"
              @click="setEnable()"
            >
              <i class="fa fa-pencil-square-o"></i> ແກ້ໄຂ
            </button>

            <button
              type="submit"
              style="margin-right: 4px"
              class="btn btn-default"
              v-if="!isHiddenBtn"
              @click="setSave()"
            >
              <i class="fa fa-save"></i> ບັນທຶກ
            </button>

            <button
              style="margin-right: 4px"
              class="btn btn-default"
              v-if="!isHiddenBtn"
              @click="setCancel()"
            >
              <i class="fa fa-ban"></i> ຍົກເລີກ
            </button>

            <button
              style="margin-right: 4px"
              class="btn btn-default"
              v-if="isHiddenBtn"
              @click="setBack()"
            >
              <i class="fa fa-chevron-circle-left"></i> ກັບຄືນ
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import api from "@/services/api";
export default {
  data() {
    return {
      isHiddenBtn: true,
      isEnableTxt: true,
      providerInfo: {
        provider: "",
        account_no: "",
        src_driver: "",
        src_url: "",
        src_user: "",
        src_pwd: "",
        des_driver: "",
        des_url: "",
        des_user: "",
        des_pwd: "",
      },
    };
  },
  async mounted() {
    let result = await api.getProductById(this.$route.params.provider);
    this.providerInfo = result.data;
  },
  methods: {
    setEnable() {
      this.isEnableTxt = false;
      this.isHiddenBtn = false;
    },
    setCancel() {
      this.isEnableTxt = true;
      this.isHiddenBtn = true;
    },
    setBack() {
      this.$router.back();
    },
    setSave() {

    },
  },
};
</script>


