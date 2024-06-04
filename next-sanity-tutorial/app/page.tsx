import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  console.log(projects);

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">Hello, I&apos;m <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">Tristan</span></h1>
      <p className="mt-3 text-xl text-gray 600">Aloha everyone! Check out my projects!</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects!</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div className="border border-gray-500 rounded-lg" key={project._id}>
        {project.image && (
          <Image
          src={project.image}
          alt={project.name}
          width={250}
          height={100}
          className="object-cover rounded-lg border border-gray-500 p-3"
          />
        )}
          <div className="font-extrabold">{project.name}</div>
        </div>
      ))}
      </div>
    </div>
  );
}
