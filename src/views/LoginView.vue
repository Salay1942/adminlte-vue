<template>

<section class="content">
	<div class="login-box">
    <!-- /.login-logo -->
    <div class="login-box-body" style="background: whitesmoke;border-radius: 10px;">
        <p class="login-box-msg">Sign in to start your session</p>
			<el-form :model="loginValidateForm" ref="loginValidateForm"  class="demo-ruleForm">
				<div class="form-group has-feedback">
					<el-form-item  prop="username" :rules="[{ required: true, message: 'Username is required'}]" >
						<el-input placeholder="Username" v-model="loginValidateForm.username" autocomplete="off"></el-input>
					</el-form-item>
				</div>

				<div class="form-group has-feedback">
					<el-form-item  prop="password" :rules="[{ required: true, message: 'Password is required'}]" >
						<el-input placeholder="Password" v-model="loginValidateForm.password" autocomplete="off" ></el-input>
					</el-form-item>
				</div>

				<div class="form-group has-feedback">
					<el-form-item  prop="region" :rules="[{ required: true, message: 'Region is required'}]">
						<el-select v-model="loginValidateForm.region" placeholder="Activity zone" style="width: 100%;">
							<el-option label="Zone one" value="shanghai"></el-option>
							<el-option label="Zone two" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</div>

				<div class="form-group has-feedback">
					<el-form-item prop="resource" :rules="[{ required: true, message: 'Resource is required'}]">
						<el-radio-group v-model="loginValidateForm.resource">
							<el-radio label="Sponsorship"></el-radio>
							<el-radio label="Venue"></el-radio>
						</el-radio-group>
				</el-form-item>
				</div>

				<div class="row">
					<div class="col-xs-12">
						<el-button type="primary" @click="submitForm('loginValidateForm')" class="btn btn-primary btn-block btn-flat">Login</el-button>
					</div>
				</div>
			</el-form>
    </div>
</div>
</section>

</template>

<script>


	export default {
		data() {
			return {
				loginValidateForm: {
					username: '',
					password: '',
					region: '',
					resource: '',
        		}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$message('This is a message.');
					alert('submit!' + JSON.stringify(this.loginValidateForm));
					
				} else {
					console.log('error submit!!');
					return false;
				}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>

.invalid-feedback {
    color: #ff606e;
}
 
.valid-feedback {
    color: #2acc80;
}

</style>