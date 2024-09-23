import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png"

type Props = {
    text?: boolean
}

export default function LogoComponent({text = true}: Props) {
    return (
        <Link className="shrink-0 flex gap-2 items-center" href="/">
            {!text && <div>
                <Image src={Logo} alt="hyperion" />
            </div>}
            {text && <h1 className="font-[900] text-[24px]">hyperion</h1>}
        </Link>
    )
}