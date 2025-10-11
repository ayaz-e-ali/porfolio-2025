import React from 'react'
import {
    IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs, IoLogoReact,
    IoLogoGithub
} from 'react-icons/io5'
import {
    SiExpress, SiMantine, SiNextdotjs, SiSocketdotio, SiNginx,
    SiMongodb, SiSqlite, SiPrisma, SiPostgresql, SiRedux
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

export default function Skills() {
    const items = [
        [<IoLogoJavascript />, 'JavaScript'],
        [<IoLogoHtml5 />, 'HTML5'],
        [<IoLogoCss3 />, 'CSS3'],
        [<SiExpress />, 'Express'],
        [<SiMantine />, 'Mantine'],
        [<SiNextdotjs />, 'Next'],
        [<IoLogoNodejs />, 'NodeJS'],
        [<IoLogoReact />, 'React'],
        [<SiRedux />, 'Redux'],
        [<SiSocketdotio />, 'Socket'],
        [<SiNginx />, 'Nginx'],
        [<SiMongodb />, 'MongoDB'],
        [<SiSqlite />, 'SQLite'],
        [<DiMsqlServer />, 'MSSQL'],
        [<SiPrisma />, 'Prisma'],
        [<SiPostgresql />, 'Postgres'],
        [<IoLogoGithub />, 'Git'],
    ]

    // duplicate once for seamless looping
    const allItems = [...items, ...items]

    return (
        <div className="overflow-hidden w-full">
            <ul className="flex gap-3 animate-scroll whitespace-nowrap">
                {allItems.map(([icon, name], index) => (
                    <ListItem key={index}>{icon} {name}</ListItem>
                ))}
            </ul>
        </div>
    )
}

const ListItem = ({ children }) => (
    <li className="flex items-center gap-2 border border-neutral-700 p-2 rounded-xl min-w-max">
        {children}
    </li>
)
