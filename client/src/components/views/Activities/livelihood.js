import React from 'react';
import "./Activities.css";

class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <!--New Section-Livelihood--> */}
                <section class="text-gray-600 body-font mt-10" id="livelihood">
                    <h1 class="font-serif text-7xl text-center text-emerald-900 pt-8 ">Livelihood</h1>
                    <div class="container px-5 py-16 mx-auto">
                        <div class="flex items-center lg:w-3/2 mx-auto border-b border-gray-400 pb-16 mb-16 sm:flex-row flex-col">
                        <div class= "inline-flex items-center justify-center flex-shrink-0 sm:w-2/5">
                            {/* <!--<iframe width="420" height="345" src="https://www.youtube.com/watch?v=hh-uFQ-MGfw&t=1117s">
                            </iframe>--> */}
                            
                                <img src="https://secureservercdn.net/160.153.138.94/x9a.171.myftpupload.com/wp-content/uploads/2021/03/New-Project-27.png" width="600" height="500" class="rounded-md border-4 border-green-900 border-double " />
                                
                                     
                        </div>
                        <div class="flex-row max-w-4xl p-10 sm:text-left text-center sm:mt-0">
                            <h2 class="text-green-900 text-2xl pl-4 title-font font-medium mb-2">Employment Generation</h2>
                            <p class="leading-relaxed  bg-emerald-100 text-emerald-900 text-lg p-5 rounded-2xl rounded-tr-none border-2 border-green-700 hover:bg-black hover:text-green-500">In Tara in Raigad District of Maharashtra, the Centre has two high schools, a Marathi medium and an Urdu medium. 
                                Yusuf Meherally Centre is advocating mainstreaming of rural development and making generation of non-farm employment in rural India a people’s movement. For this, it has promoted Khadi Gramodyog Andolan. The Andolan was launched on January 30, 2005 at Rajkot at a meeting of Gandhians, khadi lovers and activists. The Andolan has organized several exhibition-cum-sales and has set up a small committee to oversee its functioning. 
                                While the Centre is collecting information about the gramodyogs( village industries) in different states and what they produce and is cataloguing them and is mobilizing support from Indian Institute of Technology Mumbai etc. for improving the technologies and being used to setting up common facility centers at Tara and Nagapattinam, promotion of sales in Mumbai and other places                </p>
                        </div>
                        </div>
            
                        <div class="flex items-center lg:w-4/5 mx-auto border-b pb-16 mb-16 border-gray-400 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center sm:mt-0">
                            <p class="leading-relaxed text-base bg-emerald-100 text-emerald-900 text-lg p-5 border-2 border-green-900 rounded-2xl hover:bg-black hover:text-green-500"> 
                                The Centre has, among other things, a dairy at Tara and has an experimental organic farm. The latter is called ten guntha experiment. This is an important activity of ours. The late Prof. S.A.Dabholkar, a Mathematician turned Agricultural expert, claimed that a family of five can live above poverty line on ‘ten guntha’ (a quarter acre) if they follow certain agricultural practices. In this no tilling and digging are required and no fertilizers and pesticides are used. This is a low external input agriculture, utilizing the cow dung and urine from the dairy, and biomass, which go into a vermi compost. This, if accepted and popularized, can be a boon to marginal farmers. 
                                The Centre is trying to replicate this ‘experiment’ on twelve different farms and is also preparing a manual and conducting training classes off and on.</p>
                        </div>
                        <div class="inline-flex items-center justify-center pl-5">
                            <img src="assets/images/llhd1.jpg" width="6000px"alt="edu2" class="rounded-md border-4 border-green-900 border-double hover:border-green-300 hover:border-4"/>
                        </div>
                        </div>
            
                        <div class="flex items-center  mx-auto  pb-14 mb-3 sm:flex-row flex-col">
                            <div class="inline-flex items-center justify-around pb-4 pl-3 sm:w-2/5">
                            <img src="assets/images/llhd2.jpg" alt="edu" class="rounded-md border-4 border-green-900 border-double h-60"/>
                        </div>
                            <div class="flex-grow sm:text-left text-center w-2/3 mt-6 p-2 sm:mt-0">
                            <h2 class="text-green-900 text-2xl pl-4 title-font font-medium mb-2">Project: Nagapattinam, Tamilnadu</h2>
                            <p class="leading-relaxed bg-emerald-100 text-emerald-900 text-lg p-5 rounded-md rounded-tr-3xl rounded-bl-3xl border-2 border-green-700">The primary livelihood activity was setting up of a “pay and use model” common facility centre to process and add value to locally available raw-materials by subscribed members (women SHGs). Market linkages have also emerged as a support activity. 
                                Through the combined services of skills training and Common Facility Centre, about 200 women have got regular employment opportunity, with an average wage of Rs.50 per day, which may in due course get enhanced to Rs.70.
                            </p>
                            </div>
                            <div class="inline-flex items-center justify-around pb-4 pl-3 sm:w-2/5">
                                <img src="assets/images/llhd3.jpg" alt="edu" class="rounded-md border-4 border-green-900 border-double h-60 mr-2"/>
                            </div>
                        </div>
                    </div>
                    </section>
            </div>
        );
    }
}

export default Home;