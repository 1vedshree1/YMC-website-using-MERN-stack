import React from 'react';
import "./Activities.css";


class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <!--New Section-Health--> */}
                <section class="text-gray-600 body-font" id="health">
                    <h1 class="font-serif text-7xl text-center text-emerald-900 pt-14 pb-8">Health</h1>
                    <div class="container px-5 py-16 mx-auto">
                    <div class="flex items-center  mx-auto border-b pb-16 mb-16 border-gray-400 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center sm:mt-0">
                        <h2 class="text-green-900 text-2xl pl-3 title-font font-medium mb-2">Orissa</h2>
                        <p class="leading-relaxed bg-emerald-100 text-emerald-900 text-lg p-5 border-2 border-green-900 rounded-2xl hover:bg-black hover:text-green-500">In Orissa the focus is on the benefits accrued under the Right To Information Act and have an excellent group of workers. The local branch of the Centre in Bhubaneshwar is active in 40 districts of the Orissa State under the RTI awareness programme. Thanks to what we did, about 600 Adivasis (tribal) got homestead lands in Kalahandi. The Centre is also involved in education, organizing youth camps, eye-camps, etc. A well wisher has given a generous donation to the Centre to buy a plot of land in Orissa for its activities. It is proposed to buy a plot in Dhenkanal, which is about 80 kms from Bhubaneshwar and to set up there an organic farm which would be a replication of our Ten Guntha Prayog, and there will be a training center.</p>
                        </div>
                        <div class="inline-flex items-center justify-center pl-5">
                        <img src="assets/images/ymcimg.jpg" width="6000px" alt="edu2" class="rounded-md border-4 border-green-900 border-double hover:border-green-300 hover:border-4"/>
                        </div>
                    </div>

                    <div class="flex items-center  mx-auto  pb-16 mb-3 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center mt-6 p-10 sm:mt-0">
                        <h2 class="text-green-900 text-2xl pl-4 title-font font-medium mb-2">Betul, Madhya Paradesh</h2>
                        <p class="leading-relaxed bg-emerald-100 text-emerald-900 text-lg p-5 rounded-md rounded-tr-3xl rounded-bl-3xl border-2 border-green-700 hover:bg-emerald-700 hover:text-white hover:border-black">In Betul, the Centre is working for adivasi welfare, particularly, health, on a modest scale. The Centre has purchased a plot of land admeasuring two acres. It has constructed a small office there. It is planned to set up there an organic farm which would be a replication of our Ten Guntha Prayog, an oil ghani unit to crush Mahua seeds and a soap unit.</p>            
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 p-10 sm:mt-0">
                        <h2 class="text-green-900 text-2xl pl-4 title-font font-medium mb-2">Tara, Raigad District</h2>
                        <p class="leading-relaxed bg-emerald-100 text-emerald-900 text-lg p-5 rounded-md rounded-tr-3xl rounded-bl-3xl border-2 border-green-700  hover:bg-emerald-700 hover:text-white hover:border-black">A 35 bed hospital with two operation theaters, a dental unit, an X -ray unit and a pathology unit. Every Sunday, there is an eye operation camp, when about 15 patients are operated and implanted with Intra Ocular Lenses.
                            We have a project to upgrade this hospital as general hospital. Besides, we have acquired land to establish a hospital in Anjanvel village, Guhakar Taluka, Ratnagiri District, Maharashtra.</p>
                        </div>
                    </div>
                    <hr class="col"/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;