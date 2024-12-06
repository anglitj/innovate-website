import Image from "next/image";
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github.svg";

export default function About() {
  return (
    <div>
      <section className="py-12 bg-primary-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-700 mb-8">
            Innovate AI
          </h2>
          <p className="text-lg text-primary-700 mb-6">
            Innovate AI is a cutting-edge, AI-powered repository designed to
            unlock the potential of bright ideas across a wide range of
            industries and sectors. Our platform empowers organizations, teams,
            and innovators to easily explore, contribute and implement
            transformative ideas that drive progress and efficiency in their
            work.
          </p>

          {/* Category Section */}
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4">
            <div className="bg-white shadow-lg rounded-md px-4 py-3 my-4">
              <h3 className="text-primary-700 font-bold text-lg my-1">
                Safety
              </h3>
              <p className="text-primary-700">
                Explore innovative ideas and solutions to improve workplace
                safety, reduce risks, and enhance the wellbeing of employees.
                From preventive measures to advanced safety technologies,
                Innovate AI helps you stay ahead of potential hazards.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-md px-4 py-3 my-4">
              <h3 className="text-primary-700 font-bold text-lg my-1">
                People
              </h3>
              <p className="text-primary-700">
                Discover ideas that foster employee engagement, talent
                development, and enhanced team collaboration. Innovate AI brings
                forward strategies to improve communication, motivation, and
                overall workplace culture.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-md px-4 py-3 my-4">
              <h3 className="text-primary-700 font-bold text-lg my-1">
                Quality
              </h3>
              <p className="text-primary-700">
                Unleash ideas that focus on enchancing tproduct ans service
                quality. Whether it&apos;s streamlining processes, imporving
                standards, or introducing new quality control measures, our
                platform offers insights to help you elevate your
                organization&apos;s output.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-md px-4 py-3 my-4">
              <h3 className="text-primary-700 font-bold text-lg my-1">
                Delivery
              </h3>
              <p className="text-primary-700">
                Find groundbreaking ideas to optimized logistics, reduce delays,
                and enhance the overall efficiency of your delivery systems.
                Whether you&apos;re tackling supply chain issues or improving
                project management, Innovate AI delivers valuable insights to
                ensure timely, cost-effective solutions.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-md px-4 py-3 my-4">
              <h3 className="text-primary-700 font-bold text-lg my-1">Cost</h3>
              <p className="text-primary-700">
                Innovate AI provides cost-saving ideas by identifying
                opportunities for operational efficiencies, reducing waste, and
                improving financial management. Unlock strategies that driv
                profitablility without compromising on quality or customer
                satifaction.
              </p>
            </div>
            <div>
              <h3></h3>
              <p></p>
            </div>
          </div>

          <div className="shadow-md px-5 py-4 rounded-md bg-white">
            <h2 className="text-primary-700 text-2xl font-bold my-2">
              AI Assitance Integration
            </h2>
            <p className="text-lg text-primary-700 my-3">
              Innovative AI is powered by state-of-the-art artificial
              intelligence, offering personalized assistance and support to help
              you navigate through a wealth of ideas. The AI-driven platform
              provides:
            </p>
            <ul className="px-5 my-4">
              <li className="text-primary-700 my-2">
                <span className="text-primary-700 font-bold">
                  Smart Recommendations:
                </span>
                <p>
                  Get personalized idea suggestions based on your
                  organization&apos;s needs, preferences, and challenges. The AI
                  analyzes your inputs and surfaces relevant solutions that best
                  match your goals.
                </p>
              </li>
              <li className="text-primary-700 my-2">
                <span className="text-primary-700 font-bold">
                  Idea Evaluation:
                </span>
                <p>
                  AI-powered tools help assess the potential impact,
                  feasibility, and scalability of ideas, guiding you in choosing
                  the most viable solutions.
                </p>
              </li>
              <li className="text-primary-700 my-2">
                <span className="text-primary-700 font-bold">
                  Collaboration Support:
                </span>
                <p>
                  Innovate AI facilitates idea sharing, discussions, and
                  feedback, helping your team work collaboratively to refine and
                  implement the most promising ideas.
                </p>
              </li>
              <li className="text-primary-700 my-2">
                <span className="text-primary-700 font-bold">
                  Continous Learning:
                </span>
                <p>
                  Our AI continuously learns from your interactions and
                  feedback, ensuring that the platform evolves to meet the
                  changing needs of your organization and industry trends.
                </p>
              </li>
            </ul>
            <p className="text-lg text-primary-700">
              At Innovate AI, we believe that great ideas lead to even greater
              results. By seamlessly integrating AI with creativity and
              expertise, we offer a dynamic platform where innovation thrives
              and business challenges are met with actionable solutions.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-primary-0 border-t border-primary-200 h-28 flex justify-center align-middle">
        <div className="flex gap-52 my-auto">
          <p className="text-primary-50 text-xl font-bold">
            Copyright &copy; {new Date().getFullYear()}. All rights are reserved
          </p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/jem-anglit/" target="_blank">
              <Image
                src={linkedin}
                height={30}
                alt="Linkedin Logo"
                className="transition ease-in-out hover:scale-125"
              />
            </a>
            <a href="https://github.com/anglitj" target="_blank">
              <Image
                src={github}
                height={30}
                alt="Github Logo"
                className="transition ease-in-out hover:scale-125"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
