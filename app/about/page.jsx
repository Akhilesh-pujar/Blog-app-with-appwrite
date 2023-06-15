import Navbar from "@/components/Navbar"


function page() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center text-center px-3  items-center text-2xl font-serif '>

                <h5 className=' mt-12 items-center'>It is simple blog app where you can post your blogs regarding anything about th web devlopment
                    deployed through vercel and for backend I have use appwrite cloud based.
                </h5>
            </div>

        </div>

    )
}

export default page
