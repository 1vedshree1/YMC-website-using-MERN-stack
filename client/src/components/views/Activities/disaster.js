import React from 'react';
import "./Activities.css";

class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <!--New Section: Disater Relief--> */}
                <section class="text-gray-600 body-font" id="disaster">
                    <h1 class="font-serif text-5xl text-center font-bold pt-8">Disaster Relief</h1>
                    <div class="container px-5 py-16 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="ymc" src="assets/images/ymcimg.jpg" id="disimg" class="object-cover object-center h-equiv w-full p-10 my-10 scale-100 hover:scale-125"/>
                    </div>
                    <div class="flex flex-col flex-wrap pr-24 lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                        <div class="flex-grow">
                            <img alt="location" src="assets/images/maps-and-flags.png" width="4%" class="float-left hover:w-9"/>
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3 float-left">
                                Project: Nagapattinam, Tamilnadu</h2><br/>
                            <p class="leading-relaxed text-black float-left">YMC’s initiatives are focused on alternate sustainable livelihood for the victims of tsunami. It organized women of Self Help Groups and trained them in various skills to engage in productive work using locally available agro products.</p>
                
                        </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                        <div class="flex-grow">
                            <img alt="location" src="assets/images/maps-and-flags.png" width="4%"  class="float-left hover:w-9"/>
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3 mx-6">Project: Bihar</h2>
                            <p class="leading-relaxed text-black">In the aftermath of the floods of August 2008, the Yusuf Meherally Centre has made a presence in the areas affected by the Kosi river floods and opened an office at Bihapur on the border of Madhepura District. We propose to concentrate on health care, education and livelihoods. Our past experience in relief and rehabilitation work in Kutch and Jammu & Kashmir after the earthquake and after the tsunami in Nagapattinam, it is hoped, would immensely help.</p>

                        </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                        <div class="flex-grow">
                            <img alt="location" src="assets/images/maps-and-flags.png" width="4%"  class="float-left hover:w-9"/>
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3 mx-6">Project: Jammu & Kashmir</h2>
                            <p class="leading-relaxed text-black">Engaged in the rehabilitation of the victims of earthquake through training in income generation and related production activities.</p>

                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <hr/>
            </div>
        );
    }
}

export default Home;