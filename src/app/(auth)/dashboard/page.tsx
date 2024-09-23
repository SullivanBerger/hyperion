import {Metadata} from "next";
import ButtonComponent from "@/components/ButtonComponent";
import LogoComponent from "@/components/LogoComponent";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Generated with Next.js"
}

export default function Dashboard() {
    return <div>
        <LogoComponent />
        <ButtonComponent label="Click me" loading={true} />
    </div>
}