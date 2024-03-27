<template>
    <header class="flex items-center justify-center p-2">
        <RouterLink to="/if"
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            1-masala</RouterLink>
        <RouterLink to="/if2"
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            2-masala</RouterLink>
        <RouterLink to="/if3"
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            3-masala</RouterLink>
        <!-- <RouterLink to="/if4"
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            4-masala</RouterLink> -->
    </header>
    <section>
        <div class="container  p-12 flex justify-center flex-col gap-2">
            <form @submit.prevent="S" class="flex items-center justify-center gap-2 max-[500px]:flex-col shadow-md p-3">
                <span class="w-full">
                    <label for="birinchi">
                        <h1 class="font-bold text-gray-400">A sonni kiriting</h1>
                    </label>
                    <input v-model="A" type="number" name="birinchi" placeholder="Son kiriting"
                        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border-s-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
                </span>
                <span class="w-full">
                    <label for="birinchi">
                        <h1 class="font-bold text-gray-400">B sonni kiriting</h1>
                    </label>
                    <input v-model="B" type="number" name="birinchi" placeholder="Son kiriting"
                        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border-s-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
                </span>
                <span class="w-full">
                    <label for="birinchi">
                        <h1 class="font-bold text-gray-400">C sonni kiriting</h1>
                    </label>
                    <input v-model="C" type="number" name="birinchi" placeholder="Son kiriting"
                        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border-s-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
                </span>
              <span class="flex items-center justify-center gap-2">
                <button @click="S" type="button"
                    class="text-white mt-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Bajarish</button>
                <button @click="clear" type="button"
                    class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6">Tozalash</button>
              </span>
            </form>
            <div class="natija w-full flex flex-col justify-center shadow-md p-3">
                <h1 class="font-bold">!Natija:</h1>
                <div class="ml-4">
                    <span>
                        <h2 class="font-medium">Eng kichik son= {{ mul }}</h2>
                    </span>
                    <span><h2 class="font-medium">A = {{ a2 }}</h2></span>
             <span><h2 class="font-medium">B = {{ b2 }}</h2></span>
             <span><h2 class="font-medium">C = {{ c2 }}</h2></span>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Swal from 'sweetalert2'
import { ref } from "vue";

const A = ref('')
const B = ref('')
const C = ref('')
const a2 = ref('')
const b2 = ref('')
const c2 = ref('')

const mul = ref('')
const S = () => {
    if (A.value === '' || B.value === '') {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Sonlarni kiriting",
            showConfirmButton: false,
            timer: 1500
        });
    }else{
        if(A.value<C.value && B.value<C.value){
            if(A.value<B.value){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Bajarildi ${A.value} kichik ${B.value} dan`,
                    showConfirmButton: false,
                    timer: 1500
                });
                mul.value = `${A.value}`
                a2.value = A.value
                b2.value = B.value
                c2.value = C.value
            }else{
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Bajarildi ${B.value} kichik ${A.value} dan`,
                    showConfirmButton: false,
                    timer: 1500
                });
                mul.value = `${B.value}`
                a2.value = B.value
                b2.value = A.value
                c2.value = C.value
            }
        }
        if(A.value<B.value && C.value<B.value){
            if(A.value<C.value){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Bajarildi ${A.value} kichik ${C.value} dan`,
                    showConfirmButton: false,
                    timer: 1500
                });
                mul.value = `${A.value}`
                a2.value = A.value
                b2.value = B.value
                c2.value = C.value
            }else{
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Bajarildi ${C.value} kichik ${A.value} dan`,
                    showConfirmButton: false,
                    timer: 1500
                });
                mul.value = `${C.value}`
                a2.value = B.value
                b2.value = A.value
                c2.value = C.value
            }
        }
        if(B.value<A.value && C.value<A.value){
            if(B.value<C.value){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Bajarildi ${B.value} kichik ${C.value} dan`,
                    showConfirmButton: false,
                    timer: 1500
                });
                mul.value = `${B.value}`
                a2.value = A.value
                b2.value = B.value
                c2.value = C.value
            }else{
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Bajarildi ${C.value} kichik ${B.value} dan`,
                    showConfirmButton: false,
                    timer: 1500
                });
                mul.value = `${C.value}`
                a2.value = B.value
                b2.value = A.value
                c2.value = C.value
            }
        }
    }
}
const clear = () => {
    A.value = ''
    B.value = ''
    C.value = ''
    mul.value = ''
    a2.value = ''
    b2.value = ''
    c2.value = ''
}

</script>
<style scoped></style>