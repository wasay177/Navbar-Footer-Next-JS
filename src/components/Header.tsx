import Link from "next/link";

export default function Header() {
    return(
        <div>
            <ul className="flex justify-end gap-10 bg-blue-700 h-20 p-5">
                <Link href="/"><li className="font-gloria text-blue-400 text-3xl">Home</li></Link>
                <Link href="/portfolio"><li className="font-gloria text-blue-400 text-3xl">Portfolio</li></Link>
                <Link href="/about-us"><li className="font-gloria text-blue-400 text-3xl">About Us</li></Link>
                <Link href="/contact-us"><li className="font-gloria text-blue-400 text-3xl">Contact Us</li></Link>
            </ul>
        </div>
    )
}