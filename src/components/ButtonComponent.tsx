"use client";

import {Button, ButtonProps} from "@/components/ui/button";
import {Loader2} from "lucide-react";

type Props = {
    loading?: boolean,
    disabled?: boolean,
    onClick?: React.MouseEventHandler,
    label: string,
    children?: React.ReactNode,
    variant?: ButtonProps["variant"],
    className?: string
}

export default function ButtonComponent({
    loading, disabled, onClick, label, children, variant, className
                                        }: Props) {
    return <Button
        className={`${!variant? 'bg-black' : 'text-black-500'} ${className}`}
        variant={variant}
        disabled={loading || disabled}
        onClick={onClick}
    >
        {!loading && <>
        {children}
        {label}
        </>}
        {loading && <Loader2 className="animate-spin" />}
    </Button>;
};