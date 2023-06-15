import { Client, Databases, Query } from 'appwrite';
import Link from 'next/link';
import { useState, useEffect } from 'react';





const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648aa4b222268e826c58');

function Blogboard() {

    const [blogPost, setblogPost] = useState([])

    useEffect(() => {
        const databases = new Databases(client);

        let promise = databases.listDocuments("648aa8f536a4ef77478a"
            , "648aa98ee2a068497f44");

        promise.then(function (res) {
            console.log(res);
            setblogPost(res.documents)
        },
            function (error) {
                console.log(error);
            }
        );

    }, [])
    return (
        <div className=" container mx-auto px-4 py-8 text-gray-400 bg-gray-900 body-font">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">


                {blogPost.map((post) => (

                    <div key={post.id} className="p-4  rounded-lg shadow-md">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img className=" lg:h-48 md:h-36 w-full object-cover object-center" src={post.image} alt={post.title} />
                            <div className="p-4">

                                <h1 className="title-font text-lg font-medium text-white mb-3">{post.title}</h1>
                                <p className="leading-relaxed mb-3">{post.metade}...</p>

                            </div>
                            <Link href={`/blogpages/${post.slug}`} className=' mb-5 mt-6 inline-block px-4 py-2 bg-blue-500 text-white'>Read More</Link>
                        </div>
                    </div>


                ))}


            </div>
        </div>
    )
}

export default Blogboard



// <div className="flex items-center flex-wrap ">
// <a className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//         <path d="M5 12h14"></path>
//         <path d="M12 5l7 7-7 7"></path>
//     </svg>
// </a>
// <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
//     <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//         <circle cx="12" cy="12" r="3"></circle>
//     </svg>1.2K
// </span>
// <span className="text-gray-500 inline-flex items-center leading-none text-sm">
//     <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//     </svg>6
// </span>
// </div>