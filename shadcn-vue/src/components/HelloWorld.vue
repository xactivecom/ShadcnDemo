<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Combobox } from '@/components/ui/combobox'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="p-8 text-red-600">{{ msg }}</h1>

  <div class="grid w-full max-w-sm items-center gap-1.5 p-8">
    <Label htmlFor="name">Name</Label>
    <Input id="name" type="text" placeholder="Name" />

    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Email" />
  </div>

  <div class="p-8">
    <Button type="button" @click="count++">count is {{ count }}</Button>
  </div>

  <div class="grid w-full max-w-sm items-center gap-1.5 p-8">
    <Label htmlFor="league">League</Label>
    <Combobox id="league" type="text" placeholder="Select league" />
  </div>

</template>
