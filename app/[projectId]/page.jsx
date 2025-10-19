import React from 'react'
import data from '@/data.json'
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return data.projects.map(project => ({ projectId: project.id }));
}

export async function generateMetadata({ params }) {
    const { projectId } = await params;
    const project = data.projects.find(p => p.id === projectId);
    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The project you are looking for does not exist.',
        };
    } else {
        return {
            title: project.title,
            description: project.subtitle,
        };
    }
}

export default async function page({ params }) {
    const { projectId } = await params;
    const project = data.projects.find(p => p.id === projectId);

    if (!project) {
        return notFound()
    }

    return (
        <main className="min-h-screen container mb-20">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header Section */}
                <header className="space-y-6 text-center">
                    {/* Title + Icons */}
                    <div className="flex items-center justify-center gap-4">
                        <h1 className="text-5xl font-extrabold tracking-tight">
                            {project.title}
                        </h1>
                        <div className="flex gap-3">
                            {project.github && (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-gray-600 hover:bg-neutral-800 transition"
                                >
                                    <Github className="w-5 h-5 text-gray-300" />
                                </Link>
                            )}
                            {project.demo && (
                                <Link
                                    href={project.demo}
                                    target="_blank"
                                    className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-gray-600 hover:bg-neutral-800 transition"
                                >
                                    <ExternalLink className="w-5 h-5 text-white" />
                                </Link>
                            )}
                        </div>
                    </div>

                    <p className="text-neutral-400 text-lg">{project.subtitle}</p>
                </header>

                {/* Hero Image */}
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Overview */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-wide">Overview</h2>
                    <p className="text-neutral-400 leading-relaxed text-lg">
                        {project.description}
                    </p>
                </section>

                {/* Features */}
                <section>
                    <h2 className="text-2xl font-semibold mb-3">Features</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {project.features.map((feature, i) => (
                            <div
                                key={i}
                                className="border bg-neutral-900 border-neutral-700 rounded-xl p-4 hover:border-neutral-500 transition"
                            >
                                <p className="text-gray-200">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technologies */}
                <section>
                    <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-gray-300 hover:border-neutral-500 transition"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
