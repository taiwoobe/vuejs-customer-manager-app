<template>
    <div class="form-section col-md-6 offset-md-3">
        <h1>Add Customer</h1>
        <form @submit.prevent="addCustomer">
            <div class="form">
                <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" class="form-control" name="name" placeholder="Enter Full Name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" name="name" placeholder="Enter Email Address" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label for="email">Gender</label>
                    <input type="text" class="form-control" name="name" placeholder="Enter Gender" v-model="customer.gender">
                </div>
                <div class="form-group">
                    <label for="email">Phone Number</label>
                    <input type="text" class="form-control" name="name" placeholder="Enter Phone Number" v-model="customer.phone">
                </div>
                <div>
                    <button class="btn btn-primary" type="submit">Create Customer</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import CustomerService from '../../services/customer.services';
    export default {
        name: 'createCustomer',
        data() {
            return {
                customer: {
                    name: '',
                    email: '',
                    gender: '',
                    phone: ''
                }
            }
        },
        methods: {
            async addCustomer() {
                await CustomerService.createCustomer({
                    name: this.customer.name,
                    email: this.customer.email,
                    gender: this.customer.gender,
                    phone: this.customer.phone
                });
                this.$router.push({ name: 'customers' })
            }
        }
    }
</script>

<style lang="scss" scoped>
.form-section {
    padding-top: 30px;
}
</style>