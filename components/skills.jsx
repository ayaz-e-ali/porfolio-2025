import React from 'react'
import {
    IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs, IoLogoReact,
    IoLogoGithub
} from 'react-icons/io5'
import {
    SiExpress, SiMantine, SiNextdotjs, SiSocketdotio, SiNginx,
    SiMongodb, SiSqlite, SiPrisma, SiPostgresql, SiRedux,
    SiDocker
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from 'react-icons/fa6';
import { VscGithubAction } from 'react-icons/vsc';

export default function Skills() {
    const items = [
        [<IoLogoJavascript />, 'JavaScript'],
        [<IoLogoHtml5 />, 'HTML5'],
        [<IoLogoCss3 />, 'CSS3'],
        [<SiExpress />, 'Express'],
        [<SiMantine />, 'Mantine'],
        [<SiDocker />, 'Docker'],
        [<VscGithubAction />, 'CI/CD'],
        [<SiNextdotjs />, 'NextJS'],
        [<IoLogoNodejs />, 'NodeJS'],
        [<SiRedux />, 'Redux'],
        [<IoLogoReact />, 'React'],
        [<FaAws />, 'AWS'],
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
