<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem><RouterLink :to="{ name: 'home' }">Home</RouterLink></MenubarItem>
        <MenubarSeparator />
        <MenubarItem><RouterLink :to="{ name: 'weather' }">Weather</RouterLink> </MenubarItem>
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
