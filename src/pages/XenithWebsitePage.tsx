import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, ChevronUp, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import xenithImg from "figma:asset/602a1beede549ed02fd7f4ef5e904bf2960ca599.png";
import heatmapImg1 from "figma:asset/0e06fe413d696a081de471f79ecbcbc2dd90f69d.png";
import heatmapImg2 from "figma:asset/7fd4cd5fa6b2b802fa11ecaf867f3c7d34846b77.png";
import teamPhoto from "figma:asset/ac68fa024aee66dbf6ab965bbe0ebb2e8394738e.png";
import hustlePhoto from "figma:asset/1e0fcaa7829f5aa15cb32e643cfc295af082bd0d.png";
import pushPullModel from "figma:asset/b3a0190f7ab0f00d1dde0c5b7653626b8cc21dd8.png";
import mobileApp1 from "figma:asset/c27def51bda1d46357713ec6f365ee3789340a1f.png";
import mobileApp2 from "figma:asset/31707dff6f37790306279f203a4c2533e46f8e24.png";
import mobileApp3 from "figma:asset/90baa765a2607c84992e459404a0400d861eb00a.png";
import mobileApp4 from "figma:asset/261daf37ae39bd94cc7d36094189f3fb2e357572.png";
import mobileApp5 from "figma:asset/13fd2aaf23999919655a4def363b2596c4ea6682.png";
import mobileApp6 from "figma:asset/b8ecfca744f537ef867ea749edcd8c481964e052.png";
import mobileApp7 from "figma:asset/c41867e085567812c89f9c4e0023cb9d8cd4322d.png";
import mobileApp8 from "figma:asset/928f303dd6fb1562490bce10ad43c308e5fe0cfd.png";
import mobileApp9 from "figma:asset/44631e585e50ee0077c86c65a4ff78d6908ec94d.png";
import serialFlowChart from "figma:asset/12d8ff197022c7156629de9e4ed59abcb18b7411.png";
import wireframeSystem from "figma:asset/8425db291823c08e84fe2832c00822181a8c441e.png";
import newOrderPage from "figma:asset/86148be7931af10a2eeaeecd99fc2bb1e3bdceb5.png";
import orderDetailPage from "figma:asset/2bd1add29398bd65e9626fc21e1ddc17f6b6521a.png";
import compareHelmet1 from "figma:asset/dc91ee82393be0a2883b2eb753f00af0074c26f8.png";
import compareHelmet2 from "figma:asset/f926992a280daef9eb74a779e08d0ea997104f09.png";
import compareHelmet3 from "figma:asset/41a74fb554c4caaa42d3b05ed158097540644aa9.png";
import heroMobile1 from "figma:asset/fab648aa317827c3b536668f13392c4a1234c83d.png";
import heroMobile2 from "figma:asset/bf6a93ed89a3ceef292acf95a45f5e7d401ee839.png";
import heroMobile3 from "figma:asset/b98ee86768d5ce1554a60bbc39bec64f149e402f.png";
import mainMenu1 from "figma:asset/8abca5bbc0f93913c2c1b38ff2494e0545ea8758.png";
import mainMenu2 from "figma:asset/4d94fb8dd136eb527a8993da70c56cb106764cb3.png";
import mainMenu3 from "figma:asset/9d7600b2c4472b969969f993c9ba77dba9124fc3.png";
import helmetLineup1 from "figma:asset/857d6504b6bbfc5ee9e14da5b751763767c5c55d.png";
import helmetLineup2 from "figma:asset/42b7d072c1785eb69980ec30aad0042f7074c0ae.png";
import helmetLineup3 from "figma:asset/7246e77b541cb4463f1175fa6876507e31001c4e.png";
import footer1 from "figma:asset/8bfb277afa2904be7801a1344f9039fa1ec886a5.png";
import footer2 from "figma:asset/f9d4b30876c143f592ba63282dbc4b478de53d77.png";
import footer3 from "figma:asset/2d1852d2c116a18c26ec0b03dfaca08a13434179.png";
import keyFeaturesImg from "figma:asset/e0d957dee8e356bd52fb243f1bd18922a4b36cb7.png";
import heuristicEvalImg from "figma:asset/e16fc0fd833153760bf3152666cf5cf43f2d2de9.png";
import previousContentStrategyImg from "figma:asset/8306d806eeadf97032a3c99a131e57233100fb0f.png";
import invertedPyramidImg from "figma:asset/9ccf3ee76e492b2c3ee28578a443131d0cadca8c.png";
import interactionMapImg from "figma:asset/41a4c7e2c34182c4e09f398fa2166cea8d0d322e.png";
import processTimelineImg from "figma:asset/5181d1908d2b9de20dedba438f03828ade875dfc.png";
import personaPlayer from "figma:asset/a72b22f20a51631057f22d1a917fb7626d3f6e91.png";
import personaCoach from "figma:asset/ad0ebf594e3bfbe1bbdd58e00864b0bfa5f8ed60.png";
import personaParent from "figma:asset/10892d3712b8a857f376d6d6447f7b4fbe489469.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Slider from "react-slick";

