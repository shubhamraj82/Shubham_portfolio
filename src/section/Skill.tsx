import Tag from "@/components/Tag";
import IntegrationColumn from "@/components/IntegrationsColumn";

const notionIcon = "/images/notion-logo.svg";

const integrations = [
    { name: "Figma", icon:notionIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: notionIcon, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: notionIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: notionIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: notionIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationsType = typeof integrations;

export default function Skill() {
    return (
        <section
            className="dark relative overflow-hidden bg-[#080d10] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(116, 145, 151, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(116, 145, 151, 0.045) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(18, 39, 42, 0.22), transparent 70%)",
                backgroundSize: "160px 160px, 160px 160px, auto",
            }}
        >
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                <Tag>Integrations</Tag>
                <h2 className="text-6xl font-medium mt-6">
                    Plays well with{" "} <span className="text-lime-400">others</span>
                </h2>
                <p className="text-slate-400 mt-4 text-lg">
                    Layers seamlessly connects with your favourite tool, making it easy to plug into any workflow and collaborate across platforms
                </p>
                </div>
                <div>
                <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
               <IntegrationColumn integrations={integrations}/>
               <IntegrationColumn 
               integrations={integrations.slice().reverse()}
               reverse
               className="hidden md:flex"/>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}
