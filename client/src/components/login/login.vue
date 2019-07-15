<template>
    <div class="">
    <div class="loginSection">
        <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 loginForm">
            <form @submit.prevent="checkLogin">
                <h2>Login to Customer Management System</h2>
                <label for="email"> Email Address: <small>(eve.holt@reqres.in)</small></label>
                <input type="text" required class="form-control" name="email" placeholder="Enter Email Address" v-model="user.email">
                <br>
                <label for="password"> Password: <small>(cityslicka)</small></label>
                <input type="password" required class="form-control" name="password" placeholder="Enter Password" v-model="user.password">
                <br>
                <div class="spinner-holder">
                <button class="btn btn-primary" type="submit">Login</button>
                <div class="alert alert-danger" role="alert" v-if="error">
                    {{error}}
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                disabled: true,
                error: ''
            }
        },
        methods: {
            checkLogin() {
                if(this.user.email === 'eve.holt@reqres.in' && this.user.password === 'cityslicka') {
                    this.$router.push({name: 'allCustomers'})
                } else {
                    this.error = 'Wrong Login Details. Please try again.';
                    this.user.email = '';
                    this.user.password = '';
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

.loginSection {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: url('../../assets/blue-bg.png');
}
.loginForm {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
    padding: 35px 70px 35px 70px;
    background: aliceblue;
    border-radius: 5px;
    h2 {
        font-size: 1.7em;
        font-weight: bold;
        text-align: center;
        margin-bottom: 40px;
    }
    small {
        font-size: 100%;
    }
    label {
        color: rgb(134, 131, 131);
        margin-bottom: 10px;
        font-size: 14px;
    }
}
.spinner-holder {
    display: flex;
    align-items: center;
}
.btn-primary {
    color: #fff;
    background-color: #094e70;
    border-color: #094e70;
    font-size: 12px;
    padding: 8px 30px;
}
.btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: none;
}
.btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    background-color: #094e70;
    border-color: #094e70;
}
.btn-primary.focus, .btn-primary:focus {
    box-shadow: none;
}
.form-control {
    font-size: 14px;
    &::placeholder {
        font-size: 14px;
    }
    &:focus{
        border-color: #094e70;
        box-shadow: none;
    }
}

.alert-danger {
    padding: 8px 15px;
    margin: 0;
    font-size: 12px;
    margin-left: 20px;
}
@media (max-width: 767px) {
    .loginForm {
        margin: 15px;
        padding: 35px 15px;
    }
}
</style>