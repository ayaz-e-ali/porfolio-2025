import { ImageResponse } from 'next/og'
import data from '@/data.json'
// Image metadata
export const size = {
    width: 1200,
    height: 630,
}
export const Alt = "Ayaz Ali Project"
export const contentType = 'image/png'

// Image generation
export default async function Image({ params }) {
    const { projectId } = await params;
    const project = data.projects.find(p => p.id === projectId);

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: '#222222',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <img src="http://localhost:3000/ayaz.png" style={{
                    height: "300",
                    width: "300",
                }} />
                <p>
                    {project.title}
                </p>
            </div>
        )
    )
}