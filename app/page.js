"use client"
import Image from 'next/image'


import Navbar from '@/components/Navbar';
import Blogboard from '@/components/Blogboard';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div >
      <Navbar />
      <Blogboard />
      <Footer />
    </div>
  )
}
