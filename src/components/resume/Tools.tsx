export default function Tools() {
    const tools = [
        'Git',
        'NPM',
        'Yarn',
        'Webpack',
        'Docker',
        'Unit Testing',
        'Figma',
        'Photoshop',
        'XD',
    
    ]
    return (
        <div className="resume__section">
            <h1 className="resume__section-title">
                Tools
            </h1>
            <ul className="resume-skills">
                {tools.map((tool, key) => (
                    <li className="resume-skills__item" key={key}>{tool}</li>
                ))}
            </ul>
        </div>
    );
}
