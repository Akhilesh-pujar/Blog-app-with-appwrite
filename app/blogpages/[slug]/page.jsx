"use client"

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { Client, Databases, Query } from 'appwrite';
import Head from "next/head";
import Footer from "@/components/Footer";

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648aa4b222268e826c58');

function page({ params }) {
    const { slug } = params;

    const [blogPost, setblogPost] = useState([])

    useEffect(() => {
        const databases = new Databases(client);

        let promise = databases.listDocuments("648aa8f536a4ef77478a"
            , "648aa98ee2a068497f44",
            [
                Query.equal('slug', slug)
            ]
        );

        promise.then(function (res) {
            console.log(res);
            setblogPost(res.documents[0])
        },
            function (error) {
                console.log(error);
            }
        );

    }, [])


    return (
        <div>
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{blogPost.title} </h1>
                <img src={blogPost.image} alt="blog image" className="mb-4"></img>
                <p className="text-lg">{blogPost.content}</p>

            </div>
            <Footer />
        </div>
    )
}

export default page
