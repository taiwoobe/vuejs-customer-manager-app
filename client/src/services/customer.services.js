import axios from '../config/config'

export default {
    fetchCustomers () {
        return axios().get('customers')
    },
    createCustomer(customer) {
        return axios().post('customers', customer);
    },
    updateCustomer(customer) {
        return axios().put(`customers/${customer.id}`, customer);
    },
    getCustomerByID(customer){
        return axios().get(`customers/${customer.id}`);
    },
    deleteCustomerByID(id) {
        return axios().delete(`customers/${id}`);
    }
}
