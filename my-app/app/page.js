"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

const tabs = [
  "About",
  "Research",
  "Personas",
  "Scenario",
  "Storyboard",
  "Moodboard",
  "Flowchart",
  "Wireframes",
  "GUI",
  "Prototype",
  "References",
];

const teamMembers = [
  {
    name: "Marcos Sanabria",
    role: "Engineer",
    email: "Msana023@fiu.edu",
    github: "github.com/Mago223",
    linkedin: "linkedin.com/in/marcossanabria",
  },
  {
    name: "Chelsea Ross",
    role: "Engineer",
    email: "Cross071@fiu.edu",
    github: "none",
    linkedin: "linkedin.com/in/chelsea-ross-8a5634284",
  },
  {
    name: "Jeffrey Mourra",
    role: "Engineer",
    email: "Jmour008@fiu.edu",
    github: "github.com/jmurra",
    linkedin: "none",
  },
];

const PrototypeContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-6xl mx-auto grid grid-cols-2 gap-8"
  >
    {[
      {
        title: "Login",
        image: "/saveflowlogin.png",
        description: "Secure and simple login experience",
      },
      {
        title: "Signup",
        image: "/saveflowsignup.png",
        description: "Quick and easy account creation",
      },
      {
        title: "Dashboard",
        image: "/saveflowdashboard.png",
        description: "Comprehensive financial overview",
      },
      {
        title: "Income & Expenses",
        image: "/saveflowinput.png",
        description: "Easy transaction tracking",
      },
    ].map((page, index) => (
      <motion.div
        key={index}
        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        {/* Image container with aspect ratio */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-800">
          <img
            src={page.image}
            alt={page.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h4 className="text-xl font-medium text-purple-300 mb-2">
            {page.title}
          </h4>
          <p className="text-gray-400">{page.description}</p>
        </div>
      </motion.div>
    ))}

    <motion.div
      className="col-span-2 bg-gradient-to-r from-purple-900/20 to-purple-700/20 border border-purple-500/20 rounded-xl p-6 text-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-purple-300 mb-4">
        Prototype Preview
      </h3>
      <p className="text-gray-300 mb-4">
        Explore our prototype to see how SaveFlow can revolutionize your
        financial management.
      </p>
      <motion.button
        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Full Prototype
      </motion.button>
    </motion.div>
  </motion.div>
);

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto space-y-8 text-gray-300"
  >
    {/* Team Section */}
    <section className="text-center mb-12">
      <motion.h3
        className="text-3xl font-semibold text-purple-300 mb-8"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        Our Team
      </motion.h3>
      <div className="grid md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-xl font-medium text-purple-300 mb-2">
              {member.name}
            </h4>
            <p className="text-gray-400 mb-3">{member.role}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={16} />
                <a href={`mailto:${member.email}`} className="text-sm">
                  {member.email}
                </a>
              </div>
              <div className="flex justify-center gap-4">
                {member.github !== "none" && (
                  <a
                    href={`https://${member.github}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {member.linkedin !== "none" && (
                  <a
                    href={`https://${member.linkedin}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Introduction Section */}
    <section className="space-y-4">
      <motion.h3
        className="text-3xl font-semibold text-purple-300 mb-6"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        About SaveFlow
      </motion.h3>
      <p className="text-lg leading-relaxed">
        SaveFlow is an innovative financial management application designed to
        transform how you interact with your money. Our platform combines
        intuitive design with powerful features to make budgeting accessible and
        effective for everyone.
      </p>
    </section>

    {/* Key Features */}
    <section className="grid md:grid-cols-2 gap-6 pt-8">
      <motion.div
        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h4 className="text-xl font-medium text-purple-300 mb-3">Mission</h4>
        <p className="text-gray-400">
          Our mission is to empower individuals with the tools and knowledge
          they need to achieve financial freedom through effective budget
          management and smart financial planning.
        </p>
      </motion.div>

      <motion.div
        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h4 className="text-xl font-medium text-purple-300 mb-3">Vision</h4>
        <p className="text-gray-400">
          We envision a world where financial stress is eliminated through smart
          technology and educational resources that make budgeting intuitive and
          accessible to everyone.
        </p>
      </motion.div>
    </section>

    {/* Features Section */}
    <section className="pt-8">
      <h3 className="text-2xl font-semibold text-purple-300 mb-6">
        Key Features
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Smart Budgeting",
            description:
              "Budget recommendations based on your spending patterns",
          },
          {
            title: "Real-time Tracking",
            description:
              "Instant updates and notifications for your financial activities",
          },
          {
            title: "Custom Goals",
            description:
              "Set and track personal financial goals with detailed progress metrics",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-medium text-purple-300 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Contact Section */}
    <section className="pt-8">
      <motion.div
        className="p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-purple-700/20 border border-purple-500/20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-purple-300 mb-4">
          Get Started
        </h3>
        <p className="text-gray-300 mb-4">
          Ready to take control of your finances? Join thousands of users who
          have already transformed their financial lives with SaveFlow.
        </p>
        <motion.button
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </section>
  </motion.div>
);

const PersonasContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto space-y-8 text-gray-300"
  >
    <section className="text-center mb-12">
      <motion.h3
        className="text-3xl font-semibold text-purple-300 mb-8"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        User Personas
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Persona 1 */}
        <motion.div
          className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-full h-80 mb-6 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
            <Image
              src="/Vivi.png"
              alt="Persona 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h4 className="text-xl font-medium text-purple-300 mb-4">Vivi N.</h4>
          <p className="text-gray-400">
            25 year old single construction worker.
          </p>
        </motion.div>

        {/* Persona 2 */}
        <motion.div
          className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-full h-80 mb-6 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
            <Image
              src="/Jonathan.png"
              alt="Persona 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h4 className="text-xl font-medium text-purple-300 mb-4">
            Jonathan J.
          </h4>
          <p className="text-gray-400">32 year old married pilot.</p>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

const ScenariosContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto space-y-8 text-gray-300"
  >
    <section className="text-center mb-8">
      <motion.h3
        className="text-3xl font-semibold text-purple-300 mb-8"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        User Scenarios
      </motion.h3>

      <div className="space-y-8">
        {/* Scenario 1 */}
        <motion.div
          className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-left"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <h4 className="text-2xl font-medium text-purple-300 mb-4">
            Scenario 1: Aware of fast food add-ups
          </h4>
          <p className="text-gray-400 leading-relaxed whitespace-pre-line">
            Alex is a part time student at Florida International University.
            This is the first year Alex is living away from his family. For the
            first couple weeks he has been buying fast food and eating out
            everyday. Some time passes and Alex receives a message from his
            mother that he has been spending too much money on take-out and
            restaurants and commends him to start cooking or to create a budget.
            With all the little time Alex has due to classes and poor planning
            Alex begins to panic not knowing what to do. The following day an ad
            pops up on his phone about SaveFlow, a web application for budgeting
            called SaveFlow. After downloading the app and creating an account
            using his fiu email AlexCar@fiu.edu and setting his password as
            KingAlex23. Alex a skeptical young man, goes on about his day
            because he did not want to buy the subscription. He returns the
            following day to the website and Logs in, purchases the $3.99
            subscription he navigates to the budget page, sets a new daily food
            expense of Chipotle for $12.99 and saves his data. He then navigates
            to the analysis tab which gives him a monthly analysis of what his
            expected expenses would add up to if he bought Chipotle everyday for
            the rest of the month.
          </p>
        </motion.div>

        {/* Scenario 2 */}
        <motion.div
          className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-left"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          <h4 className="text-2xl font-medium text-purple-300 mb-4">
            Scenario 2: Budgeting For Rent
          </h4>
          <p className="text-gray-400 leading-relaxed whitespace-pre-line">
            Sarah is a full time mom with 2 children ages 2 and 4. Sarah has
            started paying childcare for her children because her sister who
            used to live with her and help her watch the kids has moved away to
            college. Sarah has seen the amount child care will take from her
            paycheck and decides it is time for her to become financially savvy.
            She heard about the SaveFlow app from a coworker and decided she
            wants to give it a try. After signing up and using her email
            SarahZarah@yahoo.com and using 123456world! As her password she
            wants to log in and set her rent as the first category she wants to
            monitor. She selects the budget amount of $2300 and the system
            calculates and saves the data. The system then displays the
            calculations of charts on how much she will be spending over a
            number of months.
          </p>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

const MoodboardContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto space-y-8 text-gray-300"
  >
    <section>
      <motion.h3
        className="text-3xl font-semibold text-purple-300 mb-8 text-center"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        Design Moodboard
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Color Palette */}
        <motion.div
          className="p-6 rounded-xl bg-white/5 border border-white/10 col-span-2 md:col-span-1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-lg font-medium text-purple-300 mb-4">
            Color Palette
          </h4>
          <div className="space-y-3">
            <div
              className="h-8 rounded-lg bg-purple-600"
              title="Primary Purple"
            />
            <div
              className="h-8 rounded-lg bg-violet-500"
              title="Accent Violet"
            />
            <div
              className="h-8 rounded-lg bg-gray-950"
              title="Dark Background"
            />
            <div
              className="h-8 rounded-lg bg-white/10"
              title="Subtle Overlay"
            />
            <div
              className="h-8 rounded-lg bg-purple-300"
              title="Text Highlight"
            />
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          className="p-6 rounded-xl bg-white/5 border border-white/10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-lg font-medium text-purple-300 mb-4">
            Typography
          </h4>
          <div className="space-y-4">
            <p className="text-4xl font-bold tracking-tighter">Display</p>
            <p className="text-2xl font-semibold">Headings</p>
            <p className="text-base">Body Text</p>
            <p className="text-sm text-gray-400">Caption Text</p>
          </div>
        </motion.div>

        {/* UI Elements */}
        <motion.div
          className="p-6 rounded-xl bg-white/5 border border-white/10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-lg font-medium text-purple-300 mb-4">
            UI Elements
          </h4>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-purple-600 rounded-lg w-full">
              Button
            </button>
            <div className="p-3 bg-white/5 rounded-lg">Card</div>
            <div className="h-2 bg-purple-600 rounded-full w-3/4"></div>
          </div>
        </motion.div>

        {/* Visual Style */}
        <motion.div
          className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 via-purple-800/20 to-violet-900/20 border border-purple-500/20 col-span-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-lg font-medium text-purple-300 mb-4">
            Visual Style
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"></div>
              <p className="text-sm text-gray-400">Glassmorphism</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-br from-purple-600/20 to-violet-600/20"></div>
              <p className="text-sm text-gray-400">Gradients</p>
            </div>
          </div>
        </motion.div>

        {/* Design Principles */}
        <motion.div
          className="p-6 rounded-xl bg-white/5 border border-white/10 col-span-2 md:col-span-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-lg font-medium text-purple-300 mb-4">
            Design Principles
          </h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-purple-300 font-medium mb-2">Minimalist</p>
              <p className="text-sm text-gray-400">Clean and focused design</p>
            </div>
            <div>
              <p className="text-purple-300 font-medium mb-2">Modern</p>
              <p className="text-sm text-gray-400">Contemporary aesthetics</p>
            </div>
            <div>
              <p className="text-purple-300 font-medium mb-2">Professional</p>
              <p className="text-sm text-gray-400">Trust-inspiring interface</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

const StoryboardContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto space-y-8 text-gray-300"
  >
    <section>
      <motion.h3
        className="text-3xl font-semibold text-purple-300 mb-8 text-center"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        User Journey Storyboard
      </motion.h3>

      <div className="space-y-12">
        {/* Frame 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative rounded-xl bg-white/5 border border-white/10 p-4 h-64">
            <Image
              src="/sb1.jpg"
              alt="Initial App Launch"
              className="rounded-lg object-contain w-full h-full"
              width={500}
              height={300}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm font-medium text-purple-300">
                Step 1
              </span>
              <h4 className="text-xl font-medium text-purple-300">
                Initial App Launch
              </h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              User receives an ad and decides to download SaveFlow to better
              help his budgeting.
            </p>
          </div>
        </motion.div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="h-8 w-px bg-purple-500/20"></div>
        </div>

        {/* Frame 2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative rounded-xl bg-white/5 border border-white/10 p-4 h-64">
            <Image
              src="/sb2.jpg"
              alt="Budget Creation"
              className="rounded-lg object-contain w-full h-full"
              width={500}
              height={300}
            />
          </div>
          <div className="space-y-4 md:order-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm font-medium text-purple-300">
                Step 2
              </span>
              <h4 className="text-xl font-medium text-purple-300">
                Budget Creation
              </h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Once the user opens the app and creates an account, they are
              prompted questions on their income and their estimated monthly
              expenses.
            </p>
          </div>
        </motion.div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="h-8 w-px bg-purple-500/20"></div>
        </div>

        {/* Frame 3 */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative rounded-xl bg-white/5 border border-white/10 p-4 h-64">
            <Image
              src="/sb3.jpg"
              alt="Expense Tracking"
              className="rounded-lg object-contain w-full h-full"
              width={500}
              height={300}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm font-medium text-purple-300">
                Step 3
              </span>
              <h4 className="text-xl font-medium text-purple-300">
                Expense Tracking
              </h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              After setting up their account, the user takes time to log down
              expenses so the app can help them budget accurately.
            </p>
          </div>
        </motion.div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="h-8 w-px bg-purple-500/20"></div>
        </div>

        {/* Frame 4 */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative rounded-xl bg-white/5 border border-white/10 p-4 h-64">
            <Image
              src="/sb4.jpg"
              alt="Progress Analysis"
              className="rounded-lg object-contain w-full h-full"
              width={500}
              height={300}
            />
          </div>
          <div className="space-y-4 md:order-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm font-medium text-purple-300">
                Step 4
              </span>
              <h4 className="text-xl font-medium text-purple-300">
                Progress Analysis
              </h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The app presents the user with a dynamic chart of their income and
              expenses, keeping tabs on their remaining monthly income as well
              as upcoming payments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

const FlowchartContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto space-y-8 text-gray-300"
  >
    <section>
      <motion.h3
        className="text-3xl font-semibold text-purple-300 mb-8 text-center"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        App Flowchart
      </motion.h3>

      <motion.div
        className="relative rounded-xl bg-white/5 border border-white/10 p-6 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative h-[600px] w-full">
          <Image
            src="/Flowchart.png"
            alt="SaveFlow System Flowchart"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>

      <motion.div
        className="mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-900/20 via-purple-800/20 to-violet-900/20 border border-purple-500/20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h4 className="text-xl font-medium text-purple-300 mb-4">
          Application Overview
        </h4>
        <p className="text-gray-400 leading-relaxed">
          This flowchart illustrates the complete flow of SaveFlow, showcasing
          the different processes when first getting the app. The user must
          create their account and enter their information. They can then choose
          to create a budget goal or go straight to the dashboard and see their
          analytics.
        </p>
      </motion.div>
    </section>
  </motion.div>
);

const WireframesContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto space-y-8 text-gray-300"
  >
    <section>
      <motion.h3
        className="text-3xl font-semibold text-purple-300 mb-8 text-center"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        Wireframes
      </motion.h3>

      {/* Theme and Metaphor */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div
          className="p-6 rounded-xl bg-white/5 border border-white/10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-lg font-medium text-purple-300 mb-4">Theme</h4>
          <p className="text-gray-400 leading-relaxed">
            The theme of SaveFlow centers on financial empowerment and clarity.
            By using a sleek, dark interface with vibrant purple accents, the
            design evokes a sense of professionalism and focus. The central
            wheel on the dashboard visually organizes income and expenses,
            making it easy for users to understand and manage their finances at
            a glance. The intuitive layout and color-coded categories are
            designed to give users a clear, organized perspective on their
            financial health, fostering confidence and a sense of control in
            budgeting and spending decisions.
          </p>
        </motion.div>
        <motion.div
          className="p-6 rounded-xl bg-white/5 border border-white/10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-lg font-medium text-purple-300 mb-4">Metaphor</h4>
          <p className="text-gray-400 leading-relaxed">
            The metaphor underlying the wireframes is that of a financial wheel
            on a dashboard, where users can quickly visualize and comprehend the
            core aspects of their financial health. Just like a car&rsquo;s
            dashboard uses a speedometer and gauges to instantly inform the
            driver of their vehicle&rsquo;s status, the financial wheel provides
            a visual summary of income and expenses, broken down by category.
            This enables users to see at a glance how they are allocating funds
            and to assess their financial situation with clarity and control.
          </p>
        </motion.div>
      </div>

      {/* Wireframe Examples */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          className="relative rounded-xl bg-white/5 border border-white/10 p-4 h-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/saveflowLogin.png"
            alt="login page"
            fill
            className="rounded-lg object-contain w-full h-full"
          />
        </motion.div>
        <motion.div
          className="relative rounded-xl bg-white/5 border border-white/10 p-4 h-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/saveflowsignup.png"
            alt="sign up page"
            fill
            className="rounded-lg object-contain w-full h-full"
          />
        </motion.div>
        <motion.div
          className="relative rounded-xl bg-white/5 border border-white/10 p-4 h-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/saveflowdashboard.png"
            alt="Dashboard"
            fill
            className="rounded-lg object-contain w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return <AboutContent />;
      case "Personas":
        return <PersonasContent />;
      case "Scenario":
        return <ScenariosContent />;
      case "Moodboard":
        return <MoodboardContent />;
      case "Storyboard":
        return <StoryboardContent />;
      case "Flowchart":
        return <FlowchartContent />;
      case "Wireframes":
        return <WireframesContent />;
      case "Prototype":
        return <PrototypeContent />;
      default:
        return (
          <h2 className="text-2xl font-light text-gray-200">
            {activeTab} Content Goes Here
          </h2>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-b from-black via-gray-950 to-purple-950/20">
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-800/10 via-transparent to-blue-800/10 pointer-events-none" />

      {/* Header with Logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-8 pb-12 text-center"
      >
        {/* Logo Container */}
        <div className="relative w-24 h-24 mx-auto mb-2">
          <Image
            src="/Logo.png"
            alt="SaveFlow Logo"
            fill
            className="rounded-xl object-contain"
            sizes="96px"
          />
        </div>

        <motion.div
          className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.h1
          className="text-7xl font-bold tracking-tighter"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            SaveFlow
          </span>
        </motion.h1>
      </motion.header>

      {/* Navigation Tabs */}
      <nav className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          className="flex flex-wrap justify-center gap-2 backdrop-blur-sm bg-black/20 p-4 rounded-2xl border border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                activeTab === tab
                  ? "text-white bg-gradient-to-r from-purple-600/90 to-purple-700/90 shadow-lg shadow-purple-500/20"
                  : "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === tab && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 rounded-xl blur-lg"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab}
            </motion.button>
          ))}
        </motion.div>
      </nav>

      {/* Content Area */}
      <motion.main
        className="max-w-7xl mx-auto p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div className="rounded-3xl backdrop-blur-md bg-gradient-to-b from-white/[0.07] to-white/[0.03] border border-white/10 p-8 shadow-2xl shadow-black/40">
          {renderContent()}
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="text-center py-12 text-gray-500 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm">© 2024 SaveFlow. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
