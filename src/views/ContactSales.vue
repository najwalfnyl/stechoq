<script setup>
import { assetsImg } from '@/utils/helper';
import { useHead } from '@vueuse/head';
import CarouselComp from '@/components/partial/CarouselComp.vue';
import TestimonialSliderComp from '@/components/partial/TestimonialSliderComp.vue';

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
          <strong>For Scretch inquiries,</strong> please reach out to our <span style="text-decoration: underline;">Stechoq Sales</span> team.
        </ul>
        <ul class=" font-poppins list-disc text-justify text-base text-black font-normal my-0 xl:mr-10 sm:mr-0 pt-6 pb-2">
          <strong>To contact our media team,</strong> please see <span style="text-decoration: underline;">Press Inquiries</span>.
        </ul>
        <div class="text-lg mb-3 text-navy-prim mt-4 flex items-center">
          <img src="src\assets\img\icon\mail.svg" alt="Icon" style="width: 35px; height: 35px; margin-right: 15px; align-self: center;" /> 
          <div>
            <a style="display: block;" class="text-black font-bold">Customer Support</a>
            <a style="display: block;">stechoq@email.com</a>
          </div>
        </div>
      </div>
      <div class="xl:mx-4 sm:mx-2 px-4 pb-4 pt-6 flex items-center">
        <div class="container mx-auto mt-[-350px]">
          <form class="max-w-screen-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"> 
            <div class="flex-container" style="display: flex; flex-wrap: wrap; justify-content: space-between;">
              <div class="contact" >
              <div class="text-3xl font-bold text-black mb-4 my-2">
                Get in touch with our STECHOQ sales team.
              </div>
              </div>
          </div>
          <div class="grid grid-cols-1 gap-2">
    <div class="mb-2">
        <input v-model="firstname" 
            class="border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0" 
            id="firstname" type="text" placeholder="First Name*"
            style="border-bottom: 2px solid #4A5568;" required @blur="validateFirstName" @focus="firstNameFocused = true">
        <span v-if="!firstname && firstNameFocused" class="text-red-500 text-xs">Please enter your first name</span>
    </div>
    <div class="mb-2">
        <input v-model="lastname" 
            class="border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0" 
            id="lastname" type="text" placeholder="Last Name*" 
            style="border-bottom: 2px solid #4A5568;" required @blur="validateLastName" @focus="lastNameFocused = true">
        <span v-if="!lastname && lastNameFocused" class="text-red-500 text-xs">Please enter your last name</span>
    </div>
    <div class="mb-2">
        <input v-model="email" 
            class="border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0" 
            id="email" type="tel" placeholder="Business Email" style="border-bottom: 2px solid #4A5568;">
    </div>
    <div class="mb-2">
        <input v-model="phone" 
            class="border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0" 
            id="phone" type="text" placeholder="Phone Number"
            style="border-bottom: 2px solid #4A5568;">
    </div>
    <div class="mb-2">
        <input v-model="company" 
            class="border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0" 
            id="company" type="text" placeholder="Company Name"
            style="border-bottom: 2px solid #4A5568;">
    </div>
</div>
            <div class="mb-4">
              <textarea v-model="message" class=" border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-0" id="message" rows="6" placeholder="Tulis pesan Anda di sini..." 
              style="border-bottom: 2px solid #4A5568;"></textarea>
            </div>
            <div class="text-xs font-normal text-justify text-black mb-4 my-2">
              STECHOQ is committed to your privacy. We will not share 
              your data with any third parties. We use the information 
              you provide us to send you product news & updates, information
               about events, and other announcements. You may unsubscribe 
               from these communications at any time. For more information, 
               check out our Privacy Policy. I agree to receive communications from Boston Dynamics.
              </div>
              <label class="flex items-center mb-4">
                <input type="checkbox" class=" form-checkbox h-3 w-3 text-blue-500">
                <div class=" text-xs font-normal text-light-grey  ml-2 ">I aree to receive communications from Boston Dnamics.</div>
              </label>
            <div class="flex items-center justify-center">
              <button class="bg-white hover:bg-gray-200 w-full rounded-2xl text-navy-prim font-normal py-2 px-4 rounded focus:outline focus:shadow-outline" style="border: 2px solid navy;" type="button" @click="submitForm">
                Submit
              </button>
            </div>
          </form>
         </div>
      </div>
    </article>
</template>

<style scoped>
.full-box {
  @apply object-fill overflow-hidden w-full  ;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
      company:'',
    };
  },
  methods: {
    submitForm() {
      console.log('Formulir dikirim dengan data:', {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        message: this.message,
        email:this.email,
        company: this.company
      });
    }
  }
};
</script>


