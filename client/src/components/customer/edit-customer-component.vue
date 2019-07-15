<template>
    <div class="form-section col-md-6 offset-md-3">
        <h1>Edit Customer</h1>
        <form @submit.prevent="updateCustomer">
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
                    <button class="btn btn-primary" type="submit">Update Customer</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import CustomerService from '../../services/customer.services';
    export default {
        name: 'editCustomer',
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
        mounted() {
            this.getCustomer();
        },
        methods: {
            async getCustomer() {
                const response = await CustomerService.getCustomerByID({
                    id: this.$route.params.id
                })
                this.customer.name = response.data.data.name
                this.customer.email = response.data.data.email,
                this.customer.gender = response.data.data.gender,
                this.customer.phone = response.data.data.phone
            },
            async updateCustomer() {
                await CustomerService.updateCustomer({
                    id: this.$route.params.id,
                    name: this.customer.name,
                    email: this.customer.email,
                    gender: this.customer.gender,
                    phone: this.customer.phone
                });
                this.$router.push({ name: 'allCustomer' })
            }
        }
    }
</script>

<style lang="scss" scoped>
.form-section {
    padding-top: 50px;
}
</style>