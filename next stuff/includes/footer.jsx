import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Footer(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <div className="footer container">
        
    </div>
}