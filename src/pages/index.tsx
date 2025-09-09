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
                {/* Work-in-progress note */}
                <div className="sticky top-0 z-50 bg-yellow-100 border-b border-yellow-300 text-yellow-800 text-center px-4 py-2 shadow-md">
                    🚧 🚜 This project page is a <strong>work in progress</strong> before final publication 🚜 🚧
                </div>

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
                            ["https://github.com/AIS-Bonn", "Code"]
                        ]}
                    />
                    
                    {/* Abstract */}
                    <Abstract>
                    Vision-language models (VLMs) excel in visual understanding but often lack reliable grounding capabilities and ac-
                    tionable inference rates. Integrating them with open-vocabulary
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

                    {/* Carousel */}
                    <CarouselComponent
                        heading={"Features"}
                        items={[
                            { image: "/images/teaser_image.png", label: "Autonomous Scene Parsing" },
                            { image: "/images/image_description.png", label: "User-Defined Attributes" },
                          ]}
                    />

                    {/* Long Video */}
                    <Heading>Robot Visual System</Heading>
                    <div className="flex justify-left text-base">
                        VLM-GIST at work in conjunction with an agentic task planner.
                    </div>
                    <video controls muted loop alt="Task Video" className="border-2 border-slate-100 mt-4 rounded-xl mx-auto max-w-[100%] sm:max-w-[75%]">
                        <source src="/videos/task_video_00.mp4" type="video/mp4"/>
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
