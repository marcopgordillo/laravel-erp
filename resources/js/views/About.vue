<template>
    <h1>About page</h1>
    <alert type="info" dismissable border>
        <span class="font-medium">Info Alert!</span> Change a few things up and try submitting again.
    </alert>
    <alert type="info" no-icon>
        <div class="flex items-center">
            <InformationCircleIcon class="w-5 h-5 text-blue-700 mr-2 dark:text-blue-800"/>
            <h3 class="text-blue-700 text-lg font-medium dark:text-blue-800">This is a info alert</h3>
        </div>
        <div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
            More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </div>
        <div class="flex">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900">
                <EyeIcon class="-ml-0.5 mr-2 h-4 w-4" />
                View more
            </button>
            <button type="button" class="text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white" data-collapse-toggle="alert-additional-content-1" aria-label="Close">
                Dismiss
            </button>
        </div>
    </alert>
    <badge>Default</badge>
    <badge color="dark">Dark</badge>
    <badge color="red">Red</badge>
    <badge color="green">Green</badge>
    <badge color="yellow">Yellow</badge>
    <badge color="indigo">
        <ClockIcon class="w-3 h-3 mr-1" />
        Indigo
    </badge>
    <badge color="purple" link="https://google.com">Purple</badge>
    <badge color="pink" size="sm">Pink</badge>
    <badge color="dark" size="sm" class="!rounded-full !p-1.5">
        <CheckIcon class="w-3.5 h-3.5" />
    </badge>
    <badge color="red" class="!rounded-full !p-1">
        <CheckIcon class="w-3 h-3" />
    </badge>
</template>

<script setup>
import { InformationCircleIcon, EyeIcon, ClockIcon, CheckIcon } from '@heroicons/vue/solid'
import { Alert, Badge } from '@/components/base'

</script>
