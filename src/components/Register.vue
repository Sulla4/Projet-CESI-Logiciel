<template>
  <div class="register">
    <div class="card card-container">
      <img
          id="profile-img"
          src="https://imgur.com/LGuEoO0.png"
          class="profile-img-card"
          alt=""
      />
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="firstnameUser">First Name *</label><br>
            <Field id="firstnameUser" value="" name="firstnameUser" type="text" class="form-control" />
            <ErrorMessage name="firstnameUser" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="lastnameUser">Last Name *</label><br>
            <Field id="lastnameUser" value="" name="lastnameUser" type="text" class="form-control" />
            <ErrorMessage name="lastnameUser" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="nameUser">Username *</label><br>
            <Field id="nameUser" value="" name="nameUser" type="text" class="form-control" />
            <ErrorMessage name="nameUser" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="userPhone">Phone</label><br>
            <Field id="userPhone" value="" name="userPhone" type="text" class="form-control" />
            <ErrorMessage name="userPhone" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="addressUser">Address</label><br>
            <Field id="addressUser" value="" name="addressUser" type="text" class="form-control" />
            <ErrorMessage name="addressUser" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="siretUser">SIRET (Only if restaurant)</label><br>
            <Field id="siretUser" value="" name="siretUser" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="email">Email *</label><br>
            <Field id="email" value="" name="email" type="email" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="mpUser">Password</label><br>
            <Field id="mpUser" value="" name="mpUser" type="password" class="form-control" />
            <ErrorMessage name="mpUser" class="error-feedback" />
          </div>

          <div class="form-group hide">
            <Field id="pointsUser" value="" name="pointsUser" class="form-control" />
          </div>

          <div class="form-group hide">
            <Field id="isSponsorUser" value="" name="isSponsorUser" class="form-control" />
          </div>

          <div class="form-group hide">
            <Field id="isSponsorisedUser" value="" name="isSponsorisedUser" class="form-control" />
          </div>

          <div class="form-group hide">
            <Field id="role_idRole" value="Utilisateur" name="role_idRole" class="form-control" />
          </div>

          <div class="form-group">
            <label for="cpCityID">Code Postal</label><br>
            <Field id="cpCityID" value="" name="cpCityID" class="form-control" />
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
            </button>
          </div>
        </div>
      </Form>

      <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      firstnameUser: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      lastnameUser: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
      userPhone: yup.string(),
      nameUser: yup.string(),
      siretUser: yup.number(),
      addressUser: yup.string(),
      mpUser: yup
          .string()
          .required("Password is required!")
          .min(6, "Must be at least 6 characters!")
          .max(40, "Must be maximum 40 characters!"),
      pointsUser: yup.number(),
      isSponsorUser: yup.string(),
      isSponsorisedUser: yup.string(),
      role_idRole: yup.string(),
      cpCityID: yup.number(),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            this.loading = false;
          }
      );
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: space-around;
  .hide {
    display: none;
  }
  .card {
    border: solid 1px #f6f6f6;
    border-radius: 20px;
    padding: 20px;
    background-color: #f6f6f6;
    img {
      width: 100%;
      height: 40px;
    }
    form {
      .form-group {
        margin: 10px;
      }
    }
  }
}
</style>
