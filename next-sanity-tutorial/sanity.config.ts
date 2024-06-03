import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';

const config = defineConfig({
    projectId: 'u26jeold',

    dataset: "production",

    title: "My Personal Website",

    apiVersion: "2024-06-03",

    basePath: "/admin",

    plugins: [structureTool()]
})

export default config;