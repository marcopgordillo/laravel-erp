<template>
    <div>
        <h3 class="text-3xl font-medium text-gray-700">Dashboard</h3>

        <div class="mt-4">
            <div class="flex flex-wrap -mx-6">
                <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                        <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                            <UserGroupIcon class="w-8 h-8 text-white" />
                        </div>

                        <div class="mx-5">
                            <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                            <div class="text-gray-500">New Users</div>
                        </div>
                    </div>
                </div>

                <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                        <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
                            <ShoppingCartIcon class="w-8 h-8 text-white" />
                        </div>

                        <div class="mx-5">
                            <h4 class="text-2xl font-semibold text-gray-700">200,521</h4>
                            <div class="text-gray-500">Total Orders</div>
                        </div>
                    </div>
                </div>

                <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                    <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                        <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                            <ShoppingBagIcon class="w-8 h-8 text-white" />
                        </div>

                        <div class="mx-5">
                            <h4 class="text-2xl font-semibold text-gray-700">215,542</h4>
                            <div class="text-gray-500">Available Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8"></div>

        <div class="flex flex-col mt-8">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div
                    class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
                >
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >Name</th>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >Title</th>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >Status</th>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(u, index) in users" :key="index">
                                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-10 h-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div class="ml-4">
                                            <div
                                                class="text-sm font-medium leading-5 text-gray-900"
                                            >{{ u.name }}</div>
                                            <div
                                                class="text-sm leading-5 text-gray-500"
                                            >{{ u.email }}</div>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                    <div class="text-sm leading-5 text-gray-900">{{ u.title }}</div>
                                    <div class="text-sm leading-5 text-gray-500">{{ u.title2 }}</div>
                                </td>

                                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                    <span
                                        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                                    >{{ u.status }}</span>
                                </td>

                                <td
                                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                                >{{ u.role }}</td>

                                <td
                                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                                >
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UserGroupIcon, ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/vue/solid'

const testUser = {
  name: "John Doe",
  email: "john@example.com",
  title: "Software Engineer",
  title2: "Web dev",
  status: "Active",
  role: "Owner",
}
const users = ref([...Array(10).keys()].map(() => testUser));
</script>
