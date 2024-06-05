import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  console.log(projects);

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">Hello, I&apos;m <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">Tristan</span></h1>
      <p className="mt-3 text-xl text-gray 600">Aloha everyone! Check out my projects!</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects!</h2>

      <div className="mt-2 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link href={`projects/${project.slug}`} className="border-2 border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500 transition" key={project._id}>
        {project.image && (
          <Image
          src={project.image}
          alt={project.name}
          width={750}
          height={300}
          className="object-cover rounded-lg border border-gray-500 p-1"
          />
        )}
          <div className="font-extrabold">{project.name}</div>
        </Link>
      ))}
      </div>
    </div>
  );
}
