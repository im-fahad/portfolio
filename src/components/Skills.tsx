"use client"
export default function Skills() {
    const skills = [
        'JavaScript',
        'TypeScript',
        'React.js ',
        'Next.js',
        'Redux',
        'Node.js',
        'NextAuth',
        'Auth.js',
        'React Native',
        'Vue.js',
        'Nuxt.js',
        'Vuex',
        'Pinia',
        'Angular',
        'Ionic',
        'Capacitor',
        'TailwindCSS',
        'WebRTC',
        'WebSocket',
        'Webpack',
        'HTML5',
        'CSS',
        'Larvel',
        'Djengo',
        'MySQL'
    ]
    return (
        <div className="resume__section">
            <h1 className="resume__section-title">
                Skills
            </h1>
            <ul className="resume-skills">
                {skills.map((skill, key) => (
                    <li className="resume-skills__item" key={key}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
