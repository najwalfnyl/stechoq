<script setup>

import { useHead } from '@vueuse/head';
import axios from 'axios';

useHead({
  title: `Contact Sales | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Kampus Merdeka di Stechoq Robotika Indonesia`,
    },
  ],
});
</script>

<template>
  <div class="full-box w-full" :style="{ 'background-image': 'url(src/assets/img/people/dm.png)' }">
    <div class="text-left text-white main-container xl:px-20 sm:px-10">
      <h1 class=" font-bold text-5xl mb-4 font-poppins">Contact Sales</h1>

    </div>
  </div>

  <article class="main-container max-w py-8 grid md:grid-cols-2 md:gap-4">
    <div class="w-full md:w-auto">
      <div class="flex flex-row items-center gap-8">
        <h1 class="text-3xl text-black font-poppins font-bold"> Start your journey with STECHOQ</h1>
      </div>
      <ul class=" font-poppins list-disc text-justify text-base text-black font-normal my-0 xl:mr-10 sm:mr-0 pt-6 p2-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse ci
      </ul>
      <ul class=" font-poppins list-disc text-justify text-base text-black font-normal my-0 xl:mr-10 sm:mr-0 pt-6 pb-2">
        <strong>For Scretch inquiries,</strong> please reach out to our <span
          style="text-decoration: underline;">Stechoq Sales</span> team.
      </ul>
      <ul class=" font-poppins list-disc text-justify text-base text-black font-normal my-0 xl:mr-10 sm:mr-0 pt-6 pb-2">
        <strong>To contact our media team,</strong> please see <span style="text-decoration: underline;">Press
          Inquiries</span>.
      </ul>
      <div class="text-lg mb-3 text-navy-prim mt-4 flex items-center">
        <img src="src\assets\img\icon\mail.svg" alt="Icon"
          style="width: 35px; height: 35px; margin-right: 15px; align-self: center;" />
        <div>
          <a style="display: block;" class="text-black font-bold">Customer Support</a>
          <a style="display: block;">stechoq@email.com</a>
        </div>
      </div>
    </div>
    <div class="xl:mx-4 sm:mx-2 px-4 pb-4 pt-6 flex items-center">
      <div class="container mx-auto mt-[-350px]">
        <form class="max-w-screen-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
          <!-- alert -->
          <div v-if="showAlert"
            class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert">
            <span class="font-medium">Successfully sent message</span>
          </div>
          <div class="flex-container" style="display: flex; flex-wrap: wrap; justify-content: space-between;">
            <div class="contact">
              <div class="text-3xl font-bold text-black mb-4 my-2">
                Get in touch with our STECHOQ sales team.
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-2">
            <div class="mb-2">
              <input v-model="first_name"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="first_name " type="text" placeholder="First Name*" style="border-bottom: 2px solid #4A5568;"
                required @blur="validateFirstName" @focus="firstNameFocused = true">
              <span v-if="!first_name && firstNameFocused" class="text-red-500 text-xs">Please Complete This Required
                Field.</span>
            </div>
            <div class="mb-2">
              <input v-model="last_name"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="last_name" type="text" placeholder="Last Name*" style="border-bottom: 2px solid #4A5568;" required
                @blur="validateLastName" @focus="lastNameFocused = true">
              <span v-if="!last_name && lastNameFocused" class="text-red-500 text-xs">Please Complete This Required
                Field.</span>
            </div>
            <div class="mb-2">
              <input v-model="business_email"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="business_email" type="email" placeholder="Business Email*" style="border-bottom: 2px solid #4A5568;"
                required @blur="validateEmail" @focus="EmailFocused = true">
              <span v-if="!business_email && EmailFocused" class="text-red-500 text-xs">Please Complete This Required
                Field.</span>
              <p class="text-xs pr-3 mt-2 ">To speak to a sales representative, please provide your business email
                address.
              </p>
            </div>
            <div class="mb-2">
              <input v-model="phone_number"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="phone_number" type="text" placeholder="Phone Number" style="border-bottom: 2px solid #4A5568;">
            </div>
            <div class="mb-2">
              <input v-model="company_name"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0 "
                id="company_name" type="text" placeholder="Company Name*" style="border-bottom: 2px solid #4A5568;"
                required @blur="validateCompany" @focus="CompanyFocused = true">
              <span v-if="!company_name && CompanyFocused" class="text-red-500 text-xs">Please Complete This Required
                Field.</span>
            </div>
            <div class="mb-2">
              <input v-model="job_title"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="job_title" type="text" placeholder="Job Title*" style="border-bottom: 2px solid #4A5568;" required
                @blur="validateJob" @focus="JobFocused = true">
              <span v-if="!job_title && JobFocused" class="text-red-500 text-xs">Please Complete This Required
                Field.</span>
            </div>
            <div class="mb-2">
              <input v-model="country"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="country" type="text" placeholder="Country*" style="border-bottom: 2px solid #4A5568;" required
                @blur="validateCountry" @focus="CountryFocused = true">
              <span v-if="!country && CountryFocused" class="text-red-500 text-xs">Please Complete This Required
                Field.</span>
            </div>
            <div class="mb-2">
              <input v-model="region"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="region" type="text" placeholder="State/Region*" style="border-bottom: 2px solid #4A5568;" required
                @blur="validateRegion" @focus="RegionFocused = true">
              <span v-if="!region && RegionFocused" class="text-red-500 text-xs">Please Complete This Required
                Field.</span>
              <p class="text-xs">Please do not use abbreviations.</p>
            </div>
            <div class="mb-2">
              <input v-model="number_of_employees"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0 "
                id="number_of_employees" type="text" placeholder="Number Of Employees*"
                style="border-bottom: 2px solid #4A5568;" required @blur="validateEmployee"
                @focus="EmployeeFocused = true">
              <span v-if="!number_of_employees && EmployeeFocused" class="text-red-500 text-xs">Please Complete This
                Required
                Field.</span>
            </div>
            <div class="mb-2">
              <input v-model="industry"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="industry" type="text" placeholder="Industry*" style="border-bottom: 2px solid #4A5568;" required
                @blur="validateIndutry" @focus="IndustryFocused = true">
              <span v-if="!industry && IndustryFocused" class="text-red-500 text-xs">Please Complete This Required
                Field.</span>
            </div>
            <div class="mb-2">
              <input v-model="use_case"
                class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0"
                id="use_case" type="text" placeholder="Use Case" style="border-bottom: 2px solid #4A5568;">
            </div>
          </div>
          <div class="mb-4">
            <textarea v-model="message"
              class="border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0" id="message"
              rows="6" placeholder="What Are You Intented Applications ? " style="border-bottom: 2px solid #4A5568;"
              required @blur="MessageIndutry" @focus="MessageFocused = true">
            <span v-if="!message && MessageFocused" class="text-red-500 text-xs">Please Complete This Required
              Field.</span>
            </textarea>
          </div>
          <div class="text-xs font-normal text-black mb-4 my-2">
            STECHOQ is committed to your privacy. We will not share
            your data with any third parties. We use the information
            you provide us to send you product news & updates, information
            about events, and other announcements. You may unsubscribe
            from these communications at any time. For more information,
            check out our Privacy Policy. I agree to receive communications from Stechoq.
          </div>
          <div class="text-red-500 mb-4" v-if="!agreeChecked && formSubmitted">
            Please agree to the terms before submitting the form.
          </div>
          <label class="flex items-center mb-4">
            <input type="checkbox" class=" form-checkbox h-3 w-3 text-blue-500">
            <div class="text-xs font-normal text-light-grey  ml-2 ">I aree to receive communications from Boston
              Dnamics.</div>
          </label>
          <div class="flex items-center justify-center">
            <button
              class="bg-white hover:bg-gray-200 w-full rounded-2xl text-navy-prim font-normal py-2 px-4 rounded focus:outline focus:shadow-outline"
              style="border: 2px solid navy;" type="button" @click="submitForm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      phone_number: '',
      company_name: '',
      business_email: '',
      job_title: '',
      number_of_employees: '',
      country: '',
      region: '',
      industry: '',
      use_case: '',
      message: '',
      showAlert: false,
      agreeChecked: false,
      formSubmitted: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        // console.log('Data formulir sebelum dikirim:', {
        //   first_name: this.first_name,
        //   last_name: this.last_name,
        //   business_email: this.business_email,
        //   phone_number: this.phone_number,
        //   company_name: this.company_name,
        //   job_title: this.job_title,
        //   number_of_employees: this.number_of_employees,
        //   country : this.country,
        //   region: this.region,
        //   industry: this.industry,
        //   use_case: this.use_case,
        //   message: this.message,
        // });
        this.formSubmitted = true;
        if (!this.agreeChecked) {
          console.error('Please agree to the terms before submitting the form.');
          return;
        }
        const response = await axios.post('http://127.0.0.1:8000/api/contactSales', {
          first_name: this.first_name,
          last_name: this.last_name,
          business_email: this.business_email,
          phone_number: this.phone_number,
          company_name: this.company_name,
          job_title: this.job_title,
          number_of_employees: this.number_of_employees,
          region: this.region,
          country: this.country,
          industry: this.industry,
          use_case: this.use_case,
          message: this.message,
        });

        // clear form
        this.first_name = '';
        this.last_name = '';
        this.business_email = '';
        this.phone_number = '';
        this.company_name = '';
        this.job_title = '';
        this.number_of_employees = '';
        this.country = '';
        this.region = '';
        this.industry = '';
        this.use_case = '';
        this.message = '';

        // display alert
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);

        console.log('Respon dari server:', response.data);

      } catch (error) {
        console.error('Error saat mengirim formulir:', error);
      }
    }
  }

};
</script>






<style scoped>
.full-box {
  @apply object-fill overflow-hidden w-full;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
