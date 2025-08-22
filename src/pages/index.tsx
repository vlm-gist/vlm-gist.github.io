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


export const Head: HeadFC = () => <title>Project Page Template</title>

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <main className="">
                <Article>
                    {/* Title */}
                    <Title>Title of the Paper or Project</Title>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-lg mb-2.5 mt-0 leading-none">
                        <Author website={""} firstAuthor={true} affiliations={"1"}>First Author</Author>
                        <Author website={""} firstAuthor={true} affiliations={"1"}>Second Author</Author>
                        <Author website={""} firstAuthor={false} lastAuthor={true} affiliations={"2"}>Last Author</Author>
                    </div>

                    <Thanks>* Indicates equal contribution</Thanks>

                    {/* Affiliations */}
                    <div className="flex flex-wrap justify-center text-base mb-4 mt-0 leading-none">
                        <Affiliation website={""} number={"1"}>First Affiliation</Affiliation>
                        <Affiliation website={""} number={"2"}>Second Affiliation</Affiliation>
                    </div>

                    {/* Links */}
                    <LinkGroup arxivUrl={""} pdfUrl={""} otherUrls={
                        [
                            ["/bibtex.txt", "BibTex"],
                            ["", "Code"],
                            ["", "Video"]
                        ]}
                    />
                    
                    {/* Abstract */}
                    <Abstract>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.
                    </Abstract>

                    {/* Teaser Video */}
                    <video autoPlay controls muted playsInline loop alt="Teaser Video" className="border-2 border-slate-100 mt-0 rounded-xl mx-auto max-w-[100%] sm:max-w-[90%]">
                        <source src="/videos/teaser.mp4" type="video/mp4"/>
                    </video>

                    {/* Carousel */}
                    <CarouselComponent
                        heading={"Carousel"}
                        items={[
                            { video: "/videos/carousel_1.mp4", label: "First Item" },
                            { video: "/videos/carousel_2.mp4", label: "Second Item" },
                            { video: "/videos/carousel_3.mp4", label: "Third Item" },
                            { video: "/videos/carousel_4.mp4", label: "Fourth Item" },
                        ]}
                    />

                    {/* Long Video */}
                    <Heading>Video</Heading>
                    <div className="flex justify-left text-base">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.
                    </div>
                    <video controls muted loop alt="Long Video" className="border-2 border-slate-100 mt-4 rounded-xl mx-auto max-w-[100%] sm:max-w-[75%]">
                        <source src="/videos/teaser.mp4" type="video/mp4"/>
                    </video>

                    <Citation/>


                    </Article>

                <Footer
                    githubUrl="https://github.com/your-profile"
                    googleScholarUrl="https://scholar.google.com/citations?user=example"
                    linkedInUrl="https://www.linkedin.com/in/your-profile"
                />
            </main>
        </div>
    );
};

export default IndexPage;
