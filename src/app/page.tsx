"use client"
import { LinkOrButton } from "@/components/LinkOrButton";
import { Paragraph } from "@/components/Paragraph";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,  x: 10 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="">
        <Paragraph className="text-white text-center sm:text-[1.4rem] leading-6">
          Welcome to Kwiz, where knowledge meets excitement! Immerse yourself
          in a variety of quizzes encompassing an extensive range of topics and
          subjects. Challenge yourself, discover new facts, and enjoy testing
          your expertise. Whether your interests lie in mathematics, history,
          science, or any other field, Quiz Me is your ultimate platform to
          explore and expand your knowledge.
        </Paragraph>
      </div>
      <LinkOrButton
        type="button"
        isFull={false}
        className="block mx-auto px-6 mt-5 text-primary-200"
        href={"/topics"}
      >
        Take a Quiz
      </LinkOrButton>
    </motion.div>
  );
};

export default Home;
