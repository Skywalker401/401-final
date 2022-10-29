export default function Contact() {
    return (
        <>
            <section class="bg-white dark:bg-lightGray">
                <div class="container px-6 py-10 mx-auto">
                    <div class="lg:flex lg:items-center">
                        <div class="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 class="text-3xl font-semibold text-black capitalize lg:text-4xl dark:text-black">Visit <br/> Handy Dandy</h1>

                                <div class="mt-2">
                                    <span class="inline-block w-40 h-1 rounded-full "></span>
                                    <span class="inline-block w-3 h-1 ml-1 rounded-full"></span>
                                    <span class="inline-block w-1 h-1 ml-1 rounded-full"></span>
                                </div>
                            </div>

                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-2 text-black rounded-xl md:mx-4 dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-semibold  capitalize dark:text-black"><a href="https://github.com/Skywalker401">GitHub Organization</a></h1>

                                    <p class="mt-3 text-black dark:text-black">
                                        Check out our Github Org and see the Repositories
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://avatars.githubusercontent.com/u/115895124?s=200&v=4" alt=""/>
                        </div>
                    </div>

                    <hr class="border-black my-12 dark:border-black"/>

                        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                               
                            </div>

                            <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                              
                            </div>            
                        </div>
                </div>
            </section>

        </>
    )
}