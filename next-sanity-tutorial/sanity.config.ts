import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'u26jeold',

    dataset: "production",

    title: "My Personal Website",

    apiVersion: "2024-06-03",

    basePath: "/admin",

    plugins: [structureTool()],

    schema: {types: schemas},

    useCdn: false
})

export default config;