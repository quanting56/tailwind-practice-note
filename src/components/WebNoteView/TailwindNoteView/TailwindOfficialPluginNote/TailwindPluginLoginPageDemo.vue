<template>
  <form class="space-y-4">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        id="email"
        type="email" 
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm
               focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <input
        id="password"
        type="password"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm
               focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="rounded text-indigo-600 focus:ring-indigo-500" />
        <span class="ml-2">Remember me</span>
      </label>
    </div>
  
    <button
      type="submit" 
      class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    >
      登入
    </button>
  </form>
</template>

<script setup></script>

<style scoped></style>
