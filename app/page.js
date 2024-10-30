'use client'
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <BlogList/>
      <Footer/>
    </>
  );
}
