"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { BookOpen, Lightbulb, Link, MessageSquare, Sparkles, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLarge"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Stories",
          id: "#features",
        },
        {
          name: "Episodes",
          id: "#blog",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/cinema-3d-glasses_23-2148115328.jpg"
      logoAlt="Unusual Stories Logo"
      brandName="Unusual Stories"
    />
  </div>

  <div id="home" data-section="home">
      <HeroCentered
      background={{
        variant: "downward-rays-static-grid",
      }}
      title="Unleash Your Imagination with Unusual Stories"
      description="Dive into worlds crafted by friends, where every tale defies the ordinary. Experience unique narratives, unexpected twists, and stories that are anything but magic-as-usual."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/flat-lay-education-day-concept_23-2148779724.jpg",
          alt: "Story Creator 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-man-wearing-apron_23-2149007471.jpg",
          alt: "Story Creator 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-cheerful-student-guy-standing-pale-outdoor-wall_74855-4289.jpg",
          alt: "Story Creator 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-african-young-lady-walking-outdoors_171337-15134.jpg",
          alt: "Story Creator 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/teenager-with-glasses-holding-books_1098-4054.jpg",
          alt: "Teenager with glasses holding books",
        },
      ]}
      avatarText="Join our growing community of readers!"
      buttons={[
        {
          text: "Start Reading",
          href: "#blog",
        },
        {
          text: "Submit Your Idea",
          href: "#contact",
        },
      ]}
      buttonAnimation="opacity"
      marqueeItems={[
        {
          type: "text",
          text: "New Stories Every Week!",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/world-aids-day-awareness-illustration_23-2151882163.jpg",
          alt: "Abstract concept of storytelling",
        },
        {
          type: "text-icon",
          text: "Reader Community",
          icon: Users,
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/workspace-with-note-brick-wall_53876-31266.jpg",
          alt: "Creative writing inspiration",
        },
        {
          type: "text",
          text: "Unforgettable Worlds Await",
        },
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="Crafting Stories Beyond the Usual"
      description="We are a collective of friends passionate about storytelling, tired of predictable plots and conventional magic. Our platform is a hub for narratives that challenge norms and spark true imagination."
      subdescription="Each story is a journey into the unexpected, penned with creativity and a touch of the extraordinary."
      icon={BookOpen}
      imageSrc="http://img.b2bpic.net/free-photo/group-international-architects-discuss-ideas-engineering-project-enjoy-working-process-together-pose-desktop-concentrated-paper-yellow-wall-diverse-colleagues-inn-office_273609-50547.jpg"
      imageAlt="Friends collaborating on a story idea"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Diverse Worlds",
          description: "Explore richly imagined settings, from futuristic dystopias to realms touched by forgotten lore.",
          bentoComponent: "media-stack",
          items: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/vertical-aerial-shot-eltz-castle-surrounded-with-clouds-trees-germany_181624-2231.jpg",
              imageAlt: "Mysterious old castle",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-creepy-forest-creature_23-2150872658.jpg",
              imageAlt: "Fantasy creature in a forest",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/technological-exploration-settlement_23-2151768618.jpg",
              imageAlt: "Futuristic cityscape",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cinema-3d-glasses_23-2148115328.jpg",
          imageAlt: "mysterious story setting ancient castle",
        },
        {
          title: "Unpredictable Plots",
          description: "Say goodbye to clichés. Our stories are full of twists and turns you'll never see coming.",
          bentoComponent: "reveal-icon",
          icon: Zap,
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-education-day-concept_23-2148779724.jpg",
          imageAlt: "mysterious story setting ancient castle",
        },
        {
          title: "Community Voices",
          description: "Inspired by our community, we weave diverse perspectives into narratives that truly connect.",
          bentoComponent: "orbiting-icons",
          centerIcon: Link,
          items: [
            {
              icon: Users,
              ring: 1,
            },
            {
              icon: MessageSquare,
              ring: 2,
            },
            {
              icon: Lightbulb,
              ring: 3,
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-wearing-apron_23-2149007471.jpg",
          imageAlt: "mysterious story setting ancient castle",
        },
      ]}
      title="Our Unique Storytelling Approach"
      description="We believe in narratives that surprise, challenge, and resonate. Discover the pillars that make our stories stand out."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Latest Episodes"
      description="Catch up on our newest typed stories, released every 3-4 days. Fresh narratives await!"
      blogs={[
        {
          id: "1",
          category: "Mystery",
          title: "The Whispering Labyrinth of Eldoria",
          excerpt: "A detective unravels a conspiracy in a city where shadows hold ancient secrets. Not your usual magic, but something far more unsettling.",
          imageSrc: "http://img.b2bpic.net/free-photo/wide-shot-road-surrounded-by-trees-forest_181624-4090.jpg",
          imageAlt: "Dark labyrinth entrance",
          authorName: "Alex Finch",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-avantgarde-head-piece_23-2149020819.jpg",
          date: "April 18, 2024",
        },
        {
          id: "2",
          category: "Fantasy",
          title: "Echoes of the Forgotten Star",
          excerpt: "A mapmaker discovers a celestial anomaly that rewrites history, challenging everything we know about the universe.",
          imageSrc: "http://img.b2bpic.net/free-photo/wizard-hilltop_23-2152017130.jpg",
          imageAlt: "Ancient map and compass",
          authorName: "Sarah Green",
          authorAvatar: "http://img.b2bpic.net/free-photo/indoor-shot-beautiful-young-caucasian-female-wearing-polo-shirt-rectangular-glasses-smiling-happily-while-posing-isolated_273609-1875.jpg",
          date: "April 22, 2024",
        },
        {
          id: "3",
          category: "Sci-Fi",
          title: "The Glitch in the Chronos Protocol",
          excerpt: "In a future where time is a currency, a programmer uncovers a flaw that could collapse reality itself. A thrilling, tech-infused adventure.",
          imageSrc: "http://img.b2bpic.net/free-photo/robot-90s_23-2151901192.jpg",
          imageAlt: "Futuristic digital clock",
          authorName: "Marcus Thorne",
          authorAvatar: "http://img.b2bpic.net/free-photo/young-beautiful-lady-with-dark-curly-hair-khaki-shirt-holding-laptop-with-notepad-cup-coffee-go-hands-dreamily-looking-camera-isolated_574295-2237.jpg",
          date: "April 26, 2024",
        },
        {
          id: "4",
          category: "Adventure",
          title: "Beneath the Obsidian Sky",
          excerpt: "A group of explorers venture into a land where the sun never sets, guided by a prophecy written in starlight, not spells.",
          imageSrc: "http://img.b2bpic.net/free-photo/magical-fantasy-landscape_23-2151851442.jpg",
          imageAlt: "Lush bioluminescent forest",
          authorName: "Lena Petrova",
          authorAvatar: "http://img.b2bpic.net/free-photo/girl-studying-university-library_23-2148844689.jpg",
          date: "April 30, 2024",
        },
        {
          id: "5",
          category: "Cosmic",
          title: "Whispers from the Void Nexus",
          excerpt: "An astronaut stranded light-years from home finds communication with an entity from beyond known space, blurring lines of existence.",
          imageSrc: "http://img.b2bpic.net/free-photo/technological-exploration-settlement_23-2151768676.jpg",
          imageAlt: "Nebula and cosmic dust clouds",
          authorName: "Jian Li",
          authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-redheaded-girl-reads-book_8353-9124.jpg",
          date: "May 4, 2024",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Avid Reader",
          company: "Story Enthusiast",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-reading-bed_23-2147737679.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "2",
          name: "Michael K.",
          role: "Book Blogger",
          company: "Narrative Navigator",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-has-idea-while-reading-book_114579-79409.jpg",
          imageAlt: "Michael Kim",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Fantasy Fan",
          company: "World Weaver",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-cafe-enjoying-book_23-2150064699.jpg",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "4",
          name: "David C.",
          role: "Sci-Fi Buff",
          company: "Future Visionary",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-movie-night_23-2149307321.jpg",
          imageAlt: "David Chen",
        },
        {
          id: "5",
          name: "Olivia M.",
          role: "Mystery Lover",
          company: "Plot Theorist",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-doctor-shaking-hands-with-her-female-patient-while-meeting-clinic-focus-is-happy-woman_637285-1785.jpg",
          imageAlt: "Olivia Martinez",
        },
      ]}
      title="What Our Readers Say"
      description="Hear from the community who've embarked on these unforgettable literary journeys."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "How often are new episodes posted?",
          content: "We strive to post new episodes every 3 to 4 days, ensuring a continuous stream of fresh and engaging content for our readers.",
        },
        {
          id: "2",
          title: "Can I submit my own story ideas?",
          content: "Absolutely! We welcome ideas that fit our 'not like the usual magic stories' theme. Please use the contact form to share your concept.",
        },
        {
          id: "3",
          title: "Are the stories suitable for all ages?",
          content: "Our stories are generally aimed at a mature young adult and adult audience. We will include content warnings if specific episodes contain sensitive material.",
        },
        {
          id: "4",
          title: "What kind of genres do you cover?",
          content: "We explore a wide range of genres, always with our unique twist: fantasy without conventional magic, sci-fi with philosophical depth, mysteries with surreal elements, and more.",
        },
        {
          id: "5",
          title: "Is there a subscription fee to read?",
          content: "All our typed content is currently free to read. We aim to keep our stories accessible to everyone who enjoys unique narratives.",
        },
      ]}
      sideTitle="Questions?"
      sideDescription="Find answers to common questions about our stories, submission process, and publishing schedule."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static-grid",
      }}
      tag="Connect With Us"
      title="Share Your Ideas or Just Say Hello!"
      description="Have an unusual story idea? Want to give feedback? Reach out to us and become a part of our creative journey."
      imageSrc="http://img.b2bpic.net/free-photo/hands-businessman-using-laptop-internet_24972-1225.jpg"
      imageAlt="Creative writing desk with a laptop"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="By clicking Send Message you're confirming that you agree with our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="http://img.b2bpic.net/free-photo/cinema-3d-glasses_23-2148115328.jpg"
      logoText="Unusual Stories"
      copyrightText="© 2024 Unusual Stories | All Rights Reserved."
      socialLinks={[
        {
          icon: Zap,
          href: "#",
          ariaLabel: "Twitter",
        },
        {
          icon: Sparkles,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: BookOpen,
          href: "#",
          ariaLabel: "Goodreads",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
