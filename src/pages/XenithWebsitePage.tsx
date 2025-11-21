import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, ChevronUp, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import xenithImg from "figma:asset/602a1beede549ed02fd7f4ef5e904bf2960ca599.png";
import heatmapImg from "figma:asset/6a0f6dc6ce43fbb4eaec786e594f67199f9d3c85.png";

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
          <img
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
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
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
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
              Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              In the 10-week time span, I collaborated with marketing strategists, product managers, software engineers, and my design mentor Charles, to conduct research, design, prototype, iterate, and finally created seamless and logical user experience, which helped to enhance the number of page views and online purchase.
            </p>
            <div className="mb-8">
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
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
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
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
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
              Break downs
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Before I get started with research and design, I decided to break down the challenge into various sub-tasks and solve them one by one. Here are the major steps of how I accomplish it:
            </p>
            
            {/* Subsection: Visualize User Behaviors on Heatmap */}
            <div className="mb-8">
              <h3 className="text-2xl leading-normal mb-6 text-gray-900 dark:text-gray-100">
                / Visualize User Behaviors on Heatmap
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Tracking user's behavior is an effective way to know website's popular content, so I recommended recording users clicks on Xenith's website and generate heatmap in Hotjar, which helped to discover their potential needs. Combining results of heatmap(left) and usability testing, I conducted the redesign of Xenith's website(right).
              </p>
              
              {/* Two images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={heatmapImg}
                    alt="Heatmap analysis"
                    className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ borderRadius: '10px' }}
                    onClick={() => setExpandedImage({ src: heatmapImg, alt: "Heatmap analysis" })}
                  />
                  <p className="text-left text-gray-700 dark:text-gray-200 mt-4">Heatmap recording user's click on popular content</p>
                </div>
                <div>
                  <img 
                    src={heatmapImg}
                    alt="Website redesign"
                    className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ borderRadius: '10px' }}
                    onClick={() => setExpandedImage({ src: heatmapImg, alt: "Website redesign" })}
                  />
                  <p className="text-left text-gray-700 dark:text-gray-200 mt-4">Redesigned website base on user research</p>
                </div>
              </div>
            </div>
            
            {/* Subsection: Information Architecture */}
            <div className="mb-8">
              <h3 className="text-2xl leading-normal mb-6 text-gray-900 dark:text-gray-100">
                / Information Architecture
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Since I don't have prior experience to the user flow or a clear understanding of the information architecture, I decided to construct an interaction map to generate a static representation of both interval and hierarchical relations between webpages, which visualizes all the possible interactions. In this way, it would be more efficient for me to discover what kind of values the website could provide for users.
              </p>
              
              {/* Interaction Map Image */}
              <div>
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                </div>
                <p className="text-left text-gray-600 dark:text-gray-400 mt-4 text-sm">Interaction Map of Xenith.com</p>
              </div>
            </div>
            
            {/* Subsection: Prioritize key features by using Inverted Pyramid model */}
            <div className="mb-8">
              <h3 className="text-2xl leading-normal mb-6 text-gray-900 dark:text-gray-100">
                / Prioritize key features by using Inverted Pyramid model
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Getting to know the site's information structure, I had a short conversation with both product manager and marketing strategist, and ranked the importance of target users. Base on that, I introduced an inverted pyramid model. As it is displayed in the chart below, the top represents the most substantial, interesting, and important information, whereas both importance and quantity of information decrease as moving downward. In this way, I was able to prioritize the main features by new product & key value, team sales & innovation, and product customization.
              </p>
              
              {/* Two images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                    <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                  </div>
                  <p className="text-left text-gray-600 dark:text-gray-400 mt-4 text-sm">Previous Content Strategy</p>
                </div>
                <div>
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                    <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                  </div>
                  <p className="text-left text-gray-600 dark:text-gray-400 mt-4 text-sm">Inverted Pyramid Model</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Challenge */}
          <div className="mb-16" id="design-challenge">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
              The Research
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              During the project timeline, I worked closely with my team to conduct extensive user research during the first 4 weeks of my internship. Thus, my primary research task focused on synthesizing the research data and collecting key insights.
            </p>
            
            {/* Subsection: Understanding Users */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">
                / Understanding Users
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Base on the information my team provides and user demographics in Google Analytics, the primary buyers of Xenith's product include players, parents, and coaches. In order to illustrate our users and their goals, I created three primary personas and identified their needs, which helped me to find out what is important to our users, and how to build brand communication to convince them to buy our products.
              </p>
              
              {/* Image Carousel/Slideshow Placeholder */}
              <div>
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image Carousel/Slideshow</span>
                </div>
              </div>
            </div>
            
            {/* Subsection: Heuristic Evaluation */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">
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
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                </div>
                <p className="text-left text-gray-700 dark:text-gray-200 mt-4">Heuristic Evaluation Group Rating Results</p>
              </div>
            </div>
          </div>

          {/* Approach & Strategy */}
          <div className="mb-16" id="approach-strategy">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
              1. New Homepage
            </h2>
            
            {/* Subsection: Key Features */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">
                / Key Features
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Based on personas, heuristic evaluations, and usability tests I conducted, my team and I identified the key features that are important to the new webpage (icon credit).
              </p>
              
              {/* Key Features Image */}
              <div>
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                </div>
              </div>
            </div>
            
            {/* Subsection: Design Iteration */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">
                / Design Iteration
              </h3>
              
              {/* Desktop */}
              <div className="mb-6">
                <h4 className="text-xl mb-4 text-gray-900 dark:text-gray-100">
                  // Desktop
                </h4>
                
                {/* Footer */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-gray-900 dark:text-gray-100">
                    /// Footer
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Round 1 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700">Scroll bar in email lists.</p>
                        <p className="text-gray-700">Bad UX structure on any screen size.</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700">Remove scroll bar.</p>
                        <p className="text-gray-700">Better size alignment.</p>
                      </div>
                    </div>
                    
                    {/* Final Design */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Final Design</p>
                        <p className="text-gray-700">Provide identity checkbox in email lists.</p>
                        <p className="text-gray-700">Better UX and hierarchy in footer.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Helmet Lineup */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-gray-900 dark:text-gray-100">
                    /// Helmet Lineup
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Round 1 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700">Too big on tablet screens</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700">More appropriate size on tablet screens</p>
                      </div>
                    </div>
                    
                    {/* Final Design */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Final Design</p>
                        <p className="text-gray-700">Hierarchical product info</p>
                        <p className="text-gray-700">Responsive across all devices</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main Menu */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-gray-900 dark:text-gray-100">
                    /// Main Menu
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Round 1 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700">No hover status on menu items</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700">Hover status and arrow indicator</p>
                      </div>
                    </div>
                    
                    {/* Final Design */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Final Design</p>
                        <p className="text-gray-700">Expandable menu with detailed information</p>
                        <p className="text-gray-700">Display product categories in images</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile */}
              <div className="mb-6">
                <h4 className="text-xl mb-4 text-gray-900 dark:text-gray-100">
                  // Mobile
                </h4>
                
                {/* Hero Image UI */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-gray-900 dark:text-gray-100">
                    /// Hero Image UI
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Round 1 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700">Carousel moves all around in responsive</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700">Fixed carousel spot above the button</p>
                      </div>
                    </div>
                    
                    {/* Round 3 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 3</p>
                        <p className="text-gray-700">Replace carousel with the latest tech/product</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Compare Helmets Chart */}
                <div className="mb-4">
                  <h5 className="text-lg mb-3 text-gray-900 dark:text-gray-100">
                    /// Compare Helmets Chart
                  </h5>
                  
                  {/* Three iterations side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Round 1 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 1</p>
                        <p className="text-gray-700">Non-responsive interface</p>
                      </div>
                    </div>
                    
                    {/* Round 2 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 2</p>
                        <p className="text-gray-700">Small font and requires scroll around too much</p>
                      </div>
                    </div>
                    
                    {/* Round 3 */}
                    <div>
                      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                        <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-900" style={{ fontWeight: 'bold' }}>Round 3</p>
                        <p className="text-gray-700">Compare back and forth with flip-through cards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Xenith's Mobile APP Mockups */}
          <div className="mb-16" id="mobile-app-mockups">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
              2. Xenith's Mobile APP Mockups (future)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Before my internship comes to an end, I realized that if Xenith becomes a giant brand like Nike in the future, creating an app will be helpful if more product lines are launched. Thus, I started this self-initiated project to create basic mockup screens for future reference of Xenith mobile app. Below are some sample of the screens I created, the full interaction link can be accessed here.
            </p>
            
            {/* 3x3 Grid of images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num}>
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                    <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Product Entry System UI */}
          <div className="mb-16" id="product-entry-system">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
              3. Product Entry System UI
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Beside redesigning the Xenith's website, I also participated in creating user interface for Product Entry System of Xenith's Production Facility Lab, where thousands of orders needs to be processed everyday. After conducting a short onsite interview with workers in lab, I sorted out their demands and generated a user flow of a typical order processing procedure.
            </p>
            
            {/* Serial User Flow Chart Image */}
            <div>
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
              </div>
              <p className="text-left text-gray-700 dark:text-gray-200 mt-4">Serial User Flow Chart</p>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed my-8">
              Then, I created wireframes of the two main screens in low fidelity, with annotated notes on the side illustrating key functions of each section on the pages.
            </p>
            
            {/* Wireframe of Product Entry System */}
            <div>
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
              </div>
              <p className="text-left text-gray-600 dark:text-gray-400 mt-4 text-sm">Wireframe of Product Entry System</p>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed my-8">
              After a few reviewing iterations with my team, I designed and coded user interface in HTML/ CSS/ Javascript, where user can make easy transitions between pages (only able to display two pages due to confidentiality), by either clicking on 'New Order' button, or scanning barcode.
            </p>
            
            {/* Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                </div>
                <p className="text-left text-gray-600 dark:text-gray-400 mt-4 text-sm">New Order Page (input with barcode scanner)</p>
              </div>
              <div>
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                </div>
                <p className="text-left text-gray-600 dark:text-gray-400 mt-4 text-sm">Order Detail Page</p>
              </div>
            </div>
          </div>

          {/* Final Implementation */}
          <div className="mb-16" id="final-implementation">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
              Reflections
            </h2>
            
            {/* Subsection: Understand B2C correlation via push & pull model */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">
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
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                </div>
                <p className="text-left text-gray-700 dark:text-gray-200 mt-4">Push & Pull Model</p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-16" id="impact">
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
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
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#6DB2FF] dark:to-[#6DB2FF] bg-clip-text text-transparent">
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
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                </div>
                <p className="text-left text-gray-600 dark:text-gray-400 mt-4 text-sm">Photo with my team</p>
              </div>
              <div>
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                  <span className="text-gray-500 dark:text-gray-400">Placeholder Image</span>
                </div>
                <p className="text-left text-gray-600 dark:text-gray-400 mt-4 text-sm">Hustle hard everyday!</p>
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
            <img
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
      <div className="hidden xl:block fixed top-24 right-8 w-64 p-6 z-40">
        <h3 className="text-xs mb-4 text-gray-400 tracking-wide uppercase">On this page</h3>
        <ul className="space-y-2">
          {tableOfContents.map((item) => (
            <li key={item.id} className="relative pl-3">
              {activeSection === item.id && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-400" />
              )}
              <button
                className={`text-left text-sm transition-colors ${
                  activeSection === item.id ? 'text-gray-700' : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-xl hover:shadow-2xl transition-all z-50"
          style={{ borderRadius: '10px' }}
          onClick={scrollToTop}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </main>
  );
}