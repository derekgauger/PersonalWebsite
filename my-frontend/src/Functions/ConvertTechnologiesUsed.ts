import { ado, aws, c, cpp, css, csharp, dotnet, git, go, html, java, javascript, linux, maria, mongo, mysql, node, sqlite, postgres, python, react, typescript, windows} from "../Images/techlogos"


const imageMappings: { [key: string]: string } = {
    ado: ado,
    aws: aws,
    c: c,
    cpp: cpp,
    css: css,
    csharp: csharp,
    dotnet: dotnet,
    git: git,
    go: go,
    html: html,
    java: java,
    javascript: javascript,
    linux: linux,
    maria: maria,
    mongo: mongo,
    mysql: mysql,
    node: node,
    sqlite: sqlite,
    postgres: postgres,
    python: python,
    react: react,
    typescript: typescript,
    windows: windows
};

export default function convertTechnologiesUsed(technologiesUsed: string) {
    const technologiesArray = JSON.parse(technologiesUsed);
    return technologiesArray.map((tech: string, index: number) => {
        return imageMappings[tech];
    });
}