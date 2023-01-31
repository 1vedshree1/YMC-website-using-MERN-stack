import React from 'react';
import "./Activities.css";

class education extends React.Component{
    render(){
        return(
            <div>  
                <section class="text-gray-600 body-font" id="edu">
                <h1 class="font-serif text-7xl text-center text-emerald-900 pt-8 ">Education</h1>
                    <div class="container px-5 py-16 mx-auto">
                    <div class="flex items-center  mx-auto border-b border-gray-400 pb-16 mb-16 sm:flex-row flex-col">
                        <div class= "inline-flex items-center justify-center flex-shrink-0 sm:w-2/5">
                        <img src="assets/images/edu1.jpg" alt="edu1" class="rounded-md border-4 border-double border-green-600 hover:border-green-900 hover:border-4 hover:border-solid border-opacity-50"/>
                        
                        </div>
                        <div class="flex-row max-w-4xl p-10 sm:text-left text-center sm:mt-0">
                        <h2 class="text-green-900 text-2xl pl-4 title-font font-medium mb-2">Tara, Raigad District</h2>
                        <p class="leading-relaxed  bg-emerald-100 text-emerald-900 text-lg p-5 rounded-2xl rounded-tr-none border-2 border-green-700">In Tara in Raigad District of Maharashtra, the Centre has two high schools, a Marathi medium and an Urdu medium. 
                            It has another Marathi medium high school at Shirkie, a village about 25 kms from Tara.
                            A Non Formal Vocational Centre attached with hostel facilities, for tribal youths, who are drop outs from schools, 
                            giving six months training in various skills like, welding, electrical wiring, home appliance repairs and two wheelers repairs. 
                            The training is free, including boarding and lodging.</p>
                        </div>
                    </div>

                    <div class="flex items-center  mx-auto border-b pb-16 mb-16 border-gray-400 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center sm:mt-0">
                        <p class="leading-relaxed text-base hover:bg-emerald-100 hover:text-emerald-900 hover:text-lg hover:p-5 hover:border-2 hover:border-green-900 hover:rounded-2xl">On July 2, 2009, Yusuf Meherally Centre opened a hostel for Adivasi, Dalit and Below Poverty Level girls at Tara, a village on the Mumbai-Goa highway. 
                            The building for the hostel has been constructed with the grant given to it by the Government of Maharashtra. 
                            The hostel has a capacity to admit 50 girls. On July 2, 2009, there were 20 girls, but now there are 30. In due course, the number will increase to 50. 
                            The hostel is in the compound of the Bhanuben Pravin Shah High School, Tara.:
                            The hostel needs a lot of furniture and equipment and there is a need to fence off the area. There are plans to use solar gadgets of all types. 
                            In fact, the idea is also to showcase solar gadgets like solar lamps, community solar cooker, solar heater, solar drier etc. 
                            And the hostel needs more storage space for water, roof water harvesting, a standby bio-diesel generator set, sports and art material, library books etc</p>
                        </div>
                        <div class="inline-flex items-center justify-center pl-5 ">
                        <img src="assets/images/edu2.jpg" alt="edu2" width="7000px"class="rounded-md border-4 border-green-900 border-double hover:border-green-300 hover:border-4"/>
                        </div>
                    </div>

                    <div class="flex items-center  mx-auto  pb-14 mb-3 sm:flex-row flex-col">
                        <div class="inline-flex items-center justify-center pb-4 pl-3 flex-shrink-0 sm:w-2/5">
                        <img src="assets/images/edu1.jpg" alt="edu" class="rounded-md hover:border-4 border-green-900 hover:border-double "/>
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 p-10 sm:mt-0">
                        <h2 class="text-green-900 text-2xl pl-4 title-font font-medium mb-2">Project: Bhadreshwar, Kutch, GJ:</h2>
                        <p class="leading-relaxed bg-emerald-100 text-emerald-900 text-lg p-5 rounded-md rounded-tr-3xl rounded-bl-3xl border-2 border-green-700">Promoted income generating activities by imparting special skills to about 550 women in ethnic embroidery, among other things. 
                            Conducts non-formal education for the children of fishermen and salt pan workers there, who are always on the move in search of work, covering about 2000 children. 
                            And provides free hostels, food and accommodation.</p>
                        </div>
                    </div>
                    </div>
                </section>
                <hr class="col"/>
            </div>
        );
    }
}

export default education;