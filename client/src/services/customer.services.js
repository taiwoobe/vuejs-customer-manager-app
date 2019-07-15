import { HTTP } from '../config/config'

export default {
    fetchCustomers () {
        return HTTP.get('customers')
    },
    createCustomer(customer) {
        return HTTP.post('customers', customer);
    },
    updateCustomer(customer) {
        return HTTP.put(`customers/${customer.id}`, customer);
    },
    getCustomerByID(customer){
        return HTTP.get(`customers/${customer.id}`);
    },
    deleteCustomerByID(id) {
        return HTTP.delete(`customers/${id}`);
    }
}
