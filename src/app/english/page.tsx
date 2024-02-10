
"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Levels from '@/components/Levels';
import {englishQuestions } from '@/utils/Questions';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { LinkOrButton } from '@/components/LinkOrButton';
import { toast } from 'react-toastify';
import { useRouter, } from 'next/navigation'




const Page = () => {
    const router = useRouter();

    const [selectedLevel, setSelectedLevel] = useState<string>('easy');
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    const { register, handleSubmit } = useForm();

    const calculateScore = () => {
        const questions = englishQuestions[selectedLevel];
        let score = 0;
        selectedAnswers.forEach((selectedAnswer, index) => {
            if (selectedAnswer === questions[index].correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const onSubmit = (data: any) => {
        console.log(data);
        const score = calculateScore();
        if (score <= 1) {
            toast.error(`You scored: ${score} point, you can do better next time!`);
        } else if (score === 2) {
            toast.success(`You scored: ${score} points, you did well, let's aim for 3 points next time!`);
        } else if (score === 3) {
            toast.success(`You scored: ${score} points, YOU ARE A CHAMPION!`);
        }
        setTimeout(() => {
            router.push('/topics');
        }, 3000);
    };
    

    const handleAnswerSelection = (questionIndex: number, answer: string) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswers(updatedAnswers);
    };

    const allQuestionsAnswered = selectedAnswers.length === englishQuestions[selectedLevel].length;
  
    return (
        <div className='mt-10 f'>
            <Heading level={2} className='text-center'>English Quiz</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Levels levels={['easy', 'medium', 'difficult']} onSelect={setSelectedLevel} />


                
 

                {selectedLevel === "easy" && (
                    englishQuestions.easy.map((question, index) => (
                        <div key={index} className='text-white'>
                            <Paragraph className='mt-4'>{question.question}</Paragraph>
                            <ul className='mt-1'>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        <input
                                            type="radio"
                                            id={`option-${index}-${optionIndex}`}
                                            value={option}
                                            {...register(`question-${index}`)}
                                            onChange={() => handleAnswerSelection(index, option)}
                                        />
                                        <label htmlFor={`option-${index}-${optionIndex}`} className='ml-3'>{option}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )
                }
                
                 {selectedLevel === "medium" && (
                      englishQuestions.medium.map((question, index) => (
                            <div key={index} className='text-white'>
                                <Paragraph className='mt-4'>{question.question}</Paragraph>
                                <ul className='mt-1'>
                                    {question.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>
                                            <input
                                                type="radio"
                                                id={`option-${index}-${optionIndex}`}
                                                value={option}
                                                {...register(`question-${index}`)}
                                                onChange={() => handleAnswerSelection(index, option)}
                                            />
                                            <label htmlFor={`option-${index}-${optionIndex}`} className='ml-3'>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                )
                }
                
                {selectedLevel === "difficult" && (
                      englishQuestions.difficult.map((question, index) => (
                        <div key={index} className='text-white'>
                            <Paragraph className='mt-4'>{question.question}</Paragraph>
                            <ul className='mt-1'>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        <input
                                            type="radio"
                                            id={`option-${index}-${optionIndex}`}
                                            value={option}
                                            {...register(`question-${index}`)}
                                            onChange={() => handleAnswerSelection(index, option)}
                                        />
                                        <label htmlFor={`option-${index}-${optionIndex}`} className='ml-3'>{option}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )
                } 


                <LinkOrButton type="submit" isFull={false} className='px-7 bg-primary-200 font-bold mt-5' isDisable={!allQuestionsAnswered}>Submit</LinkOrButton>
            </form>
        </div>
    );
};

export default Page;