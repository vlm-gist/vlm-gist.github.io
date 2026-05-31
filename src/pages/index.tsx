import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Abstract from "../components/Abstract"
import Affiliation from "../components/Affiliation";
import Author from "../components/Author";
import CarouselComponent from "../components/Carousel";
import Citation from "../components/Citation";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import LinkGroup from "../components/LinkGroup";
import SubHeading from "../components/SubHeading";
import Thanks from "../components/Thanks"
import Title from "../components/Title"



const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%]
                       lg:max-w-4xl">
            {children}
        </div>
    )
}


export const Head: HeadFC = () => <title>VLM-GIST</title>

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <main className="">
                <Article>
                    {/* Title */}
                    <Title>Leveraging Vision-Language Models for Open-Vocabulary
                    Instance Segmentation and Tracking</Title>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-lg mb-2.5 mt-0 leading-none">
                        <Author website={""} firstAuthor={true} affiliations={"1,2,3"}>Bastian Pätzold</Author>
                        <Author website={""} firstAuthor={true} affiliations={"1,2,3"}>Jan Nogga</Author>
                        <Author website={""} firstAuthor={false} lastAuthor={true} affiliations={"1,2,3"}>Sven Behnke</Author>
                    </div>

                    <Thanks>* Indicates equal contribution</Thanks>

                    {/* Affiliations */}
                    <div className="flex flex-wrap justify-center text-base mb-4 mt-0 leading-none">
                        <Affiliation website={"https://www.ais.uni-bonn.de/"} number={"1"}>Autonomous Intelligent Systems, University of Bonn, Germany</Affiliation>
                        <Affiliation website={"https://lamarr-institute.org/de/"} number={"2"}>Lamarr Institute for Machine Learning and AI, Germany</Affiliation>
                        <Affiliation website={"https://www.robotics.uni-bonn.de/"} number={"3"}>Center for Robotics, University of Bonn, Germany</Affiliation>
                    </div>

                    {/* Links */}
                    <LinkGroup arxivUrl={"https://arxiv.org/abs/2503.16538"} pdfUrl={"https://www.arxiv.org/pdf/2503.16538"} otherUrls={
                        [
                            ["/bibtex.txt", "BibTex"],
                            ["https://github.com/AIS-Bonn/vlm_gist", "Code"]
                        ]}
                    />
                    
                    {/* Abstract */}
                    <Abstract>
                    Vision-language models (VLMs) excel in visual understanding but often lack reliable grounding capabilities and actionable inference rates. Integrating them with open-vocabulary
                    object detection (OVD), instance segmentation, and tracking
                    leverages their strengths while mitigating these drawbacks. We
                    utilize VLM-generated structured descriptions to identify visible object instances, collect application-relevant attributes, and
                    inform an open-vocabulary detector to extract corresponding
                    bounding boxes that are passed to a video segmentation model
                    providing segmentation masks and tracking. Once initialized, this
                    model directly extracts segmentation masks, processing image
                    streams in real time with minimal computational overhead.
                    Tracks can be updated online as needed by generating new structured descriptions and detections. This combines the descriptive
                    power of VLMs with the grounding capability of OVD and the
                    pixel-level understanding and speed of video segmentation. Our
                    evaluation across datasets and robotics platforms demonstrates
                    the broad applicability of this approach, showcasing its ability
                    to extract task-specific attributes from non-standard objects in
                    dynamic environments.
                    </Abstract>

                    {/* Teaser Video */}
                    {/* <video autoPlay controls muted playsInline loop alt="Teaser Video" className="border-2 border-slate-100 mt-0 rounded-xl mx-auto max-w-[100%] sm:max-w-[90%]">
                        <source src="/videos/teaser.mp4" type="video/mp4"/>
                    </video> */}

                    {/* Features */}
                    <Heading>Features</Heading>
                    <CarouselComponent
                        heading={""}
                        items={[
                            { image: "/images/teaser_image.png", label: "Autonomous Scene Parsing" },
                            { image: "/images/image_description.png", label: "User-Defined Attributes" },
                          ]}
                    />

                    {/* Robot Visual System */}
                    <Heading>Robot Visual System</Heading>

                    {/* Subpoint 1: Autonomous grasping clips */}
                    <SubHeading className="flex justify-left mt-12">
                        Manipulation Scenarios
                    </SubHeading>
                    <div className="flex justify-left text-base mt-2">
                        Autonomous grasping with live tracking (1× speed)
                    </div>
                    <CarouselComponent
                        heading={""}
                        items={[
                            { video: "/videos/grasps/demo_2025-11-28_18-17-43_158-226.mp4", label: "Distractor (sign) correctly ignored" },
                            { video: "/videos/grasps/demo_2025-12-01_15-09-49_kitchen_strawberry_122-154.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-12-01_14-27-41_pantry_ruler_109-134.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-11-28_18-30-54_108-137.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-12-01_14-31-26_pantry_lemon_106-146.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-12-01_15-46-43_coffee_hand_111-140.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-12-01_14-45-12_pantry_tictacs_111-139.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-12-01_15-18-16_kitchen_tongs_104-202.mp4", label: "Recovery from a bad mask by regrasping" },
                            { video: "/videos/grasps/demo_2025-12-01_14-49-13_pantry_die_106-129.mp4", label: "Small object" },
                            { video: "/videos/grasps/demo_2025-12-01_16-01-02_drawer_highlighter_111-137.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-12-01_14-57-54_pantry_usbstick_109-133.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-11-28_18-22-38_108-140.mp4", label: "Prompted to fetch a battery for the smoke detector" },
                            { video: "/videos/grasps/demo_2025-12-01_15-01-49_pantry_trash_108-138.mp4", label: "Instructed to remove the trash" },
                            { video: "/videos/grasps/demo_2025-12-01_15-42-32_kitchen_fork_105-240.mp4", label: "Multiple regrasps while tracking target" },
                            { video: "/videos/grasps/demo_2025-12-01_15-56-15_coffee_cup_114-148.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-12-01_16-05-56_drawer_tape_107-154.mp4", label: "" },
                            { video: "/videos/grasps/demo_2025-11-28_18-45-44_106-134.mp4", label: "" },
                          ]}
                    />

                    {/* Subpoint 2: Task videos (to be finalized) */}
                    <SubHeading className="flex justify-left mt-12">
                        Agentic Task Execution
                    </SubHeading>
                    <div className="flex justify-left text-base mt-2">
                        VLM-GIST at work in conjunction with an agentic task planner.
                    </div>
                    <CarouselComponent
                        heading={""}
                        itemsPerView={1}
                        videoControls={true}
                        items={[
                            { video: "/videos/task_video_00.mp4", label: "" },
                            { video: "/videos/whiteboard.mp4", label: "Best with audio" },
                          ]}
                    />

                    {/* Outlook */}
                    <Heading>Outlook</Heading>
                    <div className="flex justify-left text-base mt-2">
                        VLM-GIST scales to automatic annotation of large datasets.
                    </div>
                    <video autoPlay muted loop playsInline className="border-2 border-slate-100 mt-4 rounded-xl mx-auto max-w-[100%] sm:max-w-[75%]">
                        <source src="/videos/finegrounding1m_teaser.mp4" type="video/mp4"/>
                    </video>

                    <Citation/>


                    </Article>

                <Footer
                    githubUrl="https://github.com/AIS-Bonn"
                />
            </main>
        </div>
    );
};

export default IndexPage;
