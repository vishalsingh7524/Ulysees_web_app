import React from 'react'
import Navbar from './Navbar'
import "./Web.css";
import "./Media.css"
import Footer from './Footer';

export default function Linkpage1() {
    return (

        <div>
            <Navbar />

            <div className="parent-l1">

                <div className='l1img'>
                    <img src="./images/l1.png" alt="" />
                </div>

                <div className='bullet-sec'>
                    <h2 style={{ textAlign: 'center', marginTop: '35px' }}> Low cost software</h2>
                    <p>Future proof software is bound to be low cost software. <br />
                        What are, therefore, the real concerns as you look to purchase maritime software? And how can they be addressed with an eye turned towards future developments? We will provide you with links that will  provide access to indicative tips regarding software selection. And these tips address the selection of marine enterprise software and its challenges. And help towards avoiding the hidden pitfalls. If asked to describe the main target of software selection in a few words, the best explanation is, software that is future proof. Because if it is future proof then its low cost.</p>

                    <p>
                        Essentially, there’s a well-known scenario that repeats itself every fifteen years or so. Assume you are looking for a new ERP system. When doing so, it’s important to be aware of the potential for hidden costs. Because actually, these are what constitute the pitfalls. Hidden costs usually take the form of enticing proposals that “hook” you. Unfortunately, you may find yourself hooked before you realize. So, you find out the hard way. And we can sum up what that means: unexpected expenses and headaches crop up along your software life-cycle path. Imagine having to put up with them for years… It is reasonable, therefore, to emphasize that <span> low cost software is software that develops with the enterprise.</span>
                    </p>

                    <p>
                        <h5> Key users of maritime software are paid a lot of money</h5>
                        When we think of the chief users of maritime software, unexpected expenses and headaches are not trivial concerns. After all, the key users are masters, engineers and superintendents. In other words, people who are paid a lot of money, whom you certainly don’t want spending time on systems that articulate poorly. So, you will be hoping, perhaps anxiously, that the software will be easy to use and understand. And that it will not create the need for recurring training or familiarisation as crew and staff turnover. What you certainly will not want, are changes to your processes that are imposed by the software vendor! Finally, the software deployment and data population should be reasonable and scalable in time and cost.
                    </p>

                    <p>
                        <h5> Wishing to own software that grows with you and with the industry is reasonable
                            But more importantly still, you will want software that is current and remains current.</h5> You shouldn’t need to throw out your ERP software to buy a new ERP system, ever. Without a doubt, your wish to own software that grows with you and with the industry is reasonable. <span>We, therefore, encourage you to read our little nuggets of advice</span>  that you will find easy to refer to and remember.
                    </p>

                    <p>
                        On offer on the same page is “Why Shouldn’t Your Software Be Future proof”, an in-depth analysis by Dimitris Lyras. The booklet discusses the topic with explanations and examples. The analysis will especially interest readers who have experience deploying marine software, company information systems officers and software project managers.
                    </p>

                    <p>
                        Readers will also find <span>“My Target And Pitfalls Checklist”,</span> an interactive list of the targets and pitfalls regarding software selection, with room to add personal thoughts and comments.
                    </p>

                    <div className='btn-l1'>
                        <button type="button" class="btn btn-primary">ERP</button>
                        <button type="button" class="btn btn-primary">Configuration</button>
                        <button type="button" class="btn btn-primary">Scalibility</button>
                        <button type="button" class="btn btn-primary">Future Proof</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
