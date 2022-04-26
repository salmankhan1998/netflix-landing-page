import React from "react";
import Content from "../content/content";
import Membership from "../membership/memebership";

const Faqs = () =>{

    const questions = [
        'What is Netflix?',
        'How much does Netflix coast?',
        'Where can i watch?',
        'How do i cancle?',
        'What can i watch on Netflix?',
        'Is Netflix good for kids?'
    ];

    const question = questions.map( (value, key) =>{
        return(
                <div className={"ques-box"}>
                    {value}
                    <div className={'btn'}>
                        +
                    </div>
                </div>
        )    
    });

    return(
        <div className={'faq-sec'}>
            <h2>frequently asked question</h2>
            <div className={'ques-wrapper'}>
                    {question}

                <Membership/>
            </div>
        </div>
    );
}


export default Faqs;