export function XenithWebsitePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track active section and show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button when scrolled down
      setShowBackToTop(window.scrollY > 300);

      // Track active section
      const sections = [
        "brief",
        "problem",
        "challenge",
        "solution-overview",
        "design-challenge",
        "approach-strategy",
        "mobile-app-mockups",
        "product-entry-system",
        "final-implementation",
        "impact",
        "learnings-reflections"
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const tableOfContents = [
    { id: "brief", label: "Introduction" },
    { id: "problem", label: "Process" },
    { id: "challenge", label: "Challenge" },
    { id: "solution-overview", label: "Break downs" },
    { id: "design-challenge", label: "The Research" },
    { id: "approach-strategy", label: "1. New Homepage" },
    { id: "mobile-app-mockups", label: "2. Xenith's Mobile APP Mockups (future)" },
    { id: "product-entry-system", label: "3. Product Entry System UI" },
    { id: "final-implementation", label: "Reflections" },
    { id: "impact", label: "Feedback" },
    { id: "learnings-reflections", label: "Key Takeaways" }
  ];

  return (
    <main className="pt-20 pb-24">
      {/* Full-width hero image */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto py-12">
          <ImageWithFallback
            src={xenithImg}
            alt="Xenith Website Redesign"
            className="w-full h-auto"
            style={{ borderRadius: '10px' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            {/* Project Metadata in 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Project Type</p>
                <p className="text-lg text-gray-900 dark:text-gray-100">UX/UI Design, UX Research</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Roles</p>
                <p className="text-lg text-gray-900 dark:text-gray-100">Product Design Intern</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Team</p>
                <p className="text-lg text-gray-900 dark:text-gray-100">Product Manager, Business Strategist, Engineer</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Timeline</p>
                <p className="text-lg text-gray-900 dark:text-gray-100">June - August 2018</p>
              </div>
            </div>
          </div>

          {/* Brief */}
          <div className="mb-16" id="brief">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Introduction
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              In summer 2018, I interned at Xenith LLC's headquarter in downtown Detroit as a Product Design Intern on the Digital Strategy team. I conducted user research on previous version of the e-commerce website and participated on its redesign. Also, I developed serial UX workflow in front-end, where everyone in the team can access order details, track order status, and manage product specifications.
            </p>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: 'monospace' }}>
              *** This project is partially subject to non-disclosure agreement (NDA) ***
            </p>
          </div>

          {/* Problem */}
          <div className="mb-16" id="problem">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              In the 10-week time span, I collaborated with marketing strategists, product managers, software engineers, and my design mentor Charles, to conduct research, design, prototype, iterate, and finally created seamless and logical user experience, which helped to enhance the number of page views and online purchase.
            </p>
            <div className="mb-8">
              <div className="bg-white dark:bg-white p-6 md:p-8" style={{ borderRadius: '10px' }}>
                <ImageWithFallback
                  src={processTimelineImg}
                  alt="Design Process Timeline"
                  className="w-full h-auto"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              <p className="mb-4">The main projects I participated include:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>UI/UX audit of Xenith.com to focus on brand communication</li>
                <li>Design of apparel product website on creating seamless interactions</li>
                <li>Redesign of UI of product entry database system</li>
                <li>Design mobile interfaces for the app (future)</li>
              </ul>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-16" id="challenge">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Challenge: "We don't know what we don't know!"
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
              The quote above was from one of my team members, who have struggled by the issue for a long time. Since the previous version was built several years ago upon several different third-party applications. While Xenith has evolved new product series, most of the functionalities in old version are limited and outdated. Moreover, the information architecture is somewhat misleading, and the brand communication is not clear enough to attract buyers.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              The overarching goal was to optimize sales channel with a simple and clear user experience, as well as providing more effective information to tell brand and product story to target users.
            </p>
          </div>

          {/* Solution Overview */}
          <div className="mb-16" id="solution-overview">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Break downs
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Before I get started with research and design, I decided to break down the challenge into various sub-tasks and solve them one by one. Here are the major steps of how I accomplish it:
            </p>
            
            {/* Subsection: Visualize User Behaviors on Heatmap */}
            <div className="mb-8">
              <h3 className="text-2xl leading-normal mb-6 text-[#102F56] dark:text-gray-100">
                / Visualize User Behaviors on Heatmap
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Tracking user's behavior is an effective way to know website's popular content, so I recommended recording users clicks on Xenith's website and generate heatmap in Hotjar, which helped to discover their potential needs. Combining results of heatmap(left) and usability testing, I conducted the redesign of Xenith's website(right).
              </p>
              
              {/* Two images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <ImageWithFallback 
                    src={heatmapImg1}
                    alt="Heatmap analysis"
                    className="w-full h-auto"
                    style={{ borderRadius: '10px' }}
                  />
                  <p className="text-left text-gray-700 dark:text-white mt-4">Heatmap recording user's click on popular content</p>
                </div>
                <div className="flex flex-col h-full">
                  <div className="relative w-full aspect-[16/10] md:aspect-auto md:flex-1 rounded-[10px] overflow-hidden">
                    <ImageWithFallback 
                      src={heatmapImg2}
                      alt="Website redesign"
                      className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
                    />
                  </div>
                  <p className="text-left text-gray-700 dark:text-white mt-4">Redesigned website base on user research</p>
                </div>
              </div>
            </div>
            
            {/* Subsection: Information Architecture */}
            <div className="mb-8">
              <h3 className="text-2xl leading-normal mb-6 text-[#102F56] dark:text-gray-100">
                / Information Architecture
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Since I don't have prior experience to the user flow or a clear understanding of the information architecture, I decided to construct an interaction map to generate a static representation of both interval and hierarchical relations between webpages, which visualizes all the possible interactions. In this way, it would be more efficient for me to discover what kind of values the website could provide for users.
              </p>
              
              {/* Interaction Map Image */}
              <div>
                <div className="bg-white dark:bg-white p-6 md:p-8" style={{ borderRadius: '10px' }}>
                  <ImageWithFallback
                    src={interactionMapImg}
                    alt="Interaction Map of Xenith.com"
                    className="w-full h-auto"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Interaction Map of Xenith.com</p>
              </div>
            </div>
            
            {/* Subsection: Prioritize key features by using Inverted Pyramid model */}
            <div className="mb-8">
              <h3 className="text-2xl leading-normal mb-6 text-[#102F56] dark:text-gray-100">
                / Prioritize key features by using Inverted Pyramid model
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Getting to know the site's information structure, I had a short conversation with both product manager and marketing strategist, and ranked the importance of target users. Base on that, I introduced an inverted pyramid model. As it is displayed in the chart below, the top represents the most substantial, interesting, and important information, whereas both importance and quantity of information decrease as moving downward. In this way, I was able to prioritize the main features by new product & key value, team sales & innovation, and product customization.
              </p>
              
              {/* Two images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-white dark:bg-white p-6 md:p-8" style={{ borderRadius: '10px' }}>
                    <ImageWithFallback
                      src={previousContentStrategyImg}
                      alt="Previous Content Strategy"
                      className="w-full h-auto"
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                  <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Previous Content Strategy</p>
                </div>
                <div>
                  <div className="bg-white dark:bg-white p-6 md:p-8" style={{ borderRadius: '10px' }}>
                    <ImageWithFallback
                      src={invertedPyramidImg}
                      alt="Inverted Pyramid Model"
                      className="w-full h-auto"
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                  <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Inverted Pyramid Model</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Challenge */}
          <div className="mb-16" id="design-challenge">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              The Research
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              During the project timeline, I worked closely with my team to conduct extensive user research during the first 4 weeks of my internship. Thus, my primary research task focused on synthesizing the research data and collecting key insights.
            </p>
            
            {/* Subsection: Understanding Users */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-[#102F56] dark:text-gray-100">
                / Understanding Users
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Base on the information my team provides and user demographics in Google Analytics, the primary buyers of Xenith's product include players, parents, and coaches. In order to illustrate our users and their goals, I created three primary personas and identified their needs, which helped me to find out what is important to our users, and how to build brand communication to convince them to buy our products.
              </p>
              
              {/* Image Carousel/Slideshow Placeholder */}
              <div>
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                >
                  <div>
                    <ImageWithFallback
                      src={personaPlayer}
                      alt="Persona: Player"
                      className="w-full h-auto"
                      style={{ borderRadius: '10px' }}
                    />
                    <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Persona: Player</p>
                  </div>
                  <div>
                    <ImageWithFallback
                      src={personaCoach}
                      alt="Persona: Coach"
                      className="w-full h-auto"
                      style={{ borderRadius: '10px' }}
                    />
                    <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Persona: Coach</p>
                  </div>
                  <div>
                    <ImageWithFallback
                      src={personaParent}
                      alt="Persona: Parent"
                      className="w-full h-auto"
                      style={{ borderRadius: '10px' }}
                    />
                    <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Persona: Parent</p>
                  </div>
                </Slider>
              </div>
            </div>
            
            {/* Subsection: Heuristic Evaluation */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-[#102F56] dark:text-gray-100">
                / Heuristic Evaluation
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                I conducted heuristics evaluation based on Nielsen's ten key usability heuristics, and modified some of the checklists to make applicable evaluations for Xenith. I invited four colleagues who have previous experience of user research. The main findings include:
              </p>
              
              <ul className="list-disc space-y-4 text-lg text-gray-700 dark:text-gray-200 leading-relaxed pl-6 mb-8">
                <li>The website doesn't provide effective comparison between similar products.</li>
                <li>Product categories are not consistent between the header and footer in some pages.</li>
                <li>The homepage didn't provide adequate feedback for user interactions.</li>
              </ul>
              
              {/* Heuristic Evaluation Image */}
              <div>
                <ImageWithFallback
                  src={heuristicEvalImg}
                  alt="Heuristic Evaluation Group Rating Results"
                  className="w-full h-auto"
                  style={{ borderRadius: '10px' }}
                />
                <p className="text-left text-gray-700 dark:text-white mt-4">Heuristic Evaluation Group Rating Results</p>
              </div>
            </div>
          </div>

          {/* Approach & Strategy */}
          <div className="mb-16" id="approach-strategy">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              1. New Homepage
            </h2>
            
            {/* Subsection: Key Features */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-[#102F56] dark:text-gray-100">
                / Key Features
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Based on personas, heuristic evaluations, and usability tests I conducted, my team and I identified the key features that are important to the new webpage (icon credit).
              </p>
              
              {/* Key Features Image */}
              <div>
                <div className="bg-white dark:bg-white p-6 md:p-8" style={{ borderRadius: '10px' }}>
                  <ImageWithFallback
                    src={keyFeaturesImg}
                    alt="Key Features"
                    className="w-full h-auto"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </div>
            </div>
            
            {/* Subsection: Design Iteration */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-[#102F56] dark:text-gray-100">
                / Design Iteration
              </h3>
              
              {/* Desktop */}
              <div className="mb-6">
                <h4 className="text-xl mb-4 text-[#102F56] dark:text-gray-100">
                  // Desktop
                </h4>
                
                {/* Footer */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-[#102F56] dark:text-gray-100">
                    /// Footer
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {/* Round 1 */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[3/1]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={footer1}
                          alt="Footer - Round 1"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: footer1, alt: "Footer - Round 1" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700 dark:text-gray-200">Scroll bar in email lists.</p>
                        <p className="text-gray-700 dark:text-gray-200">Bad UX structure on any screen size.</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[3/1]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={footer2}
                          alt="Footer - Round 2"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: footer2, alt: "Footer - Round 2" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700 dark:text-gray-200">Remove scroll bar.</p>
                        <p className="text-gray-700 dark:text-gray-200">Better size alignment.</p>
                      </div>
                    </div>
                    
                    {/* Final Design */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[3/1]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={footer3}
                          alt="Footer - Final Design"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: footer3, alt: "Footer - Final Design" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Final Design</p>
                        <p className="text-gray-700 dark:text-gray-200">Provide identity checkbox in email lists.</p>
                        <p className="text-gray-700 dark:text-gray-200">Better UX and hierarchy in footer.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Helmet Lineup */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-[#102F56] dark:text-gray-100">
                    /// Helmet Lineup
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {/* Round 1 */}
                    <div className="flex flex-col">
                      <div className="w-full h-[160px] overflow-hidden" style={{ borderRadius: '10px' }}>
                        <ImageWithFallback
                          src={helmetLineup1}
                          alt="Helmet Lineup - Round 1"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: helmetLineup1, alt: "Helmet Lineup - Round 1" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700 dark:text-gray-200">Too big on tablet screens</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div className="flex flex-col">
                      <div className="w-full h-[160px] overflow-hidden" style={{ borderRadius: '10px' }}>
                        <ImageWithFallback
                          src={helmetLineup2}
                          alt="Helmet Lineup - Round 2"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: helmetLineup2, alt: "Helmet Lineup - Round 2" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700 dark:text-gray-200">More appropriate size on tablet screens</p>
                      </div>
                    </div>
                    
                    {/* Final Design */}
                    <div className="flex flex-col">
                      <div className="w-full h-[160px] overflow-hidden" style={{ borderRadius: '10px' }}>
                        <ImageWithFallback
                          src={helmetLineup3}
                          alt="Helmet Lineup - Final Design"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: helmetLineup3, alt: "Helmet Lineup - Final Design" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Final Design</p>
                        <p className="text-gray-700 dark:text-gray-200">Hierarchical product info</p>
                        <p className="text-gray-700 dark:text-gray-200">Responsive across all devices</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main Menu */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-[#102F56] dark:text-gray-100">
                    /// Main Menu
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Round 1 */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[4/3] overflow-hidden" style={{ borderRadius: '10px' }}>
                        <ImageWithFallback
                          src={mainMenu1}
                          alt="Main Menu - Round 1"
                          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: mainMenu1, alt: "Main Menu - Round 1" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700 dark:text-gray-200">No hover status on menu items</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[4/3] overflow-hidden" style={{ borderRadius: '10px' }}>
                        <ImageWithFallback
                          src={mainMenu2}
                          alt="Main Menu - Round 2"
                          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: mainMenu2, alt: "Main Menu - Round 2" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700 dark:text-gray-200">Hover status and arrow indicator</p>
                      </div>
                    </div>
                    
                    {/* Final Design */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[4/3] overflow-hidden" style={{ borderRadius: '10px' }}>
                        <ImageWithFallback
                          src={mainMenu3}
                          alt="Main Menu - Final Design"
                          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: mainMenu3, alt: "Main Menu - Final Design" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Final Design</p>
                        <p className="text-gray-700 dark:text-gray-200">Expandable menu with detailed information</p>
                        <p className="text-gray-700 dark:text-gray-200">Display product categories in images</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile */}
              <div className="mb-6">
                <h4 className="text-xl mb-4 text-[#102F56] dark:text-gray-100">
                  // Mobile
                </h4>
                
                {/* Hero Image UI */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-[#102F56] dark:text-gray-100">
                    /// Hero Image UI
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {/* Round 1 */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[9/16]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={heroMobile1}
                          alt="Hero Image UI - Round 1"
                          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: heroMobile1, alt: "Hero Image UI - Round 1" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700 dark:text-gray-200">Carousel moves all around in responsive</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[9/16]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={heroMobile2}
                          alt="Hero Image UI - Round 2"
                          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: heroMobile2, alt: "Hero Image UI - Round 2" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700 dark:text-gray-200">Fixed carousel spot above the button</p>
                      </div>
                    </div>
                    
                    {/* Round 3 */}
                    <div className="flex flex-col">
                      <div className="w-full aspect-[9/16]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={heroMobile3}
                          alt="Hero Image UI - Round 3"
                          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: heroMobile3, alt: "Hero Image UI - Round 3" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 3</p>
                        <p className="text-gray-700 dark:text-gray-200">Replace carousel with the latest tech/product</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Compare Helmets Chart */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-[#102F56] dark:text-gray-100">
                    /// Compare Helmets Chart
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Round 1 */}
                    <div className="flex flex-col">
                      <div className="w-full" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={compareHelmet1}
                          alt="Compare Helmets Chart - Round 1"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: compareHelmet1, alt: "Compare Helmets Chart - Round 1" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700 dark:text-gray-200">Non-responsive interface</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div className="flex flex-col">
                      <div className="w-full" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={compareHelmet2}
                          alt="Compare Helmets Chart - Round 2"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: compareHelmet2, alt: "Compare Helmets Chart - Round 2" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700 dark:text-gray-200">Small font and requires scroll around too much</p>
                      </div>
                    </div>
                    
                    {/* Round 3 */}
                    <div className="flex flex-col">
                      <div className="w-full" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={compareHelmet3}
                          alt="Compare Helmets Chart - Round 3"
                          className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage({ src: compareHelmet3, alt: "Compare Helmets Chart - Round 3" })}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 'bold' }}>Round 3</p>
                        <p className="text-gray-700 dark:text-gray-200">Compare back and forth with flip-through cards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Xenith's Mobile APP Mockups */}
          <div className="mb-16" id="mobile-app-mockups">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              2. Xenith's Mobile APP Mockups (future)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Before my internship comes to an end, I realized that if Xenith becomes a giant brand like Nike in the future, creating an app will be helpful if more product lines are launched. Thus, I started this self-initiated project to create basic mockup screens for future reference of Xenith mobile app. Below are some sample of the screens I created, the full interaction link can be accessed here.
            </p>
            
            {/* 3x3 Grid of images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <ImageWithFallback 
                  src={mobileApp1}
                  alt="Mobile App Mockup 1"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp1, alt: "Mobile App Mockup 1" })}
                />
              </div>
              <div>
                <ImageWithFallback 
                  src={mobileApp2}
                  alt="Mobile App Mockup 2"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp2, alt: "Mobile App Mockup 2" })}
                />
              </div>
              <div>
                <ImageWithFallback 
                  src={mobileApp3}
                  alt="Mobile App Mockup 3"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp3, alt: "Mobile App Mockup 3" })}
                />
              </div>
              <div>
                <ImageWithFallback 
                  src={mobileApp4}
                  alt="Mobile App Mockup 4"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp4, alt: "Mobile App Mockup 4" })}
                />
              </div>
              <div>
                <ImageWithFallback 
                  src={mobileApp5}
                  alt="Mobile App Mockup 5"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp5, alt: "Mobile App Mockup 5" })}
                />
              </div>
              <div>
                <ImageWithFallback 
                  src={mobileApp6}
                  alt="Mobile App Mockup 6"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp6, alt: "Mobile App Mockup 6" })}
                />
              </div>
              <div>
                <ImageWithFallback 
                  src={mobileApp7}
                  alt="Mobile App Mockup 7"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp7, alt: "Mobile App Mockup 7" })}
                />
              </div>
              <div>
                <ImageWithFallback 
                  src={mobileApp8}
                  alt="Mobile App Mockup 8"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp8, alt: "Mobile App Mockup 8" })}
                />
              </div>
              <div>
                <ImageWithFallback 
                  src={mobileApp9}
                  alt="Mobile App Mockup 9"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setExpandedImage({ src: mobileApp9, alt: "Mobile App Mockup 9" })}
                />
              </div>
            </div>
          </div>

          {/* 3. Product Entry System UI */}
          <div className="mb-16" id="product-entry-system">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              3. Product Entry System UI
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Beside redesigning the Xenith's website, I also participated in creating user interface for Product Entry System of Xenith's Production Facility Lab, where thousands of orders needs to be processed everyday. After conducting a short onsite interview with workers in lab, I sorted out their demands and generated a user flow of a typical order processing procedure.
            </p>
            
            {/* Serial User Flow Chart Image */}
            <div>
              <ImageWithFallback
                src={serialFlowChart}
                alt="Serial User Flow Chart"
                className="w-full h-auto"
                style={{ borderRadius: '10px' }}
              />
              <p className="text-left text-gray-700 dark:text-white mt-4">Serial User Flow Chart</p>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed my-8">
              Then, I created wireframes of the two main screens in low fidelity, with annotated notes on the side illustrating key functions of each section on the pages.
            </p>
            
            {/* Wireframe of Product Entry System */}
            <div>
              <ImageWithFallback
                src={wireframeSystem}
                alt="Wireframe of Product Entry System"
                className="w-full h-auto"
                style={{ borderRadius: '10px' }}
              />
              <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Wireframe of Product Entry System</p>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed my-8">
              After a few reviewing iterations with my team, I designed and coded user interface in HTML/ CSS/ Javascript, where user can make easy transitions between pages (only able to display two pages due to confidentiality), by either clicking on 'New Order' button, or scanning barcode.
            </p>
            
            {/* Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col">
                <ImageWithFallback
                  src={newOrderPage}
                  alt="New Order Page (input with barcode scanner)"
                  className="w-full h-auto"
                  style={{ borderRadius: '10px' }}
                />
                <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">New Order Page (input with barcode scanner)</p>
              </div>
              <div className="flex flex-col">
                <ImageWithFallback
                  src={orderDetailPage}
                  alt="Order Detail Page"
                  className="w-full h-auto"
                  style={{ borderRadius: '10px' }}
                />
                <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Order Detail Page</p>
              </div>
            </div>
          </div>

          {/* Final Implementation */}
          <div className="mb-16" id="final-implementation">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Reflections
            </h2>
            
            {/* Subsection: Understand B2C correlation via push & pull model */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-[#102F56] dark:text-gray-100">
                / Understand B2C correlation via push & pull model
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Since the goal is to build a website for EVERYONE, but every type of user are able to find things they want. Base on my prior experience working as a PM, I introduced this model as the overarching guideline throughout my design process, in order to figure out the correlations between:
              </p>
              
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                <p>
                  <span style={{ fontWeight: 'bold' }}>Visitor:</span> Who are our new buyers? What makes people visit the site? What do they want to find?
                </p>
                <p>
                  <span style={{ fontWeight: 'bold' }}>Product:</span> What are their anxiety of not buying? Why should they buy our product online?
                </p>
                <p>
                  <span style={{ fontWeight: 'bold' }}>Brand communication:</span> What are we trying to let buyers know about? What is doing wrong/not good to them?
                </p>
              </div>
              
              {/* Push & Pull Model Image */}
              <div>
                <ImageWithFallback
                  src={pushPullModel}
                  alt="Push & Pull Model"
                  className="w-full h-auto"
                  style={{ borderRadius: '10px' }}
                />
                <p className="text-left text-gray-700 dark:text-white mt-4">Push & Pull Model</p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-16" id="impact">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Feedback
            </h2>
            
            {/* Testimonial 1 */}
            <div className="mb-10">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4" style={{ fontStyle: 'italic' }}>
                "Mu really did a great job, not just on conducting research and redesign all by himself, but also had a vision to create something new for the future. His work and attitude toward design really impressed me throughout his internship process, we are glad to have him here with us!"
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 text-right">
                — <span style={{ fontWeight: 'bold' }}>Matt Rea</span>, Head of Digital Strategy Team
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="mb-10">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4" style={{ fontStyle: 'italic' }}>
                "I really enjoyed working with Mu as his mentor during this summer. His creative talent and keen business insight is always needed in the current job market, let alone his hardworking and positive attitude toward challenges. Good luck!"
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 text-right">
                — <span style={{ fontWeight: 'bold' }}>Charles Hillard</span>, Design Mentor
              </p>
            </div>
          </div>

          {/* Learnings & Reflections */}
          <div className="mb-16" id="learnings-reflections">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Key Takeaways
            </h2>
            <div className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  Discover the real pain points of your clients, and understand users' potential needs by intensive research.
                </li>
                <li>
                  Besides design, build effective brand communication, and present information effectively in business models.
                </li>
                <li>
                  Follow design guidelines and utilize styles and patterns that are both hierarchical and consistent.
                </li>
                <li>
                  Try to jump out of the box, focus on product lifecycle, create new patterns for future reference!
                </li>
              </ul>
            </div>
            
            {/* Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ImageWithFallback
                  src={teamPhoto}
                  alt="Photo with my team"
                  className="w-full h-96 object-cover"
                  style={{ borderRadius: '10px' }}
                />
                <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Photo with my team</p>
              </div>
              <div>
                <ImageWithFallback
                  src={hustlePhoto}
                  alt="Hustle hard everyday!"
                  className="w-full h-96 object-cover"
                  style={{ borderRadius: '10px' }}
                />
                <p className="text-left text-gray-600 dark:text-white mt-4 text-sm">Hustle hard everyday!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Expanded View Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setExpandedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-7xl max-h-[90vh] relative">
            <ImageWithFallback
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
              style={{ borderRadius: '10px' }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Table of Contents - Subtle */}
      <div className="hidden xl:block fixed top-32 right-8 w-64 p-6 z-40 group">
        {/* Collapsed state - shows icon/text */}
        <div className="absolute top-0 right-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
          <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border border-white/30 dark:border-gray-600/30 rounded-2xl px-4 py-3 shadow-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Contents →</p>
          </div>
        </div>
        
        {/* Expanded state - shows full catalog */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border border-white/30 dark:border-gray-600/30 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xs mb-4 text-gray-400 dark:text-gray-500 tracking-wide uppercase">On this page</h3>
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li key={item.id} className="relative pl-3">
                {activeSection === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-400 dark:bg-gray-600" />
                )}
                <button
                  className={`text-left text-sm transition-colors ${
                    activeSection === item.id ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-[#6DB2FF] dark:to-[#5a9ae6] text-white dark:text-gray-900 p-4 shadow-xl hover:shadow-2xl transition-all z-50 cursor-pointer"
          style={{ borderRadius: '10px' }}
          onClick={scrollToTop}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </main>
  );
}