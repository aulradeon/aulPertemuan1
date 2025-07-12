export function About() {
    return (
        <div className="container space-y-24 mx-auto p-3 py-6">
            {/* Background section */}
            <h1 className='text-3xl mb-3 font-bold'>Background</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis quasi possimus sapiente ex temporibus consectetur minus exercitationem aspernatur? Amet a quibusdam corrupti voluptas nisi dolore aliquid omnis. Repellat, soluta?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet optio ipsa, autem, magnam nam ut provident ad ex aperiam excepturi quia dignissimos in quod veniam. Tempore, accusamus vero! Vel, id!</p>

            {/* Our thingy section*/}
            <div className="container flex border-4 p-2">
                <div className="m-5 w-lg self-center">
                    <h1 className='text-xl font-bold'>Our Vision</h1>
                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aperiam repellendus aspernatur ratione pariatur quibusdam maxime alias perferendis omnis nisi suscipit fugit a, ipsum error iste aut quisquam animi similique?lore</p>
                </div>

                <div className="m-5 w-lg self-center">
                    <h1 className='text-xl font-bold'>Our Mission</h1>
                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aperiam repellendus aspernatur ratione pariatur quibusdam maxime alias perferendis omnis nisi suscipit fugit a, ipsum error iste aut quisquam animi similique?lore</p>
                </div>
            </div>

            {/* BOD section */}
            <div className="container">
                <h1 className='text-3xl text-center mb-6 font-bold'>Board of Directors</h1>
                <div className="container flex gap-5 justify-center p-3">
                    <div className="">
                        <img className='' src="https://placehold.co/200x300" alt="nope" />
                        <h3 className='text-center font-bold py-3'>Hidayat Wijayanto</h3>
                        <p className='text-center text-gray-400 italic'>CEO</p>
                    </div>
                    <div className="">
                        <img className='' src="https://placehold.co/200x300" alt="nope" />
                        <h3 className='text-center font-bold py-3'>Alim Guntur Brajamukti</h3>
                        <p className='text-center text-gray-400 italic'>CTO</p>
                    </div>
                    <div className="">
                        <img className='' src="https://placehold.co/200x300" alt="nope" />
                        <h3 className='text-center font-bold py-3'>Sri Hyang Sukaesih</h3>
                        <p className='text-center text-gray-400 italic'>Lead Engineer</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default About
