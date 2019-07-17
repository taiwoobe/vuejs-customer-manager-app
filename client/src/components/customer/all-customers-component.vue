<template>
    <div class="container">
        <div style="float: right;">
            <router-link v-bind:to="{ name: 'createCustomer' }" class="btn btn-primary" style="margin-right: 20px;">Create New Customer</router-link>
            <router-link v-bind:to="{ name: 'login' }" class="btn btn-primary logout-btn">Logout</router-link>
        </div>
        <router-view></router-view>
        <div v-if="customers.length > 0" class="table-wrap">
            <div class="clearfix"></div>
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customers" :key="customer._id">
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.gender }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>
                        <router-link v-bind:to="{ name: 'editCustomer', params: { id: customer._id } }">
                            <font-awesome-icon icon="edit"/>
                        </router-link> |
                        <a @click="deleteCustomer(customer._id)"><font-awesome-icon icon="trash"/></a>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            There are no Customers.. Lets add one now <br/>
        </div>
    </div>
</template>

<script>
import CustomerService from '../../services/customer.services';
export default {
    name: 'allCustomers',
    data() {
        return {
            customers: [] 
        }
    },
    mounted() {
        this.getCustomers();
    },
    methods: {
        getCustomers() {
            CustomerService.fetchCustomers().then(response => {
                this.customers = response.data.data;
            }).catch(error => { 
                console.log(error);
            });
        },
        deleteCustomer (id) {
            CustomerService.deleteCustomerByID(id).then(resposne => {
                this.getCustomers();
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    cursor: pointer;
}
table {
    margin-top: 20px;
}
.container {
    padding-top: 50px;
}
</style>