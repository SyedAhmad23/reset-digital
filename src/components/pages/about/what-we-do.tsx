import Button from "@/components/ui/button";

const SKILLS = [
  {
    title: "Web Design",
    description:
      "We offer professional web design services that are tailored to meet the needs of your business. Our team of experts will work with you to create a website that is visually appealing, user-friendly, and optimized for search engines.",
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing services are designed to help you reach your target audience and drive traffic to your website. We offer a range of services, including search engine optimization, pay-per-click advertising, and social media marketing.",
  },
  {
    title: "Social Media Management",
    description:
      "Our social media management services are designed to help you build and maintain a strong online presence. We will work with you to create a social media strategy that is tailored to meet the needs of your business.",
  },
  {
    title: "Web Design",
    description:
      "We offer professional web design services that are tailored to meet the needs of your business. Our team of experts will work with you to create a website that is visually appealing, user-friendly, and optimized for search engines.",
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing services are designed to help you reach your target audience and drive traffic to your website. We offer a range of services, including search engine optimization, pay-per-click advertising, and social media marketing.",
  },
  {
    title: "Social Media Management",
    description:
      "Our social media management services are designed to help you build and maintain a strong online presence. We will work with you to create a social media strategy that is tailored to meet the needs of your business.",
  },
];

function WhatWeDoSection() {
  return (
    <div>
      <div className="p-section py-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-9">
          <div>
            <div className="flex flex-col justify-center gap-y-4 mb-12">
              <h5 className="text-xs font-light tracking-long uppercase">
                what we do
              </h5>
              <h2 className="text-5xl font-medium">
                Our <i className="bg-primary text-primary-foreground">Skills</i>{" "}
              </h2>
            </div>
            <p className="">
              We are a team of professionals who are dedicated to providing the
              best services to our clients. We offer a wide range of services
              that are designed to help you achieve your goals. Whether you need
              help with web design, digital marketing, or social media
              management, we have the expertise to help you succeed.
            </p>
            <Button className="mt-6">View our work</Button>
          </div>
          <div className="md:col-span-2">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SKILLS.map((skill, index) => (
                <div key={index}>
                  <SkillCard
                    title={skill.title}
                    description={skill.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoSection;

type Props = {
  title: string;
  description: string;
};
function SkillCard({ title, description }: Props) {
  return (
    <div className="bg-card p-4 shadow-md h-full">
      <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}